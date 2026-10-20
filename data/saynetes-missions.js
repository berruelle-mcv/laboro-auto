// ================================================
//   LABORO Auto — Saynètes des missions (Groupe Vasseur)
//   Une saynète PROPRE À CHAQUE MISSION, écrite à partir de sa mise en
//   situation (contexte). Affichée en tête de l'onglet « La mission » par
//   js/moteur-animations.js (bouton « Découvrir la situation »).
//
//   Règles d'écriture (13/10/2026, mêmes règles que LABORO MCV) :
//   - fidèle au contexte de la mission : mêmes personnages, même client,
//     mêmes faits, aucun chiffre inventé ;
//   - la saynète s'arrête au moment où l'élève doit agir (ligne "fin") :
//     elle ne donne jamais la réponse attendue ;
//   - l'élève ne parle jamais : ses paroles, ce sont ses réponses.
//   - variante "pvoc" seulement si la mission a un contexte_pvoc : aucune
//     mission d'Auto n'en a (elles sont toutes écrites pour la PVOC).
//
//   Format d'une ligne : "a|texte" (personnage de gauche), "b|texte"
//   (personnage de droite), "n|texte" (narration), "fin|texte" (consigne
//   finale « À toi »).
//   Décors : concession, atelier, telephone, bureau, exterieur (chez le client).
//   Un contrôle automatique vérifie qu'aucune réplique, aucun titre et
//   aucune consigne finale ne sont communs à deux missions, et qu'aucun
//   nombre n'apparaît s'il n'est pas dans la mission.
// ================================================

const P_KARIM = { nom: "Karim Yildiz", role: "Resp. des ventes VN", sexe: "h", couleur: "#B5651D", logo: true };
const P_ISABELLE = { nom: "Isabelle Ferrand", role: "Resp. du pôle occasion", sexe: "f", couleur: "#7B2D42", logo: true };
const P_BRUNO = { nom: "Bruno Faucher", role: "Chef d'atelier", sexe: "h", couleur: "#3F5B76", logo: true };
const P_MICHEL = { nom: "Michel Vasseur", role: "Dirigeant du groupe", sexe: "h", couleur: "#2B2B2E", logo: true };
const P_TOI = { nom: "Toi", role: "Stagiaire Vasseur", sexe: "", couleur: "#1D9E75", logo: true };
function sayClient(nom, role, sexe, couleur){ return { nom: nom, role: role, sexe: sexe, couleur: couleur || (sexe === "f" ? "#BE123C" : "#0F766E") }; }

const SAYNETES_MISSIONS = {};

// ═════════════════════ PALIER 1 ═════════════════════
Object.assign(SAYNETES_MISSIONS, {

"B41a-P1": { titre: "Qui achète nos citadines électriques ?", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Bureau des ventes. Karim sort de chez Michel Vasseur avec une note interne sous le bras.",
    "a|Michel veut qu'on soit plus présents sur les citadines électriques : la Twingo E-Tech et la Renault 5 E-Tech.",
    "a|Avant de prospecter qui que ce soit, je dois savoir à quoi ressemble l'acheteur type.",
    "a|Tout est dans la note sur les ventes : âge, zone, usage, budget, motivations.",
    "fin|À toi : dresse le profil type de l'acheteur à partir de la note."
  ] },

"B41b-P1": { titre: "Quelles entreprises viser pour nos utilitaires ?", decor: "concession", a: P_KARIM, b: P_TOI,
  etiquettes: ["KANGOO VAN", "TRAFIC"], couleurs: ["#F5F5F5", "#9CA3AF"],
  lignes: [
    "n|Dans le hall, un Kangoo Van et un Trafic sont exposés côte à côte.",
    "a|Je veux développer les ventes d'utilitaires aux professionnels, le B2B.",
    "a|La question : quelles entreprises du coin ont vraiment besoin de l'un ou de l'autre ?",
    "fin|À toi : identifie le type d'entreprise locale à cibler en priorité."
  ] },

"B41c-P1": { titre: "Les chiffres du trimestre sur le bureau de Michel", decor: "bureau", a: P_MICHEL, b: P_TOI,
  lignes: [
    "n|Bureau de Michel Vasseur. Le tableau des ventes du trimestre est imprimé devant lui.",
    "a|Je n'ai pas le temps de tout éplucher. Qu'est-ce que ces chiffres nous disent ?",
    "a|J'attends une lecture rapide, qui m'aide à décider de nos prochaines actions commerciales.",
    "fin|À toi : lis le tableau et rédige ta note pour Michel."
  ] },

"B41d-P1": { titre: "M. Delaunay repart sans rien acheter", decor: "concession", a: P_KARIM, b: sayClient("M. Delaunay", "Visiteur du showroom", "h"),
  lignes: [
    "n|Le 1er octobre, un homme entre au showroom sans rendez-vous et s'arrête devant la Clio 6 exposée.",
    "b|Je regarde ce qui existe, je ne suis pas pressé. Je vous laisse mon numéro.",
    "n|Après quelques minutes de discussion avec toi, M. Delaunay repart.",
    "a|Ce qu'il t'a dit ne doit pas se perdre : un collègue pourra reprendre son dossier.",
    "fin|À toi : crée la fiche de M. Delaunay dans le SIC."
  ] },

"B42a-P1": { titre: "Une campagne mail pour les artisans du bâtiment", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Début octobre, au bureau des ventes. Le calendrier mural affiche déjà la fin de l'année.",
    "a|Les artisans du bâtiment de l'Essonne clôturent leur exercice comptable bientôt.",
    "a|Un utilitaire renouvelé avant la clôture, c'est un argument d'amortissement. Je veux une campagne mail sur ce thème.",
    "fin|À toi : prépare la campagne mail de renouvellement d'utilitaires."
  ] },

"B42b-P1": { titre: "La Twingo E-Tech sur Instagram et Facebook", decor: "concession", a: P_KARIM, b: P_TOI,
  etiquettes: ["TWINGO E-TECH", "OCCASION"],
  lignes: [
    "n|Une Twingo E-Tech brille sous les spots du hall.",
    "a|Les jeunes actifs qui achètent leur première voiture, je ne les vois jamais au showroom.",
    "a|Eux, ils sont sur Instagram et Facebook. Allons les chercher là, avec la Twingo E-Tech.",
    "fin|À toi : prépare la campagne réseaux sociaux de la Twingo E-Tech."
  ] },

"B42c-P1": { titre: "Préparer le stand du salon de printemps", decor: "concession", enseigne: "SALON AUTO RÉGIONAL", a: P_MICHEL, b: P_TOI,
  etiquettes: ["STAND", "STAND"],
  lignes: [
    "n|Vasseur a réservé un stand au salon auto régional de printemps.",
    "a|J'y veux 2 SUV hybrides. À toi de choisir lesquels.",
    "a|Prépare aussi ce qu'on dira aux visiteurs, et la façon de les suivre une fois le salon terminé.",
    "fin|À toi : choisis les véhicules, prépare l'accueil et organise le suivi des visiteurs."
  ] },

"B42d-P1": { titre: "Ces clients qui roulent depuis longtemps", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Karim fait défiler le fichier clients sur l'écran du bureau.",
    "a|Certains clients ont acheté leur véhicule il y a 4 ans ou plus. Ils arrivent en fin de cycle.",
    "a|Je veux leur proposer un renouvellement, en commençant par ceux qui roulent beaucoup.",
    "fin|À toi : choisis les clients à relancer et rédige la relance."
  ] },

"B43a-P1": { titre: "Un formulaire « Devis flotte pro » arrive", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Une notification s'affiche : un artisan vient de remplir le formulaire « Devis flotte pro » du site.",
    "a|Il parle de renouveler son utilitaire. Je te transmets sa fiche de contact.",
    "a|Surtout, pas de proposition tout de suite : on ne sait pas encore assez de choses sur lui.",
    "fin|À toi : qualifie ce prospect professionnel avant toute proposition."
  ] },

"B43b-P1": { titre: "« Changer de voiture bientôt »", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Sur le site Vasseur, un jeune actif a rempli le formulaire « Essai citadine électrique ».",
    "a|Son message est vague : il veut « changer de voiture bientôt ». Rien de plus.",
    "a|Ce n'est pas avec ça qu'on lui propose le bon modèle.",
    "fin|À toi : qualifie ce prospect particulier."
  ] },

"B43c-P1": { titre: "Un appel à froid vers une entreprise de colis", decor: "telephone", bout_du_fil: "TRANSPORT DE COLIS · ÉVRY", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Karim pose une fiche prospect à côté du téléphone.",
    "a|Une entreprise de transport de colis d'Évry. Sa flotte vieillit, et elle ne nous connaît pas.",
    "a|C'est toi qui appelles. Prépare l'appel, et après, on veut un compte rendu de ce qui s'est dit.",
    "fin|À toi : prépare ton appel, puis rédige le compte rendu."
  ] },

"B43d-P1": { titre: "Deux semaines sans nouvelles", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Karim relit l'historique d'un dossier : une proposition pour un Captur Techno.",
    "a|Ce prospect était qualifié, tout semblait bien parti. Et depuis 2 semaines, plus rien.",
    "a|On ne laisse pas un dossier comme celui-là s'éteindre tout seul.",
    "fin|À toi : prépare la relance de ce prospect."
  ] },

"C11a-P1": { titre: "Le Peugeot 2008 « moins cher sur le papier »", decor: "concession", a: P_KARIM, b: sayClient("Un client", "Hésite entre deux SUV", "h"),
  etiquettes: ["CAPTUR", "NEUF"],
  lignes: [
    "n|Un client tourne autour du Captur exposé, un prospectus d'un concurrent à la main.",
    "b|J'ai vu un Peugeot 2008 dans une autre concession. Sur le papier, il est moins cher que votre Captur.",
    "a|Je te laisse comparer les deux offres et préparer ce qu'on va lui répondre.",
    "fin|À toi : compare l'offre Vasseur à celle du concurrent."
  ] },

"C11b-P1": { titre: "Pourquoi l'électrique progresse ?", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Réunion du lundi : Karim veut préparer un argumentaire sur les modèles électriques.",
    "a|Nos ventes électriques progressent. Avant d'argumenter, je veux comprendre pourquoi.",
    "a|Une note courte suffit, mais appuyée sur le dossier.",
    "fin|À toi : rédige la note de veille sur la tendance électrique."
  ] },

"C11c-P1": { titre: "L'Audi A3 trouvée chez un mandataire", decor: "concession", a: P_ISABELLE, b: sayClient("Un client", "Compare deux annonces", "h"),
  etiquettes: ["SÉLECTION", "AUDI A3"], couleurs: ["#4B5563", "#1F2937"],
  lignes: [
    "n|Au pôle occasion, un client montre son téléphone à Isabelle.",
    "b|Cette Audi A3, je l'ai trouvée sur le site d'un mandataire en ligne. La vôtre est presque pareille…",
    "a|Un mandataire en ligne : pas d'agence physique, pas de service après-vente local. Regardons ce que chaque offre comprend.",
    "fin|À toi : analyse l'offre en ligne et compare-la à celle de Vasseur Sélection."
  ] },

