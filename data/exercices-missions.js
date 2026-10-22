// ================================================
//   LABORO Auto (Groupe Vasseur) — Exercices animés propres à chaque mission
//   Affichés par js/moteur-animations.js en tête de « Apprendre d'abord ».
//
//   Règle de Pascal (13/10/2026, identique à LABORO MCV) : UN EXERCICE PAR
//   MISSION, jamais partagé. L'exercice entraîne la méthode de la mission sur
//   une situation VOISINE (autre client, autre modèle, autres chiffres) : il
//   ne donne jamais la réponse aux questions de la mission.
//   Les blocs par compétence (data/ressources-animees.js) ne servent plus que
//   de secours pour une future mission sans exercice propre.
//   Types : tri, etapes, chaine, cartes (voir js/moteur-animations.js).
//   Créé le 14/10/2026.
// ================================================

const EXERCICES_MISSIONS = {};

// ─────────── Palier 1 ───────────
Object.assign(EXERCICES_MISSIONS, {

"B41a-P1": { type: "tri", titre: "Décrire un segment de clientèle", consigne: "Pour décrire des acheteurs de breaks familiaux, dans quelle rubrique ranger chaque information ?",
  categories: ["Profil", "Motivation", "Frein"],
  items: [
    ["Couples de 35 à 45 ans avec deux enfants.", 0, "Qui sont-ils ?"],
    ["Avoir un grand coffre pour les vacances.", 1, "Ce qui les pousse à acheter."],
    ["Peur que le prix de l'assurance augmente.", 2, "Ce qui les retient."],
    ["Habitent en zone périurbaine.", 0, "Où vivent-ils ?"]
  ] },

"B41b-P1": { type: "tri", titre: "Quel véhicule pour quel professionnel ?", consigne: "Un utilitaire se choisit d'après le métier du client.",
  categories: ["Petit utilitaire", "Grand fourgon"],
  items: [
    ["Une infirmière libérale qui transporte du petit matériel en ville.", 0, "Volume réduit, se gare facilement."],
    ["Un déménageur qui transporte des meubles.", 1, "Il lui faut un grand volume."],
    ["Un plombier qui stocke ses outils et quelques tuyaux.", 0, "Volume modéré, usage urbain."],
    ["Une entreprise de livraison de matériaux de construction.", 1, "Charges lourdes et volumineuses."]
  ] },

"B41c-P1": { type: "cartes", titre: "Lire un tableau de ventes", cartes: [
    ["Une tendance, c'est…", "Une évolution qui se répète dans le temps : hausse, baisse ou stabilité."],
    ["Pour comparer deux périodes, on regarde…", "Les mêmes modèles, sur des durées identiques."],
    ["Un chiffre isolé suffit-il à décider ?", "Non : on le compare à une autre période ou à un objectif."],
    ["Une bonne note de synthèse est…", "Courte, chiffrée, et termine par une action proposée."]
  ] },

"B42a-P1": { type: "etapes", titre: "Préparer une campagne mail", intro: "Une campagne mail se prépare avant d'écrire le premier mot.",
  etapes: [
    { ico: "🎯", k: "Cible", s: "Qui reçoit le mail et pourquoi lui" },
    { ico: "💬", k: "Message", s: "Un objet court et une accroche qui parle du besoin" },
    { ico: "📅", k: "Calendrier", s: "Quand envoyer, quand relancer" },
    { ico: "📊", k: "Mesure", s: "Réponses et rendez-vous obtenus" }
  ] },

"B42b-P1": { type: "tri", titre: "Bon message pour les réseaux sociaux ?", consigne: "Pour promouvoir une citadine auprès de jeunes actifs, ce message fonctionne-t-il ?",
  categories: ["Bon message", "À reprendre"],
  items: [
    ["« Ta première voiture neuve, sans prise de tête : viens l'essayer ce samedi ! »", 0, "Court, tutoiement adapté, appel à l'action."],
    ["Un long texte technique sur la composition de la batterie.", 1, "Trop long pour ce canal."],
    ["« Achetez maintenant sinon tant pis pour vous. »", 1, "Agressif."],
    ["Une photo de la voiture en ville avec « Essai gratuit en 1 clic ».", 0, "Visuel et action simple."]
  ] },

"B42c-P1": { type: "tri", titre: "Accueillir sur un salon", consigne: "Sur le stand d'un salon auto, ces gestes sont-ils efficaces ?",
  categories: ["Efficace", "À éviter"],
  items: [
    ["Saluer chaque visiteur qui s'approche du véhicule exposé.", 0, "On engage la conversation."],
    ["Rester assis derrière le comptoir sur son téléphone.", 1, "On paraît indisponible."],
    ["Demander quel usage le visiteur aurait du véhicule.", 0, "On découvre son besoin."],
    ["Réciter la fiche technique complète à chacun.", 1, "On n'écoute pas le visiteur."]
  ] },

"B42d-P1": { type: "tri", titre: "Client à relancer ou pas ?", consigne: "Règle d'exemple : on relance les clients qui ont acheté il y a 3 ans ou plus. Faut-il relancer ?",
  categories: ["À relancer", "Pas encore"],
  items: [
    ["Achat il y a 5 ans.", 0, "5 ans, c'est plus de 3 ans."],
    ["Achat il y a 8 mois.", 1, "Trop récent."],
    ["Achat il y a exactement 3 ans.", 0, "« 3 ans ou plus » : 3 ans compte."],
    ["Achat il y a 2 ans.", 1, "Moins de 3 ans."]
  ] },

"B43a-P1": { type: "tri", titre: "Qualifier un prospect professionnel", consigne: "Une boulangerie demande un devis pour un utilitaire. Quelle information chaque question apporte-t-elle ?",
  categories: ["Besoin", "Budget", "Délai"],
  items: [
    ["« Combien de livraisons faites-vous par jour ? »", 0, "On mesure l'usage."],
    ["« Quelle mensualité envisagez-vous ? »", 1, "On connaît le budget."],
    ["« Pour quand vous faut-il ce véhicule ? »", 2, "On connaît l'échéance."],
    ["« Quel volume de chargement vous faut-il ? »", 0, "On précise le besoin."]
  ] },

"B43b-P1": { type: "tri", titre: "Faire parler un futur conducteur", consigne: "Un jeune actif demande un essai de citadine. Quelles questions le font parler ?",
  categories: ["Ouverte", "Fermée"],
  items: [
    ["« Comment utiliseriez-vous la voiture au quotidien ? »", 0, "Il explique son usage."],
    ["« Vous avez le permis ? »", 1, "Oui ou non."],
    ["« Qu'est-ce qui compte le plus pour vous dans une voiture ? »", 0, "Il exprime ses priorités."],
    ["« Vous habitez loin ? »", 1, "Réponse courte."]
  ] },

"B43c-P1": { type: "etapes", titre: "Un appel de prospection à froid", intro: "L'interlocuteur ne t'attend pas : chaque étape doit être courte.",
  etapes: [
    { ico: "👋", k: "Se présenter", s: "Prénom, Groupe Vasseur, en une phrase" },
    { ico: "📣", k: "Accroche", s: "Une raison d'appeler qui concerne son entreprise" },
    { ico: "❓", k: "Question", s: "Une question ouverte sur ses véhicules" },
    { ico: "📅", k: "Proposition", s: "Un rendez-vous avec deux créneaux" }
  ] },

"B43d-P1": { type: "tri", titre: "Une relance qui rouvre la discussion", consigne: "Un prospect ne répond plus depuis 10 jours. Cette relance est-elle bien pensée ?",
  categories: ["Bonne relance", "Maladroite"],
  items: [
    ["« Je reviens vers vous : un modèle de la couleur souhaitée vient d'arriver. »", 0, "Elle apporte un élément nouveau."],
    ["« Vous ne m'avez toujours pas répondu ! »", 1, "Reproche au client."],
    ["« Avez-vous eu le temps de réfléchir ? Je peux vous proposer un essai samedi. »", 0, "Polie, avec une suite concrète."],
    ["Renvoyer exactement le même mail qu'il y a 10 jours.", 1, "Rien de nouveau."]
  ] },

"C11a-P1": { type: "tri", titre: "Comparer deux offres honnêtement", consigne: "Un client compare deux citadines vues dans deux concessions. Sur quoi porte chaque élément ?",
  categories: ["Prix", "Équipement de série", "Service"],
  items: [
    ["La caméra de recul est incluse sur une offre, en option sur l'autre.", 1, "Ce qui est livré sans supplément."],
    ["Une offre coûte 900 € de moins.", 0, "Le prix affiché."],
    ["Une concession offre la première révision.", 2, "Un service après la vente."],
    ["Le régulateur de vitesse est livré d'origine.", 1, "Un équipement de série."]
  ] },

"C11b-P1": { type: "tri", titre: "Pourquoi l'électrique progresse ?", consigne: "Ces raisons expliquent-elles la progression des ventes électriques ?",
  categories: ["Raison plausible", "Hors sujet"],
  items: [
    ["Un coût de recharge plus faible que le carburant.", 0, "Un argument économique."],
    ["Des aides à l'achat pour certains ménages.", 0, "Elles baissent le prix payé."],
    ["La couleur des voitures à la mode cette année.", 1, "Sans lien avec le type de motorisation."],
    ["Des bornes de recharge plus nombreuses.", 0, "La recharge devient plus simple."]
  ] },

"C11c-P1": { type: "tri", titre: "Ce qu'apporte une concession sur l'occasion", consigne: "Face à un vendeur en ligne, ces éléments sont-ils des atouts de la concession ?",
  categories: ["Atout de la concession", "Pas un atout"],
  items: [
    ["Une garantie commerciale en plus de la garantie légale.", 0, "Le client est mieux couvert."],
    ["Un contrôle mécanique avant la vente.", 0, "Le véhicule est vérifié."],
    ["Un prix toujours plus bas qu'en ligne.", 1, "Ce n'est pas toujours vrai."],
    ["Un essai sur place avant d'acheter.", 0, "Le client voit et essaie."]
  ] },

"C11d-P1": { type: "cartes", titre: "Bien parler des aides à l'achat", cartes: [
    ["Une aide à l'achat dépend souvent…", "Des revenus du ménage et du véhicule choisi."],
    ["Avant de promettre une aide, le vendeur…", "Vérifie que le client remplit les conditions."],
    ["Pourquoi rester prudent ?", "Les aides changent : on vérifie qu'elles sont toujours en vigueur."],
    ["Une fiche argumentaire efficace est…", "Courte, claire et à jour."]
  ] },

"C12a-P1": { type: "etapes", titre: "Répondre à un mail client", intro: "Un client demande une information précise par mail : on répond vite et complètement.",
  etapes: [
    { ico: "👋", k: "Saluer", s: "Avec le nom du client" },
    { ico: "✅", k: "Répondre", s: "Exactement à ce qu'il demande" },
    { ico: "➡️", k: "Proposer une suite", s: "Un essai, un rendez-vous, un appel" },
    { ico: "✍️", k: "Signer", s: "Prénom, fonction, Groupe Vasseur, téléphone" }
  ] },

"C12b-P1": { type: "tri", titre: "Une bonne réponse sur le chat ?", consigne: "Sur le chat du site, un client demande une information. Ta réponse est-elle adaptée ?",
  categories: ["Adaptée", "À éviter"],
  items: [
    ["Une réponse courte, claire, avec une question pour continuer.", 0, "Le chat demande de la rapidité."],
    ["Un long paragraphe plein de sigles.", 1, "Le client décroche."],
    ["Une mensualité donnée sans préciser la durée ni l'apport.", 1, "Information incomplète, donc trompeuse."],
    ["« Je vous propose de vous rappeler pour une simulation précise. »", 0, "On passe à un échange plus complet."]
  ] },

"C12c-P1": { type: "tri", titre: "En public ou en privé ?", consigne: "Sur les réseaux sociaux, certaines informations se donnent en message privé.",
  categories: ["Réponse publique", "Message privé"],
  items: [
    ["Remercier pour l'intérêt porté au modèle.", 0, "Visible de tous, c'est positif."],
    ["Le détail d'une offre de financement personnalisée.", 1, "Personnel et précis."],
    ["Inviter la personne à poursuivre en message privé.", 0, "On l'indique publiquement."],
    ["Le numéro de téléphone du client.", 1, "Donnée personnelle."]
  ] },

"C12d-P1": { type: "tri", titre: "Showroom ou vente à distance ?", consigne: "Associe chaque avantage au canal qu'il concerne.",
  categories: ["Showroom", "Vente à distance"],
  items: [
    ["Voir et essayer le véhicule.", 0, "Le client touche et conduit."],
    ["Éviter un long déplacement.", 1, "Tout se fait de chez soi."],
    ["Échanger en face à face avec un vendeur.", 0, "Le contact direct rassure."],
    ["Signer des documents en ligne à toute heure.", 1, "Plus de souplesse."]
  ] },

"C13a-P1": { type: "cartes", titre: "Un dossier de vente complet", cartes: [
    ["Pourquoi un dossier complet ?", "Sans lui, la commande et l'immatriculation sont bloquées."],
    ["Une finition, c'est…", "Une version du modèle avec un niveau d'équipement précis."],
    ["Une option, c'est…", "Un équipement ajouté au prix de base."],
    ["Avant de faire signer, on…", "Vérifie le prix total et les informations du client."]
  ] },

"C13b-P1": { type: "chaine", titre: "La reprise réduit le montant à payer", intro: "Exemple : un client achète un véhicule à 20 000 € et fait reprendre l'ancien à 6 000 €.",
  questions: ["Et donc ?", "Comment vérifier ?"],
  maillons: [
    { k: "Prix du véhicule acheté", txt: "20 000 €" },
    { k: "Moins la valeur de reprise", txt: "20 000 − 6 000 = 14 000 € à payer" },
    { k: "Vérification", txt: "14 000 + 6 000 = 20 000 € : le compte est bon." }
  ] },

"C13c-P1": { type: "tri", titre: "LOA ou crédit classique ?", consigne: "Associe chaque caractéristique au bon financement.",
  categories: ["LOA", "Crédit classique"],
  items: [
    ["Le client est propriétaire dès le départ.", 1, "Il rembourse un prêt pour un véhicule à lui."],
    ["Le client loue et peut acheter à la fin.", 0, "Location avec option d'achat."],
    ["Le client peut rendre le véhicule en fin de contrat.", 0, "Il choisit d'acheter ou non."],
    ["Le client rembourse le prix total du véhicule.", 1, "Il finance tout l'achat."]
  ] },

"C13d-P1": { type: "tri", titre: "Une demande de remise", consigne: "Exemple : le vendeur peut accorder au plus 500 €. Que répondre ?",
  categories: ["Accorder", "Proposer autre chose", "Demander à son responsable"],
  items: [
    ["Le client demande 300 €.", 0, "Dans la limite autorisée."],
    ["Le client demande 1 200 € sur un véhicule déjà en promotion.", 1, "Trop loin : on propose un geste différent, comme un entretien."],
    ["Le client demande 650 € et se dit prêt à signer aujourd'hui.", 2, "Au-delà de la limite : on ne décide pas seul."],
    ["Le client demande 500 €.", 0, "Exactement la limite."]
  ] },

"C21a-P1": { type: "etapes", titre: "Annoncer un retard de livraison", intro: "Un client attend son véhicule : on le prévient avant qu'il ne s'inquiète.",
  etapes: [
    { ico: "📅", k: "La nouvelle date", s: "Précise, calculée sur l'information du constructeur" },
    { ico: "🙏", k: "Les excuses", s: "Au nom de la concession" },
    { ico: "💡", k: "Une solution d'attente", s: "Si possible : véhicule de prêt, geste" },
    { ico: "📞", k: "Le suivi", s: "Quand le client aura de nouvelles informations" }
  ] },

"C21b-P1": { type: "tri", titre: "Bon récapitulatif de commande ?", consigne: "Après la signature, ce que l'on écrit au client le rassure-t-il ?",
  categories: ["Rassurant", "Inquiétant"],
  items: [
    ["Les prochaines étapes dans l'ordre, avec une date pour chacune.", 0, "Le client sait à quoi s'attendre."],
    ["« Normalement ça devrait aller. »", 1, "Flou et peu professionnel."],
    ["Le nom et le téléphone de son interlocuteur.", 0, "Il sait qui contacter."],
    ["Une liste de risques possibles sans solution.", 1, "On l'inquiète inutilement."]
  ] },

"C21c-P1": { type: "tri", titre: "Information utile à l'atelier ?", consigne: "Pour préparer un véhicule avant livraison, l'atelier a-t-il besoin de cette information ?",
  categories: ["Utile à l'atelier", "Inutile ou confidentielle"],
  items: [
    ["La date et l'heure de livraison prévues.", 0, "L'atelier planifie sa préparation."],
    ["Les accessoires à poser.", 0, "Ils doivent être montés avant."],
    ["Le montant du crédit du client.", 1, "Information financière qui ne concerne pas l'atelier."],
    ["La finition et la couleur du véhicule.", 0, "Pour vérifier qu'il s'agit du bon véhicule."]
  ] },

"C22a-P1": { type: "cartes", titre: "Planifier un travail à l'atelier", cartes: [
    ["Avant de promettre une pose d'accessoire, on vérifie…", "La disponibilité de la pièce et un créneau à l'atelier."],
    ["Jour ouvré ?", "Un jour où l'atelier travaille."],
    ["Pourquoi prévoir une marge avant la livraison ?", "En cas de retard de pièce ou d'imprévu."],
    ["Une note à l'atelier contient…", "Le véhicule, le travail à faire, la date limite et le contact."]
  ] },

"C22b-P1": { type: "tri", titre: "Dossier de financement complet ?", consigne: "Pour un financement, l'organisme demande des pièces. Ce dossier peut-il partir ?",
  categories: ["Peut partir", "Bloqué"],
  items: [
    ["Toutes les pièces sont reçues et signées.", 0, "Le dossier est complet."],
    ["Il manque un justificatif de domicile.", 1, "Une pièce obligatoire manque."],
    ["La pièce d'identité est expirée.", 1, "Elle n'est pas valable."],
    ["Le bulletin de salaire date de la semaine dernière.", 0, "Il est récent."]
  ] },

"C22c-P1": { type: "cartes", titre: "Suivre une démarche administrative", cartes: [
    ["Pourquoi relancer sans attendre ?", "Chaque jour de retard décale la livraison au client."],
    ["Une bonne relance précise…", "Le dossier concerné, la date de dépôt et ce que l'on attend."],
    ["Après la relance, on…", "Note la date et la prochaine échéance de suivi."],
    ["Le client doit-il être prévenu ?", "Oui, avant qu'il ne s'inquiète, avec une date réaliste."]
  ] },

"C23a-P1": { type: "tri", titre: "Premiers mots face à une réclamation", consigne: "Un client appelle : sa voiture livrée présente un défaut. Que dire d'abord ?",
  categories: ["Bonne réaction", "Mauvaise réaction"],
  items: [
    ["« Je comprends votre déception, merci de nous prévenir. »", 0, "On accueille la réclamation."],
    ["« Ce n'est pas possible, on contrôle tout. »", 1, "On nie avant de vérifier."],
    ["« C'est sûrement arrivé après la livraison. »", 1, "On accuse le client."],
    ["« Je vérifie la fiche de contrôle et je vous rappelle avant midi. »", 0, "On s'engage sur une action datée."]
  ] },

"C23b-P1": { type: "tri", titre: "Ce qui agace le plus un client", consigne: "Un véhicule n'est pas prêt à l'atelier. Qu'est-ce qui aggrave la situation ?",
  categories: ["Aggrave", "Apaise"],
  items: [
    ["Ne pas avoir été prévenu du retard.", 0, "Le client se sent oublié."],
    ["Recevoir une nouvelle date précise et une explication.", 1, "Le client peut s'organiser."],
    ["Devoir rappeler trois fois pour avoir une réponse.", 0, "Il perd du temps."],
    ["Se voir proposer un véhicule de courtoisie.", 1, "On limite la gêne."]
  ] },

"C23c-P1": { type: "tri", titre: "Erreur de facture : que faire ?", consigne: "Une entreprise signale une erreur sur sa facture. Ces réactions sont-elles appropriées ?",
  categories: ["Appropriée", "À éviter"],
  items: [
    ["Comparer la facture au bon de commande.", 0, "On vérifie les faits."],
    ["Demander au client de payer d'abord et de réclamer ensuite.", 1, "On lui fait porter l'erreur."],
    ["Reconnaître l'erreur et annoncer l'envoi d'un avoir.", 0, "On corrige proprement."],
    ["Corriger la facture sans prévenir le client.", 1, "Il doit être informé."]
  ] },

"C24a-P1": { type: "tri", titre: "Classer une note NPS", consigne: "« Recommanderiez-vous la concession ? » Note de 0 à 10.",
  categories: ["Détracteur (0-6)", "Passif (7-8)", "Promoteur (9-10)"],
  items: [
    ["Un client de l'atelier donne 6.", 0, "6 est encore un détracteur."],
    ["Une cliente du pôle occasion donne 9.", 2, "Promotrice."],
    ["Un artisan donne 8.", 1, "Passif."],
    ["Un client VN donne 3.", 0, "Détracteur."]
  ] },

"C24b-P1": { type: "tri", titre: "Répondre à un avis en ligne", consigne: "Un client laisse 3 étoiles. Ces phrases ont-elles leur place dans la réponse publique ?",
  categories: ["À écrire", "À éviter"],
  items: [
    ["« Merci pour votre retour, il nous aide à progresser. »", 0, "On remercie."],
    ["« Vous n'avez rien compris à l'offre. »", 1, "On ne contredit pas en public."],
    ["« Nous aimerions en parler avec vous : contactez-nous au service client. »", 0, "On propose un échange privé."],
    ["Le détail du contrat de financement du client.", 1, "Information personnelle."]
  ] },

"C24c-P1": { type: "tri", titre: "Bonne question d'enquête ?", consigne: "Une question d'enquête doit être neutre et claire.",
  categories: ["Bonne question", "Question orientée ou floue"],
  items: [
    ["« Comment évaluez-vous l'accueil lors de votre visite, de 1 à 5 ? »", 0, "Neutre et mesurable."],
    ["« N'avez-vous pas trouvé notre accueil excellent ? »", 1, "Elle pousse à répondre oui."],
    ["« Les explications sur votre véhicule étaient-elles claires ? »", 0, "Précise et neutre."],
    ["« Que pensez-vous de tout ? »", 1, "Trop vague."]
  ] },

"C31a-P1": { type: "tri", titre: "Informer sans affoler", consigne: "Un message de rappel technique doit rassurer et guider. Ces phrases conviennent-elles ?",
  categories: ["Rassurante et utile", "Inquiétante ou vague"],
  items: [
    ["« L'intervention est gratuite et dure environ une heure. »", 0, "Information concrète."],
    ["« Votre véhicule est peut-être dangereux. »", 1, "Alarmant et sans solution."],
    ["« Prenez rendez-vous au numéro ci-dessous, nous vous accueillons dès lundi. »", 0, "Le client sait quoi faire."],
    ["« Il y a un problème, on vous dira plus tard. »", 1, "Flou et inquiétant."]
  ] },

"C31b-P1": { type: "tri", titre: "Message de fidélité ou message commercial ?", consigne: "Pour un anniversaire d'achat, on privilégie la relation. Ces phrases vont-elles dans ce sens ?",
  categories: ["Relation", "Trop commercial"],
  items: [
    ["« Cela fait un an que vous roulez avec nous : merci de votre confiance ! »", 0, "On remercie simplement."],
    ["« Profitez vite de notre offre de reprise avant samedi ! »", 1, "Trop insistant pour ce message."],
    ["« Tout se passe bien avec votre véhicule ? »", 0, "On prend des nouvelles."],
    ["Trois liens vers des promotions.", 1, "Le message devient publicitaire."]
  ] },

"C31c-P1": { type: "tri", titre: "Informer qui d'une nouveauté ?", consigne: "Un nouvel utilitaire arrive. Quels clients informer en priorité ?",
  categories: ["À informer", "Pas prioritaire"],
  items: [
    ["Un artisan dont l'utilitaire a 6 ans.", 0, "Besoin probable de renouvellement."],
    ["Une cliente qui vient d'acheter une citadine il y a un mois.", 1, "Besoin sans rapport."],
    ["Une entreprise qui a demandé un devis utilitaire l'an dernier.", 0, "Intérêt déjà exprimé."],
    ["Un client qui a demandé à ne plus recevoir de messages.", 1, "On respecte son choix."]
  ] },

"C32a-P1": { type: "tri", titre: "Avantage fidélité : bonne idée ?", consigne: "Un avantage réservé aux clients fidèles doit être concret et raisonnable.",
  categories: ["Bonne idée", "Mauvaise idée"],
  items: [
    ["Une révision offerte pour le troisième véhicule acheté.", 0, "Concret et lié à la fidélité."],
    ["Une remise énorme qui fait perdre de l'argent sur chaque vente.", 1, "Pas rentable pour la concession."],
    ["Un accès prioritaire aux essais des nouveautés.", 0, "Valorisant, peu coûteux."],
    ["Un avantage dont les conditions ne sont expliquées nulle part.", 1, "Le client ne comprend pas."]
  ] },

"C32b-P1": { type: "etapes", titre: "Le parcours d'un parrainage", intro: "Un parrainage récompense deux personnes, au bon moment.",
  etapes: [
    { ico: "🗣️", k: "Recommander", s: "Le client parle de la concession à un proche" },
    { ico: "🤝", k: "Venir", s: "Le proche se présente de la part du parrain" },
    { ico: "✍️", k: "Acheter", s: "Le filleul achète un véhicule" },
    { ico: "🎁", k: "Récompenser", s: "Les deux avantages sont versés, seulement après l'achat" }
  ] },

"C32c-P1": { type: "tri", titre: "Une soirée clients, pas une vente forcée", consigne: "Pour une soirée réservée aux clients, ces idées renforcent-elles la relation ?",
  categories: ["Renforce la relation", "Trop commercial"],
  items: [
    ["Un atelier « bien entretenir sa voiture en hiver ».", 0, "Un conseil utile et gratuit."],
    ["Un vendeur qui présente des bons de commande à chaque invité.", 1, "Les invités se sentent piégés."],
    ["Un essai libre des nouveautés.", 0, "Découverte sans pression."],
    ["Une invitation titrée « Dernière chance avant hausse des prix ».", 1, "Message de pression."]
  ] },

"C32d-P1": { type: "tri", titre: "Après une réclamation résolue", consigne: "Un client a eu un problème, réglé depuis. Ce geste est-il adapté ?",
  categories: ["Adapté", "Inadapté"],
  items: [
    ["Un message pour vérifier que tout va bien depuis la réparation.", 0, "On montre qu'on s'en soucie."],
    ["Un bon pour un lavage offert à la prochaine visite.", 0, "Un geste simple et proportionné."],
    ["Lui proposer immédiatement de changer de voiture.", 1, "Ce n'est pas le moment."],
    ["Ne plus jamais le recontacter.", 1, "On laisse la relation se dégrader."]
  ] },

"C33a-P1": { type: "cartes", titre: "Mesurer une campagne de fidélisation", cartes: [
    ["Taux de conversion ?", "Nombre de ventes ÷ nombre de clients contactés × 100."],
    ["Coût total d'une offre ?", "Coût de l'avantage × nombre de clients qui en ont profité."],
    ["Pourquoi comparer à un repère ?", "Pour savoir si le résultat est bon ou faible."],
    ["Limite d'une analyse ?", "Ce qu'elle ne permet pas de savoir, par exemple si ces clients auraient acheté de toute façon."]
  ] },

"C33b-P1": { type: "cartes", titre: "Comparer deux actions", cartes: [
    ["Pour comparer deux actions, on regarde…", "Le résultat obtenu et ce qu'il a coûté."],
    ["Coût par vente ?", "Coût total de l'action ÷ nombre de ventes obtenues."],
    ["Une action qui rapporte plus est-elle forcément la meilleure ?", "Pas si elle coûte beaucoup plus cher pour chaque vente."],
    ["Une bonne recommandation est…", "Argumentée avec les chiffres des deux actions."]
  ] },

"C33c-P1": { type: "tri", titre: "Pourquoi une action ne marche pas ?", consigne: "Un programme de fidélité attire peu de clients. Quel type de cause ?",
  categories: ["Problème d'information", "Problème d'intérêt", "Problème de simplicité"],
  items: [
    ["Les clients ne savaient pas que le programme existait.", 0, "Il a été mal annoncé."],
    ["L'avantage proposé ne les intéresse pas.", 1, "La récompense n'attire pas."],
    ["Il fallait remplir un long formulaire papier.", 2, "Trop compliqué pour participer."],
    ["Le mail d'annonce est arrivé dans les indésirables.", 0, "Le message n'a pas été vu."]
  ] },

"B44a-P1": { type: "cartes", titre: "Les taux d'une campagne mail", cartes: [
    ["Taux de réponse ?", "Réponses reçues ÷ mails envoyés × 100."],
    ["Taux de transformation en rendez-vous ?", "Rendez-vous ÷ réponses × 100."],
    ["Un écart en points, c'est…", "La différence entre deux pourcentages : 8 % contre 10 %, c'est 2 points."],
    ["Si le taux de réponse est faible, on revoit…", "L'objet, l'accroche ou la cible du mail."]
  ] },

"B44b-P1": { type: "tri", titre: "Trop tôt pour conclure ?", consigne: "Après une semaine de phoning, peut-on tirer ces conclusions ?",
  categories: ["Conclusion possible", "Trop tôt pour conclure"],
  items: [
    ["Le nombre de rendez-vous obtenus cette semaine.", 0, "C'est un fait mesuré."],
    ["Le chiffre d'affaires final de la campagne.", 1, "Les ventes viennent souvent plus tard."],
    ["Le taux de rendez-vous par appel.", 0, "On peut le calculer dès maintenant."],
    ["« Le phoning ne marche pas. »", 1, "Une semaine ne suffit pas pour juger."]
  ] },

"B44c-P1": { type: "tri", titre: "Corriger le tir après une semaine", consigne: "Après une semaine, les résultats sont faibles. Bon ajustement ?",
  categories: ["Bon ajustement", "Mauvais ajustement"],
  items: [
    ["Changer un seul élément, l'objet du mail, pour mesurer son effet.", 0, "On saura ce qui a joué."],
    ["Tout changer en même temps.", 1, "Impossible de savoir ce qui a marché."],
    ["Mieux cibler les destinataires.", 0, "On s'adresse aux bons prospects."],
    ["Arrêter de mesurer les résultats.", 1, "On pilote à l'aveugle."]
  ] },

"B44d-P1": { type: "cartes", titre: "Relancer un devis à temps", cartes: [
    ["Durée de validité d'un devis ?", "La période pendant laquelle le prix proposé est garanti."],
    ["Pourquoi relancer avant l'expiration ?", "Pour que le client décide avec le prix proposé."],
    ["Une relance efficace se termine par…", "Une question ouverte ou une proposition de rendez-vous."],
    ["Après la relance, on note…", "La date, la réponse et la prochaine action."]
  ] },

"B45a-P1": { type: "chaine", titre: "Un argument chiffré pour un SUV hybride", intro: "Un client qui roule beaucoup veut faire des économies. Entraîne-toi sur la consommation.",
  questions: ["Et donc ?", "Et pour le client, sur une année ?"],
  maillons: [
    { k: "Caractéristique", txt: "Ce SUV hybride consomme 1,5 L de moins aux 100 km que son ancien modèle." },
    { k: "Avantage", txt: "…donc il dépense moins de carburant à chaque trajet." },
    { k: "Bénéfice", txt: "…sur 20 000 km par an, il économise 300 litres de carburant." }
  ] },

"B45b-P1": { type: "chaine", titre: "Vendre un service, pas seulement un véhicule", intro: "Un client trouve un prix plus bas chez un vendeur en ligne. Valorise un service de la concession.",
  questions: ["Et donc ?", "Et pour le client ?"],
  maillons: [
    { k: "Caractéristique", txt: "La concession prête un véhicule pendant les révisions." },
    { k: "Avantage", txt: "…donc il n'est jamais immobilisé quand sa voiture est à l'atelier." },
    { k: "Bénéfice", txt: "…il continue à aller travailler sans organiser de solution de dépannage." }
  ] },

"B45c-P1": { type: "tri", titre: "« J'ai trouvé moins cher ailleurs »", consigne: "Face à cette phrase, quelle est la bonne attitude ?",
  categories: ["Bonne attitude", "À éviter"],
  items: [
    ["« Pouvez-vous me montrer l'offre pour que l'on compare les équipements ? »", 0, "On vérifie qu'on compare la même chose."],
    ["« C'est impossible, vous vous trompez. »", 1, "On contredit sans vérifier."],
    ["S'aligner immédiatement sur le prix annoncé.", 1, "Sans vérification ni contrepartie."],
    ["« Comparons aussi la garantie et les services inclus. »", 0, "On élargit la comparaison à la valeur."]
  ] }

});

