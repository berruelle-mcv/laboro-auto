// ================================================
//   LABORO — Vue classe (lecture serveur) + actions élève
//   Chargé APRÈS teacher.js dans index.html.
// ================================================

let ELEVES_SERVEUR = [];
let ELEVE_SELECTIONNE = null; // { id, nomAff }

// Fetch JSON en distinguant clairement trois cas d'échec, pour ne plus afficher
// "serveur injoignable" quand le serveur a en fait répondu (avec une erreur HTTP
// ou un JSON invalide) :
//  - réseau : le fetch lui-même échoue (DNS, connexion refusée, hors-ligne…)
//  - http   : le serveur répond mais avec un statut HTTP en erreur (401, 500…)
//  - parse  : le serveur répond 200 mais le corps n'est pas du JSON exploitable
async function fetchJSON(url, options){
  let rep;
  try{
    rep = await fetch(url, options);
  }catch(e){
    const err = new Error('Impossible de joindre le serveur LABORO (connexion impossible).');
    err.kind = 'network';
    throw err;
  }
  if(!rep.ok){
    const err = new Error('Le serveur LABORO a répondu avec une erreur (HTTP ' + rep.status + ').');
    err.kind = 'http';
    err.status = rep.status;
    throw err;
  }
  try{
    return await rep.json();
  }catch(e){
    const err = new Error('Réponse du serveur LABORO invalide (JSON illisible).');
    err.kind = 'parse';
    throw err;
  }
}

async function renderClasse(){
  const token = localStorage.getItem('laboro_token');
  const tb = document.getElementById('cl-tbody');

  if(!token){
    if(tb) tb.innerHTML = '<tr><td colspan="10" style="padding:16px;color:var(--gm);font-size:12px">'
      + 'Connecte-toi via le serveur (adresse mail + mot de passe) pour afficher la liste des élèves.'
      + '</td></tr>';
    if(typeof renderMDJListe === 'function') renderMDJListe();
    return;
  }

  try{
    const data = await fetchJSON(LABORO_API + '/api/eleves', {
      headers: { 'Authorization': 'Bearer ' + token }
    });
    if(!data.ok){
      if(tb) tb.innerHTML = '<tr><td colspan="10" style="padding:16px;color:var(--rg);font-size:12px">'
        + 'Erreur : ' + (data.erreur || 'chargement impossible') + '</td></tr>';
      return;
    }
    ELEVES_SERVEUR = data.eleves || [];
  }catch(e){
    if(tb) tb.innerHTML = '<tr><td colspan="10" style="padding:16px;color:var(--rg);font-size:12px">'
      + e.message + '</td></tr>';
    console.error('renderClasse (serveur) :', e);
    return;
  }

  afficherClasse();
}