"C11d-P1": { titre: "Les aides à l'achat d'un véhicule électrique", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Karim tient une pile de questions de clients sur les aides à l'achat.",
    "a|Les clients nous interrogent sans arrêt sur les aides pour l'électrique.",
    "a|Je veux que toute l'équipe soit à jour sur les aides en cours, sans erreur.",
    "fin|À toi : fais la veille sur les aides et prépare la fiche argumentaire."
  ] },

"C12a-P1": { titre: "Un mail sur la Clio 6 Techno", decor: "bureau", a: P_KARIM, b: sayClient("Un client", "Par mail", "h"),
  lignes: [
    "n|La boîte mail de la concession affiche un nouveau message.",
    "b|Bonjour, pouvez-vous m'indiquer le prix exact d'une Clio 6 Techno, et le délai de livraison ?",
    "a|Deux questions précises. Il attend une réponse précise, et bien écrite.",
    "fin|À toi : réponds à ce mail."
  ] },

"C12b-P1": { titre: "Le Captur en LOA, sur le chat", decor: "bureau", a: P_KARIM, b: sayClient("Un visiteur du site", "Sur le chat", "h"),
  lignes: [
    "n|Une fenêtre de chat clignote sur l'écran du site Vasseur.",
    "b|Bonjour, combien ça coûte par mois, le Captur en LOA ?",
    "a|Sur le chat, il attend une réponse tout de suite. Je te laisse la conversation.",
    "fin|À toi : réponds à ce client sur le chat."
  ] },

"C12c-P1": { titre: "Un commentaire sous le post Instagram", decor: "bureau", a: P_KARIM, b: sayClient("Un abonné", "Sur Instagram", "h"),
  lignes: [
    "n|Sous le dernier post Instagram de Vasseur, un commentaire vient d'apparaître.",
    "b|Elle est à combien, la Renault 4 E-Tech ?",
    "a|Ce commentaire est public : tout le monde lira notre réponse. Attention à ce qu'on écrit, et où.",
    "fin|À toi : traite cette demande sur le réseau social."
  ] },

"C12d-P1": { titre: "L'Austral, en vrai ou à distance ?", decor: "telephone", a: P_KARIM, b: sayClient("Un client", "Habite loin", "h"),
  lignes: [
    "n|Un client appelle au sujet de l'Austral.",
    "b|L'Austral m'intéresse, mais j'habite loin. Je ne sais pas si je dois venir le voir, ou tout faire à distance.",
    "a|Il hésite vraiment. Aide-le à choisir, sans décider à sa place.",
    "fin|À toi : oriente ce client entre le showroom et la vente à distance."
  ] },

"C13a-P1": { titre: "Un accord de principe pour le Symbioz Iconic", decor: "concession", a: P_KARIM, b: sayClient("Un client", "Vient de se décider", "h"),
  etiquettes: ["SYMBIOZ", "NEUF"],
  lignes: [
    "n|Devant le Symbioz exposé, un client serre la main de Karim.",
    "b|C'est décidé : je prends le Symbioz, en finition Iconic.",
    "a|Iconic, c'est une finition, une version d'équipement : le Symbioz existe en Techno et en Iconic, chacune avec son prix.",
    "a|L'accord est donné. Il faut maintenant un dossier de vente complet.",
    "fin|À toi : monte le dossier de vente de ce client."
  ] },

"C13b-P1": { titre: "Mme Roussel achète un 3008 et fait reprendre sa voiture", decor: "concession", a: P_ISABELLE, b: sayClient("Mme Nadia Roussel", "Cliente", "f"),
  etiquettes: ["SÉLECTION", "PEUGEOT 3008"], couleurs: ["#9CA3AF", "#374151"],
  lignes: [
    "n|Au pôle occasion, Mme Nadia Roussel a choisi un Peugeot 3008.",
    "b|Et ma voiture actuelle, vous me la reprenez, comme convenu ?",
    "a|Oui. Le dossier doit faire apparaître l'achat et la reprise, et le montant à payer doit pouvoir se vérifier.",
    "fin|À toi : finalise le dossier de vente avec reprise de Mme Roussel."
  ] },

"C13c-P1": { titre: "M. Diakité hésite : LOA ou crédit ?", decor: "concession", a: P_KARIM, b: sayClient("M. Diakité", "Client", "h"),
  etiquettes: ["RAFALE", "NEUF"], couleurs: ["#374151", "#B5651D"],
  lignes: [
    "n|M. Diakité a choisi un Rafale Techno, à 42 000 €. Reste le financement.",
    "b|LOA, crédit classique… honnêtement, je m'y perds. Vous pouvez m'aider à y voir clair ?",
    "a|C'est à lui de choisir. Notre rôle : lui présenter les deux options clairement.",
    "fin|À toi : présente les options de financement à M. Diakité."
  ] },

"C13d-P1": { titre: "Une remise sur la Golf d'occasion ?", decor: "concession", a: P_ISABELLE, b: sayClient("Un client", "Intéressé par la Golf", "h"),
  etiquettes: ["SÉLECTION", "GOLF"], couleurs: ["#9CA3AF", "#1E3A8A"],
  lignes: [
    "n|Au pôle occasion, un client s'est arrêté devant une Golf.",
    "b|Elle me plaît bien, cette Golf. Mais vous pouvez faire un geste sur le prix ?",
    "a|Il y a un cadrage pour les remises. Regarde-le avant de répondre.",
    "fin|À toi : mène cette négociation sur le prix."
  ] },

"C21a-P1": { titre: "L'Espace de M. Bernard prend du retard", decor: "telephone", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Le constructeur vient d'envoyer un message : un fournisseur retarde la livraison d'un Renault Espace.",
    "a|C'est l'Espace de M. Bernard. Il l'a commandé il y a 5 semaines.",
    "a|Il ne sait encore rien. Il doit l'apprendre par nous, et avant de s'inquiéter.",
    "fin|À toi : informe M. Bernard du nouveau délai de livraison."
  ] },

"C21b-P1": { titre: "Il vient de signer pour une Mégane E-Tech", decor: "concession", a: P_KARIM, b: sayClient("Un client", "Vient de signer", "h"),
  etiquettes: ["MÉGANE E-TECH", "NEUF"], couleurs: ["#1E3A8A", "#9CA3AF"],
  lignes: [
    "n|Un client range son stylo : il vient de signer pour une Mégane E-Tech.",
    "b|Et maintenant, qu'est-ce qui se passe ?",
    "a|Bonne question. On va lui envoyer le récapitulatif des prochaines étapes.",
    "fin|À toi : rédige la confirmation de commande et ses étapes."
  ] },

"C21c-P1": { titre: "Le Master vendu part à l'atelier", decor: "atelier", a: P_KARIM, b: P_BRUNO,
  lignes: [
    "n|Un Renault Master vient d'être vendu. Karim passe à l'atelier.",
    "b|Un Master à préparer ? Envoie-moi tout ce qu'il me faut pour l'organiser.",
    "a|Le dossier doit partir chez Bruno, pour qu'il prépare le véhicule avant la livraison.",
    "fin|À toi : transmets le dossier de commande à Bruno Faucher."
  ] },

"C22a-P1": { titre: "Des barres de toit pour le Captur de Mme Toussaint", decor: "atelier", a: P_KARIM, b: P_BRUNO,
  lignes: [
    "n|Mme Toussaint achète un Captur. Sa livraison est prévue dans 6 jours.",
    "a|Bruno, elle demande des barres de toit posées avant la livraison.",
    "b|Regarde d'abord mon planning avant de lui promettre quoi que ce soit.",
    "fin|À toi : organise la pose des barres de toit avant la livraison."
  ] },

"C22b-P1": { titre: "Le dossier LOA de Yasmine Moreau", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Le dossier de Yasmine Moreau est ouvert : une Renault Austral, en LOA.",
    "a|Ce dossier doit partir chez l'organisme de financement partenaire, pour validation.",
    "a|Vérifie bien ce qu'on a, et ce qui manque encore, avant de l'envoyer.",
    "fin|À toi : prépare la transmission du dossier de financement."
  ] },

"C22c-P1": { titre: "La carte grise de la deuxième Renault 5", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|PME Services Info Essonne a commandé une deuxième Renault 5 E-Tech, pour un de ses commerciaux.",
    "a|Vasseur s'occupe de la carte grise pour eux. On leur a annoncé 5 jours ouvrés.",
    "a|Vérifie où en est la demande, et fais ce qu'il faut.",
    "fin|À toi : suis cette immatriculation en cours."
  ] },

"C23a-P1": { titre: "Une éraflure sur le Symbioz livré hier", decor: "telephone", a: P_KARIM, b: sayClient("Un client", "Livré hier", "h"),
  lignes: [
    "n|Le téléphone sonne. La voix à l'autre bout est tendue.",
    "b|Mon Symbioz, livré hier, a une éraflure sur le pare-chocs arrière ! Elle n'y était pas quand vous m'avez remis les clés.",
    "a|Il est mécontent. Écoute-le bien : on ne nie rien, on n'accepte rien sans vérifier.",
    "fin|À toi : traite la réclamation de ce client."
  ] },

"C23b-P1": { titre: "Toujours pas de nouvelles de l'atelier", decor: "telephone", a: P_KARIM, b: sayClient("Un client", "Attend son véhicule", "h"),
  lignes: [
    "n|Un client appelle. Il devait récupérer son véhicule à l'atelier hier.",
    "b|J'attendais ma voiture hier, et depuis, aucune nouvelle ! Personne ne m'a appelé.",
    "a|Il est agacé, et il y a de quoi. Prends l'appel.",
    "fin|À toi : gère la réclamation sur ce retard de SAV."
  ] },

"C23c-P1": { titre: "Un Kangoo Van en trop sur la facture", decor: "telephone", a: P_KARIM, b: sayClient("Une entreprise cliente", "Flotte de Kangoo Van", "f"),
  lignes: [
    "n|Une entreprise cliente appelle au sujet de sa dernière facture.",
    "b|Nous avons une flotte de 3 Kangoo Van, et votre facture mentionne un véhicule en trop.",
    "a|C'est un client professionnel : sa comptabilité vérifie tout. Prends cette réclamation.",
    "fin|À toi : traite la réclamation sur l'erreur de facturation."
  ] },

"C24a-P1": { titre: "Un 4/10 après l'achat d'un Trafic", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Les résultats de l'enquête de satisfaction arrivent. Une note se détache.",
    "a|Un client a donné 4/10 après l'achat de son Trafic. Et il a laissé un commentaire précis.",
    "a|Ne t'arrête pas à la note. Lis bien ce qu'il a écrit.",
    "fin|À toi : analyse ce résultat NPS et propose une action."
  ] },

"C24b-P1": { titre: "Un avis 2 étoiles en ligne", decor: "bureau", a: P_KARIM, b: sayClient("Un client", "Avis en ligne", "h"),
  lignes: [
    "n|Un nouvel avis vient d'être publié en ligne sur Vasseur.",
    "b|« Vendeur sympa, mais j'ai eu l'impression qu'on me poussait à prendre des options dont je n'avais pas besoin. »",
    "a|2 étoiles. Tous nos futurs clients pourront lire cet avis, et notre réponse.",
    "fin|À toi : réponds à cet avis négatif."
  ] },