// ─────────── Palier 2 ───────────
Object.assign(EXERCICES_MISSIONS, {

"B41a-P2": { type: "tri", titre: "Trois demandes en même temps", consigne: "Une demande est-elle très qualifiée ? Regarde ce que le prospect a déjà précisé.",
  categories: ["Très qualifiée", "Peu qualifiée"],
  items: [
    ["Modèle choisi, budget indiqué, achat prévu ce mois-ci.", 0, "Besoin, budget et délai sont connus."],
    ["« Je regarde un peu, pour plus tard. »", 1, "Ni besoin précis ni délai."],
    ["Demande d'essai pour samedi, reprise à estimer.", 0, "Projet concret et proche."],
    ["Simple clic sur « en savoir plus », sans message.", 1, "Intérêt très vague."]
  ] },

"B41b-P2": { type: "cartes", titre: "Qualifier avec BANT", cartes: [
    ["B comme…", "Budget : ce que le prospect peut dépenser, ou la mensualité qu'il vise."],
    ["A comme…", "Autorité : qui décide de l'achat."],
    ["N comme…", "Besoin : l'usage réel du véhicule."],
    ["T comme…", "Temps : quand il veut acheter ou être livré."]
  ] },

"B41c-P2": { type: "tri", titre: "Source interne ou externe ?", consigne: "Pour qualifier un segment, on croise plusieurs sources. D'où vient chaque information ?",
  categories: ["Source interne", "Source externe"],
  items: [
    ["L'historique des ventes de la concession.", 0, "Données de l'entreprise."],
    ["Une étude nationale sur les achats automobiles.", 1, "Produite à l'extérieur."],
    ["Les fiches clients du CRM.", 0, "Base clients de l'entreprise."],
    ["Les chiffres d'immatriculation publiés par la presse spécialisée.", 1, "Information publique extérieure."]
  ] },

"B42a-P2": { type: "tri", titre: "Quel canal pour quel public ?", consigne: "Une campagne multicanalee adapte le message à chaque public.",
  categories: ["Mail aux clients", "Réseaux sociaux", "Presse locale"],
  items: [
    ["Des clients qui ont déjà acheté à la concession.", 0, "On les connaît : message personnalisé."],
    ["Des jeunes actifs qui ne connaissent pas encore la concession.", 1, "Là où ils passent du temps."],
    ["Des habitants plus âgés du secteur.", 2, "Un canal qu'ils lisent."],
    ["Des abonnés à la page de la concession.", 1, "Une communauté déjà intéressée."]
  ] },

"B42b-P2": { type: "cartes", titre: "Choisir sous contrainte de budget", cartes: [
    ["Coût par rendez-vous ?", "Coût de l'action ÷ nombre de rendez-vous obtenus."],
    ["Moins cher, donc meilleur ?", "Non : on compare aussi le nombre de rendez-vous et de ventes obtenus."],
    ["Combiner deux options : condition ?", "Le total doit rester dans le budget."],
    ["Avant d'engager une dépense, on…", "Vérifie l'hypothèse sur un petit test."]
  ] },

"B42c-P2": { type: "etapes", titre: "Planifier à rebours", intro: "Pour une opération saisonnière, on part de la date clé et on remonte le calendrier.",
  etapes: [
    { ico: "🏁", k: "Date clé", s: "Le moment où le client doit être équipé" },
    { ico: "🚚", k: "Délai de livraison", s: "On le retire pour connaître la date de commande" },
    { ico: "✍️", k: "Décision du client", s: "Elle doit arriver avant la date de commande" },
    { ico: "📣", k: "Lancement", s: "Assez tôt pour laisser le temps de décider" }
  ] },

"B42d-P2": { type: "tri", titre: "Ce que coûte un choix", consigne: "Choisir un plan, c'est renoncer à l'autre. Comment classer chaque élément ?",
  categories: ["Gain du plan choisi", "Perte du plan écarté"],
  items: [
    ["Les rendez-vous attendus grâce au plan retenu.", 0, "Ce que l'on obtient."],
    ["Les clients du plan écarté qui ne seront pas contactés ce mois-ci.", 1, "Ce que l'on laisse de côté."],
    ["L'atteinte de l'objectif du mois.", 0, "Résultat du plan retenu."],
    ["Un risque que ces clients partent chez un concurrent.", 1, "Conséquence du plan écarté."]
  ] },

"B43a-P2": { type: "tri", titre: "Objection et bonne réponse", consigne: "Une gérante d'entreprise enchaîne les objections. Quelle réponse va avec laquelle ?",
  categories: ["« Pas le budget »", "« Pas le temps »", "« Mes véhicules roulent encore »"],
  items: [
    ["« Comparons ce que vous coûtent aujourd'hui les réparations. »", 2, "On montre le coût caché d'un vieux véhicule."],
    ["« Une location longue durée étale la dépense chaque mois. »", 0, "On adapte le financement."],
    ["« Je vous propose un essai de 15 minutes sur votre lieu de travail. »", 1, "On simplifie la démarche."],
    ["« Une panne au mauvais moment, c'est combien de chantiers perdus ? »", 2, "On fait réfléchir au risque."]
  ] },

"B43b-P2": { type: "tri", titre: "Fait observé ou supposition ?", consigne: "Face à un client difficile à cerner, on sépare ce qu'on sait de ce qu'on imagine.",
  categories: ["Fait observé", "Supposition"],
  items: [
    ["Il est venu deux fois aux portes ouvertes.", 0, "C'est un fait."],
    ["Il veut sûrement une voiture haut de gamme.", 1, "On n'en sait rien."],
    ["Il a demandé une estimation de reprise.", 0, "C'est un fait."],
    ["Il n'a pas le budget.", 1, "Supposition à vérifier par une question."]
  ] },

"B43c-P2": { type: "tri", titre: "Face à un concurrent déjà en place", consigne: "Le prospect dit : « Un concurrent m'a déjà fait une offre. » Bonne réaction ?",
  categories: ["Bonne réaction", "À éviter"],
  items: [
    ["« Très bien. Qu'est-ce qui vous a plu dans son offre ? »", 0, "On découvre ses critères."],
    ["« Ils ne sont pas sérieux, je vous le dis. »", 1, "On ne critique pas un concurrent."],
    ["« Je vous propose de comparer aussi le service après-vente. »", 0, "On élargit la comparaison."],
    ["Raccrocher en pensant que c'est perdu.", 1, "Rien n'est encore signé."]
  ] },

"B43d-P2": { type: "tri", titre: "Suivre un prospect qui change de canal", consigne: "Une cliente potentielle ne répond pas aux mails mais commente sur Instagram. Que faire ?",
  categories: ["Bonne pratique", "Mauvaise pratique"],
  items: [
    ["Lui répondre publiquement en quelques mots, puis en message privé.", 0, "On suit son canal sans exposer ses données."],
    ["Lui écrire en public le détail de son devis.", 1, "Information personnelle."],
    ["Noter dans le CRM qu'elle préfère ce canal.", 0, "L'équipe le saura."],
    ["Continuer à lui envoyer des mails chaque jour.", 1, "Elle ne les lit pas."]
  ] },

"B44a-P2": { type: "cartes", titre: "Comparer deux canaux", cartes: [
    ["Coût par vente d'un canal ?", "Coût du canal ÷ nombre de ventes obtenues."],
    ["Taux de prise de rendez-vous ?", "Rendez-vous ÷ contacts touchés × 100."],
    ["Un canal qui génère beaucoup de contacts est-il le meilleur ?", "Pas forcément : on regarde aussi les ventes et le coût."],
    ["Répartir un budget entre canaux ?", "On donne plus au canal qui coûte le moins par vente."]
  ] },

"B44b-P2": { type: "tri", titre: "Pourquoi une campagne baisse ?", consigne: "Un mail mensuel a soudain moins de réponses. Quelle étape est en cause ?",
  categories: ["Le mail n'est pas ouvert", "Le mail est ouvert mais ne convainc pas"],
  items: [
    ["Le taux d'ouverture a chuté de moitié.", 0, "L'objet ou l'heure d'envoi posent problème."],
    ["Le mail a été envoyé un samedi à 23 h.", 0, "Mauvais moment d'envoi."],
    ["Beaucoup ouvrent, mais personne ne clique sur l'offre.", 1, "Le contenu ou l'offre n'attirent pas."],
    ["L'offre du mois est identique à celle du mois dernier.", 1, "Rien de nouveau à proposer."]
  ] },

"B44c-P2": { type: "tri", titre: "Bon indicateur de prospection ?", consigne: "Un tableau de bord garde peu d'indicateurs, mais utiles.",
  categories: ["Utile", "Peu utile"],
  items: [
    ["Nombre de rendez-vous obtenus par mois.", 0, "Mesure directe du résultat."],
    ["Taux de transformation des rendez-vous en ventes.", 0, "Mesure l'efficacité."],
    ["Nombre de stylos commandés pour le showroom.", 1, "Sans rapport avec la prospection."],
    ["Coût de la prospection par vente.", 0, "Mesure la rentabilité."]
  ] },

"B44d-P2": { type: "tri", titre: "Quel devis relancer en premier ?", consigne: "Plusieurs devis attendent. Par lequel commencer ?",
  categories: ["En premier", "Plus tard"],
  items: [
    ["Un devis qui expire après-demain.", 0, "Échéance la plus proche."],
    ["Un devis envoyé hier.", 1, "Trop tôt pour relancer."],
    ["Un client qui a dit « je décide en fin de semaine ».", 0, "Décision imminente."],
    ["Un devis valable encore un mois, client en vacances.", 1, "Pas d'urgence."]
  ] },

"B45a-P2": { type: "tri", titre: "Les critères oubliés par le client", consigne: "Un client compare deux voitures sur le prix, la puissance et le coffre. Quels critères a-t-il oubliés ?",
  categories: ["Déjà dans sa comparaison", "Critère oublié"],
  items: [
    ["Le prix affiché.", 0, "Il l'a comparé."],
    ["Le coût d'entretien sur plusieurs années.", 1, "Il pèse sur le budget réel."],
    ["La garantie et sa durée.", 1, "Elle protège le client."],
    ["Le volume du coffre.", 0, "Il l'a comparé."]
  ] },

"B45b-P2": { type: "tri", titre: "Client parti ailleurs : que faire ?", consigne: "Un client annonce qu'il achète chez un concurrent. Réaction adaptée ?",
  categories: ["Adaptée", "À éviter"],
  items: [
    ["Le remercier et lui demander ce qui a fait la différence.", 0, "On apprend, et on garde la relation."],
    ["Lui reprocher de nous avoir fait perdre du temps.", 1, "On ferme la porte définitivement."],
    ["Lui rappeler un service qui compte pour lui, sans insister.", 0, "Dernière information utile."],
    ["Lui proposer une remise énorme dans la panique.", 1, "On brade sans réfléchir."]
  ] },

"B45c-P2": { type: "tri", titre: "Répondre à un client expert", consigne: "Un client connaît bien la mécanique. Comment classer ses questions ?",
  categories: ["Je réponds tout de suite", "Je vérifie avant de répondre"],
  items: [
    ["La puissance du moteur, indiquée sur la fiche technique.", 0, "Information disponible."],
    ["Le coût précis d'une pièce rare dans 5 ans.", 1, "On ne l'invente pas : on vérifie avec l'atelier."],
    ["La durée de la garantie constructeur.", 0, "Information connue."],
    ["Un détail technique que tu ne connais pas.", 1, "Mieux vaut dire « je vérifie » que se tromper."]
  ] },

"C11a-P2": { type: "tri", titre: "Une grille de veille utile", consigne: "Pour suivre deux concurrents chaque semaine, cette information va-t-elle dans la grille ?",
  categories: ["Dans la grille", "Hors grille"],
  items: [
    ["Les prix affichés des modèles comparables.", 0, "On suit leur évolution."],
    ["Les offres de financement du moment.", 0, "Elles influencent les clients."],
    ["La couleur de la façade de leur concession.", 1, "Sans effet sur nos ventes."],
    ["Les avis clients publiés en ligne.", 0, "Ils révèlent forces et faiblesses."]
  ] },

"C11b-P2": { type: "cartes", titre: "Une nouvelle règle, une opportunité", cartes: [
    ["ZFE ?", "Zone à faibles émissions : certains véhicules anciens n'y ont plus accès."],
    ["Qui est concerné en premier ?", "Les propriétaires de véhicules anciens qui circulent dans la zone."],
    ["Pourquoi distinguer particuliers et professionnels ?", "Leurs contraintes et leurs budgets ne sont pas les mêmes."],
    ["Avant d'informer les clients, on vérifie…", "Les dates et les règles dans la source officielle."]
  ] },

"C11c-P2": { type: "tri", titre: "Que mesure vraiment chaque source ?", consigne: "Deux sources semblent dire le contraire. Classe chaque information.",
  categories: ["Chiffre national", "Chiffre local de la concession"],
  items: [
    ["Les ventes de toutes les marques en France.", 0, "Périmètre national."],
    ["Les ventes de la concession ce trimestre.", 1, "Périmètre local."],
    ["Un article de presse sur le marché automobile.", 0, "Tendance générale."],
    ["Les commandes enregistrées dans le CRM.", 1, "Données de la concession."]
  ] },

"C11d-P2": { type: "tri", titre: "Source fiable pour les aides à l'achat ?", consigne: "Pour mettre à jour un argumentaire, quelle source croire en priorité ?",
  categories: ["Fiable", "À vérifier"],
  items: [
    ["Le site officiel de l'administration.", 0, "Source officielle."],
    ["Un post viral sur un réseau social.", 1, "Souvent incomplet ou ancien."],
    ["La note d'information du constructeur au réseau.", 0, "Source professionnelle datée."],
    ["« Un client m'a dit que… »", 1, "Information non vérifiée."]
  ] },

"C12a-P2": { type: "etapes", titre: "Reprendre une conversation commencée ailleurs", intro: "Un client a commencé sur le chat et écrit maintenant par mail.",
  etapes: [
    { ico: "🧾", k: "Relire", s: "Ce qui a déjà été dit sur le premier canal" },
    { ico: "🔎", k: "Repérer", s: "Ce qui a changé dans sa nouvelle demande" },
    { ico: "✅", k: "Vérifier", s: "Ce que l'on peut promettre sans erreur" },
    { ico: "✉️", k: "Répondre", s: "Sur le canal qu'il utilise maintenant, et noter le suivi" }
  ] },

"C12b-P2": { type: "tri", titre: "Une cliente écrit sur trois canaux", consigne: "Une cliente impatiente écrit par mail, sur le chat et sur Instagram. Bonne pratique ?",
  categories: ["Bonne pratique", "Mauvaise pratique"],
  items: [
    ["Donner une seule réponse complète, puis la signaler sur les autres canaux.", 0, "Pas de messages contradictoires."],
    ["Répondre différemment sur chaque canal.", 1, "Elle reçoit des informations incohérentes."],
    ["Répondre publiquement en quelques mots, sans détail personnel.", 0, "On rassure sans exposer ses données."],
    ["Ignorer le commentaire public.", 1, "D'autres clients le voient sans réponse."]
  ] },

"C12c-P2": { type: "cartes", titre: "Deux prix différents pour un même véhicule", cartes: [
    ["Premier réflexe ?", "Vérifier quel prix est valable et à quelle date."],
    ["Durée de validité d'une offre ?", "La période pendant laquelle le prix affiché s'applique."],
    ["Faut-il cacher l'erreur au client ?", "Non : on explique, on s'excuse et on applique la règle prévue."],
    ["Pour éviter que ça recommence ?", "Une vérification régulière des prix sur tous les canaux."]
  ] },

"C12d-P2": { type: "tri", titre: "Qui décide chez un client professionnel ?", consigne: "Dans une entreprise, plusieurs personnes interviennent. Quel rôle joue chacune ?",
  categories: ["Décide", "Utilise", "Paie ou valide"],
  items: [
    ["La gérante qui signe la commande.", 0, "Elle prend la décision."],
    ["Le salarié qui conduira l'utilitaire.", 1, "Il l'utilise au quotidien."],
    ["Le comptable qui vérifie le financement.", 2, "Il contrôle la dépense."],
    ["Le chef d'équipe qui teste le véhicule.", 1, "Il donne son avis d'utilisateur."]
  ] },

"C13a-P2": { type: "chaine", titre: "Un financement combiné, pas à pas", intro: "Exemple : véhicule à 30 000 €, reprise à 5 000 €, apport de 3 000 €.",
  questions: ["Et ensuite ?", "Que reste-t-il à financer ?"],
  maillons: [
    { k: "Prix du véhicule", txt: "30 000 €" },
    { k: "Moins la reprise", txt: "30 000 − 5 000 = 25 000 €" },
    { k: "Moins l'apport", txt: "25 000 − 3 000 = 22 000 € à financer" }
  ] },

"C13b-P2": { type: "cartes", titre: "Acompte et solde", cartes: [
    ["Acompte ?", "Une partie du prix versée à la commande."],
    ["Solde ?", "Prix total − acompte : ce qui reste à payer à la livraison."],
    ["Contrainte inhabituelle : réflexe ?", "Vérifier la procédure prévue avant de promettre quoi que ce soit."],
    ["Un dossier de vente clair indique…", "Le véhicule, la reprise, les montants et les dates."]
  ] },

"C13c-P2": { type: "tri", titre: "Deux acheteurs, deux priorités", consigne: "Un couple achète ensemble. Quelle préoccupation chaque phrase exprime-t-elle ?",
  categories: ["Budget", "Confort et équipement"],
  items: [
    ["« Ça fait combien par mois, au total ? »", 0, "Elle surveille la dépense."],
    ["« Il y a des sièges chauffants ? »", 1, "Il pense au confort."],
    ["« On ne veut pas dépasser ce qu'on paie aujourd'hui. »", 0, "Limite de budget."],
    ["« Le coffre doit accueillir la poussette. »", 1, "Besoin d'équipement."]
  ] },

"C13d-P2": { type: "etapes", titre: "Corriger une erreur après signature", intro: "On reconnaît l'erreur et on corrige proprement, dans l'ordre.",
  etapes: [
    { ico: "🔍", k: "Prouver", s: "Les éléments qui montrent l'erreur" },
    { ico: "🧮", k: "Recalculer", s: "Le nouveau prix et la différence" },
    { ico: "📞", k: "Prévenir le client", s: "Avec des excuses et une solution" },
    { ico: "📝", k: "Corriger le document", s: "Faire signer un avenant" }
  ] },

"C21a-P2": { type: "tri", titre: "Retard sur retard", consigne: "Un client apprend un deuxième retard. Ce geste est-il proportionné ?",
  categories: ["Proportionné", "Disproportionné"],
  items: [
    ["Un véhicule de courtoisie jusqu'à la livraison.", 0, "Il compense la gêne réelle."],
    ["Lui offrir le véhicule.", 1, "Sans rapport avec la gêne."],
    ["Un premier entretien offert.", 0, "Un geste raisonnable."],
    ["Aucune excuse, puisque ce n'est pas notre faute.", 1, "Le client vit le retard chez nous."]
  ] },

"C21b-P2": { type: "tri", titre: "Coordonner une livraison groupée", consigne: "Trois véhicules doivent être livrés ensemble. Ce point de contrôle est-il utile ?",
  categories: ["Utile", "Inutile"],
  items: [
    ["Vérifier deux jours avant que les trois véhicules sont prêts.", 0, "On a le temps de réagir."],
    ["Confirmer l'heure de livraison avec le client la veille.", 0, "Il prévoit ses équipes."],
    ["Attendre le jour J pour voir si tout est prêt.", 1, "Trop tard pour corriger."],
    ["Prévenir l'atelier du nombre exact d'accessoires à poser.", 0, "Il prépare le travail."]
  ] },

"C21c-P2": { type: "tri", titre: "Prévenir maintenant ou attendre ?", consigne: "Une pièce risque d'arriver en retard. Faut-il prévenir le client tout de suite ?",
  categories: ["Prévenir maintenant", "Attendre d'en savoir plus"],
  items: [
    ["Le retard menace un départ en vacances déjà réservé.", 0, "Il doit pouvoir s'organiser."],
    ["Le fournisseur confirme la date dans une heure.", 1, "On aura une information fiable très vite."],
    ["Le client a une date impérative, et le risque est sérieux.", 0, "Mieux vaut l'avertir tôt."],
    ["Le risque est faible et il reste trois semaines de marge.", 1, "Pas d'inquiétude inutile."]
  ] },

"C22a-P2": { type: "tri", titre: "Tâches en série ou en parallèle ?", consigne: "Plusieurs services interviennent sur un dossier. Peut-on mener ces tâches en même temps ?",
  categories: ["En parallèle", "Une après l'autre"],
  items: [
    ["Commander les accessoires et préparer le dossier de financement.", 0, "Ils ne dépendent pas l'un de l'autre."],
    ["Poser un aménagement puis faire la préparation esthétique.", 1, "La deuxième attend la première."],
    ["Demander l'immatriculation et commander les plaques.", 1, "Les plaques dépendent de l'immatriculation."],
    ["Prévenir le client et réserver le créneau de livraison.", 0, "Deux actions indépendantes."]
  ] },

"C22b-P2": { type: "cartes", titre: "Choisir entre deux prestataires", cartes: [
    ["Premier critère ?", "Répondre au besoin du client, dans son délai."],
    ["Ensuite, on compare…", "Le prix, la qualité, la garantie et la simplicité pour le client."],
    ["Une organisation qui ne respecte pas la date demandée…", "Est écartée, même si elle est moins chère."],
    ["Après le choix, on…", "Transmet un dossier clair au prestataire retenu."]
  ] },

"C22c-P2": { type: "tri", titre: "Relancer un partenaire silencieux", consigne: "Un courtier ne répond pas depuis plusieurs jours. Bonne façon de relancer ?",
  categories: ["Bonne relance", "Mauvaise relance"],
  items: [
    ["Changer de canal : appeler après un mail resté sans réponse.", 0, "On augmente les chances d'être entendu."],
    ["Rappeler le dossier, la date de la première demande et l'échéance.", 0, "Le partenaire comprend l'urgence."],
    ["Envoyer le même mail toutes les heures.", 1, "Insistant et inefficace."],
    ["Ne rien dire au client et attendre.", 1, "Il risque de découvrir le retard seul."]
  ] },

"C23a-P2": { type: "tri", titre: "Responsabilité partagée", consigne: "Un retard vient en partie du transporteur, en partie d'un oubli de la concession. Comment classer ?",
  categories: ["Manquement de la concession", "Cause extérieure"],
  items: [
    ["Le client n'a pas été prévenu du retard.", 0, "C'était à nous de le faire."],
    ["Le transporteur a eu une panne de camion.", 1, "Événement extérieur."],
    ["La date annoncée au client n'avait pas été vérifiée.", 0, "Erreur interne."],
    ["Une grève a bloqué le port de livraison.", 1, "Cause extérieure."]
  ] },

"C23b-P2": { type: "cartes", titre: "Une cliente qui revient pour la troisième fois", cartes: [
    ["Pourquoi regarder l'historique ?", "Pour comprendre si le problème se répète ou s'aggrave."],
    ["Une réclamation répétée change…", "Le niveau d'attention : on traite la cause, pas seulement le symptôme."],
    ["À l'atelier, on demande…", "Un diagnostic complet, pas une simple retouche."],
    ["Le geste commercial doit être…", "Proportionné à la gêne totale vécue par la cliente."]
  ] },

"C23c-P2": { type: "tri", titre: "Face à une menace de recours", consigne: "Un client professionnel menace d'aller en justice. Que peut-on dire ou non ?",
  categories: ["Peut être dit", "À ne pas dire"],
  items: [
    ["« Nous suivons votre dossier en priorité et vous rappelons jeudi. »", 0, "Engagement précis et tenable."],
    ["« C'est sûrement votre faute. »", 1, "Accusation sans preuve."],
    ["« Une expertise est prévue : nous vous transmettrons le résultat. »", 0, "Information factuelle."],
    ["« On vous remboursera tout, c'est certain. »", 1, "Promesse avant les conclusions de l'expertise."]
  ] },

"C24a-P2": { type: "cartes", titre: "Lire une tendance NPS", cartes: [
    ["NPS ?", "% de promoteurs − % de détracteurs."],
    ["Pourquoi se méfier d'un seul mois ?", "Avec peu de réponses, un résultat peut varier par hasard."],
    ["Comparer avant et après une action ?", "On compare des moyennes sur plusieurs mois."],
    ["Peu de réponses dans un mois : conséquence ?", "Le résultat est fragile et ne suffit pas à conclure."]
  ] },

"C24b-P2": { type: "tri", titre: "Un client passif", consigne: "Un client donne 7 sur 10. Que peut-on tirer de son commentaire ?",
  categories: ["Point positif", "Point à améliorer"],
  items: [
    ["« Le vendeur a été à l'écoute. »", 0, "À conserver."],
    ["« J'ai attendu longtemps la remise des clés. »", 1, "Une attente à réduire."],
    ["« Le véhicule correspond à l'annonce. »", 0, "La confiance est là."],
    ["« Personne ne m'a expliqué les équipements. »", 1, "Une étape à soigner."]
  ] },

"C24c-P2": { type: "tri", titre: "Le global cache-t-il un problème ?", consigne: "Un NPS global « correct » peut cacher des écarts entre segments.",
  categories: ["Segment en progrès", "Segment en recul"],
  items: [
    ["Particuliers : NPS de +20 à +28 en trois trimestres.", 0, "Il monte."],
    ["Professionnels : NPS de +15 à −2 en trois trimestres.", 1, "Il chute fortement."],
    ["Atelier : NPS stable puis en hausse.", 0, "Tendance positive."],
    ["Occasion : NPS en baisse chaque trimestre.", 1, "Tendance négative."]
  ] },

"C31a-P2": { type: "tri", titre: "Renouer avec un client silencieux", consigne: "Un client ne donne plus de nouvelles depuis 3 ans. Premier message adapté ?",
  categories: ["Adapté", "Inadapté"],
  items: [
    ["Un message utile : rappel d'entretien, avec un créneau proposé.", 0, "Une raison concrète de reprendre contact."],
    ["« Pourquoi nous avez-vous abandonnés ? »", 1, "Culpabilisant."],
    ["Une offre agressive pour changer de voiture.", 1, "Trop commercial pour un premier contact."],
    ["Prendre des nouvelles de son véhicule.", 0, "On montre de l'intérêt pour lui."]
  ] },

"C31b-P2": { type: "tri", titre: "Adapter un message à chaque client", consigne: "De nouveaux horaires d'ouverture à annoncer. Quel ajout pour quel client ?",
  categories: ["Préciser l'ouverture du samedi", "Préciser l'ouverture tôt le matin", "Ne pas envoyer"],
  items: [
    ["Un client qui travaille en semaine et vient le week-end.", 0, "Le samedi l'intéresse."],
    ["Un artisan qui dépose son utilitaire avant son chantier.", 1, "Le matin tôt l'intéresse."],
    ["Une cliente désinscrite des envois de la concession.", 2, "On respecte son choix."],
    ["Une infirmière qui commence ses tournées à 7 h.", 1, "Un dépôt matinal l'arrange."]
  ] },

"C31c-P2": { type: "tri", titre: "Changer d'approche pour relancer", consigne: "Un premier mail n'a rien donné. Quel canal pour ce client ?",
  categories: ["SMS", "Appel", "Nouveau mail"],
  items: [
    ["Une cliente qui ne lit pas ses mails mais répond à ses SMS.", 0, "Le canal qu'elle utilise."],
    ["Un très bon client qui n'a pas ouvert le mail.", 1, "Un contact personnel montre l'attention."],
    ["Un client qui a ouvert le mail mais n'a pas cliqué.", 2, "Un message différent, plus clair."],
    ["Un client pressé qui préfère les messages courts.", 0, "Bref et direct."]
  ] },

"C32a-P2": { type: "tri", titre: "Fidéliser un professionnel", consigne: "Pour une entreprise qui a plusieurs véhicules, cet avantage est-il pertinent ?",
  categories: ["Pertinent", "Peu pertinent"],
  items: [
    ["Un véhicule de remplacement pendant les révisions.", 0, "Ses salariés continuent à travailler."],
    ["Un porte-clés offert.", 1, "Sans valeur pour une entreprise."],
    ["Des créneaux d'atelier tôt le matin.", 0, "Il évite d'immobiliser ses équipes."],
    ["Un avantage valable uniquement le dimanche.", 1, "Inadapté à son activité."]
  ] },

"C32b-P2": { type: "cartes", titre: "Un parrainage pour les professionnels", cartes: [
    ["Pourquoi adapter le parrainage aux pros ?", "Leurs besoins et leurs montants d'achat sont différents."],
    ["Un bon avantage pour un pro est…", "Utile à son activité : entretien, véhicule de prêt, priorité à l'atelier."],
    ["Quand verse-t-on l'avantage ?", "Une fois l'achat du filleul confirmé."],
    ["Une règle doit couvrir…", "Les cas particuliers : achat de plusieurs véhicules, filleul déjà client…"]
  ] },

"C32c-P2": { type: "tri", titre: "Fidélité et parrainage : le risque de cumul", consigne: "Une opération combine deux avantages. Cette situation pose-t-elle problème ?",
  categories: ["Pas de problème", "Risque à encadrer"],
  items: [
    ["Un client fidèle parraine un ami qui achète.", 0, "Les deux avantages sont prévus pour ça."],
    ["Un client se parraine lui-même avec une autre adresse mail.", 1, "Abus à empêcher par une règle."],
    ["Deux clients se parrainent mutuellement pour cumuler.", 1, "Il faut fixer une limite."],
    ["Un nouveau client découvre la concession grâce à un ami.", 0, "C'est l'objectif."]
  ] },

"C32d-P2": { type: "tri", titre: "Une règle trop rigide ?", consigne: "Une offre est réservée aux clients qui ont acheté au moins 2 véhicules. Cas difficile ou pas ?",
  categories: ["Cas clair", "Cas limite à anticiper"],
  items: [
    ["Un client qui a acheté 3 véhicules.", 0, "Il est éligible."],
    ["Un couple dont chacun a acheté un véhicule.", 1, "Faut-il compter le foyer ?"],
    ["Un client qui a acheté 1 véhicule et fait 10 ans d'entretien ici.", 1, "Très fidèle, mais exclu par la règle."],
    ["Un client qui n'a jamais rien acheté.", 0, "Il n'est pas éligible."]
  ] },

"C33a-P2": { type: "tri", titre: "Succès durable ou feu de paille ?", consigne: "Une carte de fidélité a démarré fort. Que montre chaque résultat un an après ?",
  categories: ["Effet durable", "Effet qui s'essouffle"],
  items: [
    ["Les adhérents reviennent deux fois plus à l'atelier que les autres.", 0, "Le comportement a changé."],
    ["La moitié des adhérents n'ont jamais utilisé la carte.", 1, "L'intérêt est retombé."],
    ["Les adhésions continuent chaque mois.", 0, "L'offre attire toujours."],
    ["Presque plus d'utilisations depuis 6 mois.", 1, "L'effet s'essouffle."]
  ] },

"C33b-P2": { type: "tri", titre: "Un test trop flatteur ?", consigne: "Un test donne un excellent résultat. Ces éléments le rendent-ils fragile ?",
  categories: ["Rend le test fragile", "Ne pose pas de problème"],
  items: [
    ["Le test a porté sur seulement 10 clients.", 0, "Trop peu pour généraliser."],
    ["Les clients testés avaient déjà un projet d'achat.", 0, "Ils auraient peut-être acheté de toute façon."],
    ["Le test a duré le même temps que les campagnes habituelles.", 1, "La durée est comparable."],
    ["Les clients ont été choisis par le vendeur, parmi ses meilleurs.", 0, "Échantillon favorable."]
  ] },

"C33c-P2": { type: "cartes", titre: "Au-delà du taux de conversion", cartes: [
    ["Ce que le taux de conversion ne voit pas ?", "Les recommandations, les retours à l'atelier, la satisfaction."],
    ["Taux de recommandation ?", "Clients qui ont recommandé la concession ÷ clients touchés × 100."],
    ["Pourquoi un second indicateur ?", "Pour ne pas supprimer une action utile qui vend peu tout de suite."],
    ["Un bon indicateur est…", "Simple à mesurer et lié à l'objectif de l'action."]
  ] }

});

