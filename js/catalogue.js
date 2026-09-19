// ================================================
//   LABORO Auto — Catalogue véhicules
//   Rendu catalogue LABORO, véhicules, navigation
// ================================================

// ═══ CONFIGURATION CATÉGORIES ═══
// Vasseur utilise 2 catégories réelles (Neuf / Occasion), pas de mapping
// couleur dédié nécessaire : le fallback ci-dessous (terracotta Vasseur)
// s'applique systématiquement.
const CAT_CFG = {};

// ═══ IMAGES PAR VÉHICULE ═══
// Une photo réelle par modèle (Wikimedia Commons, licences libres — crédit
// à afficher si le catalogue est un jour rendu public). Les deux finitions
// d'un même modèle partagent la même photo. Si une URL venait à casser un
// jour (fichier renommé/retiré sur Commons), le onerror de renderProdCard()
// bascule automatiquement sur le pictogramme stylisé (carPlaceholder()).
const PROD_IMAGES = {
  'VAS-VN-001': 'https://commons.wikimedia.org/wiki/Special:FilePath/Renault_Twingo_E-Tech_IMG_4935.jpg',
  'VAS-VN-002': 'https://commons.wikimedia.org/wiki/Special:FilePath/Renault_Twingo_E-Tech_IMG_4935.jpg',
  'VAS-VN-003': 'https://commons.wikimedia.org/wiki/Special:FilePath/2024_Renault_Clio_1.6_E-Tech_espirit_Alpine_at_Renault_Manchester_01.jpg',
  'VAS-VN-004': 'https://commons.wikimedia.org/wiki/Special:FilePath/2024_Renault_Clio_1.6_E-Tech_espirit_Alpine_at_Renault_Manchester_01.jpg',
  'VAS-VN-005': 'https://commons.wikimedia.org/wiki/Special:FilePath/2024_Renault_Captur_II_IMG_9306.jpg',
  'VAS-VN-006': 'https://commons.wikimedia.org/wiki/Special:FilePath/2024_Renault_Captur_II_IMG_9306.jpg',
  'VAS-VN-007': 'https://commons.wikimedia.org/wiki/Special:FilePath/Renault_Symbioz_IMG_0648.jpg',
  'VAS-VN-008': 'https://commons.wikimedia.org/wiki/Special:FilePath/Renault_Symbioz_IMG_0648.jpg',
  'VAS-VN-009': 'https://commons.wikimedia.org/wiki/Special:FilePath/Renault_Austral_1X7A6755.jpg',
  'VAS-VN-010': 'https://commons.wikimedia.org/wiki/Special:FilePath/Renault_Austral_1X7A6755.jpg',
  'VAS-VN-011': 'https://commons.wikimedia.org/wiki/Special:FilePath/Renault_Rafale_IAA_2023_1X7A0389.jpg',
  'VAS-VN-012': 'https://commons.wikimedia.org/wiki/Special:FilePath/Renault_Rafale_IAA_2023_1X7A0389.jpg',
  'VAS-VN-013': 'https://commons.wikimedia.org/wiki/Special:FilePath/Renault_Espace_VI_IMG_9423.jpg',
  'VAS-VN-014': 'https://commons.wikimedia.org/wiki/Special:FilePath/Renault_Espace_VI_IMG_9423.jpg',
  'VAS-VN-015': 'https://commons.wikimedia.org/wiki/Special:FilePath/Renault_Megane_E-Tech_1X7A6016.jpg',
  'VAS-VN-016': 'https://commons.wikimedia.org/wiki/Special:FilePath/Renault_Megane_E-Tech_1X7A6016.jpg',
  'VAS-VN-017': 'https://commons.wikimedia.org/wiki/Special:FilePath/Renault_Sc%C3%A9nic_E-Tech_IMG_9792.jpg',
  'VAS-VN-018': 'https://commons.wikimedia.org/wiki/Special:FilePath/Renault_Sc%C3%A9nic_E-Tech_IMG_9792.jpg',
  'VAS-VN-019': 'https://commons.wikimedia.org/wiki/Special:FilePath/Renault_5_E-Tech_Electric_DSC_7279.jpg',
  'VAS-VN-020': 'https://commons.wikimedia.org/wiki/Special:FilePath/Renault_5_E-Tech_Electric_DSC_7279.jpg',
  'VAS-VN-021': 'https://commons.wikimedia.org/wiki/Special:FilePath/Renault_4_E-Tech_Electric_-_04.jpg',
  'VAS-VN-022': 'https://commons.wikimedia.org/wiki/Special:FilePath/Renault_4_E-Tech_Electric_-_04.jpg',
  'VAS-VN-023': 'https://commons.wikimedia.org/wiki/Special:FilePath/Renault_Kangoo_III_Express_IMG_4220.jpg',
  'VAS-VN-024': 'https://commons.wikimedia.org/wiki/Special:FilePath/Renault_Kangoo_III_Express_IMG_4220.jpg',
  'VAS-VN-025': 'https://commons.wikimedia.org/wiki/Special:FilePath/Renault_Trafic_III_(2017).jpg',
  'VAS-VN-026': 'https://commons.wikimedia.org/wiki/Special:FilePath/Renault_Trafic_III_(2017).jpg',
  'VAS-VN-027': 'https://commons.wikimedia.org/wiki/Special:FilePath/2017_Renault_Master_(X62)_SWB_van_(2018-11-22)_01.jpg',
  'VAS-VN-028': 'https://commons.wikimedia.org/wiki/Special:FilePath/2017_Renault_Master_(X62)_SWB_van_(2018-11-22)_01.jpg',
  'VAS-VO-001': 'https://commons.wikimedia.org/wiki/Special:FilePath/2021_Dacia_Sandero_Comfort_TCe.jpg',
  'VAS-VO-002': 'https://commons.wikimedia.org/wiki/Special:FilePath/Citro%C3%ABn_C3_front.jpg',
  'VAS-VO-003': 'https://commons.wikimedia.org/wiki/Special:FilePath/2020-2024_Toyota_Yaris_Hybrid.jpg',
  'VAS-VO-004': 'https://commons.wikimedia.org/wiki/Special:FilePath/2021_-_Peugeot_308_III_(C)_-_42.jpg',
  'VAS-VO-005': 'https://commons.wikimedia.org/wiki/Special:FilePath/2020_Volkswagen_Golf_Style_1.5_Front.jpg',
  'VAS-VO-006': 'https://commons.wikimedia.org/wiki/Special:FilePath/Renault_Megane_III_5door.JPG',
  'VAS-VO-007': 'https://commons.wikimedia.org/wiki/Special:FilePath/2018_Ford_Focus_ST-Line_Front.jpg',
  'VAS-VO-008': 'https://commons.wikimedia.org/wiki/Special:FilePath/Peugeot_3008_GT_Line_2019_(31435152017).jpg',
  'VAS-VO-009': 'https://commons.wikimedia.org/wiki/Special:FilePath/Nissan_Qashqai_2017.jpg',
  'VAS-VO-010': 'https://commons.wikimedia.org/wiki/Special:FilePath/2018_Volkswagen_Tiguan_R-Line_TSi_BlueMotion_4Motion_2.0_Front.jpg',
  'VAS-VO-011': 'https://commons.wikimedia.org/wiki/Special:FilePath/2021_Hyundai_Tucson_Ultimate_T-GDi_MHEV_1.6.jpg',
  'VAS-VO-012': 'https://commons.wikimedia.org/wiki/Special:FilePath/2020_Audi_A3_Sport_30_TFSi_Saloon_1.0.jpg',
  'VAS-VO-013': 'https://commons.wikimedia.org/wiki/Special:FilePath/2019_BMW_116d_SE_Business_1.5_Front.jpg',
  'VAS-VO-014': 'https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-Benz_A-class_sedan_(Z177)_002.jpg',
  'VAS-VO-015': 'https://commons.wikimedia.org/wiki/Special:FilePath/2019_Audi_Q3_S_Line_45_TFSi_Quattro_2.0_Front.jpg',
  'VAS-VO-016': 'https://commons.wikimedia.org/wiki/Special:FilePath/2021_Toyota_Corolla_SE_Hatchback.jpg',
  'VAS-VO-017': 'https://commons.wikimedia.org/wiki/Special:FilePath/2020_Renault_Zoe_Intens_R135_Z.E._50.jpg',
  'VAS-VO-018': 'https://commons.wikimedia.org/wiki/Special:FilePath/2012_Peugeot_Partner_1.6_HDI_panel_van.JPG',
};