"C24c-P1": { titre: "Un questionnaire 48 h après la livraison", decor: "bureau", a: P_MICHEL, b: P_TOI,
  lignes: [
    "n|Michel Vasseur fait le point sur l'après-vente.",
    "a|Aujourd'hui, notre enquête arrive un mois après la livraison : on découvre les problèmes trop tard.",
    "a|Je veux un questionnaire envoyé systématiquement 48 h après chaque livraison.",
    "fin|À toi : construis le questionnaire de satisfaction post-livraison."
  ] },

"C31a-P1": { titre: "Un rappel technique sur des Captur", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Renault lance un rappel technique sur un composant électronique, pour une génération de Captur.",
    "a|Chez Vasseur, ces Captur ont été vendus il y a 2 ans. Les 48 clients concernés sont identifiés dans le SIC.",
    "a|Je veux un message juste : ni affolant, ni trop léger.",
    "fin|À toi : prépare le message aux clients concernés par le rappel."
  ] },

"C31b-P1": { titre: "Un an avec son Austral", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Le SIC affiche un rappel : cette semaine, un client fête le premier anniversaire de l'achat de son Austral.",
    "a|Un an, et aucun incident depuis. C'est l'occasion de lui faire signe.",
    "a|Un message personnel, pas une publicité.",
    "fin|À toi : rédige le contact d'anniversaire d'achat."
  ] },

"C31c-P1": { titre: "Le Renault 4 E-Tech arrive en concession", decor: "concession", a: P_MICHEL, b: P_TOI,
  etiquettes: ["RENAULT 4 E-TECH", "NOUVEAU"], couleurs: ["#B5651D", "#F59E0B"],
  lignes: [
    "n|Le nouveau Renault 4 E-Tech vient d'être installé dans le hall.",
    "a|Je veux l'annoncer à nos clients, mais pas à toute la base.",
    "a|Seulement à ceux qui ont le plus de chances d'être intéressés.",
    "fin|À toi : choisis les clients à informer et rédige le message."
  ] },

"C32a-P1": { titre: "Une offre pour les clients de 2 véhicules", decor: "bureau", a: P_MICHEL, b: P_TOI,
  lignes: [
    "n|Michel Vasseur réfléchit à la fidélité de ses clients.",
    "a|Certains clients ont déjà acheté au moins 2 véhicules chez nous.",
    "a|Je souhaite leur réserver une offre, rien qu'à eux.",
    "fin|À toi : construis l'offre réservée aux clients fidèles."
  ] },

"C32b-P1": { titre: "Lancer un parrainage", decor: "bureau", a: P_MICHEL, b: P_TOI,
  lignes: [
    "n|Michel Vasseur a une idée pour faire venir de nouveaux clients.",
    "a|Un client Vasseur qui nous amène un nouveau client, il obtient un avantage. Et le nouveau client aussi.",
    "a|Je veux lancer ce parrainage. Il faut le concevoir.",
    "fin|À toi : conçois le programme de parrainage."
  ] },

"C32c-P1": { titre: "Une soirée pour nos clients", decor: "concession", enseigne: "SOIRÉE CLIENTS", a: P_KARIM, b: P_TOI,
  etiquettes: ["SOIRÉE", "CLIENTS"], couleurs: ["#7B2D42", "#B5651D"],
  lignes: [
    "n|Vasseur prépare une soirée portes ouvertes réservée à ses clients existants.",
    "a|Ce soir-là, on ne prospecte pas : on renforce la relation avec ceux qui nous font déjà confiance.",
    "a|Il faut organiser la soirée et inviter nos clients.",
    "fin|À toi : organise cette opération portes ouvertes clients."
  ] },

"C32d-P1": { titre: "Après la rayure, regagner la confiance", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Une réclamation vient d'être close : une rayure constatée à la livraison, traitée et résolue.",
    "a|Le problème est réglé. Mais ce client a vécu une mauvaise expérience.",
    "a|C'est le bon moment pour un geste qui transforme ce souvenir négatif en souvenir positif.",
    "fin|À toi : conçois le geste de fidélisation pour ce client."
  ] },

"C33a-P1": { titre: "Bilan de l'offre de reprise majorée", decor: "bureau", a: P_MICHEL, b: P_TOI,
  lignes: [
    "n|L'offre de reprise majorée est terminée : elle a été envoyée à 100 clients anciens.",
    "a|Elle a généré 8 ventes. Mais est-ce un bon résultat ?",
    "a|Je veux un vrai bilan, pas une impression.",
    "fin|À toi : mesure l'efficacité de cette campagne de fidélisation."
  ] },

"C33b-P1": { titre: "Reprise majorée ou parrainage ?", decor: "bureau", a: P_MICHEL, b: P_TOI,
  lignes: [
    "n|Vasseur a testé deux actions en même temps : une offre de reprise majorée et un programme de parrainage.",
    "a|Laquelle des deux a le mieux fonctionné ? C'est ce que je veux savoir.",
    "a|Compare-les, puis dis-moi ce que tu recommandes.",
    "fin|À toi : compare les deux actions et formule ta recommandation."
  ] },

"C33c-P1": { titre: "Le second parrainage déçoit", decor: "bureau", a: P_MICHEL, b: P_TOI,
  lignes: [
    "n|Il y a 2 mois, un second parrainage a été lancé par mail auprès des clients du pôle occasion.",
    "a|Résultat : seulement 2 parrainages actifs.",
    "a|Je veux comprendre pourquoi, et savoir ce qu'on change.",
    "fin|À toi : analyse ce résultat décevant et propose un ajustement."
  ] },

"C33d-P1": { titre: "Mme Auffret a profité de l'offre", decor: "bureau", a: P_MICHEL, b: P_TOI,
  lignes: [
    "n|Mme Auffret faisait partie des 100 clients anciens qui ont reçu l'offre de reprise majorée.",
    "a|Bonne nouvelle : elle a profité de l'offre et vient d'acheter un Austral Techno.",
    "a|Sa fiche ne le dit pas encore.",
    "fin|À toi : actualise la fiche de Mme Auffret dans le SIC."
  ] },

"B44a-P1": { titre: "La campagne mail aux artisans : le bilan", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|La campagne mail B2B est partie chez 150 artisans.",
    "a|On a reçu 12 réponses, dont 4 rendez-vous pris.",
    "a|C'est bien, ou pas ? Je veux savoir à quelle étape on perd des contacts.",
    "fin|À toi : analyse les taux de transformation de cette campagne."
  ] },

"B44b-P1": { titre: "Une semaine de phoning", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Fin de semaine. Karim raccroche le téléphone après une dernière tentative.",
    "a|Cette semaine : 40 appels de prospection B2B, 6 rendez-vous, 1 vente conclue à ce jour.",
    "a|Avant de conclure quoi que ce soit, je veux un bilan propre.",
    "fin|À toi : fais le bilan de cette session de phoning."
  ] },

"B44c-P1": { titre: "Une campagne qui démarre mal", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Une campagne de prospection de 3 semaines en est à sa première semaine.",
    "a|Les résultats intermédiaires sont nettement en dessous de nos campagnes précédentes.",
    "a|On ne va pas attendre la fin pour réagir… mais on ne change pas tout au hasard non plus.",
    "fin|À toi : analyse l'écart et propose l'ajustement de la campagne."
  ] },

"B44d-P1": { titre: "Un devis Kangoo Van sans réponse", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Dans le suivi des devis, une ligne passe à l'orange.",
    "a|Un devis pour un Kangoo Van, envoyé à un artisan il y a 8 jours. Toujours sans réponse.",
    "a|Le devis est valable 15 jours. Il ne faut pas le laisser expirer sans rien faire.",
    "fin|À toi : relance ce devis avant son expiration."
  ] },

"B45a-P1": { titre: "Un argumentaire pour l'Austral hybride", decor: "concession", a: P_MICHEL, b: P_TOI,
  etiquettes: ["AUSTRAL", "HYBRIDE"], couleurs: ["#9CA3AF", "#B5651D"],
  lignes: [
    "n|Michel Vasseur s'arrête devant l'Austral hybride exposé.",
    "a|Beaucoup de clients surveillent leur budget, et comparent l'Austral aux SUV essence de même taille.",
    "a|Je veux un argumentaire prêt à l'emploi, qui fasse la différence pour eux.",
    "fin|À toi : construis l'argumentaire de valorisation de l'Austral hybride."
  ] },

"B45b-P1": { titre: "Vasseur ou le mandataire en ligne ?", decor: "concession", a: P_KARIM, b: sayClient("Un client", "Compare deux vendeurs", "h"),
  lignes: [
    "n|Un client hésite, son téléphone à la main.",
    "b|Chez vous, c'est un peu plus cher. Le mandataire en ligne propose un prix plus bas.",
    "a|Mais chez le mandataire, aucun service après-vente local. Ce qui fait la différence ici, ce n'est pas seulement le véhicule.",
    "fin|À toi : valorise le service Vasseur face à cette offre en ligne."
  ] },

"B45c-P1": { titre: "« 1 500 € moins cher ailleurs »", decor: "concession", a: P_KARIM, b: sayClient("Un client", "Au showroom", "h"),
  etiquettes: ["CAPTUR", "NEUF"],
  lignes: [
    "n|Au showroom, un client interpelle Karim devant le Captur.",
    "b|J'ai trouvé le même Captur 1 500 € moins cher ailleurs. Vous vous alignez, là, tout de suite ?",
    "a|Il demande un alignement immédiat. On reste calmes, et on vérifie avant de répondre.",
    "fin|À toi : réponds à cette comparaison de prix."
  ] }

});

// ═════════════════════ PALIER 2 ═════════════════════
Object.assign(SAYNETES_MISSIONS, {

"B41a-P2": { titre: "Jeudi, 18 h : trois demandes en vingt minutes", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Jeudi, 18 h. La concession ferme à 19 h, et trois demandes viennent d'arriver en vingt minutes.",
    "a|Je suis en rendez-vous client, je ne peux pas les prendre. Tu as le temps d'en traiter une seule par téléphone avant la fermeture.",
    "a|Les deux autres seront reprises plus tard. Mais aucune ne doit rester sans réponse ce soir.",
    "fin|À toi : choisis la demande à traiter par téléphone et organise les deux autres."
  ] },

"B41b-P2": { titre: "Un véhicule « polyvalent » pour M. Marchal", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Karim tend ses notes d'appel : M. Sébastien Marchal, électricien à son compte, cherche un véhicule « polyvalent ».",
    "a|Je l'ai rappelé mardi. Il veut un seul véhicule pour son travail et pour sa famille.",
    "a|Ce profil mixte, je te le confie : écarte ce qui ne convient pas et propose-lui une piste avant qu'il aille voir ailleurs.",
    "fin|À toi : qualifie précisément le profil de M. Marchal."
  ] },

"B41c-P2": { titre: "Deux documents jamais rapprochés", decor: "bureau", a: P_MICHEL, b: P_TOI,
  lignes: [
    "n|Michel Vasseur pose deux documents sur la table : les ventes du SIC et l'enquête remplie après la livraison.",
    "a|Dans trois semaines, je lance une campagne mail sur les SUV familiaux, vers la base clients et les contacts du dernier salon.",
    "a|Personne n'a encore croisé ces deux sources. Je veux savoir à qui écrire, et quoi leur dire.",
    "fin|À toi : croise les deux sources pour qualifier le segment."
  ] },