function afficherClasse(){
  const eleves = ELEVES_SERVEUR;

  const classes = [...new Set(eleves.map(e => e.classe || 'Sans classe'))].sort();
  const tabsEl = document.getElementById('classe-tabs');
  if(tabsEl){
    tabsEl.innerHTML =
      '<div style="font-size:11px;font-weight:700;color:var(--gm);margin-right:4px">Filtrer :</div>'
      + '<div class="cls-tab' + (classeFiltre===''?' on':'') + '" onclick="filtrerClasse(\'\')">Toutes '
      + '<span class="cls-count">' + eleves.length + '</span></div>'
      + classes.map(function(cls){
          const n = eleves.filter(e => (e.classe||'Sans classe')===cls).length;
          const clsColor = cls.indexOf('2nde')>=0 ? '#2E7D5E' : cls.indexOf('Term')>=0 ? '#7B2D42' : '#B5651D';
          const activeStyle = classeFiltre===cls ? ('background:'+clsColor+';color:#fff;border-color:'+clsColor) : ('border-color:'+clsColor+';color:'+clsColor);
          return '<div class="cls-tab' + (classeFiltre===cls?' on':'') + '" onclick="filtrerClasse(\'' + cls + '\')" style="' + activeStyle + '">'
            + cls + ' <span style="font-size:9px;background:#F5E6D8;color:#B5651D;padding:1px 5px;border-radius:8px">' + n + '</span></div>';
        }).join('');
  }

  const liste = classeFiltre ? eleves.filter(e => (e.classe||'Sans classe')===classeFiltre) : eleves;

  const statsEl = document.getElementById('classe-stats');
  if(statsEl){
    statsEl.innerHTML =
      '<div style="background:var(--bc);border-radius:8px;padding:10px;text-align:center"><div style="font-size:18px;font-weight:700;color:var(--bl)">' + liste.length + '</div><div class="u-label-up">Élèves</div></div>'
      + '<div style="background:var(--vc);border-radius:8px;padding:10px;text-align:center"><div style="font-size:18px;font-weight:700;color:var(--vt)">' + classes.length + '</div><div class="u-label-up">Classe(s)</div></div>'
      + '<div style="background:var(--gc);border-radius:8px;padding:10px;text-align:center"><div style="font-size:18px;font-weight:700;color:var(--gr)">—</div><div class="u-label-up">Missions validées</div></div>'
      + '<div style="background:var(--gc);border-radius:8px;padding:10px;text-align:center"><div style="font-size:18px;font-weight:700;color:var(--gr)">—</div><div class="u-label-up">Moyenne classe</div></div>';
  }

  const titreEl = document.getElementById('cl-titre');
  if(titreEl) titreEl.textContent = classeFiltre
    ? ('Classe : ' + classeFiltre + ' — ' + liste.length + ' élève(s)')
    : ('Tous les élèves — ' + liste.length);

  const tb = document.getElementById('cl-tbody');
  if(!tb){ if(typeof renderMDJListe === 'function') renderMDJListe(); return; }

  if(!liste.length){
    tb.innerHTML = '<tr><td colspan="10" style="padding:16px;color:var(--gm);font-size:12px">'
      + (classeFiltre ? 'Aucun élève dans cette classe.' : 'Aucun élève pour le moment. Ajoute des élèves avec le formulaire ci-dessus.')
      + '</td></tr>';
    if(typeof renderMDJListe === 'function') renderMDJListe();
    return;
  }

  tb.innerHTML = liste.map(function(e){
    const nomAff = ((e.prenom ? e.prenom + ' ' : '') + (e.nom || '')).trim() || e.email;
    const nomAffEsc = nomAff.replace(/'/g,"");
    const cls = e.classe || '—';
    const estSelectionne = ELEVE_SELECTIONNE && ELEVE_SELECTIONNE.id === e.id;
    const btnReset = '<button onclick="event.stopPropagation();resetMdpEleve(\'' + e.id + '\',\'' + nomAffEsc + '\')" '
      + 'title="Réinitialiser le mot de passe" '
      + 'style="background:none;border:.5px solid var(--gb);border-radius:6px;padding:3px 8px;cursor:pointer;font-size:12px">🔑</button>';
    return '<tr onclick="selectionnerEleve(\'' + e.id + '\',\'' + nomAffEsc + '\')" style="cursor:pointer;' + (estSelectionne ? 'background:var(--bc)' : '') + '">'
      + '<td style="font-weight:700">' + nomAff + '</td>'
      + '<td class="u-label-sm">' + cls + '</td>'
      + '<td colspan="5" style="font-size:11px;color:var(--gm)">' + e.email + '</td>'
      + '<td style="font-size:10px;color:var(--vt);font-weight:700">' + (e.statut || 'actif') + '</td>'
      + '<td style="text-align:center">' + btnReset + '</td>'
      + '</tr>';
  }).join('');

  if(typeof renderMDJListe === 'function') renderMDJListe();
}

function selectionnerEleve(id, nomAff){
  ELEVE_SELECTIONNE = { id: id, nomAff: nomAff };
  const zone = document.getElementById('eleve-selectionne-nom');
  if(zone) zone.textContent = 'Sélectionné : ' + nomAff;
  afficherClasse();
  const eleve = ELEVES_SERVEUR.find(function(e){ return e.id === id; });
  if(eleve) afficherFicheEleve(eleve);
}

// ═══════════════════════════════════════════════════════════
//   Fiche élève détaillée (missions, compétences, observations)
//   Reconstruite sur les vraies données serveur (table progressions),
//   en réutilisant calcScore()/calcNiveauComp() déjà éprouvées côté
//   élève — seule la source de données change (serveur au lieu de
//   localStorage).
// ═══════════════════════════════════════════════════════════
function genererPortfolioFicheEleve(){
  const f = window.FICHE_ELEVE_COURANTE;
  if(!f){ alert('Ouvre d\'abord la fiche d\'un élève.'); return; }
  if(typeof genererPortfolioEleve === 'function') genererPortfolioEleve(f.mail, f.ud);
}

async function afficherFicheEleve(eleve){
  const token = localStorage.getItem('laboro_token');
  const wrap = document.getElementById('fe-wrap');
  if(!wrap) return;
  wrap.innerHTML = '<div style="padding:16px;color:var(--gm);font-size:12px">Chargement de la fiche…</div>';

  let progs = [];
  try{
    const d = await fetchJSON(LABORO_API + '/api/eleves/' + eleve.id + '/progressions', {
      headers: { 'Authorization': 'Bearer ' + token }
    });
    if(!d.ok){
      wrap.innerHTML = '<div style="padding:16px;color:var(--rg);font-size:12px">Erreur : ' + (d.erreur || 'chargement impossible') + '</div>';
      return;
    }
    progs = d.progressions || [];
  }catch(e){
    wrap.innerHTML = '<div style="padding:16px;color:var(--rg);font-size:12px">' + e.message + '</div>';
    console.error('afficherFicheEleve :', e);
    return;
  }

  // Reconstruit un objet "ud" compatible avec calcScore()/calcNiveauComp(),
  // qui attendent ud.missions[mid] = { status:'done'|'att', score, note_ia }
  const ud = { missions: {} };
  progs.forEach(function(p){
    if(p.statut === 'valide'){
      ud.missions[p.mission_id] = { id: p.mission_id, status: 'done', score: (p.note_finale != null ? p.note_finale : p.note_ia), submitted_at: p.submitted_at, date_validation: p.validated_at };
    } else {
      ud.missions[p.mission_id] = { id: p.mission_id, status: 'att', note_ia: p.note_ia, submitted_at: p.submitted_at, reponses: p.reponses, feedback: p.feedback };
    }
  });

  const nom = ((eleve.prenom ? eleve.prenom + ' ' : '') + (eleve.nom || '')).trim() || eleve.email;
  const doneList = Object.values(ud.missions).filter(function(m){ return m.status==='done'; });
  const attList = Object.entries(ud.missions).filter(function(e){ return e[1].status==='att'; });
  const scores = doneList.filter(function(m){ return m.score != null; }).map(function(m){ return m.score; });
  const avg = scores.length ? (scores.reduce(function(a,b){return a+b;},0)/scores.length).toFixed(1) : '—';
  const sc = calcScore(ud);
  const lc = ['var(--gb)','#DCAE78','var(--bl)','var(--vt)','#27500A'];
  const ll = ['Non démarré','Découverte','En progression','Acquis','Maîtrisé'];
  const ini = nom.split(' ').map(function(w){ return w[0]; }).join('').substring(0,2).toUpperCase();
  const savedObs = eleve.observations || '';
  const totalMissions = MISSIONS.length;

  const alerts = [];
  COMP.forEach(function(c){
    const lv = calcNiveauComp(c.code, ud);
    if(lv===0 && (c.g==='G1'||c.g==='G4A'||c.g==='G4B')) alerts.push({type:'warn', txt: c.code+' — '+c.label+' : non démarrée'});
    if(lv>=3) alerts.push({type:'ok', txt: c.code+' — Point fort : '+ll[lv]});
  });
  attList.forEach(function(entry){
    const mid = entry[0], mv = entry[1];
    const m = MISSIONS.find(function(x){ return x.id===mid; });
    if(m) alerts.push({type:'warn', txt: m.titre+' — soumise, note IA '+mv.note_ia+'/20 — en attente de validation'});
  });

  const fmtDate = function(iso){
    if(!iso) return '—';
    const dt = new Date(iso);
    return dt.getDate().toString().padStart(2,'0') + '/' + (dt.getMonth()+1).toString().padStart(2,'0');
  };

  const escapeHtml = function(s){
    return String(s == null ? '' : s)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  };

  // Formate les réponses de l'élève (stockées en JSON, tableau OU objet
  // selon l'ancienneté de la mission) en blocs question/réponse lisibles.
  const formatReponses = function(reponses){
    if(!reponses) return '<div style="font-size:12px;color:var(--gm);font-style:italic">Réponses non disponibles.</div>';
    const entries = Array.isArray(reponses)
      ? reponses.map(function(r,i){ return ['Réponse '+(i+1), r]; })
      : Object.entries(reponses);
    return entries.map(function(entry){
      return '<div style="margin-bottom:10px"><div style="font-size:10px;font-weight:700;color:var(--gm);text-transform:uppercase;margin-bottom:2px">'+escapeHtml(entry[0])+'</div>'
        + '<div style="font-size:12px;white-space:pre-wrap;background:var(--gc,#F3F4F6);border-radius:6px;padding:8px 10px">'+escapeHtml(entry[1])+'</div></div>';
    }).join('');
  };

  ud.nom = nom;
  ud.classe = eleve.classe;
  window.FICHE_ELEVE_COURANTE = { mail: eleve.email, ud: ud };

  wrap.innerHTML = '<div class="fe">'
    + '<div class="fe-hd"><div style="display:flex;align-items:center;gap:12px"><div class="avu" style="width:44px;height:44px;font-size:16px">'+ini+'</div><div><div style="font-size:16px;font-weight:700">'+nom+'</div><div style="font-size:11px;opacity:.8;margin-top:2px">'+eleve.email+'</div></div></div><div style="text-align:right;display:flex;flex-direction:column;align-items:flex-end;gap:6px"><div style="font-size:28px;font-weight:900">'+sc+'</div><div style="font-size:10px;opacity:.8">Score LABORO /100</div><button onclick="genererPortfolioFicheEleve()" style="padding:6px 12px;background:rgba(255,255,255,.2);color:#fff;border:.5px solid rgba(255,255,255,.4);border-radius:6px;cursor:pointer;font-size:11px;font-weight:700">📄 Portfolio</button></div></div>'
    + '<div class="fe-kpis"><div class="fe-kpi"><div class="fe-kv">'+doneList.length+'</div><div class="fe-kl">Validées</div></div><div class="fe-kpi"><div class="fe-kv">'+avg+'</div><div class="fe-kl">Moyenne /20</div></div><div class="fe-kpi"><div class="fe-kv">'+attList.length+'</div><div class="fe-kl">À valider</div></div><div class="fe-kpi"><div class="fe-kv">'+doneList.length+'/'+totalMissions+'</div><div class="fe-kl">Missions faites</div></div></div>'
    + (alerts.length ? '<div class="fe-sec"><div class="fe-st">Points d\'attention</div>'+alerts.slice(0,4).map(function(a){ return '<div class="al-row al-'+a.type+'"><div class="al-dot" style="background:'+(a.type==='warn'?'var(--am)':'var(--vt)')+'"></div>'+a.txt+'</div>'; }).join('')+'</div>' : '')
    + '<div class="fe-sec"><div class="fe-st">Progression par compétence</div>'+COMP.map(function(c){
        const lv = calcNiveauComp(c.code, ud);
        return '<div class="cr"><span class="cr-code">'+c.code+'</span><span class="cr-label">'+c.label+'</span><div class="cr-bar"><div class="cr-fill" style="width:'+(lv*25)+'%;background:'+lc[lv]+'"></div></div><span class="cr-txt" style="color:'+lc[lv]+'">'+ll[lv]+'</span></div>';
      }).join('')+'</div>'
    + '<div class="fe-sec"><div class="fe-st">Missions</div><div class="mr hdr"><span>Mission</span><span>Comp.</span><span>Soumis</span><span>Note</span><span>Statut</span></div>'
    + Object.entries(ud.missions).map(function(entry){
        const mid = entry[0], mv = entry[1];
        const m = MISSIONS.find(function(x){ return x.id===mid; });
        if(!m) return '';
        const nc = mv.score>=17 ? 'nb-h' : mv.score>=11 ? 'nb-m' : 'nb-l';
        const statutHtml = mv.status==='done'
          ? '<span style="color:var(--vt);font-size:11px;font-weight:700">✓ Validée</span>'
          : '<a href="#correction-'+mid+'" style="font-size:11px;font-weight:700;color:var(--am,#D97706)">Voir la copie ↓</a>';
        return '<div class="mr"><span style="font-size:11px">'+m.titre+'</span><span class="u-label-sm">'+m.comp+' P'+m.palier+'</span><span style="font-size:11px;text-align:center">'+fmtDate(mv.submitted_at)+'</span><span><div class="nb2 '+(mv.score!=null?nc:'')+'">'+(mv.score!=null ? mv.score+'/20' : (mv.note_ia ? 'IA:'+mv.note_ia : '-'))+'</div></span><span>'+statutHtml+'</span></div>';
      }).join('')
    + '</div>'
    + (attList.length ? '<div class="fe-sec"><div class="fe-st">📝 Copies à corriger ('+attList.length+')</div>'
        + attList.map(function(entry){
            const mid = entry[0], mv = entry[1];
            const m = MISSIONS.find(function(x){ return x.id===mid; });
            if(!m) return '';
            const fbTexte = mv.feedback && mv.feedback.texte ? mv.feedback.texte : '';
            return '<div id="correction-'+mid+'" style="border:1px solid var(--gb);border-radius:8px;padding:12px 14px;margin-bottom:12px;background:#FFFBEA">'
              + '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><div style="font-size:13px;font-weight:700">'+m.titre+'</div><div style="font-size:10px;color:var(--gm)">Soumis le '+fmtDate(mv.submitted_at)+' · Note IA proposée : '+mv.note_ia+'/20</div></div>'
              + '<div style="font-size:10px;font-weight:700;color:var(--gm);text-transform:uppercase;margin-bottom:6px">Réponses de l\'élève</div>'
              + formatReponses(mv.reponses)
              + (fbTexte ? '<div style="font-size:10px;font-weight:700;color:var(--gm);text-transform:uppercase;margin:10px 0 4px">Feedback IA</div><div style="font-size:12px;white-space:pre-wrap;color:#4B5563">'+escapeHtml(fbTexte)+'</div>' : '')
              + '<div style="margin-top:10px"><button onclick="validerMissionServeur(\''+eleve.id+'\',\''+mid+'\','+mv.note_ia+')" style="padding:5px 12px;background:var(--bl);color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:700">Valider '+mv.note_ia+'/20</button></div>'
              + '</div>';
          }).join('')
        + '</div>'
      : '')
    + '<div class="fe-sec"><div class="fe-st">Observations enseignant</div><textarea class="obs-area" id="obs-'+eleve.id+'" placeholder="Observations, points forts, axes de progression…">'+savedObs+'</textarea><button class="btn-obs-s" onclick="saveObsServeur(\''+eleve.id+'\')">Enregistrer</button></div>'
    + '</div>';

  wrap.scrollIntoView({behavior:'smooth'});
}

async function validerMissionServeur(eleveId, missionId, noteIA){
  const saisie = prompt('Note finale pour cette mission (/20) :', noteIA);
  if(saisie === null) return;
  const note = parseInt(saisie, 10);
  if(isNaN(note) || note < 0 || note > 20){ alert('Merci de saisir une note entière entre 0 et 20.'); return; }
  const token = localStorage.getItem('laboro_token');
  if(!token){ alert('Session expirée — reconnecte-toi en tant qu\'enseignant.'); return; }
  try{
    const d = await fetchJSON(LABORO_API + '/api/eleves/valider-mission', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify({ eleve_id: eleveId, mission_id: missionId, note_finale: note })
    });
    if(!d.ok){ alert('Échec : ' + (d.erreur || 'erreur inconnue')); return; }
    alert('✅ Mission validée avec la note ' + d.note_finale + '/20.');
    const eleve = ELEVES_SERVEUR.find(function(e){ return e.id === eleveId; });
    if(eleve) afficherFicheEleve(eleve);
  }catch(e){
    alert(e.message);
    console.error('validerMissionServeur :', e);
  }
}

