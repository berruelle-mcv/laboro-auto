// ================================================
//   LABORO Auto — Visuels du catalogue (données de l'univers)
//   Lu par le moteur commun (js/catalogue.js, js/teacher.js).
// ================================================

// Catégories : Vasseur utilise 2 catégories réelles (Neuf / Occasion), sans
// couleur dédiée — le moteur applique alors la couleur principale de l'univers.
const CATALOGUE_CFG = {};

// Une photo réelle par modèle (Wikimedia Commons, licences libres — crédit
// à afficher si le catalogue est un jour rendu public). Les deux finitions
// d'un même modèle partagent la même photo. Si une URL venait à casser un
// jour, le moteur bascule automatiquement sur le pictogramme ci-dessous.
const CATALOGUE_IMAGES = {
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

// Pictogramme stylisé d'un véhicule selon son segment (image de secours)
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
