// ================================================
//   LABORO Auto — Référentiel de compétences & ressources pédagogiques
//   Codes identiques au référentiel MCV Option B (Bloc 1, 2, 3, 4)
// ================================================

const COMP = [
  {code:'C1.1', label:'Veille commerciale', g:'G1'},
  {code:'C1.2', label:'Vente omnicanale', g:'G1'},
  {code:'C1.3', label:'Exécution de la vente', g:'G1'},
  {code:'C2.1', label:'Suivi commande & services associés', g:'G2'},
  {code:'C2.2', label:'Réclamations client', g:'G2'},
  {code:'C2.3', label:'Satisfaction client', g:'G2'},
  {code:'C3.1', label:'Info & contact client', g:'G3'},
  {code:'C3.2', label:'Actions de fidélisation', g:'G3'},
  {code:'C3.3', label:'Évaluation fidélisation', g:'G3'},
  {code:'B4.1', label:'Rechercher et qualifier les informations de prospection', g:'G4'},
  {code:'B4.2', label:"Concevoir un plan et des supports de prospection", g:'G4'},
  {code:'B4.3', label:'Mettre en œuvre la prospection commerciale', g:'G4'},
  {code:'B4.4', label:'Assurer le suivi de la prospection et des devis', g:'G4'},
  {code:'B4.5', label:"Valoriser l'offre face à la concurrence", g:'G4'},
];