async function saveObsServeur(eleveId){
  const el = document.getElementById('obs-' + eleveId);
  if(!el) return;
  const token = localStorage.getItem('laboro_token');
  if(!token){ alert('Session expirée — reconnecte-toi en tant qu\'enseignant.'); return; }
  try{
    const d = await fetchJSON(LABORO_API + '/api/eleves/observations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify({ eleve_id: eleveId, observations: el.value })
    });
    if(!d.ok){ alert('Échec : ' + (d.erreur || 'erreur inconnue')); return; }
    const eleve = ELEVES_SERVEUR.find(function(e){ return e.id === eleveId; });
    if(eleve) eleve.observations = el.value;
    alert('✅ Observations enregistrées.');
  }catch(e){
    alert(e.message);
    console.error('saveObsServeur :', e);
  }
}

function verifierSelection(){
  if(!ELEVE_SELECTIONNE){
    alert('Sélectionne d\'abord un élève dans le tableau ci-dessous.');
    return false;
  }
  return true;
}

async function changerClasseEleve(){
  if(!verifierSelection()) return;
  const nouvelleClasse = prompt('Nouvelle classe pour ' + ELEVE_SELECTIONNE.nomAff + ' (ex. 1ere-PVOC) :', '1ere-PVOC');
  if(!nouvelleClasse) return;
  const token = localStorage.getItem('laboro_token');
  if(!token){ alert('Session expirée — reconnecte-toi en tant qu\'enseignant.'); return; }
  try{
    const d = await fetchJSON(LABORO_API + '/api/eleves/changer-classe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify({ eleve_id: ELEVE_SELECTIONNE.id, classeCode: nouvelleClasse.trim() })
    });
    if(!d.ok){ alert('Échec : ' + (d.erreur || 'erreur inconnue')); return; }
    alert('✅ ' + ELEVE_SELECTIONNE.nomAff + ' est maintenant en ' + d.classe + '.');
    ELEVE_SELECTIONNE = null;
    const zone = document.getElementById('eleve-selectionne-nom');
    if(zone) zone.textContent = '';
    renderClasse();
  }catch(e){
    alert(e.message);
    console.error('changerClasseEleve :', e);
  }
}

