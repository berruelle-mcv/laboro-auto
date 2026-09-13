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

};

if (typeof module !== 'undefined') module.exports = { COMP, RES };
