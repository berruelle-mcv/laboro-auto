// ================================================
//   LABORO — Vue classe (lecture serveur) + actions élève
//   Chargé APRÈS teacher.js dans index.html.
// ================================================

let ELEVES_SERVEUR = [];
let ELEVE_SELECTIONNE = null; // { id, nomAff }

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
    const rep = await fetch(LABORO_API + '/api/eleves', {
      headers: { 'Authorization': 'Bearer ' + token }
    });
    const data = await rep.json();
    if(!data.ok){
      if(tb) tb.innerHTML = '<tr><td colspan="10" style="padding:16px;color:var(--rg);font-size:12px">'
        + 'Erreur : ' + (data.erreur || 'chargement impossible') + '</td></tr>';
      return;
    }
    ELEVES_SERVEUR = data.eleves || [];
  }catch(e){
    if(tb) tb.innerHTML = '<tr><td colspan="10" style="padding:16px;color:var(--rg);font-size:12px">'
      + 'Impossible de joindre le serveur LABORO.</td></tr>';
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
async function afficherFicheEleve(eleve){
  const token = localStorage.getItem('laboro_token');
  const wrap = document.getElementById('fe-wrap');
  if(!wrap) return;
  wrap.innerHTML = '<div style="padding:16px;color:var(--gm);font-size:12px">Chargement de la fiche…</div>';

  let progs = [];
  try{
    const rep = await fetch(LABORO_API + '/api/eleves/' + eleve.id + '/progressions', {
      headers: { 'Authorization': 'Bearer ' + token }
    });
    const d = await rep.json();
    if(!d.ok){
      wrap.innerHTML = '<div style="padding:16px;color:var(--rg);font-size:12px">Erreur : ' + (d.erreur || 'chargement impossible') + '</div>';
      return;
    }
    progs = d.progressions || [];
  }catch(e){
    wrap.innerHTML = '<div style="padding:16px;color:var(--rg);font-size:12px">Impossible de joindre le serveur LABORO.</div>';
    console.error('afficherFicheEleve :', e);
    return;
  }

  // Reconstruit un objet "ud" compatible avec calcScore()/calcNiveauComp(),
  // qui attendent ud.missions[mid] = { status:'done'|'att', score, note_ia }
  const ud = { missions: {} };
  progs.forEach(function(p){
    if(p.statut === 'valide'){
      ud.missions[p.mission_id] = { id: p.mission_id, status: 'done', score: (p.note_finale != null ? p.note_finale : p.note_ia), submitted_at: p.submitted_at };
    } else {
      ud.missions[p.mission_id] = { id: p.mission_id, status: 'att', note_ia: p.note_ia, submitted_at: p.submitted_at };
    }
  });

  const nom = ((eleve.prenom ? eleve.prenom + ' ' : '') + (eleve.nom || '')).trim() || eleve.email;
  const doneList = Object.values(ud.missions).filter(function(m){ return m.status==='done'; });
  const attList = Object.entries(ud.missions).filter(function(e){ return e[1].status==='att'; });
  const scores = doneList.filter(function(m){ return m.score; }).map(function(m){ return m.score; });
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

  wrap.innerHTML = '<div class="fe">'
    + '<div class="fe-hd"><div style="display:flex;align-items:center;gap:12px"><div class="avu" style="width:44px;height:44px;font-size:16px">'+ini+'</div><div><div style="font-size:16px;font-weight:700">'+nom+'</div><div style="font-size:11px;opacity:.8;margin-top:2px">'+eleve.email+'</div></div></div><div style="text-align:right"><div style="font-size:28px;font-weight:900">'+sc+'</div><div style="font-size:10px;opacity:.8">Score LABORO /100</div></div></div>'
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
          : '<button onclick="validerMissionServeur(\''+eleve.id+'\',\''+mid+'\','+mv.note_ia+')" style="padding:3px 8px;background:var(--bl);color:#fff;border:none;border-radius:5px;cursor:pointer;font-size:11px">Valider '+mv.note_ia+'/20</button>';
        return '<div class="mr"><span style="font-size:11px">'+m.titre+'</span><span class="u-label-sm">'+m.comp+' P'+m.palier+'</span><span style="font-size:11px;text-align:center">'+fmtDate(mv.submitted_at)+'</span><span><div class="nb2 '+(mv.score?nc:'')+'">'+(mv.score ? mv.score+'/20' : (mv.note_ia ? 'IA:'+mv.note_ia : '-'))+'</div></span><span>'+statutHtml+'</span></div>';
      }).join('')
    + '</div>'
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
    const rep = await fetch(LABORO_API + '/api/eleves/valider-mission', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify({ eleve_id: eleveId, mission_id: missionId, note_finale: note })
    });
    const d = await rep.json();
    if(!d.ok){ alert('Échec : ' + (d.erreur || 'erreur inconnue')); return; }
    alert('✅ Mission validée avec la note ' + d.note_finale + '/20.');
    const eleve = ELEVES_SERVEUR.find(function(e){ return e.id === eleveId; });
    if(eleve) afficherFicheEleve(eleve);
  }catch(e){
    alert('Impossible de joindre le serveur LABORO.');
    console.error('validerMissionServeur :', e);
  }
}