async function reinitialiserEleve(){
  if(!verifierSelection()) return;
  if(!confirm('Réinitialiser toutes les missions de ' + ELEVE_SELECTIONNE.nomAff + ' ?\n\nSa progression et ses notes seront définitivement effacées.')) return;
  const token = localStorage.getItem('laboro_token');
  if(!token){ alert('Session expirée — reconnecte-toi en tant qu\'enseignant.'); return; }
  try{
    const d = await fetchJSON(LABORO_API + '/api/eleves/reinitialiser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify({ eleve_id: ELEVE_SELECTIONNE.id })
    });
    if(!d.ok){ alert('Échec : ' + (d.erreur || 'erreur inconnue')); return; }
    alert('✅ Progression de ' + ELEVE_SELECTIONNE.nomAff + ' réinitialisée.');
  }catch(e){
    alert(e.message);
    console.error('reinitialiserEleve :', e);
  }
}

async function supprimerEleve(){
  if(!verifierSelection()) return;
  if(!confirm('Supprimer définitivement ' + ELEVE_SELECTIONNE.nomAff + ' ?\n\nCette action est irréversible.')) return;
  const token = localStorage.getItem('laboro_token');
  if(!token){ alert('Session expirée — reconnecte-toi en tant qu\'enseignant.'); return; }
  try{
    const d = await fetchJSON(LABORO_API + '/api/eleves/supprimer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify({ eleve_id: ELEVE_SELECTIONNE.id })
    });
    if(!d.ok){ alert('Échec : ' + (d.erreur || 'erreur inconnue')); return; }
    alert('✅ ' + ELEVE_SELECTIONNE.nomAff + ' a été supprimé(e).');
    ELEVE_SELECTIONNE = null;
    const zone = document.getElementById('eleve-selectionne-nom');
    if(zone) zone.textContent = '';
    renderClasse();
  }catch(e){
    alert(e.message);
    console.error('supprimerEleve :', e);
  }
}