// ═══ CATALOGUE ═══
function renderCatalogue(catFiltre){
  const cats=[...new Set(PRODUITS.map(p=>p.cat))];
  const tabsHtml='<div class="cat-tabs">'
    +'<div class="cat-tab '+((!catFiltre)?'on':'')+'" onclick="renderCatalogue(\'\')">Tous <span class="cat-count">'+PRODUITS.length+'</span></div>'
    +cats.map(function(c){
      const count=PRODUITS.filter(function(p){return p.cat===c;}).length;
      const cc=CAT_CFG[c]||{col:'#B5651D'};
      const isActive=catFiltre===c;
      return '<div class="cat-tab '+(isActive?'on':'')+'" onclick="renderCatalogue(\''+c+'\')" style="'+(isActive?'border-bottom:3px solid '+cc.col+';color:'+cc.col:'')+'">'+c+' <span class="cat-count">'+count+'</span></div>';
    }).join('')+'</div>';

  let gridHtml='';
  const makeBanner=function(cat,filtered){
    const cc=CAT_CFG[cat]||{col:'#B5651D'};
    return '<div style="background:#F5E6D8;border:1px solid #E8CBA8;border-radius:14px;padding:14px 18px;margin-bottom:14px;display:flex;align-items:center;gap:16px">'
      +'<div style="width:10px;height:10px;border-radius:50%;background:'+cc.col+';flex-shrink:0"></div>'
      +'<div><div style="font-size:15px;font-weight:900;color:#2B2B2E">'+cat+'</div>'
      +'<div style="font-size:11px;color:#6B7280;margin-top:2px">'+PRODUITS.filter(function(p){return p.cat===cat;})[0]&&''+'</div></div>'
      +'<div style="margin-left:auto;font-size:11px;font-weight:700;color:#B5651D;background:#F5E6D8;padding:4px 12px;border-radius:20px">'+filtered.length+' produits</div>'
      +'</div>';
  };

  if(!catFiltre){
    cats.forEach(function(cat){
      const ps=PRODUITS.filter(function(p){return p.cat===cat;});
      gridHtml+='<div class="cat-section">'+makeBanner(cat,ps)+'<div class="pg">'+ps.map(function(p){return renderProdCard(p);}).join('')+'</div></div>';
    });
  } else {
    const filtered=PRODUITS.filter(function(p){return p.cat===catFiltre;});
    gridHtml=makeBanner(catFiltre,filtered)+'<div class="pg">'+filtered.map(function(p){return renderProdCard(p);}).join('')+'</div>';
  }
  document.getElementById('cat-list').innerHTML=tabsHtml+gridHtml;
  document.getElementById('fiche-produit').classList.remove('on');
}

