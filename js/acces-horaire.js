// ================================================
//   LABORO Auto — Restriction horaire d'accès élèves
//   Chargé EN PREMIER dans index.html (avant tout autre script) :
//   il intercepte window.fetch pour que TOUT appel au serveur LABORO,
//   quel que soit le fichier qui le fait (auth, correction, dashboard,
//   classe-serveur…), déclenche l'écran de blocage dès que le serveur
//   répond 403 { erreur:'ACCES_HORAIRE_BLOQUE' }.
//   Il ajoute aussi l'écran admin "Accès élèves" (panneau + entrée de menu),
//   visible uniquement si le serveur reconnaît le compte comme administrateur.
// ================================================

(function(){
  const API_HOTE = 'auto-api.laboro-edu.fr';
  const CODE_BLOCAGE = 'ACCES_HORAIRE_BLOQUE';
  let blocageAffiche = false;

  // ─── 1. Interception réseau unique ───────────────────────────
  const fetchOriginal = window.fetch.bind(window);
  window.fetch = async function(input, init){
    const rep = await fetchOriginal(input, init);
    try{
      const url = typeof input === 'string' ? input : (input && input.url) || '';
      if(rep.status === 403 && url.indexOf(API_HOTE) !== -1){
        // clone() : on lit une copie, la réponse d'origine reste intacte pour l'appelant
        const corps = await rep.clone().json().catch(() => null);
        if(corps && corps.erreur === CODE_BLOCAGE){
          afficherBlocageHoraire(corps.message);
        }
      }
    }catch(e){ /* l'interception ne doit jamais casser l'appel d'origine */ }
    return rep;
  };

  // ─── 2. Écran de blocage élève ───────────────────────────────
  function afficherBlocageHoraire(message){
    if(blocageAffiche) return;
    blocageAffiche = true;

    // Déconnexion propre : jeton et session locale effacés
    try{ localStorage.removeItem('laboro_token'); localStorage.removeItem('laboro_u'); }catch(e){}
    try{ if(typeof CU !== 'undefined') CU = null; }catch(e){}
    try{ if(typeof closeMo === 'function') closeMo(); }catch(e){}

    const msg = message || "LABORO est fermé en dehors des horaires de cours.";
    const ov = document.createElement('div');
    ov.id = 'blocage-horaire';
    ov.style.cssText = 'position:fixed;inset:0;z-index:100000;display:flex;align-items:center;justify-content:center;'
      + 'padding:16px;background:linear-gradient(160deg,#B5651D 0%,#5C3814 100%);font-family:inherit';
    ov.innerHTML =
      '<div style="background:linear-gradient(160deg,#F8FAFF 0%,#EEF4FF 100%);max-width:440px;width:100%;'
      + 'border-radius:16px;padding:40px 32px;box-shadow:0 25px 80px rgba(0,0,0,.5);text-align:center">'
      + '<div style="font-size:44px;margin-bottom:12px">🔒</div>'
      + '<div style="font-size:20px;font-weight:800;color:#5C3814;margin-bottom:10px">Concession fermée</div>'
      + '<div id="blocage-horaire-msg" style="font-size:14px;line-height:1.6;color:#374151;margin-bottom:24px"></div>'
      + '<button onclick="location.reload()" style="padding:11px 28px;background:#B5651D;color:#fff;border:none;'
      + 'border-radius:10px;font-size:13px;font-weight:700;cursor:pointer">Réessayer</button>'
      + '</div>';
    ov.querySelector('#blocage-horaire-msg').textContent = msg; // textContent : jamais d'HTML injecté
    document.body.appendChild(ov);
  }
  window.afficherBlocageHoraire = afficherBlocageHoraire;

  // ─── 3. Écran admin "Accès élèves" ───────────────────────────
  function jeton(){ try{ return localStorage.getItem('laboro_token'); }catch(e){ return null; } }
  function apiBase(){ return (typeof LABORO_API !== 'undefined') ? LABORO_API : 'https://' + API_HOTE; }

  // Appel API qui renvoie toujours le corps JSON (avec le message d'erreur du serveur si échec)
  async function appelAcces(chemin, methode, corps){
    let rep;
    try{
      rep = await fetch(apiBase() + chemin, {
        method: methode || 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + jeton() },
        body: corps ? JSON.stringify(corps) : undefined
      });
    }catch(e){
      return { ok:false, erreur:'Impossible de joindre le serveur LABORO.' };
    }
    const data = await rep.json().catch(() => null);
    if(!data) return { ok:false, erreur:'Réponse du serveur illisible (HTTP ' + rep.status + ').', status: rep.status };
    data.status = rep.status;
    return data;
  }

  function esc(s){
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  const ST_INPUT = 'padding:8px 10px;border:.5px solid var(--gb);border-radius:6px;font-size:13px;box-sizing:border-box';
  const ST_LABEL = 'font-size:11px;font-weight:700;color:var(--gm);margin-bottom:6px;text-transform:uppercase';

  function construirePanneau(){
    if(document.getElementById('panel-acces')) return;
    const contenu = document.querySelector('.content');
    const niGn = document.getElementById('ni-gn');
    if(!contenu || !niGn) return;

    const ni = document.createElement('div');
    ni.className = 'ni';
    ni.id = 'ni-acces';
    ni.style.display = 'none';
    ni.innerHTML = '<div class="nd" style="background:#5C3814"></div>Accès élèves';
    ni.onclick = function(){ goP('acces', this); };
    niGn.parentNode.insertBefore(ni, niGn.nextSibling);

    const p = document.createElement('div');
    p.id = 'panel-acces';
    p.className = 'panel';
    p.innerHTML =
      '<div class="card" style="margin-bottom:12px">'
      + '<div class="ct">Plages horaires d\'accès des élèves</div>'
      + '<div style="font-size:12px;color:var(--gm);margin-bottom:14px;line-height:1.5">En dehors de ces horaires, les élèves ne peuvent ni se connecter ni continuer une session en cours. '
      + 'Les comptes enseignants ne sont jamais bloqués.</div>'
      + '<label style="display:flex;align-items:center;gap:10px;font-size:13px;font-weight:700;color:var(--bf);margin-bottom:14px;cursor:pointer">'
      + '<input type="checkbox" id="acc-actif" style="width:18px;height:18px"/> Restriction horaire activée</label>'
      + '<div style="display:flex;gap:16px;flex-wrap:wrap;margin-bottom:12px">'
      + '<div><div style="' + ST_LABEL + '">Ouverture</div><input type="time" id="acc-debut" style="' + ST_INPUT + '"/></div>'
      + '<div><div style="' + ST_LABEL + '">Fermeture</div><input type="time" id="acc-fin" style="' + ST_INPUT + '"/></div>'
      + '</div>'
      + '<label style="display:flex;align-items:center;gap:10px;font-size:13px;color:var(--bf);margin-bottom:14px;cursor:pointer">'
      + '<input type="checkbox" id="acc-weekend" style="width:16px;height:16px"/> Bloquer aussi le week-end</label>'
      + '<button onclick="enregistrerAccesEleves()" style="padding:9px 20px;background:var(--bl);color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:700">Enregistrer</button>'
      + '<div id="acc-msg" style="font-size:12px;margin-top:8px;min-height:16px"></div>'
      + '</div>'
      + '<div class="card">'
      + '<div class="ct">Débloquer exceptionnellement</div>'
      + '<div style="font-size:12px;color:var(--gm);margin-bottom:12px">Ouvre l\'accès toute une journée, pour une classe entière ou pour un seul élève (devoir à finir, rattrapage…).</div>'
      + '<div style="display:flex;gap:10px;flex-wrap:wrap;align-items:flex-end;margin-bottom:10px">'
      + '<div><div style="' + ST_LABEL + '">Pour</div><select id="acc-ex-type" onchange="majCibleExceptionAcces()" style="' + ST_INPUT + '">'
      + '<option value="classe">Une classe</option><option value="eleve">Un élève</option></select></div>'
      + '<div style="flex:1;min-width:180px"><div style="' + ST_LABEL + '">Qui</div><select id="acc-ex-cible" style="width:100%;' + ST_INPUT + '"></select></div>'
      + '<div><div style="' + ST_LABEL + '">Date</div><input type="date" id="acc-ex-date" style="' + ST_INPUT + '"/></div>'
      + '<button onclick="ajouterExceptionAcces()" style="padding:9px 16px;background:var(--bl);color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:700">+ Débloquer</button>'
      + '</div>'
      + '<div id="acc-ex-msg" style="font-size:12px;min-height:16px;margin-bottom:8px"></div>'
      + '<div id="acc-ex-liste"></div>'
      + '</div>';
    contenu.appendChild(p);
  }

  let CIBLES = { classes: [], eleves: [] };

  function dateDuJour(){
    const d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
  }

  window.majCibleExceptionAcces = function(){
    const type = document.getElementById('acc-ex-type').value;
    const sel = document.getElementById('acc-ex-cible');
    const liste = type === 'classe' ? CIBLES.classes : CIBLES.eleves;
    sel.innerHTML = liste.length
      ? liste.map(x => '<option value="' + esc(x.id) + '">' + esc(x.libelle) + '</option>').join('')
      : '<option value="">(aucun)</option>';
  };

  function afficherMsg(id, txt, ok){
    const el = document.getElementById(id);
    if(el){ el.textContent = txt; el.style.color = ok ? '#2E7D5E' : '#C53030'; }
  }

  window.renderAccesEleves = async function(){
    construirePanneau();
    afficherMsg('acc-msg', 'Chargement…', true);
    const d = await appelAcces('/api/acces-eleves');
    if(!d.ok){ afficherMsg('acc-msg', '⚠️ ' + (d.message || d.erreur || 'Chargement impossible.'), false); return; }
    afficherMsg('acc-msg', '', true);

    const r = d.reglages || {};
    document.getElementById('acc-actif').checked = !!r.actif;
    document.getElementById('acc-debut').value = r.heure_debut || '08:00';
    document.getElementById('acc-fin').value = r.heure_fin || '18:00';
    document.getElementById('acc-weekend').checked = !!r.bloquer_weekend;

    CIBLES.classes = d.classes || [];
    CIBLES.eleves = d.eleves || [];
    majCibleExceptionAcces();
    const inpDate = document.getElementById('acc-ex-date');
    if(!inpDate.value) inpDate.value = dateDuJour();

    const ex = d.exceptions || [];
    document.getElementById('acc-ex-liste').innerHTML = ex.length
      ? ex.map(e =>
          '<div style="display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 10px;border:.5px solid var(--gb);border-radius:6px;margin-bottom:6px;font-size:12px">'
          + '<div><strong>' + esc(new Date(e.date + 'T12:00:00').toLocaleDateString('fr-FR',{weekday:'long',day:'numeric',month:'long'})) + '</strong> — '
          + (e.classe_id ? '🏫 ' : '👤 ') + esc(e.libelle || e.classe_id || e.eleve_id) + '</div>'
          + '<button onclick="retirerExceptionAcces(' + Number(e.id) + ')" style="padding:4px 10px;background:none;border:.5px solid var(--rg);border-radius:6px;cursor:pointer;font-size:11px;color:var(--rg);font-weight:600">Retirer</button>'
          + '</div>').join('')
      : '<div style="font-size:12px;color:var(--gm);font-style:italic">Aucun déblocage en cours.</div>';
  };

  window.enregistrerAccesEleves = async function(){
    const corps = {
      actif: document.getElementById('acc-actif').checked ? 1 : 0,
      heure_debut: document.getElementById('acc-debut').value,
      heure_fin: document.getElementById('acc-fin').value,
      bloquer_weekend: document.getElementById('acc-weekend').checked ? 1 : 0
    };
    if(!corps.heure_debut || !corps.heure_fin || corps.heure_debut >= corps.heure_fin){
      afficherMsg('acc-msg', "⚠️ L'heure de fermeture doit être après l'heure d'ouverture.", false); return;
    }
    const d = await appelAcces('/api/acces-eleves', 'PUT', corps);
    if(!d.ok){ afficherMsg('acc-msg', '⚠️ ' + (d.message || d.erreur || 'Enregistrement impossible.'), false); return; }
    afficherMsg('acc-msg', corps.actif
      ? '✅ Enregistré — accès élèves de ' + corps.heure_debut + ' à ' + corps.heure_fin + (corps.bloquer_weekend ? ', fermé le week-end.' : ', week-end compris.')
      : '✅ Enregistré — restriction désactivée, les élèves ont accès à toute heure.', true);
  };

  window.ajouterExceptionAcces = async function(){
    const type = document.getElementById('acc-ex-type').value;
    const cible = document.getElementById('acc-ex-cible').value;
    const date = document.getElementById('acc-ex-date').value;
    if(!cible || !date){ afficherMsg('acc-ex-msg', '⚠️ Choisis une classe ou un élève, et une date.', false); return; }
    const corps = { date: date };
    corps[type === 'classe' ? 'classe_id' : 'eleve_id'] = cible;
    const d = await appelAcces('/api/acces-eleves/exceptions', 'POST', corps);
    if(!d.ok){ afficherMsg('acc-ex-msg', '⚠️ ' + (d.message || d.erreur || 'Ajout impossible.'), false); return; }
    afficherMsg('acc-ex-msg', '✅ Déblocage ajouté.', true);
    renderAccesEleves();
  };

  window.retirerExceptionAcces = async function(id){
    if(!confirm('Retirer ce déblocage ?')) return;
    const d = await appelAcces('/api/acces-eleves/exceptions/' + id, 'DELETE');
    if(!d.ok){ afficherMsg('acc-ex-msg', '⚠️ ' + (d.message || d.erreur || 'Suppression impossible.'), false); return; }
    afficherMsg('acc-ex-msg', '✅ Déblocage retiré.', true);
    renderAccesEleves();
  };

  // Menu visible seulement si le serveur accepte la lecture des réglages
  // (c'est-à-dire si le compte connecté est administrateur) — aucune supposition côté front.
  async function verifierVisibiliteAdmin(){
    const ni = document.getElementById('ni-acces');
    if(!ni) return;
    ni.style.display = 'none';
    if(typeof CU === 'undefined' || !CU || CU.classe !== 'enseignant' || !jeton()) return;
    const d = await appelAcces('/api/acces-eleves');
    if(d.ok) ni.style.display = 'block';
  }

  // Branchement sur goP()/showApp() une fois tous les scripts chargés
  document.addEventListener('DOMContentLoaded', function(){
    construirePanneau();
    if(typeof window.goP === 'function'){
      const goPOriginal = window.goP;
      window.goP = function(id, el){
        goPOriginal(id, el);
        if(id === 'acces'){
          const t = document.getElementById('tb-t'); if(t) t.textContent = 'Accès élèves';
          renderAccesEleves();
        }
      };
    }
    if(typeof window.showApp === 'function'){
      const showAppOriginal = window.showApp;
      window.showApp = function(){
        showAppOriginal.apply(this, arguments);
        verifierVisibiliteAdmin();
      };
    }
  });
})();