function filtrerClasse(cls){
  classeFiltre = cls || '';
  afficherClasse();
}

async function resetMdpEleve(eleveId, nomAff){
  if(!confirm('Réinitialiser le mot de passe de ' + nomAff + ' ?\n\nSon mot de passe redeviendra "Laboro2025" et il devra en choisir un nouveau à sa prochaine connexion.')) return;
  const token = localStorage.getItem('laboro_token');
  if(!token){ alert('Session expirée — reconnecte-toi en tant qu\'enseignant.'); return; }
  try{
    const d = await fetchJSON(LABORO_API + '/api/eleves/reset-mdp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify({ eleve_id: eleveId })
    });
    if(!d.ok){ alert('Échec : ' + (d.erreur || 'erreur inconnue')); return; }
    alert('✅ Mot de passe réinitialisé pour ' + d.prenom + ' ' + d.nom + '.\n\nNouveau mot de passe : ' + d.motDePasse + '\n(il devra le changer à sa prochaine connexion)');
  }catch(e){
    alert(e.message);
    console.error('resetMdpEleve :', e);
  }
}

// ═══════════════════════════════════════════════════════════
//   Mission du jour — assignation collective (classe) ou
//   individuelle (élève précis)
// ═══════════════════════════════════════════════════════════

function mdjToggleCible(){
  const radio = document.querySelector('input[name="mdj-cible"]:checked');
  if(!radio) return;
  const selCl = document.getElementById('mdj-cl');
  const selEl = document.getElementById('mdj-el');
  if(!selCl || !selEl) return;
  selCl.style.display = radio.value === 'classe' ? '' : 'none';
  selEl.style.display = radio.value === 'eleve' ? '' : 'none';
}

function initMissionDuJour(){
  const selMs = document.getElementById('mdj-ms');
  if(selMs && typeof MISSIONS !== 'undefined'){
    const current = selMs.value;
    selMs.innerHTML = '<option value="">— Mission —</option>' +
      MISSIONS.map(function(m){ return '<option value="'+m.id+'">'+m.titre+' ('+m.comp+' · P'+m.palier+')</option>'; }).join('');
    if(current) selMs.value = current;
  }
  const selEl = document.getElementById('mdj-el');
  if(selEl && typeof ELEVES_SERVEUR !== 'undefined' && ELEVES_SERVEUR.length){
    selEl.innerHTML = '<option value="">— Élève —</option>' +
      ELEVES_SERVEUR.map(function(e){ return '<option value="'+e.id+'">'+e.prenom+' '+e.nom+'</option>'; }).join('');
  }
  renderMDJListe();
}