// ═══ CARD PRODUIT ═══
function carPlaceholder(segment){
  const shapes = {
    'Citadine': '<path d="M18 38 L24 24 Q26 20 32 20 L58 20 Q64 20 66 24 L72 38 L78 38 Q82 38 82 42 L82 46 L18 46 L18 42 Q18 38 22 38 Z" fill="#B5651D"/><circle cx="30" cy="46" r="7" fill="#2B2B2E"/><circle cx="68" cy="46" r="7" fill="#2B2B2E"/>',
    'SUV': '<path d="M14 40 L20 22 Q22 16 30 16 L64 16 Q72 16 74 22 L80 40 L84 40 Q88 40 88 44 L88 48 L12 48 L12 44 Q12 40 16 40 Z" fill="#B5651D"/><circle cx="27" cy="48" r="8" fill="#2B2B2E"/><circle cx="71" cy="48" r="8" fill="#2B2B2E"/>',
    'Familiale': '<path d="M14 40 L20 22 Q22 16 30 16 L64 16 Q72 16 74 22 L80 40 L84 40 Q88 40 88 44 L88 48 L12 48 L12 44 Q12 40 16 40 Z" fill="#B5651D"/><circle cx="27" cy="48" r="8" fill="#2B2B2E"/><circle cx="71" cy="48" r="8" fill="#2B2B2E"/>',
    'Utilitaire': '<path d="M12 44 L12 24 Q12 18 20 18 L64 18 L74 30 L82 30 Q86 30 86 36 L86 44 L12 44 Z" fill="#B5651D"/><circle cx="26" cy="46" r="7" fill="#2B2B2E"/><circle cx="72" cy="46" r="7" fill="#2B2B2E"/>',
    'Premium': '<path d="M16 39 L23 21 Q25 15 33 15 L61 15 Q69 15 71 21 L78 39 L82 39 Q86 39 86 43 L86 47 L14 47 L14 43 Q14 39 18 39 Z" fill="#B5651D"/><circle cx="28" cy="47" r="8" fill="#2B2B2E"/><circle cx="70" cy="47" r="8" fill="#2B2B2E"/>',
    'Compacte': '<path d="M18 38 L24 24 Q26 20 32 20 L58 20 Q64 20 66 24 L72 38 L78 38 Q82 38 82 42 L82 46 L18 46 L18 42 Q18 38 22 38 Z" fill="#B5651D"/><circle cx="30" cy="46" r="7" fill="#2B2B2E"/><circle cx="68" cy="46" r="7" fill="#2B2B2E"/>'
  };
  const shape = shapes[segment] || shapes['Citadine'];
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60" width="100" height="60">'
    + '<rect width="100" height="60" fill="#F5E6D8"/>' + shape + '</svg>';
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

function renderProdCard(p){
  const c = CAT_CFG[p.cat]||{col:'#B5651D', light:'#F5E6D8'};
  const img = PROD_IMAGES[p.id] || carPlaceholder(p.segment);

  const stockBadge = p.stock===0
    ? '<span style="display:inline-block;font-size:9px;font-weight:700;color:#6B7280;background:#F3F4F6;padding:3px 8px;border-radius:6px;margin-top:6px">Sur commande</span>'
    : p.stock<=p.seuil
    ? '<span style="display:inline-block;font-size:9px;font-weight:700;color:#B45309;background:#FEF3C7;padding:3px 8px;border-radius:6px;margin-top:6px">⚠ Stock faible</span>'
    : '<span style="display:inline-block;font-size:9px;font-weight:700;color:#B5651D;background:#F5E6D8;padding:3px 8px;border-radius:6px;margin-top:6px">✓ En stock</span>';

  return '<div class="pc" onclick="openProduit(\''+p.id+'\')">'
    + '<div style="position:relative;height:120px;overflow:hidden;background:#F8FAFC;border-radius:10px 10px 0 0">'
    + '<img src="'+img+'" alt="'+p.nom+'" loading="lazy" style="width:100%;height:100%;object-fit:contain;padding:8px;transition:transform .3s" '
    + 'onerror="this.style.display=\'none\';this.nextSibling.style.display=\'flex\'">'
    + '<div style="display:none;width:100%;height:100%;align-items:center;justify-content:center;font-size:32px;background:#F1F5F9;color:#94A3B8">LABORO</div>'
    + '<div style="position:absolute;bottom:8px;left:8px;background:rgba(255,255,255,.92);backdrop-filter:blur(4px);border:1px solid rgba(0,0,0,.08);color:#374151;font-size:9px;font-weight:800;padding:3px 9px;border-radius:20px;letter-spacing:.4px">'+p.marque+'</div>'
    + '</div>'
    + '<div style="padding:12px 14px 14px">'
    + '<div style="font-size:13px;font-weight:800;color:#2B2B2E;line-height:1.35;margin-bottom:3px">'+p.nom+'</div>'
    + '<div style="font-size:10px;color:#94A3B8;margin-bottom:10px">Réf. '+p.ref+'</div>'
    + '<div style="display:flex;align-items:center;justify-content:space-between">'
    + '<div style="font-size:18px;font-weight:900;color:'+c.col+';letter-spacing:-.5px">'+p.pv+' €</div>'
    + '<div style="font-size:10px;color:'+c.col+';font-weight:700;background:'+c.light+';padding:3px 8px;border-radius:8px">+'+p.mar+'%</div>'
    + '</div>'
    + stockBadge
    + '</div></div>';
}

// ═══ RAPPELS ═══
function selectRappel(id){
  RAPPELS_TYPES.forEach(function(r){
    const el = document.getElementById('rc-'+r.id);
    const check = document.getElementById('rc-check-'+r.id);
    if(el) el.style.borderColor = '#E5E7EB';
    if(check) check.style.display = 'none';
  });
  const el = document.getElementById('rc-'+id);
  const check = document.getElementById('rc-check-'+id);
  if(el){ el.style.borderColor='#7A4614'; el.style.background='#F5E6D8'; }
  if(check) check.style.display = 'block';
  selectedRappelId = id;
  const cw = document.getElementById('rappel-custom-wrap');
  if(cw) cw.style.display = (id==='libre') ? 'block' : 'none';
}

function showNotifEleve(message, type){
  type = type || 'info';
  let notif = document.getElementById('laboro-notif');
  if(!notif){
    notif = document.createElement('div');
    notif.id = 'laboro-notif';
    document.body.appendChild(notif);
  }
  const icons = {info:'📋', success:'✅', warning:'⚠️', rappel:'🔔'};
  const bgs = {info:'#2B2B2E', success:'#2B2B2E', warning:'#7B3F00', rappel:'#2B2B2E'};
  const borders = {info:'#B5651D', success:'#D98A4A', warning:'#D97706', rappel:'#B5651D'};
  const ic = icons[type]||'📋';
  const bg = bgs[type]||'#2B2B2E';
  const bd = borders[type]||'#B5651D';
  const closeBtn = document.createElement('button');
  closeBtn.textContent = '✕';
  closeBtn.style.cssText = 'background:none;border:none;color:rgba(255,255,255,.5);font-size:18px;cursor:pointer;flex-shrink:0;padding:0;margin-left:8px';
  closeBtn.onclick = function(){ notif.style.display='none'; };
  notif.innerHTML = '';
  const wrap = document.createElement('div');
  wrap.style.cssText = 'display:flex;align-items:flex-start;gap:12px';
  wrap.innerHTML = '<div style="font-size:22px;flex-shrink:0">'+ic+'</div>'
    +'<div><div style="font-size:11px;font-weight:700;color:rgba(255,255,255,.6);margin-bottom:4px">MESSAGE LABORO</div>'
    +'<div style="font-size:13px;color:#fff;line-height:1.5">'+message+'</div></div>';
  wrap.appendChild(closeBtn);
  notif.appendChild(wrap);
  notif.style.cssText = 'position:fixed;bottom:24px;right:24px;max-width:380px;background:'+bg+';border:1px solid '+bd+';border-radius:14px;padding:16px 18px;z-index:9998;box-shadow:0 8px 32px rgba(0,0,0,.3);display:block';
  setTimeout(function(){ if(notif) notif.style.display='none'; }, 8000);
}

const RAPPELS_TYPES = [
  {id:'tenue', label:'Tenue vestimentaire', icon:'👔',
   msg:'Rappel professionnel : la tenue vestimentaire chez Vasseur doit etre soignee et adaptee au poste. Merci de vous y conformer.'},
  {id:'telephone', label:'Telephone portable', icon:'📱',
   msg:'Votre responsable vous demande de ranger votre telephone personnel. Pendant les heures de travail, seul LABORO Connect est autorise.'},
  {id:'materiel', label:'Materiel de travail', icon:'🖊️',
   msg:'Un collaborateur Vasseur arrive toujours equipe : stylo, carnet, materiel necessaire. Pensez-y pour votre prochaine session.'},
  {id:'posture', label:'Posture et attitude', icon:'💺',
   msg:"Rappel : la posture physique fait partie de l'image professionnelle chez Vasseur. Tenez-vous droit et restez concentre(e)."},
  {id:'concentration', label:'Concentration', icon:'🎯',
   msg:'Votre responsable note un manque de concentration. Chez Vasseur, chaque mission compte. Reprenez votre travail avec serieux.'},
  {id:'ponctualite', label:'Ponctualite', icon:'⏰',
   msg:"La ponctualite est une valeur fondamentale chez Vasseur. Merci d'etre a l'heure et de respecter les delais."},
  {id:'respect', label:"Respect et esprit d'equipe", icon:'🤝',
   msg:"Rappel : le respect mutuel est au coeur des valeurs Vasseur. Adoptez un comportement professionnel en toutes circonstances."},
  {id:'libre', label:'Message personnalise...', icon:'✏️', msg:''}
];

let selectedRappelId = null;