const RES = {

  'B4.1':{t:"Rechercher et qualifier les informations de prospection",c:`<div class="res-section res-debutant">
<p><strong>B4.1 — Trouver et qualifier des prospects chez Vasseur.</strong> Un prospect est un client potentiel qu'on n'a pas encore. Chez Vasseur, on distingue deux familles de prospects : les particuliers (achat citadine, SUV, électrique) et les professionnels (artisans, PME — utilitaires). Avant de proposer quoi que ce soit, un commercial doit d'abord <em>comprendre</em> le prospect — proposer trop vite, c'est le meilleur moyen de perdre une vente.</p>
<p><strong>D'où viennent les prospects chez Vasseur ?</strong></p>
<ul>
<li>Formulaires du site laboro-edu (demande de devis, essai, information)</li>
<li>Appels entrants directs à la concession</li>
<li>Salons auto et événements locaux</li>
<li>Base clients existante (relance d'un client déjà connu, pas un vrai "inconnu" mais qui reste à requalifier)</li>
<li>Réseaux professionnels locaux (chambres de commerce, annuaires d'artisans) — surtout utile en B2B</li>
</ul>
<p><strong>Qualifier un prospect (méthode BANT) :</strong></p>
<ul>
<li><strong>B</strong>udget — le prospect a-t-il les moyens ou le financement envisagé ?</li>
<li><strong>A</strong>utorité — est-ce lui qui décide (particulier) ou faut-il valider avec un gérant (pro) ?</li>
<li><strong>N</strong>eed (besoin) — quel est son besoin réel (usage du véhicule) ?</li>
<li><strong>T</strong>imeline — sous quel délai compte-t-il acheter ?</li>
</ul>
<p>Un prospect qualifié = on connaît ces 4 éléments, même approximativement. Un prospect non qualifié doit être relancé avec des questions ciblées avant toute proposition commerciale.</p>
<p><strong>Cas pratique — un exemple chez Vasseur :</strong></p>
<p>Mme Kaci remplit le formulaire "Essai citadine électrique" avec le message : <em>"Je fais 15 km par jour pour aller au travail, je voudrais éviter de payer trop cher en carburant."</em></p>
<ul>
<li><strong>Need</strong> — clairement exprimé : trajets courts + volonté de réduire le coût du carburant → une électrique ou hybride est cohérente</li>
<li><strong>Budget</strong> — pas mentionné → à demander (fourchette envisagée ? financement ou comptant ?)</li>
<li><strong>Autorité</strong> — particulier, généralement seule décisionnaire, mais utile de vérifier (achat en couple ?)</li>
<li><strong>Timeline</strong> — pas mentionné → à demander (elle cherche "pour bientôt" ou juste en réflexion ?)</li>
</ul>
<p>Sur 4 critères BANT, seul 1 est connu ici (Need). Ce prospect n'est donc <strong>pas encore qualifié</strong> : il ne faut pas lui envoyer un devis Twingo E-Tech tout de suite, mais lui poser 2-3 questions ciblées sur le budget et le délai.</p>
<p><strong>⚠️ Erreur fréquente à éviter :</strong> vouloir "qualifier" en posant les 4 questions BANT d'un coup, façon interrogatoire. En pratique, on qualifie progressivement, souvent en 2-3 échanges, et on adapte les questions au canal (un mail peut poser 2-3 questions, un appel se prête à un échange plus naturel).</p>
<p><strong>En résumé, avant de qualifier un prospect, je vérifie que je sais :</strong></p>
<ul>
<li>✓ Ce qu'il veut faire du véhicule (Need)</li>
<li>✓ S'il a une idée de budget ou de mode de financement (Budget)</li>
<li>✓ Si c'est lui qui décide seul (Autorité)</li>
<li>✓ Dans quel délai il compte agir (Timeline)</li>
</ul>
<p>Si un de ces éléments manque, ma mission n'est pas de deviner — c'est de poser la bonne question pour l'obtenir.</p>
</div>`},

  'B4.2':{t:"Concevoir un plan et des supports de prospection",c:`<div class="res-section res-debutant">
<p><strong>B4.2 — Préparer une opération de prospection chez Vasseur.</strong> Avant de contacter qui que ce soit, il faut définir 4 éléments : la cible précise, le message clé (bénéfice concret, pas juste "on a de nouveaux modèles"), le canal (mail, téléphone, réseaux sociaux, salon), et le calendrier (avec relance prévue).</p>
<p><strong>Un bon plan de prospection contient toujours :</strong></p>
<ul>
<li>Une cible définie avec des critères précis (pas "tout le monde")</li>
<li>Un message adapté à cette cible (un artisan et un jeune actif n'ont pas les mêmes attentes)</li>
<li>Un canal cohérent avec la cible (le B2B répond mieux au mail/téléphone qu'aux réseaux sociaux)</li>
<li>Une relance planifiée (une seule tentative ne suffit presque jamais)</li>
</ul>
<p><strong>Cas pratique — une campagne chez Vasseur :</strong></p>
<p>Karim veut vendre des Kangoo Van avant la fin de l'exercice fiscal (argument amortissement pour les pros). Voici comment construire le plan, élément par élément :</p>
<ul>
<li><strong>Cible</strong> — pas "tous les artisans", mais précisément : artisans du bâtiment de la zone, flotte de plus de 5 ans</li>
<li><strong>Message clé</strong> — pas "nouveau Kangoo disponible" (ça n'intéresse personne), mais "amortissez votre renouvellement de flotte avant la fin de l'année" (un vrai bénéfice financier daté)</li>
<li><strong>Canal</strong> — mail professionnel (les artisans consultent peu les réseaux sociaux en semaine, un appel à froid serait mal reçu sans premier contact)</li>
<li><strong>Calendrier</strong> — envoi mi-novembre, relance téléphonique une semaine après si pas de réponse, date limite claire (31 décembre) pour créer un sentiment d'urgence légitime</li>
</ul>
<p><strong>⚠️ Erreur fréquente à éviter :</strong> construire le message avant la cible. Si on ne sait pas précisément à qui on s'adresse, le message reste vague et ne convainc personne — toujours définir la cible en premier.</p>
<p><strong>En résumé, avant de valider un plan de prospection, je vérifie que j'ai :</strong></p>
<ul>
<li>✓ Une cible précise (pas une généralité)</li>
<li>✓ Un message qui met en avant un bénéfice concret pour CETTE cible</li>
<li>✓ Un canal cohérent avec les habitudes de cette cible</li>
<li>✓ Une relance déjà prévue, pas décidée après coup</li>
</ul>
</div>`},

  'B4.3':{t:"Mettre en œuvre la prospection commerciale",c:`<div class="res-section res-debutant">
<p><strong>B4.3 — Conduire un contact de prospection chez Vasseur.</strong> Qu'il s'agisse d'un mail entrant à qualifier ou d'un appel sortant, la structure reste la même :</p>
<ol>
<li><strong>Accroche</strong> — se présenter, expliquer rapidement pourquoi on contacte la personne</li>
<li><strong>Questions de qualification</strong> — reprendre la méthode BANT (B4.1)</li>
<li><strong>Proposition adaptée</strong> — uniquement si on a assez d'informations, sinon poser encore des questions</li>
<li><strong>Traitement d'une objection éventuelle</strong> — écouter, reformuler, répondre sans forcer</li>
<li><strong>Conclusion</strong> — proposer une suite concrète (RDV, envoi de documentation ciblée, rappel programmé)</li>
</ol>
<p>Le ton change selon le profil : plus direct et factuel en B2B, plus accessible et rassurant avec un particulier.</p>
<p><strong>Cas pratique — un appel chez Vasseur :</strong></p>
<p>Objection fréquente en B2B : <em>"On vient de renouveler notre flotte, ce n'est pas le bon moment."</em></p>
<ul>
<li>❌ <strong>À éviter</strong> — insister immédiatement sur une offre commerciale ("mais j'ai une super promo en ce moment !") : le prospect se sent poussé, pas écouté</li>
<li>✅ <strong>À privilégier</strong> — reformuler pour montrer qu'on a entendu ("je comprends, votre flotte est donc récente"), puis ouvrir une porte sans forcer ("puis-je vous recontacter dans quelques mois, au moment où vous commencerez à anticiper le prochain renouvellement ?")</li>
</ul>
<p>On ne "gagne" pas un appel de prospection en forçant une vente immédiate — on gagne en obtenant une suite (rappel programmé, envoi d'une fiche produit) qui garde la porte ouverte.</p>
<p><strong>⚠️ Erreur fréquente à éviter :</strong> proposer un véhicule précis avant d'avoir posé au moins une question de qualification. Même avec un contact entrant qui semble "chaud", il faut vérifier le besoin réel avant de répondre.</p>
<p><strong>En résumé, dans un contact de prospection, je vérifie que j'ai :</strong></p>
<ul>
<li>✓ Une accroche claire (pourquoi je contacte cette personne)</li>
<li>✓ Posé au moins une question de qualification avant de proposer quoi que ce soit</li>
<li>✓ Une réponse préparée à l'objection la plus probable</li>
<li>✓ Une suite concrète proposée à la fin, même en cas de refus</li>
</ul>
</div>`},

  'C1.1':{t:'La veille commerciale',c:`<div class="res-section res-debutant">
<p><strong>C1.1 — Assurer la veille commerciale chez Vasseur.</strong> La veille, c'est suivre en permanence ce qui se passe autour de soi : les offres concurrentes (autres concessions, mandataires en ligne), les tendances du marché (électrique en hausse, ZFE), et les dispositifs d'aide à l'achat en vigueur.</p>
<p><strong>À quoi ça sert concrètement ?</strong> À pouvoir répondre à un client qui compare une offre Vasseur à une offre concurrente, sans dénigrer le concurrent mais en mettant en avant les vrais avantages Vasseur (garantie, SAV, essai possible, accompagnement).</p>
<p><strong>Cas pratique — un client hésitant chez Vasseur :</strong></p>
<p>Un client compare le Captur Vasseur (prix légèrement supérieur) à un Peugeot 2008 vu chez un concurrent (prix légèrement inférieur, équipements de base uniquement).</p>
<ul>
<li>❌ <strong>À éviter</strong> — dire que le 2008 "n'est pas terrible" ou dénigrer le concurrent : ça ne convainc jamais, et ça donne une image négative du vendeur</li>
<li>✅ <strong>À privilégier</strong> — reconnaître honnêtement le différentiel de prix, puis expliquer ce qu'il finance : équipements inclus dès la finition de base, garantie constructeur, SAV local</li>
</ul>
<p>La veille ne sert pas à "avoir raison contre le concurrent" — elle sert à connaître assez précisément l'offre en face pour construire un argumentaire honnête et factuel.</p>
<p><strong>⚠️ Erreur fréquente à éviter :</strong> comparer sur un seul critère (souvent le prix) alors que le client compare en réalité un ensemble (prix + équipements + garantie + service). Toujours élargir la comparaison au-delà du prix affiché.</p>
<p><strong>En résumé, avant de répondre à une comparaison concurrentielle, je vérifie que je :</strong></p>
<ul>
<li>✓ Reconnais honnêtement l'écart s'il existe (jamais le nier ou l'ignorer)</li>
<li>✓ Identifie au moins 2 avantages réels Vasseur au-delà du prix</li>
<li>✓ Ne dénigre jamais le concurrent nommément</li>
</ul>
</div>`},

  'C1.2':{t:'La vente dans un cadre omnicanal',c:`<div class="res-section res-debutant">
<p><strong>C1.2 — Vendre à distance comme en showroom.</strong> Chez Vasseur, un client peut arriver par mail, chat en ligne, réseau social, ou en showroom — le commercial doit savoir s'adapter à chaque canal :</p>
<ul>
<li><strong>Mail</strong> — réponse complète et structurée, sous 24h</li>
<li><strong>Chat</strong> — réponse courte et rapide, pas un mail déguisé</li>
<li><strong>Réseau social</strong> — réponse publique brève, puis bascule vers le privé pour le détail (prix, données personnelles)</li>
<li><strong>Showroom</strong> — échange en direct, avec essai possible</li>
</ul>
<p>Le contenu de l'information reste le même, seule la forme change selon le canal.</p>
<p><strong>Cas pratique — la même question, trois canaux :</strong></p>
<p>Un client demande le prix d'une Clio 6 Techno (25 000 €, délai 6-8 semaines) selon 3 canaux différents :</p>
<ul>
<li><strong>Par mail</strong> — "Bonjour, merci pour votre message. La Clio 6 Techno est proposée à 25 000 €, avec un délai de livraison de 6 à 8 semaines. Je reste à votre disposition pour organiser un essai. Cordialement, [signature]"</li>
<li><strong>Par chat</strong> — "Bonjour ! La Clio 6 Techno est à 25 000 €, livrée en 6-8 semaines 🙂 Vous voulez qu'on prévoie un essai ?"</li>
<li><strong>Sur réseau social (commentaire public)</strong> — "Bonjour, je vous envoie le détail en message privé !" (puis, en privé, la même information que par mail)</li>
</ul>
<p>Même information, trois formes différentes — c'est ça, l'omnicanal.</p>
<p><strong>⚠️ Erreur fréquente à éviter :</strong> copier-coller une réponse de mail dans un chat. Le client sur chat attend une réponse rapide et directe ; un pavé de texte formel donne l'impression de ne pas être écouté.</p>
<p><strong>En résumé, avant de répondre sur un canal, je vérifie que je :</strong></p>
<ul>
<li>✓ Donne la même information factuelle, quel que soit le canal</li>
<li>✓ Adapte la longueur et le ton au canal utilisé</li>
<li>✓ Ne donne jamais de prix ou d'information personnelle en commentaire public sur réseau social</li>
</ul>
</div>`},

  'C1.3':{t:"L'exécution de la vente",c:`<div class="res-section res-debutant">
<p><strong>C1.3 — Finaliser une vente chez Vasseur.</strong> Une fois l'accord de principe du client obtenu, il faut monter un dossier complet : identité, véhicule choisi (avec options), prix, mode de paiement (comptant, crédit, LOA), et le cas échéant reprise du véhicule précédent.</p>
<p><strong>Points de vigilance :</strong> ne jamais sortir du cadrage de négociation autorisé (marge de remise maximale fixée par Karim/Isabelle) ; en cas de demande excessive, proposer une contrepartie alternative (garantie étendue plutôt qu'une remise supplémentaire).</p>
<p><strong>Cas pratique — un dossier avec reprise :</strong></p>
<p>Un client achète un véhicule occasion à 22 000 € et reprend son ancien véhicule, estimé à 6 000 €.</p>
<ul>
<li><strong>Calcul du net à payer</strong> — 22 000 € (prix du véhicule) − 6 000 € (valeur de reprise) = <strong>16 000 € à payer par le client</strong></li>
<li><strong>Dans le dossier</strong>, les deux montants doivent apparaître séparément (prix de vente et valeur de reprise), pas seulement le résultat — pour que tout soit vérifiable</li>
</ul>
<p><strong>Cas pratique — une négociation qui dépasse le cadrage :</strong></p>
<p>Un client demande 800 € de remise sur un véhicule où la marge maximale autorisée est de 300 €.</p>
<ul>
<li>❌ <strong>À éviter</strong> — refuser sèchement, ou céder au-delà du cadrage sans en référer à un responsable</li>
<li>✅ <strong>À privilégier</strong> — accorder les 300 € autorisés, puis proposer une contrepartie de valeur équivalente pour le client sans sortir du cadre : par exemple une garantie étendue offerte plutôt qu'une remise supplémentaire</li>
</ul>
<p><strong>⚠️ Erreur fréquente à éviter :</strong> annoncer un montant net sans détailler le calcul. Le client (et l'atelier, et la compta) doivent pouvoir vérifier chaque ligne du dossier.</p>
<p><strong>En résumé, avant de finaliser un dossier de vente, je vérifie que j'ai :</strong></p>
<ul>
<li>✓ Toutes les informations obligatoires (identité, véhicule + options, prix, mode de paiement)</li>
<li>✓ Un calcul détaillé si une reprise est intégrée (jamais seulement le résultat final)</li>
<li>✓ Respecté la marge de négociation autorisée, avec une contrepartie proposée si besoin</li>
</ul>
</div>`},

  'C2.1':{t:'Le suivi de la commande client',c:`<div class="res-section res-debutant">
<p><strong>C2.1 — Suivre une commande après la vente.</strong> Une fois la vente conclue, le client doit être tenu informé : confirmation des étapes (préparation, contrôle, livraison), et information immédiate en cas de retard ou d'imprévu — sans jamais cacher la cause, avec une tonalité toujours rassurante.</p>
<p>Le dossier doit aussi être transmis correctement à l'atelier (Bruno Faucher) pour la préparation du véhicule, avec toutes les informations utiles (options, date souhaitée, contrôles à effectuer).</p>
<p><strong>Cas pratique — annoncer un retard chez Vasseur :</strong></p>
<p>Un retard fournisseur ajoute 2 semaines au délai de livraison d'un véhicule commandé il y a 5 semaines.</p>
<ul>
<li>❌ <strong>À éviter</strong> — rester vague ("il y a un peu de retard") ou attendre que le client s'inquiète et appelle lui-même</li>
<li>✅ <strong>À privilégier</strong> — contacter le client avant qu'il ne s'inquiète, expliquer la cause réelle (retard fournisseur, pas une erreur Vasseur), donner un nouveau délai précis, et proposer un geste si pertinent (priorité sur le prochain rendez-vous d'entretien, par exemple)</li>
</ul>
<p>Un client informé tôt et honnêtement reste un client satisfait, même en cas de retard. Un client qui doit relancer lui-même pour avoir des nouvelles perd confiance, même si le retard n'est pas la faute de Vasseur.</p>
<p><strong>⚠️ Erreur fréquente à éviter :</strong> minimiser ou cacher la cause du retard pour "rassurer" — c'est l'effet inverse qui se produit si le client l'apprend autrement. La transparence rassure plus que l'esquive.</p>
<p><strong>En résumé, avant d'informer un client d'un imprévu, je vérifie que j'ai :</strong></p>
<ul>
<li>✓ Contacté le client avant qu'il ne s'inquiète lui-même</li>
<li>✓ Expliqué la cause réelle, sans la dissimuler</li>
<li>✓ Donné une nouvelle échéance précise, pas vague</li>
<li>✓ Gardé un ton rassurant, sans excuse excessive ni minimisation</li>
</ul>
</div>`},

  'C2.2':{t:"Traiter les réclamations client",c:`<div class="res-section res-debutant">
<p><strong>C2.2 — Gérer une réclamation chez Vasseur.</strong> Une réclamation n'est pas une agression : c'est un client qui donne une seconde chance à la relation avant de la rompre. La méthode de base : écouter sans couper la parole, reformuler pour montrer qu'on a compris, investiguer les faits avant de conclure, puis proposer une solution concrète.</p>
<p><strong>Les 4 étapes d'une réclamation bien traitée :</strong></p>
<ol>
<li><strong>Écouter et reformuler</strong> — même si le client est énervé, jamais l'interrompre ni se justifier immédiatement</li>
<li><strong>Vérifier les faits</strong> — consulter le dossier, l'atelier, l'historique avant de répondre quoi que ce soit de définitif</li>
<li><strong>Proposer une solution</strong> — adaptée à la gravité réelle du problème, pas systématiquement la plus généreuse possible</li>
<li><strong>Assurer le suivi</strong> — vérifier que la solution a bien été appliquée, pas seulement promise</li>
</ol>
<p><strong>Cas pratique — une réclamation chez Vasseur :</strong></p>
<p>Un client appelle furieux : sa Clio 6 livrée la veille a une rayure sur la portière avant droite, non signalée lors de la remise des clés.</p>
<ul>
<li><strong>❌ À éviter</strong> — répondre immédiatement "c'est impossible, on contrôle toujours avant livraison" : ça nie l'expérience du client avant même de vérifier</li>
<li><strong>✅ À privilégier</strong> — reformuler ("je comprends, vous découvrez une rayure qui n'était pas là lors de la remise"), proposer de vérifier le dossier de contrôle qualité et de rappeler sous 24h avec une réponse concrète</li>
</ul>
<p>La règle d'or : ne jamais promettre une solution avant d'avoir vérifié les faits — un engagement qu'on doit ensuite retirer abîme la confiance bien plus qu'un léger délai de réponse.</p>
<p><strong>En résumé, avant de répondre à une réclamation, je vérifie que je :</strong></p>
<ul>
<li>✓ N'ai pas coupé la parole ni minimisé ce que dit le client</li>
<li>✓ Ai vérifié les faits avant de m'engager sur une solution</li>
<li>✓ Propose une solution proportionnée, pas automatiquement maximale</li>
<li>✓ Prévois un suivi pour m'assurer que la solution a bien été appliquée</li>
</ul>
</div>`},

  'C2.3':{t:"Évaluer la satisfaction client",c:`<div class="res-section res-debutant">
<p><strong>C2.3 — Mesurer et exploiter la satisfaction chez Vasseur.</strong> On ne devine pas si un client est satisfait, on le mesure. Le principal outil est le NPS (Net Promoter Score) : sur une note de 0 à 10 ("recommanderiez-vous Vasseur ?"), on distingue Promoteurs (9-10), Passifs (7-8) et Détracteurs (0-6).</p>
<p><strong>Ce qu'on fait de ces données :</strong> un NPS élevé ne veut rien dire s'il n'est suivi d'aucune action ; un NPS bas mal exploité fait perdre le client une seconde fois. La vraie compétence n'est pas de lire le chiffre, mais d'en tirer une action commerciale concrète.</p>
<p><strong>Cas pratique — un client Détracteur chez Vasseur :</strong></p>
<p>Un client donne 4/10 après l'achat d'un Trafic, avec le commentaire : <em>"Le véhicule est bien mais j'ai attendu 3 semaines de plus que prévu sans nouvelles."</em></p>
<ul>
<li><strong>❌ À éviter</strong> — se contenter d'enregistrer la note sans réagir, ou répondre uniquement "merci pour votre retour"</li>
<li><strong>✅ À privilégier</strong> — identifier la vraie cause (pas le véhicule, le manque de communication pendant le retard), et proposer une action ciblée sur CE point précis (par exemple, un geste + un engagement de suivi renforcé sur sa prochaine commande)</li>
</ul>
<p>Un avis en ligne fonctionne pareil : la réponse publique compte autant pour les futurs clients qui la liront que pour le client lui-même — elle doit rester factuelle, jamais défensive.</p>
<p><strong>En résumé, avant d'exploiter un résultat de satisfaction, je vérifie que je :</strong></p>
<ul>
<li>✓ Identifie la cause précise derrière la note, pas seulement le chiffre</li>
<li>✓ Propose une action qui répond à cette cause précise</li>
<li>✓ Reste factuel et jamais sur la défensive dans une réponse publique</li>
</ul>
</div>`},

  'C3.1':{t:"Assurer l'information et le contact avec la clientèle",c:`<div class="res-section res-debutant">
<p><strong>C3.1 — Garder le contact avec la clientèle Vasseur.</strong> Fidéliser commence bien avant qu'un client ait besoin de racheter : c'est un contact régulier, utile, jamais uniquement commercial. Un client qui n'entend parler de Vasseur qu'au moment où on veut lui vendre quelque chose se sent instrumentalisé.</p>
<p><strong>Les bons prétextes de contact :</strong> une information générale utile (rappel constructeur, actualité), un moment personnel (anniversaire d'achat), une nouveauté pertinente pour son profil. Le mauvais prétexte : "on n'a pas eu de nouvelles de vous depuis un moment" — recentré sur Vasseur, pas sur le client.</p>
<p><strong>Cas pratique — un rappel constructeur chez Vasseur :</strong></p>
<p>Renault lance un rappel technique sur un composant électronique de la génération de Captur vendue il y a 2 ans.</p>
<ul>
<li><strong>❌ À éviter</strong> — un message anxiogène ("Votre véhicule présente un défaut") ou au contraire trop rassurant au point de minimiser ("c'est rien du tout, pas besoin de venir")</li>
<li><strong>✅ À privilégier</strong> — un message factuel et rassurant : ce qui se passe, pourquoi ce n'est pas urgent-danger mais à traiter, comment prendre rendez-vous simplement</li>
</ul>
<p><strong>En résumé, avant d'envoyer un contact d'information, je vérifie que je :</strong></p>
<ul>
<li>✓ Ai un vrai motif utile pour le client, pas seulement pour Vasseur</li>
<li>✓ Reste factuel, sans dramatiser ni minimiser</li>
<li>✓ Termine par une action simple et claire, si une action est nécessaire</li>
</ul>
</div>`},

  'C3.2':{t:"Mettre en œuvre des actions de fidélisation",c:`<div class="res-section res-debutant">
<p><strong>C3.2 — Fidéliser concrètement chez Vasseur.</strong> Une action de fidélisation efficace récompense un comportement réel du client (ancienneté, fréquence, recommandation), pas un geste générique offert à tout le monde sans distinction — sinon ça devient une simple remise, pas de la fidélisation.</p>
<p><strong>Les leviers classiques :</strong> offre réservée aux clients existants, programme de parrainage (le client recommande, les deux y gagnent), événement dédié (portes ouvertes clients), geste personnalisé suite à un problème résolu.</p>
<p><strong>Cas pratique — un programme de parrainage chez Vasseur :</strong></p>
<p>Michel veut lancer un parrainage : un client Vasseur qui amène un nouveau client obtient un avantage, le filleul aussi.</p>
<ul>
<li><strong>❌ À éviter</strong> — un avantage trop symbolique (qui ne motive personne à recommander) ou au contraire disproportionné (qui rogne la marge sans réel retour)</li>
<li><strong>✅ À privilégier</strong> — un avantage calibré sur la valeur réelle d'un nouveau client (par exemple un forfait entretien offert), gagnant pour les deux parties, facile à comprendre en une phrase</li>
</ul>
<p><strong>En résumé, avant de proposer une action de fidélisation, je vérifie que je :</strong></p>
<ul>
<li>✓ Récompense un comportement réel (fidélité, recommandation), pas juste "être client"</li>
<li>✓ Propose un avantage ni symbolique ni disproportionné</li>
<li>✓ Peux expliquer l'action en une phrase simple au client</li>
</ul>
</div>`},

  'C3.3':{t:"Évaluer les actions de fidélisation",c:`<div class="res-section res-debutant">
<p><strong>C3.3 — Mesurer l'efficacité d'une action de fidélisation chez Vasseur.</strong> Une action de fidélisation qui n'est jamais évaluée peut coûter cher pour rien. On mesure généralement : le taux de participation (combien de clients ont utilisé l'offre), le taux de conversion (combien ont effectivement racheté), et le retour net (le gain généré compense-t-il le coût de l'action).</p>
<p><strong>Cas pratique — bilan d'une campagne chez Vasseur :</strong></p>
<p>Une offre de reprise majorée envoyée à 100 clients anciens a généré 8 ventes. Le coût de la majoration de reprise était de 400 € par vente.</p>
<ul>
<li><strong>❌ À éviter</strong> — juger uniquement sur "ça a marché, on a vendu 8 voitures" sans regarder le coût ni comparer à d'autres actions</li>
<li><strong>✅ À privilégier</strong> — calculer le taux de conversion (8/100 = 8%), comparer ce taux et ce coût à d'autres actions similaires menées par Vasseur, et formuler une recommandation (reconduire, ajuster le montant, cibler différemment)</li>
</ul>
<p><strong>En résumé, avant de conclure sur une action de fidélisation, je vérifie que je :</strong></p>
<ul>
<li>✓ Calcule un taux (participation ou conversion), pas seulement un nombre brut</li>
<li>✓ Mets ce résultat en perspective (coût, comparaison) avant de juger</li>
<li>✓ Formule une recommandation claire pour la suite, pas juste un constat</li>
</ul>
</div>`},

  'B4.4':{t:"Suivre et évaluer l'action de prospection",c:`<div class="res-section res-debutant">
<p><strong>B4.4 — Faire le bilan d'une prospection chez Vasseur.</strong> Une campagne de prospection ne s'arrête pas à l'envoi des messages : il faut suivre les résultats (taux de réponse, taux de transformation en rendez-vous, taux de transformation en vente) et ajuster si besoin, y compris en cours de campagne.</p>
<p><strong>Les indicateurs clés :</strong> nombre de contacts touchés, taux de réponse (combien ont réagi), taux de transformation (combien ont acheté). Un faible taux de réponse peut venir du message, du canal, ou du mauvais ciblage — il faut identifier lequel avant d'ajuster.</p>
<p><strong>Cas pratique — bilan d'une session de phoning chez Vasseur :</strong></p>
<p>Sur 40 appels de prospection B2B passés cette semaine, 6 rendez-vous ont été pris, et 1 vente a été conclue à ce jour.</p>
<ul>
<li><strong>❌ À éviter</strong> — conclure "ça n'a pas marché" en ne regardant que la vente finale (1 sur 40), sans distinguer les étapes</li>
<li><strong>✅ À privilégier</strong> — calculer chaque taux séparément (15% de taux de rendez-vous, encore trop tôt pour juger le taux de transformation en vente), et identifier à quelle étape se situe la vraie marge de progression</li>
</ul>
<p><strong>En résumé, avant de juger une action de prospection, je vérifie que je :</strong></p>
<ul>
<li>✓ Distingue les différentes étapes (contact → rendez-vous → vente), pas un seul taux global</li>
<li>✓ Identifie à quelle étape se situe le vrai problème avant de proposer un ajustement</li>
<li>✓ Propose un ajustement concret, pas juste "faire plus d'appels"</li>
</ul>
</div>`},

  'B4.5':{t:"Valoriser les produits et services face à la concurrence",c:`<div class="res-section res-debutant">
<p><strong>B4.5 — Valoriser l'offre Vasseur.</strong> Valoriser, ce n'est pas décrire un produit, c'est expliquer pourquoi il répond mieux au besoin du client que les alternatives (autre modèle, occasion, concurrent). Une bonne valorisation combine une caractéristique du véhicule ou du service, l'avantage qu'elle procure, et le bénéfice concret pour ce client précis.</p>
<p><strong>Attention à un piège fréquent :</strong> valoriser uniquement le produit alors que le service (garantie, SAV, accompagnement) est parfois le vrai argument différenciant, notamment face à un mandataire en ligne moins-disant sur le prix.</p>
<p><strong>Cas pratique — valoriser un service chez Vasseur :</strong></p>
<p>Un client hésite entre acheter chez Vasseur (prix un peu plus élevé) et un mandataire en ligne (prix plus bas, aucun service après-vente local).</p>
<ul>
<li><strong>❌ À éviter</strong> — se contenter d'un argument vague ("chez nous c'est mieux") sans rien de concret</li>
<li><strong>✅ À privilégier</strong> — valoriser précisément le SAV local (caractéristique : atelier Bruno Faucher à 10 minutes ; avantage : intervention rapide en cas de souci ; bénéfice pour ce client : pas de véhicule immobilisé loin de chez lui)</li>
</ul>
<p><strong>En résumé, avant de valoriser une offre, je vérifie que je :</strong></p>
<ul>
<li>✓ Relie une caractéristique précise à un avantage, puis à un bénéfice pour CE client</li>
<li>✓ Pense aussi au service, pas seulement au produit</li>
<li>✓ Reste factuel et vérifiable, jamais dans l'argument vague</li>
</ul>
</div>`},

  'B4.1-P2':{t:"Qualifier un prospect — approfondissement",c:`<div class="res-section res-apprenti">
<p><strong>B4.1 Palier 2 — Aller au-delà de la grille BANT.</strong> Tu connais déjà la méthode BANT (Budget, Autorité, Need, Timeline). Au palier 2, la difficulté n'est plus de connaître la méthode, mais de l'appliquer quand la situation est moins nette : plusieurs prospects à traiter en même temps, des informations contradictoires, un profil qui ne rentre pas dans une case évidente.</p>
<p><strong>Ce qui change concrètement :</strong> tu devras souvent <em>prioriser</em> (tous les prospects ne se valent pas également) et <em>combiner</em> plusieurs sources d'information, sans qu'on te les serve déjà croisées dans un même tableau.</p>
<p><strong>Cas pratique — deux prospects, un seul créneau libre :</strong></p>
<p>En fin de journée, deux demandes arrivent : l'une d'un particulier qui dit vouloir "changer de voiture un jour", l'autre d'une entreprise qui a un besoin déclaré mais reste vague sur le budget.</p>
<ul>
<li><strong>❌ À éviter</strong> — traiter les deux dans l'ordre d'arrivée, sans réfléchir à qui a le plus de chances d'aboutir vite</li>
<li><strong>✅ À privilégier</strong> — évaluer rapidement le niveau de qualification de chacun (le B2B a un Need clair, il manque "juste" le Budget ; le particulier n'a presque rien de qualifié) et prioriser celui qui a le plus d'éléments déjà réunis</li>
</ul>
<p><strong>En résumé, au palier 2, avant de qualifier, je vérifie que je :</strong></p>
<ul>
<li>✓ Priorise quand plusieurs prospects se présentent en même temps, au lieu de traiter au hasard</li>
<li>✓ Sais dire explicitement ce qui manque encore, même dans un profil qui semble déjà avancé</li>
<li>✓ Ne me contente pas d'une seule source d'information quand une autre est disponible</li>
</ul>
</div>`},

  'B4.2-P2':{t:"Concevoir un plan de prospection — approfondissement",c:`<div class="res-section res-apprenti">
<p><strong>B4.2 Palier 2 — Arbitrer, pas seulement planifier.</strong> Au palier 1, tu construisais un plan de prospection à partir d'une cible déjà identifiée. Au palier 2, tu dois aussi savoir arbitrer entre plusieurs options (canaux, budgets, cibles) quand les ressources sont limitées — ce qui est la réalité de toute concession.</p>
<p><strong>Cas pratique — un budget qui ne permet pas tout :</strong></p>
<p>Karim a un budget de campagne réduit ce trimestre. Deux options s'offrent : une campagne mail large mais peu coûteuse, ou une opération salon plus chère mais plus qualitative.</p>
<ul>
<li><strong>❌ À éviter</strong> — choisir par habitude ou par facilité, sans comparer objectivement le rapport entre coût et résultat attendu</li>
<li><strong>✅ À privilégier</strong> — comparer explicitement les deux options sur les mêmes critères (coût, portée, taux de conversion attendu) avant de trancher</li>
</ul>
<p><strong>En résumé, au palier 2, avant de valider un plan, je vérifie que je :</strong></p>
<ul>
<li>✓ Compare plusieurs options sur les mêmes critères avant de choisir</li>
<li>✓ Justifie un arbitrage budgétaire, pas seulement un choix de canal</li>
<li>✓ Garde en tête que prospecter "plus" n'est pas toujours prospecter "mieux"</li>
</ul>
</div>`},

  'B4.3-P2':{t:"Mettre en œuvre la prospection — approfondissement",c:`<div class="res-section res-apprenti">
<p><strong>B4.3 Palier 2 — Gérer l'imprévu du contact réel.</strong> Au palier 1, tu traitais une objection isolée. Au palier 2, un contact de prospection peut enchaîner plusieurs objections, changer de sujet, ou être compliqué à cerner. La compétence n'est plus de connaître une réponse toute faite, mais de rester maître du fil de la conversation.</p>
<p><strong>Cas pratique — un enchaînement d'objections :</strong></p>
<p>Un prospect B2B répond d'abord "on vient de renouveler", puis enchaîne "et de toute façon vos délais sont trop longs".</p>
<ul>
<li><strong>❌ À éviter</strong> — répondre à la deuxième objection en ignorant la première, comme si elle n'avait pas été dite</li>
<li><strong>✅ À privilégier</strong> — reconnaître les deux objections successivement, sans se précipiter sur une réponse toute faite pour la seconde</li>
</ul>
<p><strong>En résumé, au palier 2, en situation de contact, je vérifie que je :</strong></p>
<ul>
<li>✓ Garde trace de toutes les objections exprimées, pas seulement la dernière</li>
<li>✓ Ne me laisse pas déstabiliser par un enchaînement rapide</li>
<li>✓ Reste concentré sur l'objectif du contact, même si la conversation dévie</li>
</ul>
</div>`},

  'B4.4-P2':{t:"Suivre et évaluer la prospection — approfondissement",c:`<div class="res-section res-apprenti">
<p><strong>B4.4 Palier 2 — Comparer, pas seulement mesurer.</strong> Au palier 1, tu calculais un taux pour UNE action. Au palier 2, tu dois savoir comparer plusieurs actions entre elles, ou une même action dans le temps, pour en tirer un vrai diagnostic — pas juste un chiffre isolé.</p>
<p><strong>Cas pratique — une performance en baisse :</strong></p>
<p>Une campagne mail récurrente, qui obtenait habituellement 10% de taux de réponse, tombe à 4% ce mois-ci.</p>
<ul>
<li><strong>❌ À éviter</strong> — se contenter de constater la baisse sans chercher ce qui a changé entre les deux périodes</li>
<li><strong>✅ À privilégier</strong> — comparer ce qui a changé (message, période, cible, contexte) entre le moment où ça marchait et maintenant, avant de conclure</li>
</ul>
<p><strong>En résumé, au palier 2, avant de conclure sur une performance, je vérifie que je :</strong></p>
<ul>
<li>✓ Compare dans le temps ou entre actions, pas seulement un chiffre isolé</li>
<li>✓ Cherche ce qui a changé avant de proposer un ajustement</li>
<li>✓ Distingue une vraie tendance d'une simple fluctuation ponctuelle</li>
</ul>
</div>`},

  'B4.5-P2':{t:"Valoriser l'offre — approfondissement",c:`<div class="res-section res-apprenti">
<p><strong>B4.5 Palier 2 — Valoriser face à un client déjà informé.</strong> Au palier 1, tu construisais un argumentaire simple. Au palier 2, le client en face de toi a souvent déjà comparé plusieurs critères tout seul (en ligne, avec un concurrent) — ton argumentaire doit répondre à une comparaison déjà construite, pas juste présenter un produit.</p>
<p><strong>Cas pratique — un client déjà convaincu ailleurs :</strong></p>
<p>Un client arrive en disant avoir déjà comparé 3 modèles en ligne et penche clairement pour un concurrent, sur plusieurs critères à la fois (prix, consommation, image).</p>
<ul>
<li><strong>❌ À éviter</strong> — répondre par un argumentaire générique déjà préparé, sans tenir compte de sa comparaison précise</li>
<li><strong>✅ À privilégier</strong> — reprendre ses critères un par un, et ne répondre que sur ceux où Vasseur a un vrai avantage, sans forcer sur les autres</li>
</ul>
<p><strong>En résumé, au palier 2, face à un client informé, je vérifie que je :</strong></p>
<ul>
<li>✓ Pars de SA comparaison, pas d'un argumentaire générique</li>
<li>✓ Ne force pas un avantage sur un critère où Vasseur n'en a pas vraiment</li>
<li>✓ Reste crédible plutôt que de tout vouloir défendre à tout prix</li>
</ul>
</div>`},

  'C1.1-P2':{t:"Veille commerciale — approfondissement",c:`<div class="res-section res-apprenti">
<p><strong>C1.1 Palier 2 — Croiser les sources, pas juste les lire.</strong> Au palier 1, tu utilisais une source de veille à la fois. Au palier 2, deux sources peuvent se contredire ou donner des informations incomplètes séparément — la compétence est de les confronter avant de conclure.</p>
<p><strong>Cas pratique — deux sources contradictoires :</strong></p>
<p>Un article évoque une baisse du marché électrique, tandis que les chiffres internes Vasseur montrent une hausse des ventes électriques ce trimestre.</p>
<ul>
<li><strong>❌ À éviter</strong> — privilégier automatiquement une source parce qu'elle est externe (plus "objective" en apparence) ou interne (plus familière)</li>
<li><strong>✅ À privilégier</strong> — chercher ce qui explique l'écart (marché national vs zone Vasseur, période exacte) avant de trancher</li>
</ul>
<p><strong>En résumé, au palier 2, avant de conclure sur une veille, je vérifie que je :</strong></p>
<ul>
<li>✓ Confronte plusieurs sources avant de conclure, sans en écarter une par principe</li>
<li>✓ Cherche à expliquer un écart plutôt qu'à choisir une source "au hasard"</li>
<li>✓ Distingue une tendance générale d'une situation locale à Vasseur</li>
</ul>
</div>`},

  'C1.2-P2':{t:"Vente omnicanale — approfondissement",c:`<div class="res-section res-apprenti">
<p><strong>C1.2 Palier 2 — Gérer la continuité entre canaux.</strong> Au palier 1, tu répondais sur UN canal à la fois. Au palier 2, un même client peut basculer d'un canal à l'autre en cours d'échange (commence par chat, termine par mail) — la compétence est d'assurer la continuité de l'information, sans jamais se répéter ni se contredire.</p>
<p><strong>Cas pratique — un client qui change de canal :</strong></p>
<p>Un client démarre un échange sur le chat du site, puis écrit un mail le lendemain pour poursuivre — sans reprendre tout le contexte.</p>
<ul>
<li><strong>❌ À éviter</strong> — répondre comme si c'était une toute nouvelle demande, en redemandant des informations déjà données sur le chat</li>
<li><strong>✅ À privilégier</strong> — retrouver l'historique de l'échange précédent et poursuivre directement, sans faire répéter le client</li>
</ul>
<p><strong>En résumé, au palier 2, en situation multi-canal, je vérifie que je :</strong></p>
<ul>
<li>✓ Retrouve et utilise l'historique avant de répondre</li>
<li>✓ Ne fais jamais répéter au client une information déjà donnée</li>
<li>✓ Garde une information cohérente d'un canal à l'autre</li>
</ul>
</div>`},

  'C1.3-P2':{t:"Exécution de la vente — approfondissement",c:`<div class="res-section res-apprenti">
<p><strong>C1.3 Palier 2 — Gérer un dossier à plusieurs paramètres.</strong> Au palier 1, un dossier de vente avait un seul mode de financement. Au palier 2, plusieurs éléments peuvent se combiner (reprise + financement + options), et plusieurs interlocuteurs peuvent être impliqués (couple, entreprise) — la compétence est de garder un dossier cohérent malgré cette complexité.</p>
<p><strong>Cas pratique — plusieurs interlocuteurs :</strong></p>
<p>Un couple vient acheter ensemble ; l'un privilégie le prix, l'autre les options de sécurité.</p>
<ul>
<li><strong>❌ À éviter</strong> — s'adresser uniquement à celui qui parle le plus, en ignorant les priorités de l'autre</li>
<li><strong>✅ À privilégier</strong> — reformuler les deux priorités exprimées et proposer une solution qui tient compte des deux, avant de figer le dossier</li>
</ul>
<p><strong>En résumé, au palier 2, sur un dossier complexe, je vérifie que je :</strong></p>
<ul>
<li>✓ Prends en compte tous les interlocuteurs impliqués, pas un seul</li>
<li>✓ Garde une vision d'ensemble du dossier malgré plusieurs paramètres combinés</li>
<li>✓ Ne fige rien avant d'avoir vérifié la cohérence globale</li>
</ul>
</div>`},

  'C2.1-P2':{t:"Suivi de la commande — approfondissement",c:`<div class="res-section res-apprenti">
<p><strong>C2.1 Palier 2 — Anticiper plutôt que réagir.</strong> Au palier 1, tu annonçais un retard déjà survenu. Au palier 2, la compétence se déplace vers l'anticipation : repérer un risque avant qu'il ne devienne un vrai problème pour le client, et coordonner plusieurs services si nécessaire.</p>
<p><strong>Cas pratique — un risque détecté à temps :</strong></p>
<p>Tu apprends, via l'atelier, qu'une pièce nécessaire à la livraison d'un véhicule commandé est en tension chez le fournisseur — le client n'a encore aucune raison de s'inquiéter.</p>
<ul>
<li><strong>❌ À éviter</strong> — ne rien dire tant que le retard n'est pas confirmé à 100%, au risque de prévenir au dernier moment</li>
<li><strong>✅ À privilégier</strong> — informer le client d'un risque possible dès qu'il est identifié, sans dramatiser, pour qu'il ne soit jamais pris de court</li>
</ul>
<p><strong>En résumé, au palier 2, sur le suivi de commande, je vérifie que je :</strong></p>
<ul>
<li>✓ Agis dès qu'un risque est identifié, sans attendre la certitude totale</li>
<li>✓ Coordonne les services concernés plutôt que d'agir seul</li>
<li>✓ Informe sans dramatiser un risque encore incertain</li>
</ul>
</div>`},

  'C2.2-P2':{t:"Réclamations — approfondissement",c:`<div class="res-section res-apprenti">
<p><strong>C2.2 Palier 2 — Quand la responsabilité n'est pas évidente.</strong> Au palier 1, la cause d'une réclamation était assez claire. Au palier 2, la responsabilité peut être partagée, ou une réclamation peut se répéter chez un même client — la compétence est de gérer cette ambiguïté sans se braquer ni tout accepter par facilité.</p>
<p><strong>Cas pratique — une responsabilité partagée :</strong></p>
<p>Un client se plaint d'un délai dépassé, mais le dossier montre qu'il a lui-même tardé à valider une option, ce qui a décalé la commande.</p>
<ul>
<li><strong>❌ À éviter</strong> — rejeter toute la faute sur le client (même si les faits le permettent), ou au contraire s'excuser sans nuance</li>
<li><strong>✅ À privilégier</strong> — reconnaître la part de Vasseur s'il y en a une, expliquer factuellement la part du client sans lui faire de reproche direct, et avancer sur une solution</li>
</ul>
<p><strong>En résumé, au palier 2, face à une réclamation ambiguë, je vérifie que je :</strong></p>
<ul>
<li>✓ Distingue les responsabilités sans accuser ni tout endosser à la légère</li>
<li>✓ Reste factuel même quand le client a sa part de responsabilité</li>
<li>✓ Avance vers une solution plutôt que de m'arrêter sur "qui a raison"</li>
</ul>
</div>`},

  'C2.3-P2':{t:"Satisfaction client — approfondissement",c:`<div class="res-section res-apprenti">
<p><strong>C2.3 Palier 2 — Lire une tendance, pas un chiffre isolé.</strong> Au palier 1, tu réagissais à UNE note. Au palier 2, la compétence est de suivre plusieurs résultats dans le temps pour repérer une vraie tendance, et de savoir traiter un avis "entre deux" (ni très positif ni très négatif), souvent plus riche d'enseignement qu'un avis extrême.</p>
<p><strong>Cas pratique — un avis mitigé :</strong></p>
<p>Un client donne 7/10 (Passif) avec le commentaire : "Rien de grave, mais ça manquait un peu de chaleur dans l'accueil."</p>
<ul>
<li><strong>❌ À éviter</strong> — ignorer ce retour parce qu'il n'est "ni bon ni mauvais", ou le traiter avec la même urgence qu'un Détracteur</li>
<li><strong>✅ À privilégier</strong> — reconnaître ce que ce retour révèle (un point d'amélioration réel, même sans urgence), et le capitaliser pour l'équipe</li>
</ul>
<p><strong>En résumé, au palier 2, sur la satisfaction, je vérifie que je :</strong></p>
<ul>
<li>✓ Regarde une évolution dans le temps, pas un seul résultat isolé</li>
<li>✓ Prends au sérieux un avis mitigé, pas seulement les avis extrêmes</li>
<li>✓ En tire un enseignement exploitable, même sans urgence</li>
</ul>
</div>`},

  'C3.1-P2':{t:"Information et contact client — approfondissement",c:`<div class="res-section res-apprenti">
<p><strong>C3.1 Palier 2 — Adapter le contact à des profils variés.</strong> Au palier 1, tu envoyais un message à un profil homogène. Au palier 2, une même information peut devoir toucher des clients très différents (âge, usage, ancienneté) — la compétence est d'adapter le ton et le contenu sans multiplier les versions à l'infini.</p>
<p><strong>Cas pratique — un client resté silencieux longtemps :</strong></p>
<p>Un client n'a eu aucun contact avec Vasseur depuis 3 ans, sans raison connue (ni réclamation, ni départ signalé).</p>
<ul>
<li><strong>❌ À éviter</strong> — le relancer avec un message commercial classique, comme n'importe quel autre client</li>
<li><strong>✅ À privilégier</strong> — un message qui reconnaît l'absence de contact sans la dramatiser, et qui cherche à comprendre plutôt qu'à vendre immédiatement</li>
</ul>
<p><strong>En résumé, au palier 2, sur le contact client, je vérifie que je :</strong></p>
<ul>
<li>✓ Adapte le ton à la situation réelle du client, pas un message uniforme</li>
<li>✓ Cherche à comprendre un silence avant de vendre à nouveau</li>
<li>✓ Reste sobre sur un contact délicat, sans sur-communiquer</li>
</ul>
</div>`},

  'C3.2-P2':{t:"Fidélisation — approfondissement",c:`<div class="res-section res-apprenti">
<p><strong>C3.2 Palier 2 — Combiner les leviers, anticiper les effets pervers.</strong> Au palier 1, tu construisais UNE action de fidélisation. Au palier 2, la compétence est de savoir combiner plusieurs leviers pour un même objectif, et d'anticiper les effets pervers possibles (un client qui se sent lésé par rapport à un autre, par exemple).</p>
<p><strong>Cas pratique — un effet pervers à anticiper :</strong></p>
<p>Une offre de fidélité est réservée aux clients à 2 achats ou plus. Un client à un seul achat, mais très ancien et très actif sur les réseaux sociaux Vasseur, pourrait mal le vivre.</p>
<ul>
<li><strong>❌ À éviter</strong> — ignorer ce cas particulier au nom de la règle générale, sans anticiper la réaction possible</li>
<li><strong>✅ À privilégier</strong> — anticiper ce cas et préparer une réponse cohérente si la question se pose, sans casser la règle pour autant</li>
</ul>
<p><strong>En résumé, au palier 2, en construisant une action de fidélisation, je vérifie que je :</strong></p>
<ul>
<li>✓ Anticipe les cas limites, pas seulement le cas général</li>
<li>✓ Combine plusieurs leviers quand c'est pertinent, sans les empiler sans raison</li>
<li>✓ Garde une règle cohérente, même face à une exception qui semble légitime</li>
</ul>
</div>`},

  'C3.3-P2':{t:"Évaluation de la fidélisation — approfondissement",c:`<div class="res-section res-apprenti">
<p><strong>C3.3 Palier 2 — Repérer les biais d'évaluation.</strong> Au palier 1, tu calculais un taux et tirais une conclusion. Au palier 2, la compétence est de repérer si une évaluation est biaisée (échantillon trop petit, période inhabituelle, comparaison injuste) avant de faire confiance au résultat chiffré.</p>
<p><strong>Cas pratique — un résultat trompeur :</strong></p>
<p>Une action de fidélisation testée sur seulement 10 clients affiche un taux de conversion de 40% — un chiffre qui semble excellent.</p>
<ul>
<li><strong>❌ À éviter</strong> — généraliser immédiatement ce résultat à toute la base clients sans questionner la taille de l'échantillon</li>
<li><strong>✅ À privilégier</strong> — reconnaître que 10 clients est un échantillon trop petit pour conclure, et proposer un test à plus grande échelle avant de généraliser</li>
</ul>
<p><strong>En résumé, au palier 2, avant de valider une évaluation, je vérifie que je :</strong></p>
<ul>
<li>✓ Questionne la taille de l'échantillon avant de faire confiance à un pourcentage</li>
<li>✓ Repère si la période ou le contexte de test était particulier</li>
<li>✓ Ne généralise jamais un résultat obtenu sur un trop petit nombre de cas</li>
</ul>
</div>`},

};

if (typeof module !== 'undefined') module.exports = { COMP, RES };
