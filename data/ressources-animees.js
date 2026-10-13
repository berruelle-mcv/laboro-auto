// ================================================
//   LABORO Auto — Blocs de méthode des ressources (Groupe Vasseur)
//   Affichés par js/moteur-animations.js en tête de l'onglet
//   « Apprendre d'abord », au-dessus de la fiche (qui reste inchangée).
//
//   Clé : "<compétence>-<palier>" (même clé que RES dans data/competences.js).
//   Comme la fiche, ces blocs appartiennent à la COMPÉTENCE : ils montrent
//   la méthode (étapes, tri, chaîne, calcul, cartes) et ne contiennent
//   AUCUNE saynète. La scène propre à chaque mission est dans
//   data/saynetes-missions.js (règle du 13/10/2026).
//   Palier 1 couvert pour les 15 compétences.
//
//   Exemples : uniquement l'univers Vasseur (équipe, clients, catalogue),
//   jamais la situation d'une mission. Pas de réflexivité (palier 1).
// ================================================

// Réglages propres à l'univers, lus par le moteur commun
const ANIM_UNIVERS = {
  logo: "VASSEUR",
  enseigne: { nom: "VASSEUR", sous: "RENAULT ÉVRY · SÉLECTION OCCASION", lieu: "VASSEUR · ÉVRY", court: "Vasseur", fond: "#2B2B2E", accent: "#B5651D" },
  equipe: [
    { nom: "Karim Yildiz", poste: "Responsable des ventes VN", couleur: "#B5651D", ton: "h", alias: "Karim", exclure: "Belhaj" },
    { nom: "Isabelle Ferrand", poste: "Responsable du pôle occasion", couleur: "#7B2D42", ton: "f", alias: "Isabelle" },
    { nom: "Bruno Faucher", poste: "Chef d'atelier", couleur: "#3F5B76", ton: "h", alias: "Bruno" },
    { nom: "Michel Vasseur", poste: "Fondateur et dirigeant du groupe", couleur: "#2B2B2E", ton: "h", alias: "Michel" }
  ],
  // Expéditeur de la mise en situation : le membre de l'équipe qui fait la demande
  // (« Karim te demande… », « Michel souhaite… ») ; à défaut, Karim, qui confie
  // la plupart des missions.
  expediteur: { strict: true, par_defaut: "Karim Yildiz" },
  // Pas d'objectif chiffré imposé dans les calculatrices (chaque mission donne ses repères)
  objectifs: { nom: "Vasseur" },
  // Photos du catalogue dans les dossiers : « Captur », « Kangoo Van »… et la ligne « Véhicule »
  catalogue: { cles_modele: true, colonnes_vehicule: "^(vehicule|modele)(?!s)(?! repris)" }
};