"B42a-P2": { titre: "Lancer la Renault 4 E-Tech sur plusieurs canaux", decor: "concession", a: P_KARIM, b: P_TOI,
  etiquettes: ["RENAULT 4", "LANCEMENT"], couleurs: ["#B5651D", "#F59E0B"],
  lignes: [
    "n|Le lancement de la Renault 4 E-Tech se prépare dans le hall.",
    "a|Michel ne veut pas d'une campagne sur un seul canal. Il veut toucher nos clients actuels, et aussi un public plus jeune qui ne nous connaît pas.",
    "a|Construis la campagne, et vérifie par le calcul qu'elle peut atteindre l'objectif.",
    "fin|À toi : conçois la campagne multicanale du lancement."
  ] },

"B42b-P2": { titre: "Un budget de prospection coupé en deux", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Le budget de prospection auprès des particuliers vient d'être réduit de moitié pour ce trimestre.",
    "a|J'hésite : une campagne mail, un stand complet au salon auto de l'Essonne, ou un demi-stand.",
    "a|Compare les options, chiffres à l'appui. Michel devra pouvoir valider ta recommandation.",
    "fin|À toi : compare les options et recommande une solution."
  ] },

"B42c-P2": { titre: "Avant la clôture de fin décembre", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Lundi, début octobre. Les artisans et petites entreprises de l'Essonne arbitrent leurs derniers investissements de l'année.",
    "a|Leur exercice se clôt fin décembre. Que peut-on encore leur promettre d'ici là ?",
    "a|Vérifie-le d'abord. Ensuite seulement, construis l'opération.",
    "fin|À toi : vérifie les délais à rebours, puis construis l'opération saisonnière."
  ] },

"B42d-P2": { titre: "Un seul plan de prospection ce mois-ci", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Réunion d'équipe. Le temps manque : un seul plan de prospection pourra être mené ce mois-ci.",
    "a|Soit on relance nos clients existants, soit on part à la conquête de nouveaux clients professionnels.",
    "a|Michel veut des ventes rapides d'ici la fin du trimestre. Compare les deux plans pour que je lui présente une recommandation.",
    "fin|À toi : compare les deux plans et prépare la recommandation."
  ] },

"B43a-P2": { titre: "Mme Da Silva enchaîne les objections", decor: "telephone", bout_du_fil: "DA SILVA PAYSAGE", a: P_KARIM, b: sayClient("Mme Da Silva", "Gérante, Da Silva Paysage", "f"),
  lignes: [
    "n|Karim t'a confié l'appel de Mme Da Silva, repérée comme « flotte vieillissante ». Tu viens de faire ton accroche.",
    "b|On vient de renouveler notre flotte, ce n'est pas le moment.",
    "b|Et de toute façon, chez vous les délais sont trop longs : la dernière fois, on a attendu 4 mois.",
    "fin|À toi : réponds à ces objections et obtiens une suite concrète."
  ] },

"B43b-P2": { titre: "M. Tessier répond « on verra »", decor: "telephone", a: P_KARIM, b: sayClient("M. Tessier", "Venu aux portes ouvertes", "h"),
  lignes: [
    "n|Mardi, ton premier appel à M. Tessier n'a rien donné : « peut-être », « on verra », « pourquoi pas ».",
    "a|Rappelle-le aujourd'hui, jeudi. Mais change de méthode.",
    "a|On ne doit ni le perdre, ni le brusquer.",
    "fin|À toi : prépare ce nouvel appel adapté à M. Tessier."
  ] },

"B43c-P2": { titre: "Un concurrent est passé avant nous", decor: "telephone", bout_du_fil: "BOULANGERIES MARCHAND", a: P_KARIM, b: sayClient("Mme Marchand", "Gérante, Boulangeries Marchand", "f"),
  lignes: [
    "n|Tu appelles les Boulangeries Marchand. Dès ton accroche, la gérante t'arrête.",
    "b|Un concessionnaire d'une autre marque m'a déjà contactée la semaine dernière. Il doit m'envoyer une offre.",
    "n|Karim te glisse une consigne : ne pas dénigrer ce concurrent, ne pas se lancer dans une bataille de prix.",
    "fin|À toi : poursuis l'échange avec Mme Marchand, puis rends compte à Karim."
  ] },

"B43d-P2": { titre: "Mme Lemaire réapparaît sur Instagram", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Il y a 9 jours, Mme Lemaire a écrit au sujet de la Renault 5 E-Tech. Tu lui as répondu, tu l'as relancée par mail : aucun retour.",
    "a|Hier soir, elle a commenté une de nos publications Instagram.",
    "a|Reprends le contact par ce canal. Et mets le SIC à jour, pour qu'on ne la relance pas deux fois.",
    "fin|À toi : reprends contact avec Mme Lemaire sur Instagram et mets le SIC à jour."
  ] },

"B44a-P2": { titre: "Mail ou réseaux sociaux : où mettre le budget ?", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Ce mois-ci, la même offre est partie en même temps par mail et sur les réseaux sociaux, avec des budgets différents.",
    "a|Michel veut tout miser sur le canal le moins cher.",
    "a|Avant de trancher, je veux une comparaison chiffrée et une proposition de répartition.",
    "fin|À toi : compare les deux canaux et propose une répartition."
  ] },

"B44b-P2": { titre: "L'« Offre du mois » s'effondre", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Chaque mois, le mail « Offre du mois » donne des résultats réguliers. Ce mois-ci, les réponses se sont effondrées.",
    "a|Je ne veux pas qu'on réécrive le mail au hasard.",
    "a|Trouve la cause avant la réunion commerciale de lundi.",
    "fin|À toi : diagnostique la cause de cette chute."
  ] },

"B44c-P2": { titre: "Karim ne suit que deux chiffres", decor: "bureau", a: P_MICHEL, b: P_TOI,
  lignes: [
    "n|Michel Vasseur veut suivre la prospection dans la durée, avec un tableau de bord mis à jour chaque mois.",
    "a|Aujourd'hui, Karim ne regarde que deux chiffres, et il en tire une conclusion optimiste.",
    "a|Voici les données brutes des trois derniers mois. Construis-moi un tableau simple.",
    "fin|À toi : construis le tableau de bord de suivi de la prospection."
  ] },

"B44d-P2": { titre: "Lundi matin, trois devis en attente", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Lundi matin. Trois devis attendent une réponse : un utilitaire pour un artisan, une citadine pour une particulière, trois fourgons pour une entreprise de livraison.",
    "a|Organise les relances de la journée, et rédige celle de l'artisan.",
    "a|Le devis le plus important, je l'appelle moi-même : prépare-moi l'appel.",
    "fin|À toi : priorise les trois relances de devis."
  ] },

"B45a-P2": { titre: "M. Perret et son tableau comparatif", decor: "concession", a: P_KARIM, b: sayClient("M. Perret", "Client, tableau en main", "h"),
  etiquettes: ["AUSTRAL", "NEUF"], couleurs: ["#9CA3AF", "#4B5563"],
  lignes: [
    "n|M. Perret arrive au showroom avec un tableau comparatif fait en ligne.",
    "b|Franchement, je penche pour un SUV concurrent : il est moins cher.",
    "a|Pars de sa comparaison, pas d'un argumentaire tout prêt. Sois honnête, et reste dans le geste commercial autorisé.",
    "fin|À toi : construis ta réponse à partir du tableau de M. Perret."
  ] },

"B45b-P2": { titre: "M. Lebrun a signé ailleurs", decor: "bureau", a: P_KARIM, b: sayClient("M. Lebrun", "Par mail", "h"),
  lignes: [
    "n|Lundi, un mail de M. Lebrun. Il avait essayé un Symbioz chez Vasseur et reçu un devis.",
    "b|Merci pour l'accueil et pour l'essai. Mais j'ai signé chez un mandataire en ligne.",
    "a|On lui répond sans insister, en valorisant ce que Vasseur peut encore lui apporter.",
    "a|Et on tire les leçons de cette vente perdue pour toute l'équipe.",
    "fin|À toi : réponds à M. Lebrun, puis tire les enseignements de cette vente perdue."
  ] },

"B45c-P2": { titre: "Quatre questions techniques de M. Nowak", decor: "concession", a: P_KARIM, b: sayClient("M. Nowak", "Mécanicien poids lourds", "h"),
  etiquettes: ["AUSTRAL", "HYBRIDE"], couleurs: ["#4B5563", "#B5651D"],
  lignes: [
    "n|Samedi, M. Nowak, mécanicien poids lourds, est venu voir l'Austral Techno.",
    "b|Les vendeurs me récitent souvent la brochure. Moi, je veux du concret.",
    "a|Il a posé quatre questions techniques précises, et il hésite avec un SUV hybride d'une autre marque. Pas question d'inventer une donnée.",
    "fin|À toi : prépare tes réponses et organise un échange avec l'atelier."
  ] },

"C11a-P2": { titre: "Une veille chaque semaine sur deux concurrents", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Michel Vasseur ne veut plus de réactions au coup par coup : il veut une veille régulière sur deux concurrents directs.",
    "a|Voici les relevés des trois dernières semaines, et une information rapportée par un client en showroom.",
    "a|Construis la grille de suivi, puis rédige le premier point de veille pour Michel.",
    "fin|À toi : construis la grille de veille et rédige le premier point."
  ] },

"C11b-P2": { titre: "La ZFE de l'agglomération voisine s'étend", decor: "concession", a: P_KARIM, b: sayClient("Un client", "Inquiet pour son diesel", "h"),
  lignes: [
    "n|L'agglomération voisine d'Évry-Courcouronnes vient d'annoncer l'extension de sa zone à faibles émissions.",
    "b|J'ai lu un article sur la ZFE… Je suis concerné, ou pas ?",
    "a|L'article de presse et le communiqué officiel ne disent pas tout à fait la même chose. Et les questions commencent.",
    "fin|À toi : évalue les clients concernés, propose une offre par segment et informe l'équipe."
  ] },

"C11c-P2": { titre: "« On vend de moins en moins de SUV hybrides »", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Un client a lu qu'on vend de moins en moins de SUV hybrides. Il hésite à en acheter un.",
    "a|Pourtant, chez nous, on en a vendu davantage ce trimestre.",
    "a|Comprends d'où vient cet écart avant de lui répondre. Ensuite, propose une phrase d'argumentaire à l'équipe.",
    "fin|À toi : confronte les deux sources et réponds au client."
  ] },

"C11d-P2": { titre: "Un argumentaire vieux de 8 mois", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|L'argumentaire de l'équipe sur les aides à l'achat d'un véhicule électrique date de 8 mois.",
    "a|Depuis, le dispositif a changé, et des informations contradictoires circulent.",
    "a|Mets l'argumentaire à jour, réponds à la cliente qui attend un chiffre, puis informe l'équipe.",
    "fin|À toi : mets à jour l'argumentaire sur les aides et réponds à la cliente."
  ] },

"C12a-P2": { titre: "M. Lacombe passe du chat au mail", decor: "bureau", a: P_KARIM, b: sayClient("M. Lacombe", "Par mail", "h"),
  lignes: [
    "n|Hier soir, M. Olivier Lacombe a échangé sur le chat au sujet de l'Austral. Ce matin, il écrit par mail.",
    "b|Suite au chat d'hier, j'attends ce que vous m'avez promis. Et j'ai une autre question.",
    "a|Je te confie le dossier. Reprends le fil exact de l'échange, puis mets sa fiche client à jour.",
    "fin|À toi : réponds à M. Lacombe et mets sa fiche à jour."
  ] },