// ─────────── Palier 3, et missions « fiche SIC » ───────────
Object.assign(EXERCICES_MISSIONS, {

"B41d-P1": { type: "tri", titre: "Ce qu'on sait déjà d'un prospect", consigne: "Un visiteur discute au showroom. Quelle information BANT révèle chaque phrase ?",
  categories: ["Budget", "Autorité", "Besoin", "Temps"],
  items: [
    ["« Je ne veux pas dépasser 300 € par mois. »", 0, "Une limite de dépense."],
    ["« Je dois en parler à ma femme avant de décider. »", 1, "La décision est partagée."],
    ["« Je fais 60 km par jour pour aller travailler. »", 2, "Son usage."],
    ["« Mon contrat de location se termine en mars. »", 3, "L'échéance de son achat."]
  ] },

"B41d-P2": { type: "tri", titre: "Information nouvelle ou déjà connue ?", consigne: "Un prospect revient pour un second contact. Faut-il mettre à jour sa fiche ?",
  categories: ["À ajouter ou modifier", "Déjà dans la fiche"],
  items: [
    ["Il a obtenu l'accord de financement de sa banque.", 0, "Information nouvelle et décisive."],
    ["Il cherche toujours une citadine, comme lors de sa première visite.", 1, "Rien de nouveau."],
    ["Il hésite maintenant entre deux finitions.", 0, "Le besoin s'est précisé."],
    ["Son nom et son téléphone.", 1, "Déjà saisis."]
  ] },

"B41d-P3": { type: "tri", titre: "Quelle fiche mettre à jour en premier ?", consigne: "Il reste peu de temps. Une fiche périmée fait-elle courir un risque immédiat ?",
  categories: ["Risque immédiat", "Peut attendre"],
  items: [
    ["Un prospect que l'équipe doit rappeler demain matin.", 0, "On l'appellerait avec de fausses informations."],
    ["Un prospect qui a déjà acheté ailleurs, encore noté « chaud ».", 0, "On perdrait du temps à le relancer."],
    ["Un prospect à recontacter dans six mois.", 1, "Le temps permet de vérifier."],
    ["Un commentaire mal orthographié, sans erreur sur les faits.", 1, "Sans conséquence commerciale."]
  ] },

"C33d-P1": { type: "tri", titre: "Mettre à jour une fiche après une offre", consigne: "Une cliente a profité d'une offre de fidélisation. Que modifier dans sa fiche ?",
  categories: ["À modifier", "À laisser"],
  items: [
    ["Son statut « ciblée par l'offre », qui doit devenir « offre utilisée ».", 0, "Sinon on la relancera par erreur."],
    ["Son nouveau véhicule et la date d'achat.", 0, "Son historique change."],
    ["Sa date de naissance.", 1, "Rien n'a changé."],
    ["Son adresse, inchangée.", 1, "Aucune raison de la modifier."]
  ] },

"C33d-P2": { type: "tri", titre: "Un client change de situation", consigne: "Un artisan client cesse son activité et garde un véhicule personnel. Comment traiter sa fiche ?",
  categories: ["Mettre à jour", "Retirer d'une campagne"],
  items: [
    ["Son profil, qui passe de professionnel à particulier.", 0, "Sa situation a changé."],
    ["Une campagne prévue sur le renouvellement des utilitaires.", 1, "Elle ne le concerne plus."],
    ["Son commentaire, avec la date et le motif du changement.", 0, "L'équipe comprendra."],
    ["Une offre réservée aux flottes d'entreprise.", 1, "Il n'est plus éligible."]
  ] },

"C33d-P3": { type: "tri", titre: "Information fiable ou à vérifier ?", consigne: "Après plusieurs actions de fidélisation, peut-on saisir l'information telle quelle dans le SIC ?",
  categories: ["Saisir tout de suite", "Vérifier d'abord"],
  items: [
    ["Une vente signée, avec bon de commande.", 0, "Le fait est prouvé."],
    ["« Un collègue pense qu'il a parrainé quelqu'un. »", 1, "Information non confirmée."],
    ["Un geste commercial accordé et noté par le responsable.", 0, "Information validée."],
    ["Un chiffre de réponses différent selon deux tableaux.", 1, "Il faut trouver le bon chiffre."]
  ] },

"C11a-P3": { type: "tri", titre: "Fait ou rumeur ?", consigne: "Avant de décider d'un stock, on sépare les faits des impressions.",
  categories: ["Fait vérifié", "Signal à vérifier"],
  items: [
    ["Les ventes réelles de la concession sur trois mois.", 0, "Données mesurées."],
    ["« Il paraît que les citadines vont baisser de prix. »", 1, "Rumeur sans source."],
    ["Un communiqué officiel du constructeur.", 0, "Source identifiée."],
    ["Un client a dit qu'il attendrait l'an prochain.", 1, "Un seul avis, à ne pas généraliser."]
  ] },

"C11b-P3": { type: "cartes", titre: "Une note de veille pour la direction", cartes: [
    ["Comment classer les sujets d'une note ?", "Selon leur importance pour les décisions à prendre, en tenant compte de leur fiabilité."],
    ["Que dire d'une information encore incertaine ?", "D'où elle vient, et ce qui permettrait de la confirmer."],
    ["Une bonne note se termine par…", "Des actions concrètes, pas seulement des constats."],
    ["Avant de remettre la note, on anticipe…", "Les questions que le dirigeant posera."]
  ] },

"C11c-P3": { type: "tri", titre: "Alerte crédible ou pas ?", consigne: "Un collègue relaie une information surprenante. Ces indices la rendent-ils douteuse ?",
  categories: ["Rend l'alerte douteuse", "Rend l'alerte crédible"],
  items: [
    ["Personne ne sait d'où vient l'information.", 0, "Source inconnue."],
    ["Le prix annoncé est très inférieur à tous les prix observés.", 0, "Trop beau pour être vrai."],
    ["L'offre est visible sur le site officiel du concurrent, avec sa date.", 1, "Vérifiable."],
    ["« Un ami d'un ami l'a vue. »", 0, "Information de seconde main."]
  ] },

"C12a-P3": { type: "cartes", titre: "Deux prix pour une même flotte", cartes: [
    ["Avant de répondre au client flotte ?", "Retrouver ce qui a été écrit, par qui et quand."],
    ["Un prix annoncé à l'oral engage-t-il l'entreprise ?", "Oui, il peut l'engager, mais il est difficile à prouver : on le confirme toujours par écrit."],
    ["Le client s'appuie sur un prix impossible à tenir : que faire ?", "Clarifier sans accuser un collègue, et proposer le meilleur prix possible dans le cadrage."],
    ["Pour éviter une nouvelle incohérence ?", "Toute proposition de prix est confirmée par écrit et notée dans le SIC."]
  ] },

"C12b-P3": { type: "tri", titre: "Fait ou ressenti dans un avis public ?", consigne: "Un avis négatif mélange des faits et des émotions. Classe chaque élément.",
  categories: ["Fait à vérifier", "Ressenti du client"],
  items: [
    ["« Livraison avec 10 jours de retard. »", 0, "Vérifiable dans le dossier."],
    ["« On se moque des clients ici. »", 1, "Une émotion forte."],
    ["« Personne ne m'a appelé pour prévenir. »", 0, "Vérifiable dans l'historique."],
    ["« Plus jamais je ne reviendrai. »", 1, "Un ressenti, pas un fait."]
  ] },

"C12c-P3": { type: "etapes", titre: "Deux dates contradictoires avant une signature", intro: "Avant de s'engager auprès d'un client, on décide quelle information fait foi.",
  etapes: [
    { ico: "🔍", k: "Comparer", s: "Les deux dates et leurs sources" },
    { ico: "✅", k: "Retenir", s: "La source la plus fiable et la plus récente" },
    { ico: "📞", k: "Annoncer", s: "La date retenue au client, avant qu'il signe" },
    { ico: "🤝", k: "Compenser", s: "Une solution si le nouveau délai le gêne" }
  ] },

"C13a-P3": { type: "tri", titre: "Un dossier, plusieurs véhicules", consigne: "Dans une commande de plusieurs véhicules, chaque élément doit être rattaché au bon endroit. Où le noter ?",
  categories: ["Sur un seul véhicule", "Sur l'ensemble de la commande"],
  items: [
    ["La valeur de reprise d'un ancien véhicule.", 0, "Elle ne réduit que le véhicule qu'elle remplace."],
    ["L'offre de crédit signée pour l'un des véhicules.", 0, "Chaque financement a son propre contrat."],
    ["Le total à payer par le client pour toute la commande.", 1, "Il additionne tous les véhicules."],
    ["L'adresse de livraison de l'entreprise.", 1, "Elle vaut pour toute la commande."]
  ] },

"C13b-P3": { type: "tri", titre: "« On m'a fait une meilleure offre »", consigne: "Un client réclame plus de remise en citant une autre offre. Que vaut cet argument ?",
  categories: ["Argument vérifiable", "Argument à vérifier"],
  items: [
    ["Il montre un devis daté, avec le même modèle et les mêmes options.", 0, "On peut comparer."],
    ["« Un vendeur m'a dit au téléphone que… »", 1, "Aucune preuve."],
    ["Le devis concurrent ne précise pas la finition.", 1, "On ne compare peut-être pas la même chose."],
    ["Il présente l'annonce en ligne avec la date de validité.", 0, "Information vérifiable."]
  ] },

"C13c-P3": { type: "tri", titre: "Plusieurs erreurs à la livraison", consigne: "Trois écarts apparaissent à la livraison. Lequel traiter en premier ?",
  categories: ["Bloque la livraison", "Peut être réglé après"],
  items: [
    ["La carte grise n'est pas au nom du client.", 0, "Il ne peut pas rouler légalement."],
    ["Un tapis de sol manque.", 1, "On peut le livrer plus tard."],
    ["Le véhicule livré n'est pas la bonne finition.", 0, "Ce n'est pas ce qu'il a acheté."],
    ["Une faute d'orthographe dans le nom de rue sur la facture.", 1, "On corrige la facture ensuite."]
  ] },

"C21a-P3": { type: "tri", titre: "Deux délais contradictoires", consigne: "Le constructeur et l'atelier donnent des délais différents. Quelle source fait foi pour chaque étape ?",
  categories: ["Constructeur", "Atelier"],
  items: [
    ["La date d'arrivée du véhicule à la concession.", 0, "Elle dépend de l'usine et du transport."],
    ["Le temps de préparation avant livraison.", 1, "C'est le travail de l'atelier."],
    ["La disponibilité d'une teinte spéciale.", 0, "Elle dépend de la production."],
    ["La pose d'un accessoire.", 1, "Réalisée sur place."]
  ] },

"C21b-P3": { type: "tri", titre: "Annoncer un contretemps la veille", consigne: "Un client attend demain un véhicule qui ne sera pas prêt. Bonne façon de faire ?",
  categories: ["Bonne pratique", "À éviter"],
  items: [
    ["Prévenir le client dès que le problème est connu.", 0, "Il peut encore s'organiser."],
    ["Attendre le matin même, au cas où le problème se réglerait.", 1, "Le client n'a plus aucune marge."],
    ["Vérifier qu'une solution proposée est réellement possible avant de l'annoncer.", 0, "On ne promet que ce qu'on peut tenir."],
    ["Livrer quand même sans rien dire, en espérant que tout aille bien.", 1, "Le risque retombe sur le client."]
  ] },

"C21c-P3": { type: "cartes", titre: "Fiabiliser un dossier avant transmission", cartes: [
    ["Deux documents ne disent pas la même chose : réflexe ?", "Ne rien transmettre avant d'avoir levé le doute."],
    ["Quel document fait normalement foi ?", "Celui que le client a signé."],
    ["La vérification la plus simple ?", "Demander confirmation au client ou au vendeur concerné."],
    ["Pourquoi ne pas transmettre « au cas où » ?", "L'atelier pourrait préparer le mauvais véhicule."]
  ] },

"C22a-P3": { type: "cartes", titre: "Combiner plusieurs prestataires", cartes: [
    ["Avant de proposer une combinaison, on vérifie…", "Le coût, le délai et les créneaux réellement disponibles de chaque prestataire."],
    ["Une combinaison est possible si…", "Toutes ses étapes tiennent dans le calendrier, l'une après l'autre."],
    ["Un délai « annoncé, sans garantie », c'est…", "Un risque à signaler au client, pas une certitude."],
    ["Pourquoi présenter plusieurs propositions ?", "Pour que le client choisisse en connaissance de cause, selon ce qui compte le plus pour lui."]
  ] },

"C22b-P3": { type: "tri", titre: "Deux réponses contradictoires d'un partenaire", consigne: "Un organisme de financement donne deux réponses différentes. Bonne réaction ?",
  categories: ["Bonne réaction", "Mauvaise réaction"],
  items: [
    ["Demander une confirmation écrite à un interlocuteur identifié.", 0, "On obtient une réponse fiable."],
    ["Choisir la réponse la plus favorable et l'annoncer au client.", 1, "Risque de promesse non tenue."],
    ["Prévoir un plan B si la réponse est négative.", 0, "On ne bloque pas le dossier."],
    ["Ignorer les deux réponses.", 1, "Le dossier reste bloqué."]
  ] },

"C22c-P3": { type: "tri", titre: "Garantie ou entretien ?", consigne: "Ce service couvre-t-il cette situation ?",
  categories: ["Extension de garantie", "Contrat d'entretien"],
  items: [
    ["La réparation d'une panne électronique après la fin de la garantie constructeur.", 0, "C'est une panne, pas un entretien."],
    ["La révision annuelle prévue dans le programme du constructeur.", 1, "C'est un entretien planifié."],
    ["Un moteur de vitre qui lâche après 4 ans.", 0, "Panne imprévue, hors garantie constructeur."],
    ["Le contrôle des niveaux et des filtres lors d'une révision.", 1, "Fait partie de la révision prévue."]
  ] },

"C23a-P3": { type: "tri", titre: "Ce que je règle, ce que je fais valider", consigne: "Un client signale plusieurs problèmes. Qui décide pour chacun ?",
  categories: ["Je peux le régler", "Je fais valider"],
  items: [
    ["Prendre rendez-vous à l'atelier pour un réglage.", 0, "Action courante."],
    ["Un geste commercial au-delà de ma limite.", 1, "Le responsable décide."],
    ["Informer le client du délai de l'atelier.", 0, "Information à transmettre."],
    ["Un remboursement partiel du véhicule.", 1, "Décision de la direction."]
  ] },

"C23b-P3": { type: "etapes", titre: "Quand deux services se renvoient la faute", intro: "Avant de répondre au client, on établit les faits.",
  etapes: [
    { ico: "📂", k: "Retrouver les traces", s: "Dates, mails, notes dans le SIC" },
    { ico: "🧩", k: "Reconstituer", s: "La chronologie, sans chercher de coupable" },
    { ico: "✉️", k: "Répondre au client", s: "Au nom de la concession, avec des faits et une solution" },
    { ico: "🔧", k: "Corriger en interne", s: "Une règle pour que ça ne se reproduise pas" }
  ] },

"C23c-P3": { type: "cartes", titre: "Une cliente fidèle prête à partir", cartes: [
    ["Pourquoi traiter différemment une troisième réclamation ?", "La confiance est fragilisée : la cliente juge la relation entière."],
    ["Un rendez-vous pris chez un concurrent signifie…", "Que la cliente cherche une alternative : il faut agir vite."],
    ["La bonne prise en charge ?", "Un interlocuteur unique, un diagnostic complet et un suivi personnel."],
    ["Le geste doit tenir compte…", "De toute l'histoire du client, pas seulement de cette réclamation."]
  ] },

"C24a-P3": { type: "tri", titre: "Deux indicateurs qui ne disent pas la même chose", consigne: "Que mesure chaque indicateur ?",
  categories: ["Satisfaction", "Recommandation (NPS)"],
  items: [
    ["« Êtes-vous satisfait de votre achat ? »", 0, "Le jugement sur l'expérience vécue."],
    ["« Recommanderiez-vous la concession à un proche ? »", 1, "L'envie d'en parler autour de soi."],
    ["Un client content mais qui ne parle jamais de ses achats.", 0, "Satisfait sans être promoteur."],
    ["Un taux calculé : promoteurs − détracteurs.", 1, "C'est le NPS."]
  ] },

"C24b-P3": { type: "cartes", titre: "Choisir une action d'amélioration", cartes: [
    ["Comment comparer plusieurs options ?", "Coût, délai de mise en place et effet attendu sur le problème."],
    ["L'option la moins chère est-elle toujours la meilleure ?", "Non, si elle ne règle pas le problème."],
    ["Combiner deux options ?", "Possible si le total reste dans le budget."],
    ["Après le choix, on suit…", "Un indicateur qui montre si le problème diminue."]
  ] },

"C24c-P3": { type: "tri", titre: "Un avis qui contient une erreur", consigne: "Un client affirme quelque chose d'inexact dans un avis public. Bonne réponse ?",
  categories: ["Bonne réponse", "À éviter"],
  items: [
    ["Corriger calmement le fait, sans accuser le client.", 0, "On rétablit l'information avec respect."],
    ["« Vous mentez. »", 1, "Agressif en public."],
    ["Proposer d'en parler en privé pour comprendre le malentendu.", 0, "On cherche la cause."],
    ["Valider l'erreur pour éviter le conflit.", 1, "D'autres clients la croiront."]
  ] },

"C31a-P3": { type: "tri", titre: "Fiche fiable ou périmée ?", consigne: "Avant d'appeler un client, on vérifie que sa fiche est à jour.",
  categories: ["Fiable", "À vérifier"],
  items: [
    ["Dernier contact il y a deux semaines, numéro confirmé.", 0, "Information récente."],
    ["Aucun contact depuis 5 ans, adresse non vérifiée.", 1, "Le client a peut-être déménagé."],
    ["Mention « véhicule vendu » sans date.", 1, "On ne sait pas s'il a encore un véhicule."],
    ["Achat récent et mail confirmé à la livraison.", 0, "Fiche à jour."]
  ] },

"C31b-P3": { type: "tri", titre: "Envoyer ou retenir un message ?", consigne: "Un message automatique part demain à toute une liste. Ce client doit-il le recevoir ?",
  categories: ["L'inclure", "L'exclure en attendant de vérifier"],
  items: [
    ["Un client à jour, sans réclamation en cours.", 0, "Rien ne s'y oppose."],
    ["Un client en litige ouvert avec la concession.", 1, "Une offre commerciale serait mal reçue."],
    ["Un client dont la fiche indique un décès non confirmé.", 1, "On vérifie avant tout envoi."],
    ["Un client qui a demandé à recevoir les nouveautés.", 0, "Il l'a souhaité."]
  ] },

"C31c-P3": { type: "chaine", titre: "Compter sans compter deux fois", intro: "Exemple : 50 clients dans la liste A, 30 dans la liste B, dont 10 sont dans les deux listes.",
  questions: ["Combien de clients différents ?", "Comment vérifier ?"],
  maillons: [
    { k: "Additionner les deux listes", txt: "50 + 30 = 80 : mais 10 clients sont comptés deux fois." },
    { k: "Retirer les clients communs", txt: "80 − 10 = 70 clients différents." },
    { k: "Vérification", txt: "40 seulement dans A + 20 seulement dans B + 10 dans les deux = 70 : le compte est bon." }
  ] },

"C32a-P3": { type: "tri", titre: "Levier mesurable ou difficile à mesurer ?", consigne: "Pour répartir une enveloppe, certains leviers se mesurent plus facilement que d'autres.",
  categories: ["Facile à mesurer", "Difficile à mesurer"],
  items: [
    ["Une offre de reprise : nombre de ventes générées.", 0, "Résultat direct."],
    ["Une soirée clients : effet sur l'image de la concession.", 1, "Effet diffus et lent."],
    ["Un parrainage : nombre de filleuls qui achètent.", 0, "Comptage simple."],
    ["Un message d'anniversaire : effet sur la fidélité à long terme.", 1, "Effet difficile à isoler."]
  ] },

"C32b-P3": { type: "tri", titre: "Faire une exception ?", consigne: "Un responsable demande d'accorder un avantage à un client qui ne remplit pas la règle. Risque ou garde-fou ?",
  categories: ["Risque", "Garde-fou"],
  items: [
    ["D'autres clients ont déjà essuyé un refus pour la même raison.", 0, "Ils pourraient se sentir lésés."],
    ["La solution respecte la règle, par exemple en la faisant jouer au bon moment.", 1, "Personne n'est traité à part."],
    ["L'avantage est accordé « juste cette fois », sans trace écrite.", 0, "Personne ne pourra expliquer la décision."],
    ["La décision est notée et expliquée à l'équipe.", 1, "Elle reste compréhensible et équitable."]
  ] },

"C32c-P3": { type: "cartes", titre: "Fidéliser un client professionnel", cartes: [
    ["Sur quoi s'appuie un budget de fidélisation ?", "Sur ce qui est réellement constaté (ventes, livraisons), pas sur une prévision."],
    ["Un bon geste pour une entreprise…", "Lui fait gagner du temps ou de l'argent, ou protège ses salariés."],
    ["Un geste pensé pour le gérant à titre personnel ?", "À éviter : en B2B, le geste doit servir l'entreprise."],
    ["Pour suivre un programme dans la durée ?", "Un tableau mis à jour à chaque nouvel événement (livraison, achat)."]
  ] },

"C33a-P3": { type: "tri", titre: "Quel chiffre retenir ?", consigne: "Deux tableaux donnent des résultats différents pour une même action. Lequel croire ?",
  categories: ["Plus fiable", "Moins fiable"],
  items: [
    ["Le chiffre issu des ventes enregistrées dans le SIC.", 0, "Données de facturation."],
    ["Une estimation faite de mémoire en réunion.", 1, "Non vérifiable."],
    ["Un total recalculé à partir des bons de commande.", 0, "Traçable."],
    ["Un chiffre sans date ni source.", 1, "Impossible de savoir d'où il vient."]
  ] },

"C33b-P3": { type: "tri", titre: "Deux vendeurs comparables ?", consigne: "On compare le taux de transformation de deux vendeurs sur un mois. Cet élément fausse-t-il la comparaison ?",
  categories: ["Fausse la comparaison", "Ne la fausse pas"],
  items: [
    ["L'un n'a reçu que 4 prospects ce mois-ci, l'autre 40.", 0, "Un taux sur 4 personnes est très fragile."],
    ["L'un a tenu le stand des portes ouvertes, où les visiteurs étaient déjà décidés.", 0, "Le public n'était pas le même."],
    ["Les deux ont travaillé sur le même mois, avec les mêmes horaires.", 1, "Les conditions sont identiques."],
    ["Les deux taux sont calculés de la même façon : ventes ÷ prospects reçus.", 1, "La méthode est la même."]
  ] },

"C33c-P3": { type: "cartes", titre: "Quand deux indicateurs divergent", cartes: [
    ["Un indicateur monte, un autre baisse : premier réflexe ?", "Chercher quels clients sont concernés par chacun des deux."],
    ["Pourquoi ne pas suivre un seul indicateur ?", "Un seul chiffre peut cacher ce qui se dégrade ailleurs."],
    ["Un verbatim, ça sert à…", "Comprendre ce que les clients ressentent, au-delà des chiffres."],
    ["Après un changement, on suit…", "Plusieurs indicateurs ensemble, avec un seuil qui déclenche une décision."]
  ] },

"B41a-P3": { type: "tri", titre: "Deux sources qui ne disent pas la même chose", consigne: "Pour un compte stratégique, que faire de chaque information ?",
  categories: ["Utiliser", "Faire confirmer par le client"],
  items: [
    ["Le nombre de véhicules indiqué dans le contrat actuel.", 0, "Document signé."],
    ["Un nombre différent cité par un salarié au téléphone.", 1, "À confirmer auprès du dirigeant."],
    ["La date de fin des contrats de location en cours.", 0, "Donnée contractuelle."],
    ["« Ils vont sûrement doubler leur flotte. »", 1, "Hypothèse à vérifier."]
  ] },

"B41b-P3": { type: "tri", titre: "Fin de journée : quelles demandes traiter ?", consigne: "Deux demandes seulement peuvent être traitées ce soir. Laquelle passe en priorité ?",
  categories: ["Ce soir", "Demain"],
  items: [
    ["Un professionnel au budget validé qui doit décider avant vendredi.", 0, "Qualifié et urgent."],
    ["Un particulier qui « réfléchit pour l'an prochain ».", 1, "Pas d'urgence."],
    ["Un client qui veut un essai demain matin.", 0, "Il faut confirmer le créneau ce soir."],
    ["Une demande de documentation générale.", 1, "Un envoi demain suffit."]
  ] },

"B41c-P3": { type: "tri", titre: "Volume ou marge ?", consigne: "Un modèle se vend plus, mais rapporte moins. Comment lire chaque indicateur ?",
  categories: ["Mesure le volume", "Mesure la rentabilité"],
  items: [
    ["Nombre de véhicules vendus.", 0, "Quantité."],
    ["Marge par véhicule.", 1, "Ce que chaque vente rapporte."],
    ["Chiffre d'affaires total du modèle.", 0, "Il dépend surtout des quantités."],
    ["Marge totale du modèle.", 1, "Ce que le modèle rapporte réellement."]
  ] },

"B42a-P3": { type: "cartes", titre: "Répartir un budget entre plusieurs opérations", cartes: [
    ["Sur quels critères comparer ?", "Coût, résultat attendu, urgence et risque."],
    ["Une répartition à parts égales est-elle juste ?", "Rarement : les opérations n'ont pas le même potentiel."],
    ["Opération la plus risquée ?", "Celle dont le résultat est le moins sûr pour un coût élevé."],
    ["Ne pas financer une opération, c'est…", "Accepter de renoncer à ce qu'elle aurait pu rapporter."]
  ] },

"B42b-P3": { type: "tri", titre: "Deux projets, une seule équipe", consigne: "Quelle contrainte rend un projet difficile à déplacer ?",
  categories: ["Contrainte rigide", "Contrainte souple"],
  items: [
    ["Une journée portes ouvertes annoncée dans la presse locale.", 0, "La date est connue de tous."],
    ["Un mail d'information qui peut partir quelques jours plus tard.", 1, "Le décaler coûte peu."],
    ["Des véhicules d'exposition à réserver auprès du constructeur un mois à l'avance.", 0, "Le délai ne se rattrape pas."],
    ["Une relance de clients sans échéance particulière.", 1, "Elle peut attendre la semaine suivante."]
  ] },

"B42c-P3": { type: "tri", titre: "Une offre qui attire de nouveaux clients ?", consigne: "Une concession veut développer ses ventes de pièces et d'entretien auprès de nouveaux clients. Ce ciblage est-il pertinent ?",
  categories: ["Attire de nouveaux clients", "Risque de viser des clients déjà acquis"],
  items: [
    ["Les automobilistes du quartier qui n'ont jamais fait entretenir leur voiture à la concession.", 0, "Ce sont de vrais nouveaux clients."],
    ["Les clients qui ont déjà un contrat d'entretien chez elle.", 1, "Ils viennent déjà."],
    ["Les entreprises voisines équipées de véhicules d'une autre marque.", 0, "Clientèle nouvelle."],
    ["Les clients qui ont pris rendez-vous à l'atelier la semaine prochaine.", 1, "Ils seraient venus de toute façon."]
  ] },

"B43a-P3": { type: "tri", titre: "Deux décideurs, deux priorités", consigne: "Un rendez-vous réunit deux décideurs. Qui est sensible à chaque argument ?",
  categories: ["Responsable financier", "Responsable des équipes"],
  items: [
    ["Le coût total sur la durée du contrat.", 0, "Il surveille la dépense."],
    ["Le confort de conduite des salariés.", 1, "Il pense à ses équipes."],
    ["Une mensualité fixe et prévisible.", 0, "Elle facilite le budget."],
    ["Un véhicule de remplacement en cas de panne.", 1, "Ses équipes ne sont jamais bloquées."]
  ] },

"B43b-P3": { type: "tri", titre: "Deux rendez-vous au même créneau", consigne: "Quel critère pèse pour choisir qui recevoir ?",
  categories: ["Critère solide", "Critère faible"],
  items: [
    ["Le client a une échéance réelle et proche.", 0, "Urgence vérifiable."],
    ["Le client est le plus sympathique.", 1, "Sans lien avec l'enjeu."],
    ["L'autre client peut facilement venir lundi.", 0, "On peut le reporter sans le perdre."],
    ["Le montant le plus élevé, sans autre information.", 1, "L'enjeu seul ne suffit pas."]
  ] },

"B43c-P3": { type: "cartes", titre: "Vérifier une offre concurrente", cartes: [
    ["Avant de répondre, on vérifie…", "Le modèle exact, la finition, les options et la date de l'offre."],
    ["Si l'offre est incomplète ?", "On pose des questions au client pour comparer la même chose."],
    ["Pourquoi ne pas s'aligner tout de suite ?", "On risque de perdre de la marge sur une comparaison fausse."],
    ["Si le prix reste plus bas ailleurs ?", "On met en avant les services et la garantie qui font la différence."]
  ] },

"B44a-P3": { type: "tri", titre: "Un devis urgent, mais à quel point ?", consigne: "L'urgence d'un devis ne dépend pas que de la date. Cet élément nuance-t-il la priorité ?",
  categories: ["Augmente la priorité", "Diminue la priorité"],
  items: [
    ["Le client a dit qu'il signerait cette semaine.", 0, "Décision imminente."],
    ["Le client est en vacances jusqu'à la fin du mois.", 1, "Relancer aujourd'hui ne sert à rien."],
    ["Un concurrent lui a fait une offre hier.", 0, "Risque de perdre la vente."],
    ["Le client a demandé à être recontacté dans deux semaines.", 1, "On respecte son calendrier."]
  ] },

"B44b-P3": { type: "cartes", titre: "Diagnostiquer une baisse à causes multiples", cartes: [
    ["Trois éléments ont changé en même temps : problème ?", "Impossible de savoir lequel explique la baisse."],
    ["Comment trouver la cause ?", "Revenir à la version habituelle et ne changer qu'un élément à la fois."],
    ["Un plan de test, c'est…", "Une seule modification par envoi, dont on mesure ensuite l'effet."],
    ["Que garder en attendant ?", "La version qui fonctionnait avant."]
  ] },

"B44c-P3": { type: "tri", titre: "Anomalie ou résultat normal ?", consigne: "En relisant un tableau de ventes, repère ce qui cloche.",
  categories: ["Anomalie", "Normal"],
  items: [
    ["Le total de la colonne n'est pas égal à la somme des lignes.", 0, "Erreur de saisie ou de formule."],
    ["Un taux de transformation de 130 %.", 0, "Un taux de ce type ne peut pas dépasser 100 %."],
    ["Un mois avec moins de ventes que le précédent.", 1, "Une baisse n'est pas une erreur."],
    ["Une vente datée d'un mois qui n'a pas encore eu lieu.", 0, "Date impossible."]
  ] },

"B45a-P3": { type: "tri", titre: "Quelle question pour quel besoin ?", consigne: "Avant de conseiller un client, on cherche son vrai besoin. Que t'apprend chaque question ?",
  categories: ["Son usage", "Ses contraintes"],
  items: [
    ["« Combien de kilomètres faites-vous par an ? »", 0, "Elle renseigne sur l'usage du véhicule."],
    ["« Pour quand vous faut-il le véhicule ? »", 1, "Elle renseigne sur le délai."],
    ["« Qui va le conduire, et pour quels trajets ? »", 0, "Usage quotidien."],
    ["« Quelle somme souhaitez-vous consacrer à cet achat ? »", 1, "Contrainte de budget."]
  ] },

"B45b-P3": { type: "chaine", titre: "Raisonner en coût total, pas en prix", intro: "Un client trouve un véhicule trop cher. Entraîne-toi avec une mensualité incluant l'entretien.",
  questions: ["Et donc ?", "Et pour le client ?"],
  maillons: [
    { k: "Caractéristique", txt: "La location longue durée inclut l'entretien et l'assistance." },
    { k: "Avantage", txt: "…donc aucun frais imprévu de révision pendant le contrat." },
    { k: "Bénéfice", txt: "…il connaît exactement son budget voiture chaque mois." }
  ] },

"B45c-P3": { type: "chaine", titre: "Le coût d'une citadine sur 4 ans", intro: "Exemple : une citadine électrique coûte 4 000 € de plus à l'achat qu'une citadine essence, mais coûte 700 € de moins par an en énergie.",
  questions: ["Et sur 4 ans ?", "Et donc ?"],
  maillons: [
    { k: "Économie d'énergie sur 4 ans", txt: "700 × 4 = 2 800 €." },
    { k: "Comparaison avec l'écart à l'achat", txt: "2 800 − 4 000 = − 1 200 € : sur 4 ans, l'écart n'est pas rattrapé." },
    { k: "Conclusion honnête", txt: "Sur cette durée, l'électrique coûte plus cher : on le dit, puis on cherche s'il a d'autres atouts pour ce client." }
  ] }

});
