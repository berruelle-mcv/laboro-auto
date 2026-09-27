// ================================================================
//   LABORO Auto — Réglages et contenus de l'univers (Groupe Vasseur)
//   Seul fichier (avec data/*.js, index.html et style.css) propre à cet
//   univers : le moteur commun (js/*.js) est identique pour tous les LABORO.
//   Chargé en tout premier dans index.html (avant le moteur).
// ================================================================
var LABORO_CONFIG = {
  "filiere": "mcv-auto",
  "version": "2.0.0",
  "nom_plateforme": "LABORO Auto",
  "slogan": "Votre espace professionnel immersif — Groupe Vasseur",
  "entreprise": {
    "nom": "Groupe Vasseur",
    "ville": "Évry-Courcouronnes",
    "departement": "91",
    "secteur": "Automobile — concession Renault + occasion multimarque",
    "description": "Vasseur Renault Évry (véhicules neufs) et Vasseur Sélection Occasion (occasion multimarque)",
    "nom_court": "Vasseur"
  },
  "personnages": {
    "responsable": {
      "prenom": "Isabelle",
      "nom": "Ferrand",
      "poste": "Responsable du pôle occasion",
      "avatar": "IF"
    },
    "tutrice": {
      "prenom": "Karim",
      "nom": "Yildiz",
      "poste": "Responsable des ventes VN",
      "avatar": "KY"
    },
    "chef_atelier": {
      "prenom": "Bruno",
      "nom": "Faucher",
      "poste": "Chef d'atelier",
      "avatar": "BF"
    },
    "dirigeant": {
      "prenom": "Michel",
      "nom": "Vasseur",
      "poste": "Fondateur et dirigeant du groupe",
      "avatar": "MV"
    },
    "createurs": [
      {
        "prenom": "Pascal",
        "nom": "Berruelle",
        "poste": "Formateur LABORO"
      },
      {
        "prenom": "Sandrine",
        "nom": "Berruelle",
        "poste": "Formatrice LABORO"
      }
    ]
  },
  "niveaux": [
    {
      "id": "1ere-PVOC",
      "label": "1ère PVOC",
      "couleur": "#7A4614",
      "ordre": 1
    }
  ],
  "options": [
    {
      "id": "PVOC",
      "label": "Prospection et Valorisation de l'Offre Commerciale"
    }
  ],
  "couleurs": {
    "primaire": "#2B2B2E",
    "secondaire": "#B5651D",
    "accent_1ere": "#7A4614"
  },
  "score": {
    "poids_missions": 60,
    "poids_competences": 20,
    "poids_reflexivite": 20,
    "paliers": [
      {
        "min": 0,
        "max": 24,
        "label": "Nouveau collaborateur",
        "emoji": "🌱"
      },
      {
        "min": 25,
        "max": 49,
        "label": "Chargé de prospection",
        "emoji": "📋"
      },
      {
        "min": 50,
        "max": 74,
        "label": "Commercial terrain",
        "emoji": "💼"
      },
      {
        "min": 75,
        "max": 89,
        "label": "Négociateur confirmé",
        "emoji": "🏆"
      },
      {
        "min": 90,
        "max": 100,
        "label": "Expert LABORO Auto",
        "emoji": "⭐"
      }
    ]
  },
  "fichiers_data": {
    "missions": "data/missions.js",
    "competences": "data/competences.js",
    "catalogue": "data/produits.js"
  },
  "api": "https://auto-api.laboro-edu.fr",
  "textes": {
    "lieu_vente": "Tu travailles chez Vasseur Renault Évry et Vasseur Sélection Occasion.",
    "argument_marque": "Véhicule du Groupe Vasseur — neuf Renault ou occasion multimarque",
    "exemple_secteur": "Artisan"
  },
  "actus": [
    {
      "date": "Lun",
      "icon": "📦",
      "titre": "Livraison Renault",
      "txt": "3 Twingo E-Tech et 2 Captur livrés au dépôt. Préparation avant mise en exposition prévue demain."
    },
    {
      "date": "Lun",
      "icon": "📞",
      "titre": "Prospect à rappeler",
      "txt": "M. Rasoamanana (artisan plombier) a demandé un devis pour un Kangoo Van. Karim Yildiz prend en charge."
    },
    {
      "date": "Mar",
      "icon": "🎯",
      "titre": "Objectif semaine",
      "txt": "Objectif : 45 000 € de CA cette semaine. À J+1 : 18 200 € réalisés. Bonne dynamique sur les hybrides."
    },
    {
      "date": "Mar",
      "icon": "⚠️",
      "titre": "Stock critique",
      "txt": "Renault 5 E-Tech Iconic : 1 unité restante en stock. Prochaine livraison prévue dans 5 jours."
    },
    {
      "date": "Mer",
      "icon": "🤝",
      "titre": "Visite client B2B",
      "txt": "Un responsable de flotte d'une PME locale visite la concession à 14h pour un renouvellement de 4 utilitaires. Préparer la salle et le catalogue B2B."
    },
    {
      "date": "Mer",
      "icon": "📊",
      "titre": "Bilan mi-semaine",
      "txt": "3 réclamations traitées, taux de satisfaction 92%. Bravo à tous !"
    },
    {
      "date": "Jeu",
      "icon": "🚀",
      "titre": "Nouveau modèle",
      "txt": "Arrivée de la nouvelle Renault 4 E-Tech en concession. Mise en avant prévue en vitrine dès cette semaine."
    },
    {
      "date": "Jeu",
      "icon": "📱",
      "titre": "Avis Google",
      "txt": "3 nouveaux avis cette semaine : 2 × 5 étoiles, 1 × 3 étoiles. Isabelle Ferrand gère les réponses."
    },
    {
      "date": "Ven",
      "icon": "🏆",
      "titre": "Résultats semaine",
      "txt": "CA semaine : 52 000 € — objectif dépassé ! Top vendeur : Karim Yildiz avec 3 véhicules vendus."
    },
    {
      "date": "Ven",
      "icon": "📅",
      "titre": "Planning semaine prochaine",
      "txt": "Réunion équipe lundi 9h. Formation nouveaux modèles hybrides mercredi. Inventaire atelier vendredi après-midi."
    },
    {
      "date": "Sam",
      "icon": "🎉",
      "titre": "Portes ouvertes",
      "txt": "La journée portes ouvertes du mois dernier a généré 3 ventes fermes. 22 visiteurs, 8 essais réalisés."
    },
    {
      "date": "Sam",
      "icon": "💡",
      "titre": "Idée du moment",
      "txt": "Isabelle Ferrand propose une offre de reprise majorée pour les véhicules diesel avant la fin du mois. Réflexion en cours."
    }
  ],
  "agenda": [
    "Inventaire annuel de la concession cette semaine.",
    "Salon automobile régional — Vasseur y participe.",
    "Opération Printemps — reprise majorée sur les citadines.",
    "Semaine de l'éco-mobilité — Vasseur partenaire.",
    "Nouvelle gamme électrique disponible à l'essai.",
    "Forum des entreprises de l'Essonne — stand Vasseur.",
    "Bilan semestriel Vasseur — résultats communiqués.",
    "Offres de rentrée — promotions flottes en cours.",
    "Rentrée — Vasseur accompagne les artisans locaux.",
    "Mondial de l'Automobile Paris — octobre.",
    "Black Friday Vasseur — reprises exceptionnelles.",
    "Offres flottes entreprise — devis ouverts."
  ],
  "note_organigramme": "👋 Tes formateurs LABORO : Pascal &amp; Sandrine Berruelle — en dehors de l'univers Vasseur, ce sont eux qui pilotent la plateforme.",
  "postes": {
    "PVOC": {
      "titre": "Commercial terrain — Prospection & Vente B2B",
      "dept": "Ventes VN & prospection",
      "manager": {
        "nom": "Karim Yildiz",
        "role": "Responsable des ventes VN",
        "couleur": "#B5651D",
        "initiales": "KY"
      },
      "pdg": {
        "nom": "Michel Vasseur",
        "role": "Fondateur et dirigeant du groupe",
        "couleur": "#2B2B2E",
        "initiales": "MV"
      },
      "autre_dir": {
        "nom": "Isabelle Ferrand",
        "role": "Responsable du pôle occasion",
        "couleur": "#6B4FA0",
        "initiales": "IF"
      },
      "autre_dir2": {
        "nom": "Bruno Faucher",
        "role": "Chef d'atelier",
        "couleur": "#4B5563",
        "initiales": "BF"
      },
      "pairs": [],
      "mission": "Développer le portefeuille clients du Groupe Vasseur — particuliers et professionnels — de la prospection jusqu'à la fidélisation, en valorisant l'offre face à la concurrence.",
      "missions_principales": [
        "Rechercher et qualifier des prospects (particuliers et professionnels — flottes utilitaires)",
        "Concevoir et mettre en œuvre des actions de prospection (mail, téléphone, salon, réseaux sociaux)",
        "Conseiller et vendre les véhicules neufs et d'occasion du Groupe Vasseur",
        "Assurer le suivi des commandes, devis et services associés",
        "Fidéliser la clientèle et traiter les réclamations"
      ],
      "competences_cles": [
        "Bloc 4 (B4.1 à B4.5) — Prospecter et valoriser l'offre commerciale",
        "Bloc 1 (C1.1 à C1.3) — Conseiller et vendre",
        "Bloc 2 (C2.1 à C2.4) — Suivre les ventes",
        "Bloc 3 (C3.1 à C3.3) — Fidéliser la relation client"
      ],
      "qualites": [
        "Sens du contact",
        "Rigueur",
        "Organisation",
        "Autonomie",
        "Esprit d'équipe"
      ],
      "conditions": "Vasseur Renault Évry (neuf) & Vasseur Sélection Occasion · Évry-Courcouronnes (91) · Rattaché(e) à Karim Yildiz, Responsable des ventes VN"
    }
  },
  "avis_clients": [
    {
      "nom": "Sophie D.",
      "note": 5,
      "texte": "Très bon accueil, Karim a su me conseiller sans pression. Livraison de mon Captur dans les temps."
    },
    {
      "nom": "Julien M.",
      "note": 5,
      "texte": "Premier achat électrique, j'avais plein de questions. Réponses claires, je recommande."
    },
    {
      "nom": "Thomas P.",
      "note": 4,
      "texte": "Bonne expérience sur l'occasion, juste un peu d'attente pour le rendez-vous."
    },
    {
      "nom": "M. Rasoamanana",
      "note": 5,
      "texte": "Suivi impeccable pour le renouvellement de mon utilitaire, Isabelle a été très réactive."
    },
    {
      "nom": "Laura G.",
      "note": 3,
      "texte": "L'essai s'est bien passé mais je n'ai pas eu de nouvelles après, un peu déçue."
    },
    {
      "nom": "Élise L.",
      "note": 5,
      "texte": "Très satisfaite de mon nouveau véhicule et du suivi après-vente avec Bruno."
    }
  ],
  "demo": {
    "eleve": {
      "mail": "demo@laboro-demo.fr",
      "nom": "Léa Martin",
      "classe": "1ere-PVOC",
      "poste": "Commercial terrain — Prospection & Vente B2B",
      "missions": {
        "C11a-P1": {
          "status": "done",
          "score": 14,
          "comp": "C1.1",
          "progression": 0,
          "date_validation": "2025-09-22T10:00:00.000Z"
        },
        "C12a-P1": {
          "status": "done",
          "score": 15,
          "comp": "C1.2",
          "progression": 0,
          "date_validation": "2025-10-01T10:00:00.000Z"
        },
        "B41a-P1": {
          "status": "done",
          "score": 13,
          "comp": "B4.1",
          "progression": 0,
          "date_validation": "2025-10-10T10:00:00.000Z"
        },
        "C21a-P1": {
          "status": "done",
          "score": 16,
          "comp": "C2.1",
          "progression": 0,
          "date_validation": "2025-10-20T10:00:00.000Z"
        },
        "B42a-P1": {
          "status": "done",
          "score": 14,
          "comp": "B4.2",
          "progression": 0,
          "date_validation": "2025-10-28T10:00:00.000Z"
        },
        "C13a-P1": {
          "status": "done",
          "score": 12,
          "comp": "C1.3",
          "progression": 0,
          "date_validation": "2025-11-06T10:00:00.000Z"
        },
        "C23a-P1": {
          "status": "done",
          "score": 15,
          "comp": "C2.3",
          "progression": 0,
          "date_validation": "2025-11-17T10:00:00.000Z"
        },
        "B43a-P1": {
          "status": "done",
          "score": 16,
          "comp": "B4.3",
          "progression": 0,
          "date_validation": "2025-11-24T10:00:00.000Z"
        },
        "C31a-P1": {
          "status": "done",
          "score": 14,
          "comp": "C3.1",
          "progression": 0,
          "date_validation": "2025-12-03T10:00:00.000Z"
        },
        "C22a-P1": {
          "status": "done",
          "score": 13,
          "comp": "C2.2",
          "progression": 0,
          "date_validation": "2025-12-12T10:00:00.000Z"
        },
        "C24a-P1": {
          "status": "done",
          "score": 15,
          "comp": "C2.4",
          "progression": 0,
          "date_validation": "2025-12-22T10:00:00.000Z"
        },
        "C32a-P1": {
          "status": "done",
          "score": 17,
          "comp": "C3.2",
          "progression": 0,
          "date_validation": "2025-12-30T10:00:00.000Z"
        },
        "B44a-P1": {
          "status": "done",
          "score": 13,
          "comp": "B4.4",
          "progression": 0,
          "date_validation": "2026-01-08T10:00:00.000Z"
        },
        "C33a-P1": {
          "status": "done",
          "score": 14,
          "comp": "C3.3",
          "progression": 0,
          "date_validation": "2026-01-19T10:00:00.000Z"
        },
        "B45a-P1": {
          "status": "done",
          "score": 16,
          "comp": "B4.5",
          "progression": 0,
          "date_validation": "2026-01-26T10:00:00.000Z"
        },
        "B41a-P2": {
          "status": "done",
          "score": 15,
          "comp": "B4.1",
          "progression": 0,
          "date_validation": "2026-01-12T10:00:00.000Z"
        },
        "C12a-P2": {
          "status": "done",
          "score": 14,
          "comp": "C1.2",
          "progression": 0,
          "date_validation": "2026-01-21T10:00:00.000Z"
        },
        "B43a-P2": {
          "status": "done",
          "score": 16,
          "comp": "B4.3",
          "progression": 0,
          "date_validation": "2026-01-30T10:00:00.000Z"
        },
        "C23a-P2": {
          "status": "done",
          "score": 13,
          "comp": "C2.3",
          "progression": 0,
          "date_validation": "2026-02-09T10:00:00.000Z"
        },
        "C32a-P2": {
          "status": "done",
          "score": 15,
          "comp": "C3.2",
          "progression": 0,
          "date_validation": "2026-02-17T10:00:00.000Z"
        },
        "B45a-P2": {
          "status": "att",
          "score": 0,
          "comp": "B4.5",
          "progression": 0
        }
      },
      "competences": {
        "C1.1": 1,
        "C1.2": 2,
        "B4.1": 2,
        "C2.1": 1,
        "B4.2": 1,
        "C1.3": 1,
        "C2.3": 2,
        "B4.3": 2,
        "C3.1": 1,
        "C2.2": 1,
        "C2.4": 1,
        "C3.2": 2,
        "B4.4": 1,
        "C3.3": 1,
        "B4.5": 1
      }
    },
    "camarades": [
      {
        "mail": "camille.demo@laboro-demo.fr",
        "nom": "Camille Bernard",
        "classe": "1ere-PVOC",
        "missions": {
          "C11a-P1": {
            "status": "done",
            "score": 15,
            "comp": "C1.1",
            "progression": 0,
            "date_validation": "2025-09-22T10:00:00.000Z"
          },
          "C12a-P1": {
            "status": "done",
            "score": 16,
            "comp": "C1.2",
            "progression": 0,
            "date_validation": "2025-10-01T10:00:00.000Z"
          },
          "B41a-P1": {
            "status": "done",
            "score": 14,
            "comp": "B4.1",
            "progression": 0,
            "date_validation": "2025-10-10T10:00:00.000Z"
          },
          "C21a-P1": {
            "status": "done",
            "score": 17,
            "comp": "C2.1",
            "progression": 0,
            "date_validation": "2025-10-20T10:00:00.000Z"
          },
          "B42a-P1": {
            "status": "done",
            "score": 15,
            "comp": "B4.2",
            "progression": 0,
            "date_validation": "2025-10-28T10:00:00.000Z"
          },
          "C13a-P1": {
            "status": "done",
            "score": 13,
            "comp": "C1.3",
            "progression": 0,
            "date_validation": "2025-11-06T10:00:00.000Z"
          },
          "C23a-P1": {
            "status": "done",
            "score": 16,
            "comp": "C2.3",
            "progression": 0,
            "date_validation": "2025-11-17T10:00:00.000Z"
          },
          "B43a-P1": {
            "status": "done",
            "score": 17,
            "comp": "B4.3",
            "progression": 0,
            "date_validation": "2025-11-24T10:00:00.000Z"
          },
          "C31a-P1": {
            "status": "done",
            "score": 15,
            "comp": "C3.1",
            "progression": 0,
            "date_validation": "2025-12-03T10:00:00.000Z"
          },
          "C22a-P1": {
            "status": "done",
            "score": 14,
            "comp": "C2.2",
            "progression": 0,
            "date_validation": "2025-12-12T10:00:00.000Z"
          }
        }
      },
      {
        "mail": "hugo.demo@laboro-demo.fr",
        "nom": "Hugo Lefèvre",
        "classe": "1ere-PVOC",
        "missions": {
          "C11a-P1": {
            "status": "done",
            "score": 12,
            "comp": "C1.1",
            "progression": 0,
            "date_validation": "2025-09-22T10:00:00.000Z"
          },
          "C12a-P1": {
            "status": "done",
            "score": 13,
            "comp": "C1.2",
            "progression": 0,
            "date_validation": "2025-10-01T10:00:00.000Z"
          },
          "B41a-P1": {
            "status": "done",
            "score": 11,
            "comp": "B4.1",
            "progression": 0,
            "date_validation": "2025-10-10T10:00:00.000Z"
          },
          "C21a-P1": {
            "status": "done",
            "score": 14,
            "comp": "C2.1",
            "progression": 0,
            "date_validation": "2025-10-20T10:00:00.000Z"
          },
          "B42a-P1": {
            "status": "done",
            "score": 12,
            "comp": "B4.2",
            "progression": 0,
            "date_validation": "2025-10-28T10:00:00.000Z"
          },
          "C13a-P1": {
            "status": "done",
            "score": 10,
            "comp": "C1.3",
            "progression": 0,
            "date_validation": "2025-11-06T10:00:00.000Z"
          }
        }
      }
    ]
  }
};