"C12b-P2": { titre: "Mme Martinet attend depuis ce matin", decor: "bureau", a: P_KARIM, b: sayClient("Mme Martinet", "Attend sa Clio", "f"),
  lignes: [
    "n|Lundi, 14 h. Mme Hélène Martinet attend la livraison de sa Clio.",
    "n|Ce matin, elle a écrit par mail, puis sur le chat, puis en commentaire public sur Instagram. Personne ne lui a répondu.",
    "a|Reprends la situation en main. Ensuite, propose une règle pour que ça ne se reproduise pas.",
    "fin|À toi : réponds à Mme Martinet sur chaque canal et propose une règle interne."
  ] },

"C12c-P2": { titre: "Trois prix pour le même Symbioz", decor: "telephone", a: P_KARIM, b: sayClient("M. Aubert", "Veut signer samedi", "h"),
  lignes: [
    "n|M. Stéphane Aubert veut signer samedi pour un Renault Symbioz Techno.",
    "b|Le prix du site n'est pas celui qu'on m'a annoncé au téléphone, ni celui de mon devis. Lequel est le bon ?",
    "a|Vérifie quel prix Vasseur doit tenir, réponds-lui, puis fais corriger les supports qui ne sont pas à jour.",
    "fin|À toi : tranche cette incohérence de prix et réponds à M. Aubert."
  ] },

"C12d-P2": { titre: "Net'Essonne Services renouvelle sa flotte", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Mme Véronique Carrier, gérante de Net'Essonne Services, a écrit : elle veut renouveler sa flotte de 5 utilitaires.",
    "a|Chez elle, la décision se prendra à plusieurs.",
    "a|Construis le parcours de contact, du premier mail jusqu'à la livraison, et repère tout risque de retard.",
    "fin|À toi : construis le parcours omnicanal de ce client professionnel."
  ] },

"C13a-P2": { titre: "Les Garcia et la Renault 4 E-Tech", decor: "concession", a: P_KARIM, b: sayClient("Mme Garcia", "Cliente", "f"),
  etiquettes: ["RENAULT 4", "EVOLUTION"], couleurs: ["#B5651D", "#6B7280"],
  lignes: [
    "n|M. et Mme Garcia ont choisi une Renault 4 E-Tech Evolution neuve. Ils font reprendre leur Clio et veulent financer le reste en LOA.",
    "b|Ce qui m'inquiète, c'est la mensualité.",
    "n|M. Garcia, lui, veut savoir si la voiture sera « vraiment à eux ».",
    "a|Prépare le dossier, et explique-leur le financement avant la signature.",
    "fin|À toi : prépare le dossier et explique le financement aux Garcia."
  ] },

"C13b-P2": { titre: "Mme Chevallier part en déplacement", decor: "concession", a: P_ISABELLE, b: sayClient("Mme Chevallier", "Cliente", "f"),
  etiquettes: ["SÉLECTION", "MÉGANE"], couleurs: ["#9CA3AF", "#1E3A8A"],
  lignes: [
    "n|Mme Laetitia Chevallier achète une Renault Mégane au pôle occasion et fait reprendre sa Twingo.",
    "b|Je pars en déplacement professionnel : pouvez-vous reporter la livraison de 4 semaines ? Et c'est peut-être mon mari qui viendra la chercher.",
    "a|Vérifie que c'est possible, monte le dossier, puis confirme-lui tout par écrit.",
    "fin|À toi : adapte le dossier de Mme Chevallier à sa demande."
  ] },

"C13c-P2": { titre: "Les Lemoine : budget et sécurité", decor: "concession", a: P_KARIM, b: sayClient("Mme Lemoine", "Venue avec son mari", "f"),
  etiquettes: ["SYMBIOZ", "TECHNO"], couleurs: ["#9CA3AF", "#374151"],
  lignes: [
    "n|Samedi, M. et Mme Lemoine sont venus ensemble pour un Renault Symbioz Techno.",
    "b|Moi, je surveille le budget.",
    "n|M. Lemoine, lui, ne parle que de sécurité.",
    "a|Je te laisse mener la négociation dans le cadrage prévu. Prépare le récapitulatif avant la signature.",
    "fin|À toi : mène la négociation avec les deux époux."
  ] },

"C13d-P2": { titre: "L'attelage oublié de M. Vidal", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Lundi, tu relis le dossier de M. Thierry Vidal, qui a signé samedi pour un Renault Austral Techno.",
    "n|L'attelage dont il avait parlé ne figure pas sur le bon de commande.",
    "a|Préviens-le avant qu'il ne s'en rende compte, et règle le problème sans refaire tout le dossier.",
    "fin|À toi : corrige cette erreur et préviens M. Vidal."
  ] },

"C21a-P2": { titre: "Un deuxième retard pour Mme Marchetti", decor: "telephone", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Mme Marchetti a commandé une Renault Scénic E-Tech Techno il y a 7 semaines.",
    "a|Il y a 3 semaines, je lui ai annoncé un premier retard de 2 semaines. Elle l'a accepté.",
    "a|Ce matin, le constructeur signale un nouvel imprévu. Reprends le dossier, organise la suite avec Bruno et préviens-la dès aujourd'hui.",
    "fin|À toi : gère ce second retard avec Bruno et avec Mme Marchetti."
  ] },

"C21b-P2": { titre: "Trois utilitaires pour Clim'Essonne", decor: "atelier", a: P_KARIM, b: P_BRUNO,
  lignes: [
    "n|Les 3 utilitaires commandés par Clim'Essonne sont arrivés ce matin.",
    "a|Bruno, ils doivent être livrés ensemble, avec une préparation différente pour chacun.",
    "b|Entre mon atelier et les deux prestataires, il va falloir tout caler au jour près.",
    "fin|À toi : organise les préparations et confirme le déroulé à M. Brossard."
  ] },

"C21c-P2": { titre: "La pièce de l'attelage est en tension", decor: "atelier", a: P_BRUNO, b: P_TOI,
  lignes: [
    "n|M. Le Bihan a acheté un Renault Captur Techno avec un attelage, pour partir en vacances avec sa remorque.",
    "a|Ce matin, mon fournisseur m'alerte : la pièce pour son attelage est en tension. Aucun retard confirmé pour l'instant.",
    "n|Karim te demande d'analyser la situation et de lui proposer une conduite à tenir.",
    "fin|À toi : analyse le risque et propose une conduite à tenir à Karim."
  ] },

"C22a-P2": { titre: "Le mariage de Traiteur Mansouri", decor: "bureau", a: P_KARIM, b: sayClient("Mme Mansouri", "Gérante, Traiteur Mansouri", "f"),
  lignes: [
    "n|Traiteur Mansouri commande 2 utilitaires électriques, financés en crédit-bail.",
    "b|J'ai un impératif : je voudrais disposer des deux véhicules pour un grand mariage.",
    "a|Quatre services doivent être mis en œuvre avant la livraison, chacun par un intervenant différent. Je te confie la coordination.",
    "fin|À toi : coordonne les services et réponds à Mme Mansouri."
  ] },

"C22b-P2": { titre: "Attelage et barres de toit pour Mme Villeneuve", decor: "atelier", a: P_KARIM, b: P_BRUNO,
  lignes: [
    "n|Mme Villeneuve a acheté un Renault Symbioz Iconic, livré vendredi.",
    "a|Elle veut un attelage pour son porte-vélos, car elle part samedi, et des barres de toit pour cet hiver.",
    "b|Mon atelier est complet toute la semaine.",
    "fin|À toi : choisis la meilleure organisation et présente-la à Mme Villeneuve."
  ] },

"C22c-P2": { titre: "L'attestation d'assurance de M. Fontanel", decor: "bureau", a: P_ISABELLE, b: P_TOI,
  lignes: [
    "n|M. Fontanel achète une Renault Zoé d'occasion. Son assurance auto passe par le courtier partenaire de Vasseur.",
    "a|L'attestation devait arriver sous 5 jours ouvrés. Le délai est dépassé, et la remise des clés approche.",
    "a|Débloque la situation.",
    "fin|À toi : relance le courtier et tiens M. Fontanel informé."
  ] },

"C23a-P2": { titre: "M. Rigaud demande le remboursement de sa location", decor: "bureau", a: P_KARIM, b: sayClient("M. Rigaud", "Par mail", "h"),
  lignes: [
    "n|M. Rigaud a reçu son Renault Austral Techno avec 6 jours de retard. Il écrit, mécontent.",
    "b|J'ai dû louer une voiture pendant l'attente. Je vous demande de me la rembourser.",
    "a|Le dossier montre que ce retard a deux origines. Analyse les responsabilités avant de répondre.",
    "fin|À toi : analyse les responsabilités et prépare la réponse à M. Rigaud."
  ] },

"C23b-P2": { titre: "La troisième réclamation de Mme Berthelot", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Mme Berthelot a acheté une Renault Mégane E-Tech Evolution neuve il y a 4 mois.",
    "a|Elle dépose sa troisième réclamation, cette fois pour un petit défaut de finition.",
    "a|Traite ce problème. Mais cherche aussi à comprendre pourquoi une cliente si satisfaite à la livraison accumule les déceptions.",
    "fin|À toi : traite la réclamation et cherche la cause de ces déceptions."
  ] },

"C23c-P2": { titre: "M. Bellamy parle d'un avocat", decor: "telephone", a: P_KARIM, b: sayClient("M. Bellamy", "Gérant, déménagement", "h"),
  lignes: [
    "n|M. Bellamy, gérant d'une entreprise de déménagement, a acheté un Renault Master neuf il y a 3 semaines.",
    "b|La porte latérale se bloque pour la troisième fois ! Je vais voir avec mon avocat.",
    "a|On lui répond aujourd'hui, en appliquant la politique Vasseur. Et le dossier doit être prêt pour Michel.",
    "fin|À toi : réponds à M. Bellamy et prépare le dossier pour Michel Vasseur."
  ] },

"C24a-P2": { titre: "Le NPS monte : vraiment grâce au SMS ?", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Michel Vasseur est ravi : le NPS a progressé depuis qu'un SMS de suivi part après chaque livraison.",
    "a|Avant de lui répondre, je veux savoir ce que disent vraiment les résultats des 6 derniers mois.",
    "fin|À toi : analyse la tendance des résultats NPS."
  ] },

"C24b-P2": { titre: "Un 7/10 qui revient souvent", decor: "bureau", a: P_ISABELLE, b: P_TOI,
  lignes: [
    "n|M. Desmarais a acheté un véhicule d'occasion et donné 7/10 à l'enquête de satisfaction.",
    "a|Son commentaire n'est pas alarmant. Mais j'ai l'impression de lire souvent ce genre de remarque.",
    "a|Prépare ma réponse au client, et un point pour la réunion d'équipe.",
    "fin|À toi : réponds à M. Desmarais et prépare le point d'équipe."
  ] },