async function saveObsServeur(eleveId){
  const el = document.getElementById('obs-' + eleveId);
  if(!el) return;
  const token = localStorage.getItem('laboro_token');
  if(!token){ alert('Session expirée — reconnecte-toi en tant qu\'enseignant.'); return; }
  try{
    const rep = await fetch(LABORO_API + '/api/eleves/observations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify({ eleve_id: eleveId, observations: el.value })
    });
    const d = await rep.json();
    if(!d.ok){ alert('Échec : ' + (d.erreur || 'erreur inconnue')); return; }
    const eleve = ELEVES_SERVEUR.find(function(e){ return e.id === eleveId; });
    if(eleve) eleve.observations = el.value;
    alert('✅ Observations enregistrées.');
  }catch(e){
    alert('Impossible de joindre le serveur LABORO.');
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
    const rep = await fetch(LABORO_API + '/api/eleves/changer-classe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify({ eleve_id: ELEVE_SELECTIONNE.id, classeCode: nouvelleClasse.trim() })
    });
    const d = await rep.json();
    if(!d.ok){ alert('Échec : ' + (d.erreur || 'erreur inconnue')); return; }
    alert('✅ ' + ELEVE_SELECTIONNE.nomAff + ' est maintenant en ' + d.classe + '.');
    ELEVE_SELECTIONNE = null;
    const zone = document.getElementById('eleve-selectionne-nom');
    if(zone) zone.textContent = '';
    renderClasse();
  }catch(e){
    alert('Impossible de joindre le serveur LABORO.');
    console.error('changerClasseEleve :', e);
  }
}

async function reinitialiserEleve(){
  if(!verifierSelection()) return;
  if(!confirm('Réinitialiser toutes les missions de ' + ELEVE_SELECTIONNE.nomAff + ' ?\n\nSa progression et ses notes seront définitivement effacées.')) return;
  const token = localStorage.getItem('laboro_token');
  if(!token){ alert('Session expirée — reconnecte-toi en tant qu\'enseignant.'); return; }
  try{
    const rep = await fetch(LABORO_API + '/api/eleves/reinitialiser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify({ eleve_id: ELEVE_SELECTIONNE.id })
    });
    const d = await rep.json();
    if(!d.ok){ alert('Échec : ' + (d.erreur || 'erreur inconnue')); return; }
    alert('✅ Progression de ' + ELEVE_SELECTIONNE.nomAff + ' réinitialisée.');
  }catch(e){
    alert('Impossible de joindre le serveur LABORO.');
    console.error('reinitialiserEleve :', e);
  }
}

async function supprimerEleve(){
  if(!verifierSelection()) return;
  if(!confirm('Supprimer définitivement ' + ELEVE_SELECTIONNE.nomAff + ' ?\n\nCette action est irréversible.')) return;
  const token = localStorage.getItem('laboro_token');
  if(!token){ alert('Session expirée — reconnecte-toi en tant qu\'enseignant.'); return; }
  try{
    const rep = await fetch(LABORO_API + '/api/eleves/supprimer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify({ eleve_id: ELEVE_SELECTIONNE.id })
    });
    const d = await rep.json();
    if(!d.ok){ alert('Échec : ' + (d.erreur || 'erreur inconnue')); return; }
    alert('✅ ' + ELEVE_SELECTIONNE.nomAff + ' a été supprimé(e).');
    ELEVE_SELECTIONNE = null;
    const zone = document.getElementById('eleve-selectionne-nom');
    if(zone) zone.textContent = '';
    renderClasse();
  }catch(e){
    alert('Impossible de joindre le serveur LABORO.');
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
    const rep = await fetch(LABORO_API + '/api/eleves/reset-mdp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify({ eleve_id: eleveId })
    });
    const d = await rep.json();
    if(!d.ok){ alert('Échec : ' + (d.erreur || 'erreur inconnue')); return; }
    alert('✅ Mot de passe réinitialisé pour ' + d.prenom + ' ' + d.nom + '.\n\nNouveau mot de passe : ' + d.motDePasse + '\n(il devra le changer à sa prochaine connexion)');
  }catch(e){
    alert('Impossible de joindre le serveur LABORO.');
    console.error('resetMdpEleve :', e);
  }
}