async function assignerMDJ(){
  const radio = document.querySelector('input[name="mdj-cible"]:checked');
  const cible = radio ? radio.value : 'classe';
  const missionId = document.getElementById('mdj-ms').value;
  const st = document.getElementById('mdj-st');
  if(!missionId){ if(st) st.textContent = 'Choisis une mission avant d\'assigner.'; return; }
  const token = localStorage.getItem('laboro_token');
  if(!token){ alert('Session expirée — reconnecte-toi en tant qu\'enseignant.'); return; }

  const body = { mission_id: missionId, cible: cible };
  if(cible === 'classe'){
    body.classeCode = document.getElementById('mdj-cl').value;
  } else {
    const eleveId = document.getElementById('mdj-el').value;
    if(!eleveId){ if(st) st.textContent = 'Choisis un élève avant d\'assigner.'; return; }
    body.eleve_id = eleveId;
  }

  try{
    const d = await fetchJSON(LABORO_API + '/api/mission-du-jour', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify(body)
    });
    if(!d.ok){ if(st) st.textContent = 'Échec : ' + (d.erreur || 'erreur inconnue'); return; }
    if(st) st.textContent = '✅ Mission assignée avec succès.';
    renderMDJListe();
  }catch(e){
    if(st) st.textContent = e.message;
    console.error('assignerMDJ :', e);
  }
}

async function renderMDJListe(){
  const el = document.getElementById('mdj-liste');
  if(!el) return;
  const token = localStorage.getItem('laboro_token');
  if(!token) return;
  try{
    const d = await fetchJSON(LABORO_API + '/api/mission-du-jour/liste', {
      headers: { 'Authorization': 'Bearer ' + token }
    });
    if(!d.ok || !d.assignations.length){
      el.innerHTML = '<div style="padding:14px 16px;background:var(--gc,#F3F4F6);border-radius:8px;font-size:12px;color:var(--gm,#6B7280);text-align:center">Aucune mission du jour assignée pour le moment.</div>';
      return;
    }
    el.innerHTML = d.assignations.map(function(a){
      const cible = a.eleve_id ? '👤 ' + a.eleve_prenom + ' ' + a.eleve_nom : '👥 ' + (a.classe_libelle || 'Classe entière');
      const date = a.assigne_le ? new Date(a.assigne_le).toLocaleDateString('fr-FR', {day:'2-digit', month:'2-digit'}) : '';
      return '<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 10px;border-bottom:.5px solid var(--gc);font-size:12px">'
        + '<div><strong>'+a.mission_titre+'</strong><div style="color:var(--gm);font-size:11px">'+cible+' · assignée le '+date+'</div></div>'
        + '<button onclick="supprimerMDJ(\''+a.id+'\')" style="padding:4px 8px;background:none;border:.5px solid var(--rg);border-radius:5px;cursor:pointer;color:var(--rg);font-size:11px">Retirer</button>'
        + '</div>';
    }).join('');
  }catch(e){
    console.error('renderMDJListe :', e);
  }
}

async function supprimerMDJ(id){
  if(!confirm('Retirer cette assignation ?')) return;
  const token = localStorage.getItem('laboro_token');
  if(!token) return;
  try{
    const d = await fetchJSON(LABORO_API + '/api/mission-du-jour/' + id, {
      method: 'DELETE',
      headers: { 'Authorization': 'Bearer ' + token }
    });
    if(d.ok) renderMDJListe();
  }catch(e){
    console.error('supprimerMDJ :', e);
  }
}