"C24c-P2": { titre: "Un NPS « correct » ?", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Michel Vasseur trouve le NPS global de la concession « correct ».",
    "a|J'ai un doute. Regarde séparément les particuliers et les professionnels, sur les quatre derniers trimestres.",
    "a|Je veux ton analyse avant la réunion d'équipe.",
    "fin|À toi : compare la satisfaction des deux segments."
  ] },

"C31a-P2": { titre: "Plus de nouvelles de M. Brunet depuis 3 ans", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|M. Loïc Brunet a acheté une Renault Clio neuve il y a presque 3 ans. Depuis, plus aucun signe de vie.",
    "a|Sa garantie constructeur arrive bientôt à échéance.",
    "a|Étudie sa fiche CRM, reprends contact cette semaine, et prévois la suite, quelle que soit sa réaction.",
    "fin|À toi : reprends contact avec M. Brunet."
  ] },

"C31b-P2": { titre: "Vasseur ouvre plus longtemps", decor: "bureau", a: P_MICHEL, b: P_TOI,
  lignes: [
    "n|Dans 3 semaines, à partir du lundi, Vasseur élargit ses horaires d'ouverture.",
    "a|Je veux prévenir toute la base clients. Mais pas question d'écrire un message différent pour chacun.",
    "n|Karim te confie la préparation de l'envoi, à partir de l'extraction CRM.",
    "fin|À toi : adapte l'annonce des nouveaux horaires aux profils de clients."
  ] },

"C31c-P2": { titre: "Le contrôle des pneus avant l'hiver", decor: "atelier", a: P_KARIM, b: P_BRUNO,
  lignes: [
    "n|Il y a 5 semaines, un mail a proposé un contrôle gratuit des pneus avant l'hiver. L'opération se termine dans 3 semaines.",
    "a|Bruno, j'ai repéré dans le CRM trois clients qui en auraient vraiment besoin. Aucun n'a réagi.",
    "b|Les pneus d'hiver, ça ne s'improvise pas au premier jour de neige.",
    "fin|À toi : relance ces trois clients, chacun à sa façon."
  ] },

"C32a-P2": { titre: "Des flottes qui partent entretenir ailleurs", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Les entreprises avec flotte font de plus en plus entretenir leurs véhicules ailleurs.",
    "a|Nos actions de fidélisation visent surtout les particuliers. Michel veut une action pour les professionnels.",
    "a|Choisis parmi mes pistes, calibre l'action et présente-la aux gérants.",
    "fin|À toi : conçois l'action de fidélisation pour les professionnels."
  ] },

"C32b-P2": { titre: "« Et moi, qu'est-ce que j'y gagne ? »", decor: "telephone", a: P_KARIM, b: sayClient("M. Tanguy", "Gérant, Tanguy Couverture", "h"),
  lignes: [
    "n|M. Olivier Tanguy, gérant de Tanguy Couverture, a recommandé deux confrères à Karim.",
    "b|Et moi, qu'est-ce que j'y gagne ?",
    "a|Notre parrainage est pensé pour les particuliers. Il faut une version pour les professionnels avant de lui répondre.",
    "fin|À toi : adapte le parrainage aux professionnels."
  ] },

"C32c-P2": { titre: "Une opération de fin d'année trop chère", decor: "bureau", a: P_MICHEL, b: P_TOI,
  lignes: [
    "n|Pour la fin d'année, Michel veut remercier les clients fidèles et les encourager à recommander Vasseur.",
    "a|Karim a fait une première proposition de montants. Elle dépasse le budget.",
    "a|Corrige l'opération, anticipe les cas délicats et rédige l'annonce.",
    "fin|À toi : construis l'opération de fin d'année dans le budget."
  ] },

"C32d-P2": { titre: "Ceux qui n'auront pas le Pack Sérénité", decor: "bureau", a: P_MICHEL, b: P_TOI,
  lignes: [
    "n|Dans 2 semaines, Vasseur lance le « Pack Sérénité », réservé aux clients qui ont acheté au moins 2 véhicules.",
    "n|Karim a repéré des clients très attachés à Vasseur qui n'y auront pas droit, dont une cliente très présente sur les réseaux sociaux.",
    "a|Je ne changerai pas la règle. Prépare la réponse et un geste adapté avant le lancement.",
    "fin|À toi : anticipe les effets de cette offre et prépare la réponse."
  ] },

"C33a-P2": { titre: "La Carte Privilège Atelier, un an après", decor: "bureau", a: P_MICHEL, b: P_TOI,
  lignes: [
    "n|Il y a un an, Vasseur a lancé la « Carte Privilège Atelier ». Le premier mois, l'accueil a été excellent.",
    "a|L'effet dure-t-il ? Faut-il la reconduire ?",
    "n|Karim a déjà une conclusion enthousiaste. Il te demande de vérifier les chiffres avant la réunion.",
    "fin|À toi : évalue la Carte Privilège Atelier sur la durée."
  ] },

"C33b-P2": { titre: "4 achats sur 10 : le test de Karim", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Karim a testé une nouvelle offre de reprise majorée auprès de 10 clients. 4 ont acheté.",
    "a|C'est génial ! Je l'envoie la semaine prochaine à 1 500 clients.",
    "n|Michel Vasseur veut ton avis avant de valider.",
    "fin|À toi : examine ce test et donne ton avis à Michel."
  ] },

"C33c-P2": { titre: "Abandonner la Journée contrôle offert ?", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Chez Vasseur, les actions de fidélisation sont jugées uniquement sur le taux de conversion.",
    "a|Sur cette base, Michel envisage d'abandonner la « Journée contrôle offert » au profit de la reprise majorée.",
    "a|Je pense que c'est une erreur. Aide-moi à préparer l'argumentaire.",
    "fin|À toi : propose un indicateur qui va au-delà du taux de conversion."
  ] },

"B41d-P2": { titre: "M. Guérin revient pour un essai", decor: "concession", a: P_KARIM, b: sayClient("M. Guérin", "Revient pour un essai", "h"),
  etiquettes: ["CLIO 6", "ESSAI"], couleurs: ["#1E3A8A", "#B5651D"],
  lignes: [
    "n|Mardi. M. Patrice Guérin, reçu par Karim il y a trois semaines, revient pour essayer la Clio 6. C'est toi qui le reçois.",
    "n|Pendant l'essai, il t'apprend plusieurs choses nouvelles.",
    "a|Mets sa fiche à jour : je dois comprendre où en est son dossier sans avoir à le rappeler.",
    "fin|À toi : enrichis la fiche prospect de M. Guérin."
  ] },

"C33d-P2": { titre: "M. Cadoret arrête son activité", decor: "telephone", a: P_KARIM, b: sayClient("M. Cadoret", "Artisan plombier", "h"),
  lignes: [
    "n|M. Cadoret, artisan plombier et client de Vasseur depuis 3 ans, appelle.",
    "b|Je voulais vous prévenir : j'arrête mon activité à la fin du mois. Je redeviens un simple particulier.",
    "a|La campagne « Entretien flotte pro » part jeudi. Sa fiche doit être à jour aujourd'hui.",
    "fin|À toi : actualise la fiche de M. Cadoret dans le SIC."
  ] }

});

// ═════════════════════ PALIER 3 ═════════════════════
Object.assign(SAYNETES_MISSIONS, {

"C11a-P3": { titre: "Renault 5 ou Kangoo Van pour le stock ?", decor: "bureau", a: P_MICHEL, b: P_TOI,
  lignes: [
    "n|Fin de mois. Michel Vasseur ne peut commander que 3 véhicules de plus pour le stock.",
    "a|Renault 5 E-Tech ou Kangoo Van E-Tech ? Karim m'a apporté tout ce qui circule sur ces deux modèles.",
    "a|Des chiffres, une promotion vue par un client, une aide dont on parle… Tout n'a pas la même valeur.",
    "a|Je veux savoir sur quoi repose ta recommandation, pas seulement la recommandation.",
    "fin|À toi : trie les signaux de veille et propose une répartition des 3 véhicules."
  ] },

"C11b-P3": { titre: "La note de veille du trimestre", decor: "bureau", a: P_MICHEL, b: P_TOI,
  lignes: [
    "n|Réunion de fin de trimestre. Michel Vasseur te confie, pour la première fois, la note de veille.",
    "a|Quatre sujets sur la table. Certains sont sûrs, d'autres beaucoup moins.",
    "a|Une page, pas plus. Pour chaque sujet que tu gardes : ce qu'on sait, ce que ça change pour nous, ce qu'on fait.",
    "fin|À toi : hiérarchise les sujets et rédige la note pour Michel Vasseur."
  ] },

"C11c-P3": { titre: "Un Q3 « bien moins cher » sur internet", decor: "concession", a: P_ISABELLE, b: P_TOI,
  lignes: [
    "n|En réunion, un vendeur du pôle occasion affirme qu'un Audi Q3 équivalent se vend bien moins cher chez un mandataire.",
    "a|Il voudrait qu'on baisse le prix du nôtre tout de suite. Moi, je voudrais d'abord savoir si c'est vrai.",
    "a|Et justement, M. Ollivier, qui a essayé notre Q3, vient d'arriver au showroom… Il a entendu la même chose.",
    "fin|À toi : évalue cette rumeur, organise sa vérification et réponds à M. Ollivier."
  ] },

"C12a-P3": { titre: "Le prix entendu au téléphone", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Ce matin, la comptable de Delval Logistique a écrit pour faire confirmer un prix entendu au téléphone il y a dix jours.",
    "a|Deux Master L2H2, et un prix bien en dessous du catalogue. Le collègue qui a eu l'appel est absent jusqu'à demain.",
    "a|M. Delval veut signer jeudi. Je te confie le dossier : reste dans le cadrage, et ne mets personne en cause.",
    "fin|À toi : diagnostique l'écart et réponds à Delval Logistique."
  ] },

"C12b-P3": { titre: "Une étoile sur la page Google", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|M. Fabre attend toujours sa Renault 4 E-Tech. Ce matin, il a publié un avis 1 étoile sur la page Google de la concession.",
    "a|L'avis a déjà des mentions « utile », et quelqu'un a ajouté un commentaire dessous.",
    "a|Il faut répondre aujourd'hui, en respectant notre charte. Et régler le fond du problème, pas seulement l'avis.",
    "fin|À toi : réponds en public et en privé, puis traite la cause."
  ] },

"C12c-P3": { titre: "Deux délais pour la même commande", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Lundi matin. Arnaud Livraisons signe lundi prochain la commande de trois Kangoo Van E-Tech.",
    "a|Le mail envoyé il y a trois semaines annonçait un délai. La logistique vient de m'en donner un autre, plus long.",
    "a|M. Arnaud ne le sait pas encore, et son nouveau contrat démarre bientôt. On ne le laisse pas le découvrir à la signature.",
    "fin|À toi : réconcilie les deux délais et construis une solution avant le rendez-vous."
  ] },

"C13a-P3": { titre: "Trois utilitaires, trois façons de payer", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Chaumont Bâtiment commande d'un coup un Kangoo Van, un Trafic et un Master.",
    "a|Comptant pour l'un, crédit pour l'autre, LOA avec reprise pour le troisième. Et une remise flotte pas encore affectée.",
    "a|M. Chaumont veut sortir le moins d'argent possible à la livraison… et il a un chantier qui démarre bientôt.",
    "fin|À toi : monte le dossier flotte et propose un calendrier de livraison."
  ] },