const RES_ANIMEES = {

  // ─────────── BLOC 1 — VENTE ───────────
  "C1.1-1": [
    { type: "etapes", titre: "Ce que surveille la veille chez Vasseur",
      intro: "Clique pour voir les quatre directions de la veille.",
      etapes: [
        { ico: "🏁", k: "Concurrents", s: "Autres concessions et mandataires en ligne : prix, offres, délais, services" },
        { ico: "📈", k: "Marché", s: "Les tendances : montée de l'électrique, zones à faibles émissions" },
        { ico: "⚖️", k: "Réglementation", s: "Aides à l'achat, garanties, règles en vigueur" },
        { ico: "💬", k: "Clients", s: "Questions posées au showroom, avis en ligne" }
      ] },
    { type: "tri", titre: "Source fiable ou à vérifier ?", consigne: "Une information de veille ne vaut que par sa source. Classe chaque information.",
      categories: ["Source fiable", "À vérifier"],
      items: [
        ["Une fiche de prix datée, publiée sur le site officiel du constructeur.", 0, "Source officielle et datée."],
        ["Un client affirme qu'un garage « fait 5 000 € de remise sur tout ».", 1, "C'est une rumeur : aucune preuve, aucun document."],
        ["Un texte officiel publié sur un site de l'administration.", 0, "Les textes officiels sont la référence pour la réglementation."],
        ["Une publication très partagée sur un réseau social, sans auteur ni date.", 1, "Ni auteur, ni date : on la vérifie avant de s'en servir."],
        ["Une note du réseau Renault datée de ce mois-ci.", 0, "Note interne officielle et récente."],
        ["Un article de blog sans date sur « les meilleures aides auto ».", 1, "Sans date, l'information est peut-être périmée."]
      ] },
    { type: "cartes", titre: "Les mots de la veille",
      cartes: [
        ["Veille commerciale", "Surveiller régulièrement concurrents, réglementation et tendances, pour adapter l'offre et l'argumentaire."],
        ["Mandataire", "Intermédiaire, souvent en ligne, qui commande un véhicule neuf pour le client, moins cher mais avec moins de services."],
        ["Cote", "Prix de référence d'un véhicule d'occasion selon le modèle, l'âge, le kilométrage et l'état."],
        ["Comparer honnêtement", "Reconnaître l'écart de prix, puis comparer l'ensemble : équipements, garantie, service."]
      ] }
  ],

  "C1.2-1": [
    { type: "etapes", titre: "Même information, forme adaptée au canal",
      etapes: [
        { ico: "✉️", k: "Mail", s: "Réponse complète et structurée, sous 24 h, avec politesse et signature" },
        { ico: "💬", k: "Chat", s: "Réponse courte et rapide, qui relance l'échange" },
        { ico: "📱", k: "Réseau social", s: "Réponse publique brève, puis le détail en message privé" },
        { ico: "🚗", k: "Showroom", s: "Échange en direct, avec essai possible" }
      ] },
    { type: "tri", titre: "Quel canal pour cette réponse ?", consigne: "Lis chaque réponse et devine sur quel canal elle a été écrite.",
      categories: ["Mail", "Chat", "Réseau social (public)"],
      items: [
        ["« Bonjour Madame, merci pour votre message. Le Kangoo Van Confort est proposé à 22 000 €. Je reste à votre disposition pour un essai. Cordialement, Karim Yildiz »", 0, "Réponse complète, formule de politesse et signature : c'est un mail."],
        ["« Bonjour ! Oui, le Kangoo Van est disponible à l'essai cette semaine 🙂 On fixe un créneau ? »", 1, "Court, direct, avec une question qui relance : c'est un chat."],
        ["« Merci pour votre intérêt ! Je vous envoie tous les détails en message privé. »", 2, "En public, on reste bref et on passe en privé pour le prix et les informations personnelles."],
        ["« Je vérifie le stock et je reviens vers vous dans 2 minutes ! »", 1, "Réponse immédiate pendant la conversation : c'est un chat."],
        ["« Merci pour ce beau commentaire ! Toute l'équipe Vasseur est ravie que votre Twingo vous plaise. »", 2, "Réponse publique courte et chaleureuse, sous une publication."],
        ["« Bonjour Monsieur, suite à votre demande, vous trouverez ci-dessous le détail de l'offre et ses conditions. Bien cordialement. »", 0, "Structure et ton d'un mail."]
      ] },
    { type: "cartes", titre: "Les mots de l'omnicanal",
      cartes: [
        ["Canal", "Le moyen de contact : showroom, téléphone, mail, chat, réseaux sociaux, SMS."],
        ["Omnicanal", "Le client passe d'un canal à l'autre ; l'échange continue grâce à l'historique."],
        ["Engagement de délai", "Le temps de réponse promis selon le canal, compté depuis la réception du message."],
        ["En public", "Jamais de prix détaillé ni d'information personnelle : on passe en privé."]
      ] }
  ],

  "C1.3-1": [
    { type: "tri", titre: "Comptant, crédit ou LOA ?", consigne: "Pour chaque phrase, retrouve le mode de paiement.",
      categories: ["Comptant", "Crédit classique", "LOA"],
      items: [
        ["Je paie tout le prix et je suis propriétaire immédiatement.", 0, "Comptant : la totalité payée, propriétaire tout de suite."],
        ["Un organisme avance l'argent ; je rembourse chaque mois et je suis propriétaire dès la signature.", 1, "Crédit classique : propriétaire dès la signature, paiement étalé."],
        ["Je paie l'usage du véhicule ; à la fin, je le rachète ou je le rends.", 2, "LOA : on loue, puis on choisit à la fin."],
        ["Un prix de rachat, la « valeur résiduelle », est fixé dès le départ.", 2, "La valeur résiduelle est propre à la LOA."],
        ["Ma mensualité est souvent plus légère, mais je ne suis pas propriétaire pendant le contrat.", 2, "En LOA, on paie l'usage, pas la propriété."],
        ["Je paie en plusieurs fois sans organisme de financement, et la voiture est à moi tout de suite.", 0, "Comptant en plusieurs fois : toujours propriétaire immédiatement."]
      ] },
    { type: "calcul", calc: "reste", titre: "Calculer un reste à payer, ligne par ligne",
      intro: "Cas pratique de la fiche : Corolla d'occasion à 19 000 €, reprise estimée à 4 500 €. Ajoute un acompte, une remise ou une option : chaque ligne reste visible, comme dans le dossier." },
    { type: "etapes", titre: "Finaliser une vente en 4 temps",
      etapes: [
        { ico: "🪪", k: "Identité", s: "Le client, ses coordonnées complètes" },
        { ico: "🚗", k: "Véhicule", s: "Modèle, finition et options" },
        { ico: "🧾", k: "Prix et reprise", s: "Sur des lignes séparées, avec le calcul détaillé" },
        { ico: "💳", k: "Paiement", s: "Comptant, crédit ou LOA, et la remise dans le cadrage" }
      ] }
  ],

  // ─────────── BLOC 2 — SUIVI DES VENTES ───────────
  "C2.1-1": [
    { type: "etapes", titre: "Annoncer un imprévu en 4 temps",
      etapes: [
        { ico: "📞", k: "Prévenir", s: "Contacter le client avant qu'il ne s'inquiète" },
        { ico: "🔎", k: "Expliquer", s: "Donner la cause réelle, sans la cacher" },
        { ico: "📅", k: "Dater", s: "Annoncer une nouvelle échéance précise" },
        { ico: "🤝", k: "Rassurer", s: "Ton calme, et un geste choisi dans la liste autorisée si la gêne le justifie" }
      ] },
    { type: "calcul", calc: "joursouvres", titre: "Compter un délai en jours ouvrés",
      intro: "Règle Vasseur : on compte à partir du lendemain, sans le samedi ni le dimanche. Exemple de la fiche : une pièce commandée un lundi, avec un délai de 5 jours ouvrés.",
      valeurs: [0, 5] },
    { type: "tri", titre: "Un objet de mail clair ou alarmant ?", consigne: "L'objet est la première chose que lit le client.",
      categories: ["Clair et rassurant", "Alarmant ou flou"],
      items: [
        ["« URGENT : problème sur votre commande »", 1, "Le client s'inquiète avant même de lire."],
        ["« Votre Scénic : nouvelle date de livraison »", 0, "On sait de quoi il s'agit."],
        ["« Information importante !!! »", 1, "Flou et anxiogène."],
        ["« Livraison de votre véhicule : point d'étape »", 0, "Clair, sans dramatiser."],
        ["« Mauvaise nouvelle… »", 1, "Alarmant et sans information."]
      ] }
  ],

  "C2.2-1": [
    { type: "etapes", titre: "Mettre en œuvre un service associé",
      etapes: [
        { ico: "🎯", k: "Sélectionner", s: "Le bon prestataire : l'atelier de Bruno ou un partenaire extérieur" },
        { ico: "📨", k: "Transmettre", s: "Quoi faire, sur quel véhicule, pour quand" },
        { ico: "👀", k: "Suivre", s: "Vérifier que la prestation est en cours, pas seulement commandée" },
        { ico: "🔁", k: "Relancer", s: "Et rendre compte au client si un délai change" }
      ] },
    { type: "tri", titre: "Atelier Vasseur ou partenaire extérieur ?", consigne: "Qui réalise chaque prestation ?",
      categories: ["Atelier Vasseur", "Partenaire extérieur"],
      items: [
        ["Poser un attelage simple.", 0, "Une pose simple est faite par l'atelier de Bruno Faucher."],
        ["Financer l'achat à crédit.", 1, "Le financement passe par un organisme partenaire de Vasseur."],
        ["Assurer le véhicule.", 1, "L'assurance est proposée via un partenaire, pas produite en interne."],
        ["Installer une borne de recharge au domicile du client.", 1, "C'est le métier d'un installateur partenaire."],
        ["Poser des tapis de sol et une protection de coffre.", 0, "Accessoires simples : l'atelier s'en charge."],
        ["Reprendre une carrosserie très abîmée.", 1, "Un gros travail de carrosserie part chez un carrossier partenaire."]
      ] },
    { type: "cartes", titre: "Les mots des services associés",
      cartes: [
        ["Service associé", "Ce qui accompagne la vente : financement, assurance, carte grise, accessoires, extension de garantie."],
        ["Prestataire", "Entreprise extérieure qui réalise une partie du service pour Vasseur."],
        ["Jours ouvrés", "Du lundi au vendredi, hors jours fériés ; on compte à partir du lendemain."],
        ["Vendu ≠ mis en œuvre", "Une fois le service vendu, il reste à le transmettre et à le suivre jusqu'au bout."]
      ] }
  ],

  "C2.3-1": [
    { type: "etapes", titre: "Les 4 étapes d'une réclamation bien traitée",
      etapes: [
        { ico: "👂", k: "Écouter", s: "Sans couper la parole, puis reformuler" },
        { ico: "🔎", k: "Vérifier", s: "Le dossier, l'atelier, l'historique, avant de conclure" },
        { ico: "🛠️", k: "Proposer", s: "Une solution proportionnée à la gêne réelle" },
        { ico: "✅", k: "Suivre", s: "Vérifier que la solution a bien été appliquée" }
      ] },
    { type: "tri", titre: "Bonne pratique ou à éviter ?", consigne: "Face à une réclamation, que faut-il faire ?",
      categories: ["Bonne pratique", "À éviter"],
      items: [
        ["Couper la parole pour expliquer que ce n'est pas la faute de Vasseur.", 1, "On écoute d'abord, sans se justifier tout de suite."],
        ["Reformuler ce que le client vient de dire.", 0, "Le client se sent compris, et on vérifie qu'on a bien compris."],
        ["Promettre un remboursement avant d'avoir vérifié.", 1, "Un engagement qu'il faut retirer ensuite abîme la confiance."],
        ["Consulter le dossier et l'atelier avant de répondre.", 0, "On vérifie les faits avant de s'engager."],
        ["Offrir d'office le geste le plus généreux possible.", 1, "La solution doit être proportionnée à la gêne réelle."],
        ["Rappeler le client pour vérifier que la solution a été appliquée.", 0, "Le suivi fait partie du traitement."]
      ] },
    { type: "cartes", titre: "Les mots de la réclamation",
      cartes: [
        ["Réclamation", "Un mécontentement qui demande une réponse : on traite les faits, pas le ton."],
        ["Reformuler", "Redire avec ses mots ce que dit le client, pour montrer qu'on a compris."],
        ["Geste commercial", "Compensation choisie dans la liste autorisée, proportionnée à la gêne."],
        ["Avoir", "Document qui annule tout ou partie d'une facture."]
      ] }
  ],

  "C2.4-1": [
    { type: "calcul", calc: "nps", titre: "Calculer un NPS",
      intro: "Exemple de la fiche : 100 réponses, dont 55 promoteurs et 17 détracteurs. Les passifs ne se soustraient pas, mais ils comptent dans le total.",
      valeurs: [55, 28, 17] },
    { type: "tri", titre: "Promoteur, passif ou détracteur ?", consigne: "Classe chaque client d'après sa note à la question « Recommanderiez-vous Vasseur ? ».",
      categories: ["Promoteur", "Passif", "Détracteur"],
      items: [
        ["9 / 10", 0, "9 et 10 : promoteur."],
        ["6 / 10", 2, "De 0 à 6 : détracteur. 6 n'est pas « la moyenne » ici."],
        ["8 / 10", 1, "7 et 8 : passif."],
        ["10 / 10", 0, "Promoteur."],
        ["7 / 10", 1, "Passif : satisfait, mais pas au point de recommander."],
        ["0 / 10", 2, "Détracteur."]
      ] },
    { type: "tri", titre: "Question neutre ou orientée ?", consigne: "Une question orientée pousse le client vers une réponse.",
      categories: ["Neutre", "Orientée"],
      items: [
        ["« Comment s'est passé votre rendez-vous à l'atelier ? »", 0, "Le client répond librement."],
        ["« N'avez-vous pas trouvé notre atelier très efficace ? »", 1, "La question souffle la réponse."],
        ["« Sur 10, comment notez-vous l'accueil ? »", 0, "Une échelle, sans pousser."],
        ["« Vous avez forcément apprécié le café offert, non ? »", 1, "On force la réponse positive."],
        ["« Que pourrions-nous améliorer ? »", 0, "Question ouverte, neutre."]
      ] }
  ],

  // ─────────── BLOC 3 — FIDÉLISATION ───────────
  "C3.1-1": [
    { type: "tri", titre: "Bon ou mauvais prétexte de contact ?", consigne: "Un bon contact est utile au client, pas seulement à Vasseur.",
      categories: ["Bon prétexte", "Mauvais prétexte"],
      items: [
        ["Un rappel constructeur qui concerne le modèle du client.", 0, "Information utile, qui le concerne directement."],
        ["« On n'a pas eu de nouvelles de vous depuis un moment. »", 1, "Centré sur Vasseur, pas sur le client."],
        ["Une nouveauté qui correspond à son profil et à son usage.", 0, "Ciblée : elle peut vraiment l'intéresser."],
        ["Une promotion envoyée à toute la base, sans tri.", 1, "Rien de personnel : le client se sent démarché."],
        ["Un message pour le premier anniversaire de son achat.", 0, "Un moment personnel, sans pression commerciale."],
        ["Rappeler un client pour lui vendre un service le lendemain d'une réclamation non réglée.", 1, "On traite d'abord la réclamation en cours."]
      ] },
    { type: "etapes", titre: "Un message d'information réussi",
      etapes: [
        { ico: "📰", k: "Ce qui se passe", s: "Les faits, simplement" },
        { ico: "⚖️", k: "Ce que ça change", s: "Sans dramatiser ni minimiser" },
        { ico: "👉", k: "Ce qu'il faut faire", s: "Une action simple, si une action est nécessaire" },
        { ico: "📞", k: "Comment", s: "Le moyen le plus simple pour le client" }
      ] },
    { type: "cartes", titre: "Avant de contacter un client",
      cartes: [
        ["Consulter le SIC", "Pour ne pas ignorer un échange récent ou une réclamation en cours."],
        ["Canal adapté", "Choisi d'après la fiche du client et l'urgence du message."],
        ["Motif utile", "Une raison qui sert le client, pas seulement Vasseur."],
        ["Pourcentage", "Partie ÷ total × 100."]
      ] }
  ],

  "C3.2-1": [
    { type: "etapes", titre: "Les 4 leviers de fidélisation chez Vasseur",
      etapes: [
        { ico: "🎁", k: "Offre réservée", s: "Pour les clients qui ont déjà acheté" },
        { ico: "🤝", k: "Parrainage", s: "Le client recommande un proche : les deux y gagnent" },
        { ico: "🥂", k: "Événement", s: "Une soirée ou des portes ouvertes réservées aux clients" },
        { ico: "💬", k: "Geste personnalisé", s: "Après un problème résolu, pour retrouver la confiance" }
      ] },
    { type: "tri", titre: "Vraie fidélisation ou simple remise ?", consigne: "La fidélisation récompense un comportement réel du client.",
      categories: ["Fidélisation", "Simple remise"],
      items: [
        ["−5 % pour tout le monde ce week-end.", 1, "Offert à n'importe qui : aucun comportement récompensé."],
        ["Un avantage pour le client qui recommande un proche, lorsque ce proche achète.", 0, "La recommandation est récompensée : c'est du parrainage."],
        ["Une soirée réservée aux clients qui ont acheté chez Vasseur.", 0, "Un événement réservé aux clients existants."],
        ["Un bon de réduction distribué à tous les passants d'un centre commercial.", 1, "Aucun lien avec la fidélité."],
        ["Un geste offert à un client après la résolution de sa réclamation.", 0, "Il transforme une mauvaise expérience en raison de rester."],
        ["Une promotion affichée sur le site pour tous les visiteurs.", 1, "Tout le monde en profite, client ou non."]
      ] },
    { type: "tri", titre: "Le geste est-il à la bonne mesure ?", consigne: "Un avantage ni symbolique, ni disproportionné.",
      categories: ["Trop faible", "Proportionné", "Disproportionné"],
      items: [
        ["Un porte-clés pour remercier un client qui a amené un proche à l'achat", 0, "Trop symbolique pour motiver qui que ce soit."],
        ["Un lavage complet offert après deux jours de retard de livraison", 1, "Adapté à une gêne modérée."],
        ["Un véhicule neuf offert pour une rayure réparée", 2, "Sans commune mesure avec la gêne."],
        ["Un véhicule de courtoisie pendant une réparation qui dure", 1, "Il répond directement à la gêne."],
        ["Rien du tout, parce que « le problème est réglé »", 0, "Le client garde un mauvais souvenir."]
      ] }
  ],

  "C3.3-1": [
    { type: "calcul", calc: "conversion", titre: "Taux de conversion et coût par vente",
      intro: "Cas pratique de la fiche : une soirée essais, 150 clients invités, 6 ventes, 1 800 € de coût. Change les chiffres pour comparer deux actions." },
    { type: "tri", titre: "Taux de participation ou taux de conversion ?", consigne: "Lis chaque résultat : mesure-t-il qui a utilisé l'offre, ou qui a acheté ?",
      categories: ["Participation", "Conversion"],
      items: [
        ["40 clients sur 200 ont utilisé leur bon de lavage offert.", 0, "On mesure qui a utilisé l'offre."],
        ["12 clients invités sur 300 ont acheté un véhicule.", 1, "On mesure qui a acheté."],
        ["25 clients sur 120 sont venus à la soirée réservée.", 0, "Venir à l'événement, c'est participer."],
        ["9 clients sur 90 ayant reçu une offre ont racheté chez Vasseur.", 1, "Le rachat est une conversion."],
        ["18 parrains sur 400 clients contactés ont recommandé un proche.", 0, "Recommander, c'est participer au programme."],
        ["4 filleuls sur 18 recommandés ont acheté.", 1, "L'achat du filleul est une conversion."]
      ] },
    { type: "etapes", titre: "Évaluer une action de fidélisation en 4 temps",
      etapes: [
        { ico: "🧮", k: "Calculer", s: "Un taux, pas seulement un nombre brut" },
        { ico: "⚖️", k: "Comparer", s: "Au coût et à un repère, avant de juger" },
        { ico: "🧭", k: "Recommander", s: "Reconduire, ajuster ou cibler autrement" },
        { ico: "🗂️", k: "Enrichir le SIC", s: "Mettre à jour la fiche de chaque client concerné" }
      ] }
  ],

  // ─────────── BLOC 4B — PROSPECTION ───────────
  "B4.1-1": [
    { type: "tri", titre: "À quelle lettre de BANT correspond cette information ?", consigne: "Budget, Autorité, Need (besoin), Timeline (délai) : classe ce que disent les prospects.",
      categories: ["Budget", "Autorité", "Need", "Timeline"],
      items: [
        ["« Je vise environ 30 000 €. »", 0, "Un montant envisagé : c'est le budget."],
        ["« C'est ma femme et moi qui décidons ensemble. »", 1, "Qui décide : c'est l'autorité."],
        ["« Je fais 60 km par jour, dont de l'autoroute. »", 2, "L'usage du véhicule : c'est le besoin."],
        ["« Je voudrais être équipé avant l'été. »", 3, "Une échéance : c'est le délai."],
        ["« Je pense passer par un crédit. »", 0, "Le mode de financement fait partie du budget."],
        ["« Le gérant valide tous les achats de véhicules. »", 1, "En B2B, il faut savoir qui signe."],
        ["« Mon fourgon actuel est trop petit pour mon matériel. »", 2, "Un besoin concret."],
        ["« Pas pressé : d'ici six mois. »", 3, "Le délai d'achat."]
      ] },
    { type: "tri", titre: "Fait constaté ou supposition ?", consigne: "Dans le SIC, on n'écrit comme sûr que ce qui a été dit ou vérifié.",
      categories: ["Fait constaté", "Supposition"],
      items: [
        ["Il a laissé son adresse mail au comptoir.", 0, "C'est un fait."],
        ["Il a l'air pressé d'acheter.", 1, "Impression : à vérifier avant de l'écrire comme un fait."],
        ["Il a demandé le prix du Symbioz.", 0, "Il l'a dit."],
        ["Il a sûrement un gros budget.", 1, "Personne ne l'a dit."],
        ["Sa femme décidera sans doute à sa place.", 1, "Supposition : on pose la question, on ne devine pas."]
      ] },
    { type: "cartes", titre: "Les mots du prospecteur",
      cartes: [
        ["Prospect froid", "Aucun contact, aucun intérêt exprimé."],
        ["Prospect tiède", "Un contact, un intérêt encore vague."],
        ["Prospect chaud", "Besoin, budget et délai connus."],
        ["B2B", "Vente à des professionnels : artisans, entreprises."],
        ["B2C", "Vente à des particuliers."],
        ["Segment / cible", "Un groupe de clients qui se ressemblent ; la cible est le segment qu'on choisit de contacter."]
      ] }
  ],

  "B4.2-1": [
    { type: "etapes", titre: "Construire un plan de prospection",
      intro: "Toujours dans cet ordre : sans cible précise, le message reste vague.",
      etapes: [
        { ico: "🎯", k: "Cible", s: "Des critères précis, pas « tout le monde »" },
        { ico: "💡", k: "Message", s: "Un bénéfice concret pour cette cible" },
        { ico: "📡", k: "Canal", s: "Celui que la cible utilise vraiment" },
        { ico: "📅", k: "Calendrier", s: "Des dates, et une relance prévue dès le départ" }
      ] },
    { type: "tri", titre: "Message clé : bénéfice concret ou formule vague ?", consigne: "Un bon message dit au client ce qu'il y gagne. Classe chaque accroche.",
      categories: ["Bénéfice concret", "Formule vague"],
      items: [
        ["« Découvrez notre nouvelle gamme ! »", 1, "Rien ne dit ce que le client y gagne."],
        ["« Essai sans rendez-vous ce samedi, café offert. »", 0, "Une action précise, datée, facile à faire."],
        ["« Le meilleur rapport qualité-prix du marché. »", 1, "Impossible à vérifier : le client n'y croit pas."],
        ["« Votre utilitaire livré avec son attelage posé, prêt pour le chantier. »", 0, "Un bénéfice concret pour un artisan."],
        ["« Venez nous voir, on a plein de choses à vous montrer. »", 1, "Aucun bénéfice précis."],
        ["« Estimation gratuite de votre véhicule actuel en 20 minutes. »", 0, "Un service clair, chiffré, utile."]
      ] },
    { type: "calcul", calc: "previsionnel", titre: "Estimer le résultat d'une opération",
      intro: "Exemple de la fiche : 2 400 mails envoyés, avec un taux habituel de 1 %. Ajoute le budget pour connaître le coût par demande attendue." }
  ],

  "B4.3-1": [
    { type: "tri", titre: "Question ouverte ou fermée ?", consigne: "On découvre avec des questions ouvertes, on confirme avec des questions fermées.",
      categories: ["Ouverte", "Fermée"],
      items: [
        ["« Comment utilisez-vous vos véhicules au quotidien ? »", 0, "Le prospect doit développer."],
        ["« Avez-vous plus de trois véhicules ? »", 1, "On répond oui ou non."],
        ["« Qu'est-ce qui compte le plus pour vous dans un utilitaire ? »", 0, "Le prospect explique ses priorités."],
        ["« Roulez-vous plus de 20 000 km par an ? »", 1, "Une réponse courte, pour confirmer."],
        ["« Comment se passe le renouvellement de votre flotte ? »", 0, "Elle ouvre la discussion sur le processus de décision."],
        ["« Êtes-vous la personne qui décide de l'achat ? »", 1, "Oui ou non : elle confirme l'autorité."]
      ] },
    { type: "etapes", titre: "La structure d'un contact de prospection",
      etapes: [
        { ico: "👋", k: "Accroche", s: "Qui je suis, pourquoi je vous contacte" },
        { ico: "❓", k: "Qualification", s: "Des questions, avec la méthode BANT" },
        { ico: "🚗", k: "Proposition", s: "Seulement si j'en sais assez" },
        { ico: "🛡️", k: "Objection", s: "Écouter, reformuler, répondre sans forcer" },
        { ico: "📌", k: "Suite", s: "Rendez-vous, envoi ciblé ou rappel daté" }
      ] },
    { type: "tri", titre: "Bonne ou mauvaise relance ?", consigne: "Que faire, et que ne pas faire, quand un prospect ne répond pas ?",
      categories: ["Bonne pratique", "À éviter"],
      items: [
        ["Renvoyer la même proposition mot pour mot", 1, "Elle n'a pas fait réagir la première fois."],
        ["Apporter une information nouvelle et utile", 0, "C'est une vraie raison de répondre."],
        ["Relancer tous les jours jusqu'à obtenir une réponse", 1, "Le prospect se sent harcelé."],
        ["Proposer une suite simple, facile à accepter", 0, "Un essai, un rappel, un document ciblé."],
        ["Reprocher au prospect son silence", 1, "Le reproche ferme la porte."],
        ["Respecter le nombre de relances prévu par Vasseur", 0, "La règle évite d'insister au-delà du raisonnable."]
      ] }
  ],

  "B4.4-1": [
    { type: "calcul", calc: "entonnoir", titre: "Suivre une campagne étape par étape",
      intro: "Saisis les résultats d'une campagne : chaque taux se calcule par rapport à l'étape juste avant.",
      champs: ["Contacts (mails, appels)", "Réponses", "Rendez-vous", "Ventes"],
      valeurs: [200, 24, 8, 2],
      etapes: ["Contacts", "Réponses", "Rendez-vous", "Ventes"],
      taux: ["Taux de réponse", "Réponses → rendez-vous", "Rendez-vous → ventes"] },
    { type: "etapes", titre: "Ajuster une campagne en cours",
      etapes: [
        { ico: "📉", k: "Constater", s: "Comparer le résultat au résultat habituel" },
        { ico: "🔎", k: "Chercher", s: "Message, cible, canal ou moment : la cause la plus probable" },
        { ico: "🔧", k: "Changer une chose", s: "Une seule à la fois" },
        { ico: "📊", k: "Mesurer", s: "Avant la fin de la campagne, sur la même durée" }
      ] },
    { type: "cartes", titre: "Teste-toi",
      cartes: [
        ["Un taux passe de 12 % à 10 %", "Il perd 2 points (et non « 2 % »)."],
        ["Taux de réponse", "Réponses ÷ contacts × 100."],
        ["Devis", "Une proposition chiffrée avec une date de validité."],
        ["Quand relancer un devis ?", "Avant son expiration, avec quelques jours de marge."]
      ] }
  ],

  "B4.5-1": [
    { type: "chaine", titre: "Construire un argument CAB", produit: "Renault Espace Techno",
      intro: "Renault Espace Techno, 45 000 €. Pars d'une caractéristique du catalogue, puis pose-toi deux questions.",
      questions: ["Et donc ?", "Et pour ce client, ça veut dire quoi ?"],
      maillons: [
        { k: "Caractéristique", txt: "L'Espace a 7 vraies places." },
        { k: "Avantage", txt: "…donc toute la famille, grands-parents compris, voyage dans un seul véhicule." },
        { k: "Bénéfice", txt: "…pour vous : plus besoin de prendre deux voitures pour les sorties en famille." }
      ] },
    { type: "tri", titre: "Caractéristique, avantage ou bénéfice ?", consigne: "Exemple : un artisan qui hésite pour un Kangoo Van.",
      categories: ["Caractéristique", "Avantage", "Bénéfice"],
      items: [
        ["Le Kangoo Van a un volume utile de 3 300 L.", 0, "Un fait, tiré du catalogue."],
        ["Il charge tout le matériel d'un chantier en un seul voyage.", 1, "Ce que la caractéristique permet."],
        ["Vous gagnez du temps chaque matin, sans aller-retour au dépôt.", 2, "Ce que ça change pour ce client."],
        ["Prix : 22 000 € en finition Confort.", 0, "Une donnée du catalogue."],
        ["Vous restez dans votre budget sans renoncer au volume.", 2, "Le gain personnel du client."]
      ] },
    { type: "calcul", calc: "carburant", titre: "Calculer un coût de carburant",
      intro: "Coût d'usage = kilomètres ÷ 100 × consommation × prix du litre. Change les valeurs pour comparer deux véhicules." }
  ]
};