// ================================================
//   Export CSV — vue d'ensemble de la classe
// ================================================
async function exporterClasse(ev){
  const token = localStorage.getItem('laboro_token');
  if(!token){ alert('Connecte-toi via le serveur pour exporter la liste.'); return; }

  const btn = ev && ev.target;
  const btnTxtOrig = btn ? btn.textContent : null;
  if(btn){ btn.textContent = '⏳ Export en cours...'; btn.disabled = true; }

  try{
    const d = await fetchJSON(LABORO_API + '/api/export-classe', {
      headers: { 'Authorization': 'Bearer ' + token }
    });
    if(!d.ok){
      alert('Erreur export : ' + (d.erreur || 'impossible'));
      return;
    }

    const niveauLabels = ['Non démarré', 'Découverte', 'En progression', 'Acquis', 'Maîtrisé'];
    const compCols = d.colonnes_competences || [];

    const entetes = ['Nom', 'Prénom', 'Email', 'Classe', 'Missions validées', 'Moyenne /20', 'Score LABORO /100']
      .concat(compCols.map(function(c){ return 'Comp. ' + c; }))
      .concat(['Dernière activité']);

    function fmtDate(iso){
      if(!iso) return '';
      const dt = new Date(iso);
      if(isNaN(dt.getTime())) return '';
      return dt.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    }

    function csvEsc(val){
      const s = (val === null || val === undefined) ? '' : String(val);
      if(/[;"\n]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
      return s;
    }

    const lignes = (d.eleves || []).map(function(e){
      const base = [e.nom, e.prenom, e.email, e.classe, e.missionsValidees, e.moyenne, e.score];
      const comps = compCols.map(function(c){ return niveauLabels[e.niveaux[c] || 0]; });
      return base.concat(comps).concat([fmtDate(e.derniereActivite)]).map(csvEsc).join(';');
    });

    const csv = entetes.map(csvEsc).join(';') + '\n' + lignes.join('\n');
    const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const dateFichier = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = 'laboro-auto-export-classe-' + dateFichier + '.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }catch(e){
    console.error('exporterClasse :', e);
    alert(e.message);
  }finally{
    if(btn){ btn.textContent = btnTxtOrig; btn.disabled = false; }
  }
}

// ================================================
//   Analyse de classe — vue d'ensemble pédagogique
// ================================================
async function openAnalyse(){
  const overlay = document.getElementById('ana-overlay');
  const body = document.getElementById('ana-body');
  const titre = document.getElementById('ana-titre');
  const sous = document.getElementById('ana-sous');
  if(!overlay || !body) return;
  overlay.classList.add('open');
  if(titre) titre.textContent = 'Analyse de classe';
  if(sous) sous.textContent = 'Chargement…';
  body.innerHTML = '<div style="padding:24px;text-align:center;color:var(--gm);font-size:13px">Chargement de l\'analyse…</div>';

  const token = localStorage.getItem('laboro_token');
  if(!token){
    body.innerHTML = '<div style="padding:24px;color:var(--rg);font-size:13px">Connecte-toi via le serveur pour voir l\'analyse.</div>';
    return;
  }

  try{
    const d = await fetchJSON(LABORO_API + '/api/analyse-classe', {
      headers: { 'Authorization': 'Bearer ' + token }
    });
    if(!d.ok){
      body.innerHTML = '<div style="padding:24px;color:var(--rg);font-size:13px">Erreur : ' + (d.erreur || 'chargement impossible') + '</div>';
      return;
    }
    if(sous) sous.textContent = d.nbEleves + ' élève(s) analysé(s)';
    body.innerHTML = renderAnalyse(d);
  }catch(e){
    body.innerHTML = '<div style="padding:24px;color:var(--rg);font-size:13px">' + e.message + '</div>';
    console.error('openAnalyse :', e);
  }
}

function closeAnalyse(){
  const overlay = document.getElementById('ana-overlay');
  if(overlay) overlay.classList.remove('open');
}

function renderAnalyse(d){
  if(!d.nbEleves){
    return '<div style="padding:24px;color:var(--gm);font-size:13px">Aucun élève à analyser pour le moment.</div>';
  }

  const lc = ['var(--gb)', '#DCAE78', 'var(--bl)', 'var(--vt)', '#27500A'];

  const compHtml = d.competences.slice(0, 5).map(function(c){
    const lv = Math.min(4, Math.max(0, Math.round(c.niveauMoyen)));
    return '<div class="cr"><span class="cr-code">' + c.code + '</span><span class="cr-label">' + c.label + '</span>'
      + '<div class="cr-bar"><div class="cr-fill" style="width:' + (c.niveauMoyen * 25) + '%;background:' + lc[lv] + '"></div></div>'
      + '<span class="cr-txt" style="width:auto;color:' + lc[lv] + '">' + c.niveauMoyen.toFixed(1) + '/4 · ' + c.pctNonDemarre + '% pas commencé</span></div>';
  }).join('');

  const missionsHtml = d.missions.length
    ? d.missions.map(function(m){
        return '<div class="al-row al-warn"><div class="al-dot" style="background:var(--am)"></div>'
          + m.titre + ' — moyenne ' + m.moyenne + '/20 (' + m.nb + ' copie(s))</div>';
      }).join('')
    : '<div style="padding:10px;font-size:12px;color:var(--gm)">Pas encore assez de données (au moins 2 copies par mission nécessaires pour être significatif).</div>';

  const decrocheHtml = (d.decrochageAucune.length || d.decrochageInactif.length)
    ? (d.decrochageAucune.length
        ? '<div class="al-row al-warn" style="align-items:flex-start"><div class="al-dot" style="background:var(--am);margin-top:4px"></div><div><strong>Aucune mission validée :</strong> ' + d.decrochageAucune.join(', ') + '</div></div>'
        : '')
      + (d.decrochageInactif.length
        ? '<div class="al-row al-warn" style="align-items:flex-start"><div class="al-dot" style="background:var(--am);margin-top:4px"></div><div><strong>Inactifs depuis 14 jours ou plus :</strong> ' + d.decrochageInactif.join(', ') + '</div></div>'
        : '')
    : '<div class="al-row al-ok"><div class="al-dot" style="background:var(--vt)"></div>Aucun élève en décrochage détecté.</div>';

  const maxDist = Math.max.apply(null, d.distribution.concat([1]));
  const labelsDist = ['0-20', '20-40', '40-60', '60-80', '80-100'];
  const distHtml = '<div style="display:flex;align-items:flex-end;gap:8px;height:110px;margin-top:6px">'
    + d.distribution.map(function(n, i){
        const h = Math.round((n / maxDist) * 70) + 10;
        return '<div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end">'
          + '<div style="font-size:11px;font-weight:700;margin-bottom:2px">' + n + '</div>'
          + '<div style="width:100%;height:' + h + 'px;background:var(--bl);border-radius:4px 4px 0 0"></div>'
          + '<div style="font-size:10px;color:var(--gm);margin-top:4px">' + labelsDist[i] + '</div>'
          + '</div>';
      }).join('')
    + '</div>';

  return '<div class="fe-sec"><div class="fe-st">📉 Compétences les plus fragiles</div>' + compHtml + '</div>'
    + '<div class="fe-sec"><div class="fe-st">📝 Missions les plus difficiles</div>' + missionsHtml + '</div>'
    + '<div class="fe-sec"><div class="fe-st">⚠️ Élèves à suivre</div>' + decrocheHtml + '</div>'
    + '<div class="fe-sec"><div class="fe-st">📊 Répartition des scores LABORO</div>' + distHtml + '</div>';
}

// ================================================
//   Générer une mission par IA — brouillon à relire,
//   jamais publié automatiquement dans la banque de missions.
// ================================================
function initGenerationMission(){
  const selComp = document.getElementById('g-comp');
  if(selComp && typeof COMP !== 'undefined'){
    const current = selComp.value;
    selComp.innerHTML = COMP.map(function(c){ return '<option value="'+c.code+'">'+c.code+' — '+c.label+'</option>'; }).join('');
    if(current) selComp.value = current;
  }
}

async function genMission(){
  const btn = document.querySelector('.btn-gen');
  const res = document.getElementById('gen-res');
  if(!res) return;

  const compEl = document.getElementById('g-comp');
  const palEl = document.getElementById('g-pal');
  const cliEl = document.getElementById('g-cli');
  const comp = compEl ? compEl.value : '';
  const palier = palEl ? palEl.value : '1';
  const clientType = cliEl ? cliEl.value : '';

  const token = localStorage.getItem('laboro_token');
  if(!token){
    res.style.color = 'var(--rg)';
    res.textContent = 'Connecte-toi via le serveur pour générer une mission.';
    return;
  }

  const btnTxtOrig = btn ? btn.textContent : null;
  if(btn){ btn.textContent = '⏳ Génération en cours (10-20 secondes)…'; btn.disabled = true; }
  res.style.color = 'var(--gm)';
  res.textContent = "L'IA rédige la mission…";

  try{
    const d = await fetchJSON(LABORO_API + '/api/generer-mission', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify({ comp_code: comp, palier: parseInt(palier, 10), client_type: clientType })
    });
    if(!d.ok){
      res.style.color = 'var(--rg)';
      res.textContent = 'Erreur : ' + (d.erreur || 'génération impossible');
      return;
    }
    res.style.color = 'var(--gr)';
    res.innerHTML = renderBrouillonMission(d.brouillon);
  }catch(e){
    res.style.color = 'var(--rg)';
    res.textContent = e.message;
    console.error('genMission :', e);
  }finally{
    if(btn){ btn.textContent = btnTxtOrig; btn.disabled = false; }
  }
}

function renderBrouillonMission(m){
  const esc = function(s){ return String(s == null ? '' : s).replace(/</g, '&lt;'); };
  const jsonStr = JSON.stringify(m, null, 2);

  const activitesHtml = (m.activites || []).map(function(a, i){
    return '<div style="margin-bottom:8px"><strong>' + (i + 1) + '. ' + esc(a.t) + '</strong>'
      + (a.q || []).map(function(q){ return '<div style="margin-left:14px;font-size:12px">– ' + esc(q) + '</div>'; }).join('')
      + '</div>';
  }).join('');

  const criteresHtml = (m.criteres || []).map(function(c){
    return '<div style="font-size:12px;padding:3px 0">• <strong>' + esc(c.c) + '</strong> — ' + esc(c.i) + '</div>';
  }).join('');

  const dossierRows = ((m.dossier && m.dossier.rows) || []).map(function(r){
    return '<div style="font-size:12px;padding:2px 0"><strong>' + esc(r[0]) + ' :</strong> ' + esc(r[1]) + '</div>';
  }).join('');

  return '<div style="background:#fff;border:.5px solid var(--gb);border-radius:10px;padding:16px;margin-bottom:12px">'
    + '<div style="font-size:10px;font-weight:700;color:var(--am,#D97706);text-transform:uppercase;letter-spacing:.05em">⚠️ Brouillon — à relire avant intégration, jamais publié automatiquement</div>'
    + '<div style="font-size:15px;font-weight:800;color:var(--gr);margin-top:4px">' + esc(m.titre) + '</div>'
    + '<div style="font-size:11px;color:var(--gm);margin-top:2px;margin-bottom:12px">' + esc(m.comp) + ' (' + esc(m.comp_ref) + ') — Palier ' + esc(m.palier) + ' — ' + esc(m.option) + '</div>'
    + '<div style="font-size:12px;color:var(--gr);margin-bottom:10px"><strong>Objectif :</strong> ' + esc(m.objectif) + '</div>'
    + '<div style="font-size:12px;color:var(--gr);margin-bottom:10px"><strong>Contexte :</strong> ' + esc(m.contexte) + '</div>'
    + (dossierRows ? '<div style="background:var(--gc);border-radius:8px;padding:10px;margin-bottom:10px"><div style="font-size:10px;font-weight:700;text-transform:uppercase;color:var(--gm);margin-bottom:6px">📁 ' + esc((m.dossier || {}).l || 'Dossier') + '</div>' + dossierRows + '</div>' : '')
    + '<div style="margin-bottom:10px"><div style="font-size:10px;font-weight:700;text-transform:uppercase;color:var(--gm);margin-bottom:6px">Activités</div>' + activitesHtml + '</div>'
    + '<div style="font-size:12px;color:var(--gr);margin-bottom:10px"><strong>Livrable :</strong> ' + esc(m.livrable) + '</div>'
    + '<div style="margin-bottom:4px"><div style="font-size:10px;font-weight:700;text-transform:uppercase;color:var(--gm);margin-bottom:6px">Critères d\'évaluation</div>' + criteresHtml + '</div>'
    + (m.reflexivite_q ? '<div style="font-size:12px;color:var(--gr);margin-top:10px;padding-top:10px;border-top:.5px solid var(--gb)"><strong>Question de réflexivité :</strong> ' + esc(m.reflexivite_q) + '</div>' : '')
    + '</div>'
    + '<div style="font-size:11px;font-weight:700;color:var(--gm);text-transform:uppercase;margin-bottom:6px">JSON à relire puis copier dans data/missions.js (remplace l\'id par un identifiant définitif, ex. B41d-P1)</div>'
    + '<textarea readonly onclick="this.select()" style="width:100%;min-height:240px;font-family:monospace;font-size:11px;padding:10px;border:.5px solid var(--gb);border-radius:8px;background:#1E1E1E;color:#D4D4D4;box-sizing:border-box">' + esc(jsonStr) + '</textarea>';
}