"C13b-P3": { titre: "« On nous a fait mieux ailleurs »", decor: "concession", a: sayClient("M. Lefèvre", "Veut un Symbioz Iconic", "h"), b: sayClient("Mme Lefèvre", "Veut comparer avant de signer", "f"),
  lignes: [
    "n|M. et Mme Lefèvre sont décidés pour un Renault Symbioz Iconic… à condition d'obtenir une grosse remise.",
    "a|On nous a fait mieux ailleurs. Alors, vous nous suivez ? On part bientôt en vacances, je veux la voiture avant.",
    "b|Moi, je ne signe rien aujourd'hui. Je veux prendre le temps de comparer.",
    "n|Dans le couloir, Karim Yildiz glisse qu'il manque une vente pour l'objectif du mois.",
    "fin|À toi : réponds au couple sans sortir du cadrage de négociation."
  ] },

"C13c-P3": { titre: "Trois surprises à la livraison", decor: "concession", a: sayClient("M. Bertin", "Vient chercher son Austral", "h"), b: P_TOI,
  lignes: [
    "n|M. Bertin vient chercher son Renault Austral Techno. En reprenant le dossier avec lui, tu découvres trois écarts.",
    "a|Bon, on signe et je file ? J'ai un rendez-vous juste après.",
    "n|L'attelage, la reprise, le financement : rien n'est tout à fait ce qu'il attendait. Et Karim Yildiz est en clientèle.",
    "fin|À toi : classe les écarts, annonce-les dans le bon ordre et organise leur correction."
  ] },

"C21a-P3": { titre: "Une rayure avant le grand jour", decor: "atelier", a: P_BRUNO, b: P_TOI,
  lignes: [
    "n|Lundi. Le Symbioz Iconic de Mme Rivière doit être remis samedi matin : c'est un cadeau pour ses parents.",
    "a|La préparation, je m'en occupe, pas de souci. Mais il y a une petite rayure sur une portière.",
    "a|La retouche part chez le carrossier. Lui, il ne peut pas encore dire quand ce sera fini.",
    "fin|À toi : décide quoi dire à Mme Rivière, et quand, puis organise la suite."
  ] },

"C21b-P3": { titre: "Le voyant du véhicule n° 3", decor: "atelier", a: P_BRUNO, b: P_TOI,
  lignes: [
    "n|Vendredi après-midi. Les quatre Kangoo Van de Lopes Propreté doivent partir lundi matin.",
    "a|Trois sont prêts. Sur le quatrième, un voyant s'allume par intermittence. Il faut le réparer, et je ne sais pas encore combien de temps ça prendra.",
    "a|Karim est en congé. C'est toi qui pilotes. Mme Lopes avait insisté : les quatre le même matin.",
    "fin|À toi : choisis une solution pour lundi et préviens la cliente."
  ] },

"C21c-P3": { titre: "L'attelage a disparu du bon de commande", decor: "bureau", a: P_BRUNO, b: P_TOI,
  lignes: [
    "n|Tu prépares la transmission du dossier de Mme Savary à l'atelier. Son Captur Techno sera livré dans quelques jours.",
    "a|Alors, qu'est-ce que je prépare exactement ? Je dois commander les pièces à temps.",
    "n|Sur la fiche du rendez-vous, l'attelage est coché. Sur le bon de commande signé, il n'apparaît pas.",
    "fin|À toi : lève la contradiction et transmets un dossier fiable à Bruno Faucher."
  ] },

"C22a-P3": { titre: "Trois accessoires et une semaine chargée", decor: "atelier", a: P_BRUNO, b: P_TOI,
  lignes: [
    "n|M. Delmas veut trois accessoires posés sur son Captur Evolution avant la livraison, lundi prochain.",
    "a|Cette semaine, mon planning est presque plein. Il ne me reste qu'une journée avant la livraison.",
    "a|Le carrossier partenaire et le fournisseur en ligne ont peut-être des solutions. Mais le budget du client est serré.",
    "fin|À toi : cherche la bonne combinaison et présente un arbitrage à M. Delmas."
  ] },

"C22b-P3": { titre: "Accordé ou en attente ?", decor: "telephone", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Mardi matin. Menuiserie Caron doit recevoir lundi deux Trafic Confort financés en LOA.",
    "a|Dimanche, l'organisme partenaire nous a écrit que c'était bon. Et ce matin, un autre conseiller appelle : il manque une pièce.",
    "a|M. Caron, lui, croit que tout est réglé. Je te confie le dossier.",
    "fin|À toi : calcule ta marge de temps et sécurise la livraison."
  ] },

"C22c-P3": { titre: "Un seul service dans le budget", decor: "concession", a: sayClient("Mme Kowalski", "Achète une Clio 6 Techno", "f"), b: P_TOI,
  lignes: [
    "n|Mme Kowalski vient de choisir sa Clio 6 Techno hybride. Reste la question des services associés.",
    "a|L'extension de garantie ou le contrat d'entretien… Je ne peux pas prendre les deux.",
    "a|Je roule peu, surtout en ville, et je compte la garder quelques années. Qu'est-ce qui est le plus utile pour moi ?",
    "fin|À toi : chiffre ce que chaque service lui apporte vraiment et conseille-la."
  ] },

"C23a-P3": { titre: "Un régulateur mal réglé et une facture contestée", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|M. Perrichon a reçu son Austral il y a trois jours. Ce matin, il écrit, mécontent.",
    "a|Une aide à la conduite qui ne marche pas comme prévu, une demande de remboursement, et une menace d'avis en ligne.",
    "a|Michel est en déplacement jusqu'à jeudi. Règle ce qui relève de toi, et prépare-lui le reste.",
    "fin|À toi : trie les deux demandes et réponds à M. Perrichon."
  ] },

"C23b-P3": { titre: "Chacun accuse l'autre", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|SARL Ateliers du Gâtinais a reçu ses trois Master en retard. Son gérant veut savoir ce qui s'est passé.",
    "a|Le commercial dit que c'est l'atelier. Bruno dit que c'est le commercial.",
    "a|Avant de répondre au client, je veux les faits. Les traces écrites du dossier sont là.",
    "fin|À toi : reconstitue ce qui s'est passé, puis réponds à M. Garnier."
  ] },

"C23c-P3": { titre: "« Je vais demander un deuxième avis »", decor: "telephone", a: sayClient("Mme Guillermic", "Cliente depuis 6 ans", "f"), b: P_TOI,
  lignes: [
    "n|Mme Guillermic appelle au sujet de son Symbioz. Le même bruit moteur, deux semaines après le passage à l'atelier.",
    "a|Je vous fais confiance depuis des années, mais là… J'ai pris rendez-vous dans un autre garage, pour avoir un deuxième avis.",
    "a|Je ne veux pas une troisième intervention pour rien.",
    "fin|À toi : change le traitement du problème et regagne sa confiance."
  ] },

"C24a-P3": { titre: "Le NPS monte, les réclamations aussi", decor: "bureau", a: P_MICHEL, b: P_TOI,
  lignes: [
    "n|Michel Vasseur te montre les résultats du trimestre pour les clients professionnels.",
    "a|Le NPS progresse. Bonne nouvelle. Mais il y a aussi plus de réclamations. Alors, je dois m'inquiéter ou pas ?",
    "a|Ce trimestre, notre nouvelle offre de flotte a amené pas mal de nouveaux clients.",
    "fin|À toi : explique cet écart et trouve où se trouve le problème."
  ] },

"C24b-P3": { titre: "Personne ne nous dit rien pendant l'attente", decor: "atelier", a: P_BRUNO, b: P_TOI,
  lignes: [
    "n|Les clients de l'atelier se plaignent toujours de la même chose : pendant l'attente, personne ne les informe.",
    "a|Michel nous accorde un budget pour l'année. J'ai étudié trois options.",
    "a|Il veut une action dont on puisse mesurer l'effet assez vite.",
    "fin|À toi : compare les options et recommande un choix évaluable."
  ] },

"C24c-P3": { titre: "« On m'a menti pour me faire signer »", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|M. Rousset a publié un avis 2 étoiles sur son Captur Techno : il affirme qu'on lui avait promis une garantie plus longue.",
    "a|Le vendeur dit qu'il n'a jamais promis ça. Le bon de commande signé dit autre chose que l'avis.",
    "a|Je veux une réponse, et surtout comprendre d'où vient ce malentendu.",
    "fin|À toi : réponds à l'avis et cherche l'origine du malentendu."
  ] },

"C31a-P3": { titre: "Six clients, quatre appels", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Karim Yildiz te réserve du temps cette semaine pour des appels de fidélisation.",
    "a|Le CRM te propose six clients. Tu n'auras le temps d'en appeler que quatre.",
    "a|Attention : certaines fiches ne sont pas à jour, et une note d'Isabelle n'a pas de date.",
    "fin|À toi : vérifie les fiches douteuses et choisis tes quatre appels."
  ] },

"C31b-P3": { titre: "M. Andrieu dans l'envoi de demain ?", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Demain matin, un mail sur le Renault Symbioz part automatiquement vers des clients jugés satisfaits.",
    "a|Tiens, M. Andrieu est dans la liste. Sa réclamation est close… mais je l'ai trouvé encore agacé la semaine dernière.",
    "a|Je n'ai rien noté, je n'étais pas sûr. Tu as jusqu'à ce soir pour modifier la liste.",
    "fin|À toi : décide si M. Andrieu reçoit le mail, puis corrige la pratique."
  ] },

"C31c-P3": { titre: "Des listes qui se chevauchent", decor: "bureau", a: P_MICHEL, b: P_TOI,
  lignes: [
    "n|Vasseur prépare une campagne SMS pour une offre de reprise majorée.",
    "a|Avant d'envoyer, il faut retirer plusieurs listes de clients. Et certaines se recoupent.",
    "a|Je veux le nombre exact de clients ciblés, et le coût de l'envoi.",
    "fin|À toi : calcule la cible exacte et sécurise l'envoi."
  ] },

"C32a-P3": { titre: "Une enveloppe trop petite pour tout", decor: "bureau", a: P_MICHEL, b: P_TOI,
  lignes: [
    "n|Michel Vasseur confie une enveloppe de fidélisation pour le trimestre.",
    "a|Trois leviers, et pas assez d'argent pour les financer tous en entier.",
    "a|Je veux une répartition que je comprenne, et de quoi vérifier en fin de trimestre si c'était le bon choix.",
    "fin|À toi : compare les leviers et répartis l'enveloppe."
  ] },

"C32b-P3": { titre: "Faire entrer Gauvin au Club ?", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Karim Yildiz négocie une grosse commande d'utilitaires avec Transports Gauvin.",
    "a|Si je les fais entrer tout de suite au Club Vasseur Pro, ça peut faire pencher la balance.",
    "a|Je sais, ils n'ont qu'un véhicule chez nous… Qu'est-ce que tu en penses, avant que j'en parle à Michel ?",
    "fin|À toi : réponds à Karim sans casser la règle du Club."
  ] },

"C32c-P3": { titre: "Un geste à chaque livraison", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Transports Mercadier reçoit ses Trafic en plusieurs fois au cours de l'année. Une partie est déjà livrée.",
    "a|Le gérant attend un geste à chaque livraison, même pour les véhicules qu'il a déjà reçus.",
    "a|D'accord, mais dans notre règle budgétaire. Construis-moi le programme.",
    "fin|À toi : construis une fidélisation qui suit les livraisons réelles."
  ] },

"C33a-P3": { titre: "Le bilan de l'année", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Michel Vasseur veut le bilan des trois actions de fidélisation de l'année avant de fixer le budget suivant.",
    "a|Le CRM et la comptabilité ne donnent pas le même chiffre pour une action. Le coût d'une autre n'a pas été noté à part.",
    "a|Et la troisième n'a fait vendre aucune voiture directement. Ça ne veut pas dire qu'elle n'a servi à rien.",
    "fin|À toi : fiabilise les chiffres et construis le bilan."
  ] },

"C33b-P3": { titre: "Trois actions, trois contextes", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Trois actions de fidélisation ont été menées cette année. Sur le papier, l'une écrase les autres.",
    "a|Michel veut savoir comment répartir le budget de l'an prochain.",
    "a|Avant de comparer les taux, regarde bien dans quelles conditions chaque résultat a été obtenu.",
    "fin|À toi : compare les trois actions et propose une répartition."
  ] },

"C33c-P3": { titre: "« Encore la même offre ? »", decor: "bureau", a: P_MICHEL, b: P_TOI,
  lignes: [
    "n|Depuis un an et demi, une offre de reprise majorée part régulièrement vers les clients anciens.",
    "a|Elle fait vendre de plus en plus. Mais certains clients commencent à s'en plaindre.",
    "a|On continue, on change quelque chose, ou on arrête ?",
    "fin|À toi : analyse les deux indicateurs et décide de la suite du programme."
  ] },

"C33d-P3": { titre: "Mettre le SIC à jour avant vendredi", decor: "bureau", a: P_ISABELLE, b: P_TOI,
  lignes: [
    "n|Mardi. Trois actions de fidélisation viennent de se terminer, et le bilan est vendredi.",
    "a|Pour la reprise majorée, tout est propre. Pour le parrainage, deux fiches sont incomplètes.",
    "a|Et pour les gestes après réclamation… je me souviens d'environ cinq ou six clients, mais je n'ai pas de liste.",
    "fin|À toi : enrichis le SIC en traitant chaque source selon sa fiabilité."
  ] },

"B41a-P3": { titre: "Le budget du Groupe Bréard a changé", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Le Groupe Bréard veut renouveler six utilitaires avant la fin de l'année.",
    "a|Au premier rendez-vous, le dirigeant m'a donné un budget. Au deuxième, il m'a dit qu'il serait plus serré.",
    "a|Sans chiffre. Et son responsable des chantiers tient à ses fourgons.",
    "fin|À toi : lève la contradiction et prépare une offre qui puisse s'adapter."
  ] },

"B41b-P3": { titre: "Cinq demandes avant la fermeture", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Il est 18 h. Cinq demandes sont arrivées dans la journée, par le site et par téléphone.",
    "a|Je file en rendez-vous jusqu'à la fermeture. Tu ne pourras en traiter sérieusement que deux.",
    "a|Les autres ne doivent pas rester sans réponse pour autant.",
    "fin|À toi : choisis les deux demandes à traiter ce soir et prévois une suite pour les autres."
  ] },

"B41c-P3": { titre: "Plus de Captur vendus, mais à quel prix ?", decor: "bureau", a: P_MICHEL, b: P_TOI,
  lignes: [
    "n|Avant la réunion commerciale, Michel Vasseur regarde les ventes de véhicules neufs du trimestre.",
    "a|Karim est ravi : on a vendu plus de Captur, grâce aux remises.",
    "a|Moi, je me demande ce que ces remises nous ont coûté. Et si ce sont vraiment elles qui ont fait la hausse.",
    "fin|À toi : analyse volume et marge, puis propose un ajustement mesuré."
  ] },

"B41d-P3": { titre: "Vingt minutes pour quatre fiches", decor: "bureau", a: P_ISABELLE, b: P_TOI,
  lignes: [
    "n|17 h. Isabelle Ferrand te signale quatre fiches prospects qui ne sont plus à jour dans le SIC.",
    "a|Des informations plus récentes traînent ailleurs : un mail, une note de Karim qui n'a pas été saisie…",
    "a|Tu ne pourras pas tout faire ce soir. Commence par ce qui compte vraiment.",
    "fin|À toi : choisis les fiches à mettre à jour et fais-le avec rigueur."
  ] },

"B42a-P3": { titre: "Un budget pour trois opérations", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Karim Yildiz a un budget de prospection pour le trimestre, sans rallonge possible.",
    "a|J'ai trois opérations en tête : une campagne mail, un salon, de la publicité sur les réseaux sociaux.",
    "a|Je ne peux pas tout faire au maximum. Il me faut une répartition que je puisse défendre devant Michel.",
    "fin|À toi : compare les trois opérations et répartis le budget."
  ] },

"B42b-P3": { titre: "La même semaine, deux opérations", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|En novembre, une campagne auprès des entreprises et un salon doivent être prêts la même semaine.",
    "a|Isabelle et moi, on est les seuls à pouvoir les préparer. Et on n'aura pas de renfort.",
    "a|Tout ne pourra pas être fait au mieux. Propose-moi une organisation réaliste.",
    "fin|À toi : calcule la charge de travail et décide de l'organisation."
  ] },

"B42c-P3": { titre: "Attirer de nouveaux clients vers l'occasion", decor: "bureau", a: P_ISABELLE, b: P_TOI,
  lignes: [
    "n|Michel Vasseur veut développer la clientèle de Vasseur Sélection.",
    "a|Sa crainte : une campagne qui attire surtout des gens qui auraient de toute façon acheté du neuf chez nous.",
    "a|On ne veut pas déplacer des ventes, on veut de nouveaux clients. Tu as un petit budget pour ça.",
    "fin|À toi : conçois l'opération et prévois de quoi vérifier qu'elle ne cannibalise pas le neuf."
  ] },

"B43a-P3": { titre: "Le prix d'un côté, l'image de l'autre", decor: "exterieur", enseigne: "HYGIÈNE PRO 91", a: sayClient("M. Collin", "Responsable d'exploitation", "h"), b: sayClient("Mme Arbaoui", "Dirigeante", "f"),
  lignes: [
    "n|Rendez-vous chez Hygiène Pro 91, qui renouvelle ses véhicules. Tu accompagnes Karim Yildiz.",
    "a|Nous avons un plafond, et cinq équipes partent chaque matin. Il me faut cinq véhicules.",
    "b|Nos véhicules roulent devant nos clients tous les jours. L'image compte aussi, quitte à en prendre un peu moins.",
    "fin|À toi : prépare des configurations sans trancher à leur place, et clarifie qui décide."
  ] },

"B43b-P3": { titre: "Vendredi, 14 h : un seul créneau", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Mercredi. Deux demandes de rendez-vous arrivent presque en même temps pour vendredi à 14 h.",
    "a|D'un côté, une entreprise de transport et une belle flotte. De l'autre, un particulier dont la voiture vient de lâcher.",
    "a|Je suis libre vendredi à 14 h, mais je ne connais aucun des deux dossiers.",
    "fin|À toi : décide qui tu reçois, et organise la suite pour n'en perdre aucun."
  ] },

"B43c-P3": { titre: "Une offre imprimée sur le bureau", decor: "concession", a: sayClient("M. Leroux", "Veut un Captur Techno", "h"), b: sayClient("Mme Leroux", "Attentive à l'entretien", "f"),
  lignes: [
    "n|M. et Mme Leroux posent sur ton bureau l'offre imprimée d'un concurrent pour un Captur Techno.",
    "a|Chez eux, c'est bien moins cher. Vous vous alignez ? Je veux la voiture avant la fin du mois.",
    "b|Moi, ce qui compte, c'est l'entretien et la garantie.",
    "fin|À toi : vérifie l'offre concurrente avant de répondre, dans ta marge de négociation."
  ] },

"B44a-P3": { titre: "Cinq devis, trois relances", decor: "bureau", a: P_KARIM, b: P_TOI,
  lignes: [
    "n|Lundi matin. Cinq devis attendent une réponse.",
    "a|Tu as le temps d'en relancer sérieusement trois aujourd'hui.",
    "a|Ne te contente pas des dates d'expiration : regarde aussi qui sont les clients et ce qui est en jeu.",
    "fin|À toi : choisis tes trois relances et organise la suite pour les deux autres."
  ] },

"B44b-P3": { titre: "Trois changements, une chute", decor: "bureau", a: P_MICHEL, b: P_TOI,
  lignes: [
    "n|Le taux de réponse au mail mensuel de Vasseur s'est effondré.",
    "a|Karim veut tout corriger le mois prochain. Moi, je veux d'abord comprendre.",
    "a|Ce mois-ci, trois choses ont changé en même temps. Laquelle a pesé le plus ?",
    "fin|À toi : estime le poids de chaque cause et propose un test."
  ] },

"B44c-P3": { titre: "Un tableau rempli à la hâte", decor: "bureau", a: P_MICHEL, b: P_TOI,
  lignes: [
    "n|Michel Vasseur te transmet le tableau de bord de prospection du mois pour la réunion commerciale.",
    "a|Il a été rempli vite. Relis-le avant qu'on en tire des conclusions.",
    "fin|À toi : repère les anomalies, corrige ce qui peut l'être et recommande avec honnêteté."
  ] },

"B45a-P3": { titre: "Neuf ou occasion récente ?", decor: "concession", a: sayClient("M. Hamon", "Hésite entre deux Captur", "h"), b: P_TOI,
  lignes: [
    "n|M. Hamon compare un Captur Evolution neuf et un Captur d'occasion arrivé cette semaine chez Vasseur Sélection.",
    "a|Franchement, je n'ai pas de préférence. Je regarde ce qui se présente.",
    "n|Plus tôt, Karim Yildiz t'a glissé que Vasseur gagne en général davantage sur le neuf.",
    "fin|À toi : découvre son vrai besoin avant de lui conseiller une offre."
  ] },

"B45b-P3": { titre: "« Le budget est trop juste »", decor: "concession", a: sayClient("Mme Ferrari", "Intéressée par une Clio 6", "f"), b: P_TOI,
  lignes: [
    "n|Mme Ferrari a eu un coup de cœur pour une Clio 6 Techno hybride. Puis elle a vu le prix.",
    "a|Elle me plaît beaucoup, mais le budget est trop juste.",
    "n|Elle n'a pas encore regardé les différentes façons de financer la voiture.",
    "fin|À toi : trouve son vrai frein et compare les financements en coût total."
  ] },

"B45c-P3": { titre: "Le moins cher à l'achat", decor: "telephone", a: sayClient("M. Faivre", "Gérant de Faivre Messagerie", "h"), b: P_TOI,
  lignes: [
    "n|Faivre Messagerie compare un Trafic Grand Confort à un fourgon concurrent, moins cher à l'achat.",
    "a|Je garde mes véhicules longtemps, mais là, le concurrent est moins cher. Et je n'ai pas beaucoup de trésorerie en ce moment.",
    "fin|À toi : prépare une comparaison en coût total honnête pour le rendez-vous de demain."
  ] }

});
