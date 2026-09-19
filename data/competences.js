// ================================================
//   LABORO Auto — Référentiel de compétences & ressources pédagogiques
//   Codes identiques au référentiel MCV Option B (Bloc 1, 2, 3, 4)
// ================================================

const COMP = [
  {code:'C1.1', label:'Veille commerciale', g:'G1'},
  {code:'C1.2', label:'Vente omnicanale', g:'G1'},
  {code:'C1.3', label:'Exécution de la vente', g:'G1'},
  {code:'C2.1', label:'Suivi de la commande', g:'G2'},
  {code:'C2.2', label:'Services associés', g:'G2'},
  {code:'C2.3', label:'Réclamations client', g:'G2'},
  {code:'C2.4', label:'Satisfaction client', g:'G2'},
  {code:'C3.1', label:'Info & contact client', g:'G3'},
  {code:'C3.2', label:'Actions de fidélisation', g:'G3'},
  {code:'C3.3', label:'Évaluation fidélisation', g:'G3'},
  {code:'B4.1', label:'Rechercher et qualifier les informations de prospection', g:'G4'},
  {code:'B4.2', label:"Concevoir un plan et des supports de prospection", g:'G4'},
  {code:'B4.3', label:'Mettre en œuvre la prospection commerciale', g:'G4'},
  {code:'B4.4', label:'Assurer le suivi de la prospection et des devis', g:'G4'},
  {code:'B4.5', label:"Valoriser les produits et/ou les services", g:'G4'},
];

const RES = {

  'B4.1':{t:"Rechercher et qualifier les informations de prospection",c:`<div class="res-section res-debutant">
<p><strong>B4.1 — Trouver et qualifier des prospects chez Vasseur.</strong> Un prospect est un client potentiel qu'on n'a pas encore. Chez Vasseur, on distingue deux familles de prospects : les particuliers (achat citadine, SUV, électrique), souvent désignés par le sigle <strong>B2C</strong> (business to consumer, « d'entreprise à particulier »), et les professionnels (artisans, PME — utilitaires), désignés par le sigle <strong>B2B</strong> (business to business, « d'entreprise à entreprise ») que tu retrouveras souvent dans les missions. Avant de proposer quoi que ce soit, un commercial doit d'abord <em>comprendre</em> le prospect — proposer trop vite, c'est le meilleur moyen de perdre une vente.</p>
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
<p><strong>Un argument fréquent en B2B : l'amortissement.</strong> Une entreprise qui achète un véhicule professionnel avant la fin de son exercice comptable (souvent le 31 décembre) peut en déduire une partie du coût de ses impôts sur cette même année — c'est ce qu'on appelle amortir un investissement. C'est pour ça que beaucoup d'entreprises accélèrent leurs achats juste avant la clôture de l'exercice : c'est un vrai argument daté et concret à utiliser en prospection B2B, pas juste une expression toute faite.</p>
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
<p><strong>C1.1 — Assurer la veille commerciale chez Vasseur.</strong> La veille, c'est suivre en permanence ce qui se passe autour de soi : les offres concurrentes (autres concessions, mandataires en ligne), les tendances du marché (électrique en hausse, développement des zones à faibles émissions — ZFE, qui restreignent progressivement l'accès des centres-villes aux véhicules les plus polluants), et les dispositifs d'aide à l'achat en vigueur.</p>
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
<p><strong>C1.3 — Finaliser une vente chez Vasseur.</strong> Une fois l'accord de principe du client obtenu, il faut monter un dossier complet : identité, véhicule choisi (avec options), prix, mode de paiement, et le cas échéant reprise du véhicule précédent.</p>
<p><strong>Les 3 modes de paiement possibles chez Vasseur :</strong></p>
<ul>
<li><strong>Comptant</strong> — le client paie la totalité du prix, en une ou plusieurs fois, et devient immédiatement propriétaire du véhicule</li>
<li><strong>Crédit classique</strong> — un organisme de financement avance l'argent, le client rembourse en mensualités sur une durée fixée, et devient propriétaire dès la signature (comme pour un comptant, mais payé progressivement)</li>
<li><strong>LOA (Location avec Option d'Achat)</strong> — le client ne devient PAS propriétaire tout de suite : il loue le véhicule pendant une durée fixée (souvent 2 à 4 ans) en payant une mensualité généralement plus faible qu'un crédit classique, puis choisit à la fin soit de racheter le véhicule à un prix fixé à l'avance (la "valeur résiduelle"), soit de le rendre et d'en changer</li>
</ul>
<p>La différence essentielle à retenir : en LOA, le client paie pour <em>l'usage</em> du véhicule, pas pour le posséder — c'est pour ça que la mensualité est plus légère, mais le client doit accepter de ne pas être propriétaire avant la fin du contrat (et parfois jamais, s'il rend le véhicule).</p>
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

  'C2.2':{t:"Mettre en œuvre les services associés",c:`<div class="res-section res-debutant">
<p><strong>C2.2 — Mettre en œuvre un service associé chez Vasseur.</strong> Un service associé, c'est toute prestation qui accompagne la vente sans être le véhicule lui-même. Chez Vasseur, les principaux sont :</p>
<ul>
<li><strong>La garantie étendue</strong> — prolonge la garantie constructeur au-delà de sa durée initiale</li>
<li><strong>Le contrat d'entretien</strong> — révisions programmées à prix fixé à l'avance</li>
<li><strong>La pose d'accessoires</strong> — attelage, barres de toit, protection de coffre… posés par l'atelier de Bruno Faucher ou un carrossier partenaire</li>
<li><strong>La carte grise / l'immatriculation</strong> — démarche administrative que Vasseur peut réaliser pour le compte du client</li>
<li><strong>Le financement et l'assurance</strong> — proposés via des organismes partenaires de Vasseur, pas produits en interne</li>
</ul>
<p><strong>Mettre en œuvre un service associé, ce n'est pas juste le vendre — c'est le faire exister concrètement, en 4 étapes :</strong></p>
<ol>
<li><strong>Sélectionner le bon prestataire</strong> — en interne (Bruno pour une pose simple) ou un partenaire externe (carrossier, organisme de financement) selon la prestation</li>
<li><strong>Transmettre les informations utiles</strong> — au prestataire choisi : ce qui doit être fait, sur quel véhicule, pour quand</li>
<li><strong>Suivre l'exécution</strong> — vérifier que la prestation est bien en cours, pas juste "commandée"</li>
<li><strong>Relancer si besoin et rendre compte</strong> — au client si un délai évolue, en interne si un prestataire ne répond pas</li>
</ol>
<p><strong>Cas pratique — un attelage à poser chez Vasseur :</strong></p>
<p>M. Dembélé achète un Kangoo Van et demande la pose d'un attelage (450 €) avant la livraison prévue dans 8 jours. L'atelier de Bruno Faucher réalise ce type de pose en 3 jours, mais son planning est déjà chargé cette semaine.</p>
<ul>
<li>❌ <strong>À éviter</strong> — se contenter de noter "attelage demandé" dans le dossier sans vérifier la disponibilité réelle de l'atelier avant la date de livraison</li>
<li>✅ <strong>À privilégier</strong> — contacter Bruno dès la vente conclue pour vérifier qu'un créneau de pose est possible avant la date prévue, et caler la pose dans le planning avant de confirmer la date de livraison au client</li>
</ul>
<p>Si Bruno annonce que son planning ne permet pas de tenir le délai, il vaut mieux le savoir tout de suite (et proposer une date de livraison ajustée) que de laisser le client découvrir un retard à la dernière minute.</p>
<p><strong>⚠️ Erreur fréquente à éviter :</strong> confondre "vendre le service" et "le mettre en œuvre". Une fois le client d'accord sur la prestation, le travail ne fait que commencer — il faut encore la transmettre au bon prestataire et suivre qu'elle est bien réalisée.</p>
<p><strong>En résumé, avant de considérer un service associé comme mis en œuvre, je vérifie que j'ai :</strong></p>
<ul>
<li>✓ Choisi le bon prestataire (interne ou partenaire) pour cette prestation précise</li>
<li>✓ Transmis toutes les informations nécessaires à ce prestataire</li>
<li>✓ Vérifié que la prestation est réellement en cours, pas seulement enregistrée</li>
<li>✓ Prévu une relance si un délai n'est pas respecté</li>
</ul>
</div>`},

  'C2.3':{t:"Traiter les réclamations client",c:`<div class="res-section res-debutant">
<p><strong>C2.3 — Gérer une réclamation chez Vasseur.</strong> Une réclamation n'est pas une agression : c'est un client qui donne une seconde chance à la relation avant de la rompre. La méthode de base : écouter sans couper la parole, reformuler pour montrer qu'on a compris, investiguer les faits avant de conclure, puis proposer une solution concrète.</p>
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

  'C2.4':{t:"Évaluer la satisfaction client",c:`<div class="res-section res-debutant">
<p><strong>C2.4 — Mesurer et exploiter la satisfaction chez Vasseur.</strong> On ne devine pas si un client est satisfait, on le mesure. Le principal outil est le NPS (Net Promoter Score) : sur une note de 0 à 10 ("recommanderiez-vous Vasseur ?"), on distingue Promoteurs (9-10), Passifs (7-8) et Détracteurs (0-6).</p>
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
<p><strong>Suivre aussi les devis, pas seulement les campagnes.</strong> Un devis, c'est une proposition chiffrée envoyée à un prospect (un véhicule précis, un prix, des conditions), avec une date de validité au-delà de laquelle il n'engage plus Vasseur. Un devis envoyé n'est pas une vente : sans relance, un prospect qui hésite finit souvent par ne pas donner suite, ou par acheter ailleurs. Suivre un devis, c'est noter sa date d'envoi et sa date de validité, et relancer avant l'expiration plutôt qu'après.</p>
<p><strong>Cas pratique — un devis resté sans réponse :</strong></p>
<p>Un devis pour un Kangoo Van a été envoyé à un artisan il y a 8 jours, sans réponse. La validité du devis est de 15 jours.</p>
<ul>
<li><strong>❌ À éviter</strong> — attendre passivement l'expiration du devis avant de réagir, ou relancer trop tôt (dès le lendemain), ce qui peut sembler pressant</li>
<li><strong>✅ À privilégier</strong> — relancer avec quelques jours de marge avant l'expiration, avec un message qui rouvre la discussion sans donner l'impression de "forcer" une réponse (ex. une question ouverte sur un point du devis, plutôt qu'un simple rappel de délai)</li>
</ul>
<p><strong>En résumé, avant de juger une action de prospection ou de suivre un devis, je vérifie que je :</strong></p>
<ul>
<li>✓ Distingue les différentes étapes (contact → rendez-vous → vente), pas un seul taux global</li>
<li>✓ Identifie à quelle étape se situe le vrai problème avant de proposer un ajustement</li>
<li>✓ Propose un ajustement concret, pas juste "faire plus d'appels"</li>
<li>✓ Note et surveille la date de validité de chaque devis envoyé, pour relancer à temps</li>
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

  'B4.1-P2':{t:"Qualifier un prospect en situation réelle",c:`<div class="res-section res-apprenti">
<p><strong>B4.1 — Qualifier un prospect en situation réelle.</strong> Tu maîtrises la méthode BANT (Budget, Autorité, Need, Timeline). La vraie difficulté, sur le terrain, n'est plus de connaître la méthode, mais de l'appliquer quand la situation est moins nette : plusieurs prospects à traiter en même temps, des informations contradictoires, un profil qui ne rentre pas dans une case évidente.</p>
<p><strong>Ce qui change concrètement :</strong> tu devras souvent <em>prioriser</em> (tous les prospects ne se valent pas également) et <em>combiner</em> plusieurs sources d'information, sans qu'on te les serve déjà croisées dans un même tableau.</p>
<p><strong>Cas pratique — deux prospects, un seul créneau libre :</strong></p>
<p>En fin de journée, deux demandes arrivent : l'une d'un particulier qui dit vouloir "changer de voiture un jour", l'autre d'une entreprise qui a un besoin déclaré mais reste vague sur le budget.</p>
<ul>
<li><strong>❌ À éviter</strong> — traiter les deux dans l'ordre d'arrivée, sans réfléchir à qui a le plus de chances d'aboutir vite</li>
<li><strong>✅ À privilégier</strong> — évaluer rapidement le niveau de qualification de chacun (le B2B a un Need clair, il manque "juste" le Budget ; le particulier n'a presque rien de qualifié) et prioriser celui qui a le plus d'éléments déjà réunis</li>
</ul>
<p><strong>En résumé, avant de qualifier un prospect dans une situation moins nette, je vérifie que je :</strong></p>
<ul>
<li>✓ Priorise quand plusieurs prospects se présentent en même temps, au lieu de traiter au hasard</li>
<li>✓ Sais dire explicitement ce qui manque encore, même dans un profil qui semble déjà avancé</li>
<li>✓ Ne me contente pas d'une seule source d'information quand une autre est disponible</li>
</ul>
</div>`},

  'B4.2-P2':{t:"Arbitrer un plan de prospection",c:`<div class="res-section res-apprenti">
<p><strong>B4.2 — Arbitrer un plan de prospection.</strong> Tu sais construire un plan de prospection à partir d'une cible déjà identifiée. Sur le terrain, il faut aussi savoir arbitrer entre plusieurs options (canaux, budgets, cibles) quand les ressources sont limitées — ce qui est la réalité de toute concession.</p>
<p><strong>Cas pratique — un budget qui ne permet pas tout :</strong></p>
<p>Karim a un budget de campagne réduit ce trimestre. Deux options s'offrent : une campagne mail large mais peu coûteuse, ou une opération salon plus chère mais plus qualitative.</p>
<ul>
<li><strong>❌ À éviter</strong> — choisir par habitude ou par facilité, sans comparer objectivement le rapport entre coût et résultat attendu</li>
<li><strong>✅ À privilégier</strong> — comparer explicitement les deux options sur les mêmes critères (coût, portée, taux de conversion attendu) avant de trancher</li>
</ul>
<p><strong>En résumé, avant de valider un plan avec des ressources limitées, je vérifie que je :</strong></p>
<ul>
<li>✓ Compare plusieurs options sur les mêmes critères avant de choisir</li>
<li>✓ Justifie un arbitrage budgétaire, pas seulement un choix de canal</li>
<li>✓ Garde en tête que prospecter "plus" n'est pas toujours prospecter "mieux"</li>
</ul>
</div>`},

  'B4.3-P2':{t:"Gérer l'imprévu d'un contact réel",c:`<div class="res-section res-apprenti">
<p><strong>B4.3 — Gérer l'imprévu d'un contact réel.</strong> Tu sais traiter une objection isolée. Dans un vrai échange, un contact de prospection peut enchaîner plusieurs objections, changer de sujet, ou être compliqué à cerner. La compétence n'est plus de connaître une réponse toute faite, mais de rester maître du fil de la conversation.</p>
<p><strong>Cas pratique — un enchaînement d'objections :</strong></p>
<p>Un prospect B2B répond d'abord "on vient de renouveler", puis enchaîne "et de toute façon vos délais sont trop longs".</p>
<ul>
<li><strong>❌ À éviter</strong> — répondre à la deuxième objection en ignorant la première, comme si elle n'avait pas été dite</li>
<li><strong>✅ À privilégier</strong> — reconnaître les deux objections successivement, sans se précipiter sur une réponse toute faite pour la seconde</li>
</ul>
<p><strong>En résumé, face à un échange qui se complique, je vérifie que je :</strong></p>
<ul>
<li>✓ Garde trace de toutes les objections exprimées, pas seulement la dernière</li>
<li>✓ Ne me laisse pas déstabiliser par un enchaînement rapide</li>
<li>✓ Reste concentré sur l'objectif du contact, même si la conversation dévie</li>
</ul>
</div>`},

  'B4.4-P2':{t:"Comparer pour mieux piloter",c:`<div class="res-section res-apprenti">
<p><strong>B4.4 — Comparer pour mieux piloter.</strong> Tu sais calculer un taux pour une action, et suivre un devis isolé. Il faut maintenant savoir comparer plusieurs actions (ou plusieurs devis) entre eux pour prioriser, et en tirer un vrai diagnostic — pas juste un chiffre ou un dossier isolé.</p>
<p><strong>Cas pratique — une performance en baisse :</strong></p>
<p>Une campagne mail récurrente, qui obtenait habituellement 10% de taux de réponse, tombe à 4% ce mois-ci.</p>
<ul>
<li><strong>❌ À éviter</strong> — se contenter de constater la baisse sans chercher ce qui a changé entre les deux périodes</li>
<li><strong>✅ À privilégier</strong> — comparer ce qui a changé (message, période, cible, contexte) entre le moment où ça marchait et maintenant, avant de conclure</li>
</ul>
<p><strong>Cas pratique — plusieurs devis à relancer en même temps :</strong></p>
<p>Trois devis sont en attente : un pour un Kangoo Van (validité expirant dans 2 jours), un pour une Clio (validité expirant dans 10 jours), un pour une flotte de 3 Trafic (validité expirant dans 5 jours, montant nettement plus élevé que les deux autres).</p>
<ul>
<li><strong>❌ À éviter</strong> — relancer les trois dans l'ordre où ils ont été envoyés, sans tenir compte ni de l'urgence ni de l'enjeu</li>
<li><strong>✅ À privilégier</strong> — prioriser d'abord selon l'urgence réelle (le Kangoo Van expire dans 2 jours) tout en gardant à l'esprit l'enjeu (la flotte de Trafic, plus importante en valeur, mérite une relance soignée même si elle expire un peu plus tard)</li>
</ul>
<p><strong>En résumé, avant de conclure sur une performance ou de prioriser des relances, je vérifie que je :</strong></p>
<ul>
<li>✓ Compare dans le temps ou entre actions, pas seulement un chiffre isolé</li>
<li>✓ Cherche ce qui a changé avant de proposer un ajustement</li>
<li>✓ Distingue une vraie tendance d'une simple fluctuation ponctuelle</li>
<li>✓ Priorise mes relances de devis selon l'urgence ET l'enjeu, pas seulement l'ordre d'arrivée</li>
</ul>
</div>`},

  'B4.5-P2':{t:"Valoriser face à un client déjà informé",c:`<div class="res-section res-apprenti">
<p><strong>B4.5 — Valoriser face à un client déjà informé.</strong> Tu sais construire un argumentaire simple. Le client en face de toi a souvent déjà comparé plusieurs critères tout seul (en ligne, avec un concurrent), ou en sait parfois plus que la moyenne sur un plan technique — ton argumentaire doit s'adapter à ce niveau réel, pas juste présenter un produit.</p>
<p><strong>Cas pratique — un client déjà convaincu ailleurs :</strong></p>
<p>Un client arrive en disant avoir déjà comparé 3 modèles en ligne et penche clairement pour un concurrent, sur plusieurs critères à la fois (prix, consommation, image).</p>
<ul>
<li><strong>❌ À éviter</strong> — répondre par un argumentaire générique déjà préparé, sans tenir compte de sa comparaison précise</li>
<li><strong>✅ À privilégier</strong> — reprendre ses critères un par un, et ne répondre que sur ceux où Vasseur a un vrai avantage, sans forcer sur les autres</li>
</ul>
<p><strong>Cas pratique — un client au niveau technique supérieur au tien :</strong></p>
<p>Un client mécanicien de métier pose des questions très précises sur une motorisation, bien au-delà de l'argumentaire commercial standard.</p>
<ul>
<li><strong>❌ À éviter</strong> — bluffer une réponse technique que tu ne maîtrises pas vraiment, au risque de te tromper devant quelqu'un qui le remarquera</li>
<li><strong>✅ À privilégier</strong> — reconnaître honnêtement les limites de tes connaissances sur le point précis posé, et orienter vers un expert de l'atelier (Bruno Faucher) plutôt que d'improviser une réponse fragile</li>
</ul>
<p>Face à ce profil, la crédibilité ne vient pas du fait de tout savoir, mais de savoir dire "je vérifie et je reviens vers vous" plutôt que d'inventer une réponse.</p>
<p><strong>En résumé, face à un client informé ou expert, je vérifie que je :</strong></p>
<ul>
<li>✓ Pars de SA comparaison ou de SON niveau, pas d'un argumentaire générique</li>
<li>✓ Ne force pas un avantage sur un critère où Vasseur n'en a pas vraiment</li>
<li>✓ Reconnais mes limites plutôt que de bluffer sur un point technique</li>
<li>✓ Reste crédible plutôt que de tout vouloir défendre à tout prix</li>
</ul>
</div>`},

  'C1.1-P2':{t:"Croiser les sources de veille",c:`<div class="res-section res-apprenti">
<p><strong>C1.1 — Croiser les sources de veille.</strong> Tu sais utiliser une source de veille à la fois. Sur le terrain, deux sources peuvent se contredire ou donner des informations incomplètes séparément — la compétence est de les confronter avant de conclure.</p>
<p><strong>Cas pratique — deux sources contradictoires :</strong></p>
<p>Un article évoque une baisse du marché électrique, tandis que les chiffres internes Vasseur montrent une hausse des ventes électriques ce trimestre.</p>
<ul>
<li><strong>❌ À éviter</strong> — privilégier automatiquement une source parce qu'elle est externe (plus "objective" en apparence) ou interne (plus familière)</li>
<li><strong>✅ À privilégier</strong> — chercher ce qui explique l'écart (marché national vs zone Vasseur, période exacte) avant de trancher</li>
</ul>
<p><strong>En résumé, avant de conclure sur une veille, je vérifie que je :</strong></p>
<ul>
<li>✓ Confronte plusieurs sources avant de conclure, sans en écarter une par principe</li>
<li>✓ Cherche à expliquer un écart plutôt qu'à choisir une source "au hasard"</li>
<li>✓ Distingue une tendance générale d'une situation locale à Vasseur</li>
</ul>
</div>`},

  'C1.2-P2':{t:"Assurer la continuité entre canaux",c:`<div class="res-section res-apprenti">
<p><strong>C1.2 — Assurer la continuité entre canaux.</strong> Tu sais répondre sur un canal à la fois. Un même client peut basculer d'un canal à l'autre en cours d'échange (commence par chat, termine par mail) — la compétence est d'assurer la continuité de l'information, sans jamais se répéter ni se contredire.</p>
<p><strong>Cas pratique — un client qui change de canal :</strong></p>
<p>Un client démarre un échange sur le chat du site, puis écrit un mail le lendemain pour poursuivre — sans reprendre tout le contexte.</p>
<ul>
<li><strong>❌ À éviter</strong> — répondre comme si c'était une toute nouvelle demande, en redemandant des informations déjà données sur le chat</li>
<li><strong>✅ À privilégier</strong> — retrouver l'historique de l'échange précédent et poursuivre directement, sans faire répéter le client</li>
</ul>
<p><strong>En résumé, en situation multi-canal, je vérifie que je :</strong></p>
<ul>
<li>✓ Retrouve et utilise l'historique avant de répondre</li>
<li>✓ Ne fais jamais répéter au client une information déjà donnée</li>
<li>✓ Garde une information cohérente d'un canal à l'autre</li>
</ul>
</div>`},

  'C1.3-P2':{t:"Gérer un dossier à plusieurs paramètres",c:`<div class="res-section res-apprenti">
<p><strong>C1.3 — Gérer un dossier à plusieurs paramètres.</strong> Tu sais monter un dossier avec un seul mode de financement. Plusieurs éléments peuvent se combiner (reprise + financement + options), et plusieurs interlocuteurs peuvent être impliqués (couple, entreprise) — la compétence est de garder un dossier cohérent malgré cette complexité.</p>
<p><strong>Petit rappel LOA :</strong> en LOA (Location avec Option d'Achat), le client loue le véhicule et paie pour son usage, sans en être propriétaire pendant la durée du contrat — c'est ce qui explique une mensualité plus légère qu'un crédit classique. Une mission de ce palier peut te demander de l'expliquer simplement à un client qui ne connaît pas ce mécanisme.</p>
<p><strong>Cas pratique — plusieurs interlocuteurs :</strong></p>
<p>Un couple vient acheter ensemble ; l'un privilégie le prix, l'autre les options de sécurité.</p>
<ul>
<li><strong>❌ À éviter</strong> — s'adresser uniquement à celui qui parle le plus, en ignorant les priorités de l'autre</li>
<li><strong>✅ À privilégier</strong> — reformuler les deux priorités exprimées et proposer une solution qui tient compte des deux, avant de figer le dossier</li>
</ul>
<p><strong>En résumé, sur un dossier complexe, je vérifie que je :</strong></p>
<ul>
<li>✓ Prends en compte tous les interlocuteurs impliqués, pas un seul</li>
<li>✓ Garde une vision d'ensemble du dossier malgré plusieurs paramètres combinés</li>
<li>✓ Ne fige rien avant d'avoir vérifié la cohérence globale</li>
</ul>
</div>`},

  'C2.1-P2':{t:"Anticiper plutôt que réagir",c:`<div class="res-section res-apprenti">
<p><strong>C2.1 — Anticiper plutôt que réagir.</strong> Tu sais annoncer un retard déjà survenu. La compétence se déplace maintenant vers l'anticipation : repérer un risque avant qu'il ne devienne un vrai problème pour le client, et coordonner plusieurs services si nécessaire.</p>
<p><strong>Cas pratique — un risque détecté à temps :</strong></p>
<p>Tu apprends, via l'atelier, qu'une pièce nécessaire à la livraison d'un véhicule commandé est en tension chez le fournisseur — le client n'a encore aucune raison de s'inquiéter.</p>
<ul>
<li><strong>❌ À éviter</strong> — ne rien dire tant que le retard n'est pas confirmé à 100%, au risque de prévenir au dernier moment</li>
<li><strong>✅ À privilégier</strong> — informer le client d'un risque possible dès qu'il est identifié, sans dramatiser, pour qu'il ne soit jamais pris de court</li>
</ul>
<p><strong>En résumé, sur le suivi de commande, je vérifie que je :</strong></p>
<ul>
<li>✓ Agis dès qu'un risque est identifié, sans attendre la certitude totale</li>
<li>✓ Coordonne les services concernés plutôt que d'agir seul</li>
<li>✓ Informe sans dramatiser un risque encore incertain</li>
</ul>
</div>`},

  'C2.2-P2':{t:"Coordonner plusieurs services, plusieurs prestataires",c:`<div class="res-section res-apprenti">
<p><strong>C2.2 — Coordonner plusieurs services, plusieurs prestataires.</strong> Tu sais mettre en œuvre un service unique avec un seul prestataire. Sur le terrain, un même dossier combine souvent plusieurs services (accessoire + garantie étendue + financement), parfois avec des prestataires différents dont les délais ne dépendent pas les uns des autres — la compétence est de garder une vue d'ensemble cohérente malgré cette complexité.</p>
<p><strong>Cas pratique — trois services, trois délais différents :</strong></p>
<p>Un client B2B commande 3 Kangoo Van avec, pour chacun : pose d'un attelage (atelier Vasseur, 3 jours), immatriculation en flotte (administratif, 5 jours), et financement via un organisme partenaire (validation sous 4 à 7 jours selon le dossier).</p>
<ul>
<li>❌ <strong>À éviter</strong> — suivre chaque service séparément sans les recouper, au risque d'annoncer une date de livraison basée sur le service le plus rapide en oubliant les deux autres</li>
<li>✅ <strong>À privilégier</strong> — construire une vue d'ensemble avec les 3 délais côte à côte, identifier lequel est le plus long (ici le financement), et baser la date de livraison annoncée sur ce délai le plus contraignant — pas sur le plus rapide</li>
</ul>
<p>Un dossier avec plusieurs services n'est jamais plus rapide que son service le plus lent. C'est ce délai-là qu'il faut avoir en tête en premier.</p>
<p><strong>En résumé, sur un dossier à plusieurs services, je vérifie que je :</strong></p>
<ul>
<li>✓ Liste tous les services engagés, pas seulement le premier ou le plus simple</li>
<li>✓ Identifie le délai le plus contraignant avant d'annoncer une date au client</li>
<li>✓ Garde un suivi coordonné, même quand les prestataires sont indépendants les uns des autres</li>
</ul>
</div>`},

  'C2.3-P2':{t:"Quand la responsabilité n'est pas évidente",c:`<div class="res-section res-apprenti">
<p><strong>C2.3 — Quand la responsabilité n'est pas évidente.</strong> Tu sais traiter une réclamation dont la cause est assez claire. Sur le terrain, la responsabilité peut être partagée, ou une réclamation peut se répéter chez un même client — la compétence est de gérer cette ambiguïté sans se braquer ni tout accepter par facilité.</p>
<p><strong>Cas pratique — une responsabilité partagée :</strong></p>
<p>Un client se plaint d'un délai dépassé, mais le dossier montre qu'il a lui-même tardé à valider une option, ce qui a décalé la commande.</p>
<ul>
<li><strong>❌ À éviter</strong> — rejeter toute la faute sur le client (même si les faits le permettent), ou au contraire s'excuser sans nuance</li>
<li><strong>✅ À privilégier</strong> — reconnaître la part de Vasseur s'il y en a une, expliquer factuellement la part du client sans lui faire de reproche direct, et avancer sur une solution</li>
</ul>
<p><strong>En résumé, face à une réclamation ambiguë, je vérifie que je :</strong></p>
<ul>
<li>✓ Distingue les responsabilités sans accuser ni tout endosser à la légère</li>
<li>✓ Reste factuel même quand le client a sa part de responsabilité</li>
<li>✓ Avance vers une solution plutôt que de m'arrêter sur "qui a raison"</li>
</ul>
</div>`},

  'C2.4-P2':{t:"Lire une tendance, pas un chiffre isolé",c:`<div class="res-section res-apprenti">
<p><strong>C2.4 — Lire une tendance, pas un chiffre isolé.</strong> Tu sais réagir à une note isolée. La compétence est maintenant de suivre plusieurs résultats dans le temps pour repérer une vraie tendance, et de savoir traiter un avis "entre deux" (ni très positif ni très négatif), souvent plus riche d'enseignement qu'un avis extrême.</p>
<p><strong>Cas pratique — un avis mitigé :</strong></p>
<p>Un client donne 7/10 (Passif) avec le commentaire : "Rien de grave, mais ça manquait un peu de chaleur dans l'accueil."</p>
<ul>
<li><strong>❌ À éviter</strong> — ignorer ce retour parce qu'il n'est "ni bon ni mauvais", ou le traiter avec la même urgence qu'un Détracteur</li>
<li><strong>✅ À privilégier</strong> — reconnaître ce que ce retour révèle (un point d'amélioration réel, même sans urgence), et le capitaliser pour l'équipe</li>
</ul>
<p><strong>En résumé, sur la satisfaction, je vérifie que je :</strong></p>
<ul>
<li>✓ Regarde une évolution dans le temps, pas un seul résultat isolé</li>
<li>✓ Prends au sérieux un avis mitigé, pas seulement les avis extrêmes</li>
<li>✓ En tire un enseignement exploitable, même sans urgence</li>
</ul>
</div>`},

  'C3.1-P2':{t:"Adapter le contact à des profils variés",c:`<div class="res-section res-apprenti">
<p><strong>C3.1 — Adapter le contact à des profils variés.</strong> Tu sais envoyer un message à un profil homogène. Une même information peut devoir toucher des clients très différents (âge, usage, ancienneté) — la compétence est d'adapter le ton et le contenu sans multiplier les versions à l'infini.</p>
<p><strong>Cas pratique — un client resté silencieux longtemps :</strong></p>
<p>Un client n'a eu aucun contact avec Vasseur depuis 3 ans, sans raison connue (ni réclamation, ni départ signalé).</p>
<ul>
<li><strong>❌ À éviter</strong> — le relancer avec un message commercial classique, comme n'importe quel autre client</li>
<li><strong>✅ À privilégier</strong> — un message qui reconnaît l'absence de contact sans la dramatiser, et qui cherche à comprendre plutôt qu'à vendre immédiatement</li>
</ul>
<p><strong>En résumé, sur le contact client, je vérifie que je :</strong></p>
<ul>
<li>✓ Adapte le ton à la situation réelle du client, pas un message uniforme</li>
<li>✓ Cherche à comprendre un silence avant de vendre à nouveau</li>
<li>✓ Reste sobre sur un contact délicat, sans sur-communiquer</li>
</ul>
</div>`},

  'C3.2-P2':{t:"Combiner les leviers, anticiper les effets pervers",c:`<div class="res-section res-apprenti">
<p><strong>C3.2 — Combiner les leviers, anticiper les effets pervers.</strong> Tu sais construire une action de fidélisation. La compétence est maintenant de savoir combiner plusieurs leviers pour un même objectif, adapter une action à un public différent, et anticiper les effets pervers possibles (un client qui se sent lésé par rapport à un autre, par exemple).</p>
<p><strong>Cas pratique — un effet pervers à anticiper :</strong></p>
<p>Une offre de fidélité est réservée aux clients à 2 achats ou plus. Un client à un seul achat, mais très ancien et très actif sur les réseaux sociaux Vasseur, pourrait mal le vivre.</p>
<ul>
<li><strong>❌ À éviter</strong> — ignorer ce cas particulier au nom de la règle générale, sans anticiper la réaction possible</li>
<li><strong>✅ À privilégier</strong> — anticiper ce cas et préparer une réponse cohérente si la question se pose, sans casser la règle pour autant</li>
</ul>
<p><strong>Adapter un levier à un public professionnel (B2B) :</strong> un avantage pensé pour un particulier (ex. un forfait entretien offert) n'a pas forcément le même attrait pour une entreprise, qui raisonne surtout en <strong>coût d'exploitation</strong> — c'est-à-dire l'ensemble des dépenses régulières liées à l'usage de ses véhicules (carburant, entretien, assurance, immobilisation en cas de panne). Pour un client B2B avec une flotte de véhicules, un levier qui réduit ce coût d'exploitation sur la durée (ex. tarif préférentiel sur l'entretien de toute la flotte) parle souvent plus qu'un avantage ponctuel à l'achat.</p>
<p><strong>En résumé, en construisant une action de fidélisation, je vérifie que je :</strong></p>
<ul>
<li>✓ Anticipe les cas limites, pas seulement le cas général</li>
<li>✓ Combine plusieurs leviers quand c'est pertinent, sans les empiler sans raison</li>
<li>✓ Adapte l'avantage proposé à ce qui motive réellement le public visé (particulier ou B2B)</li>
<li>✓ Garde une règle cohérente, même face à une exception qui semble légitime</li>
</ul>
</div>`},

  'C3.3-P2':{t:"Repérer les biais d'évaluation",c:`<div class="res-section res-apprenti">
<p><strong>C3.3 — Repérer les biais d'évaluation.</strong> Tu sais calculer un taux et tirer une conclusion. La compétence est maintenant de repérer si une évaluation est biaisée (échantillon trop petit, période inhabituelle, comparaison injuste, biais de sélection) avant de faire confiance au résultat chiffré — et de savoir regarder au-delà du seul taux de conversion.</p>
<p><strong>Cas pratique — un résultat trompeur :</strong></p>
<p>Une action de fidélisation testée sur seulement 10 clients affiche un taux de conversion de 40% — un chiffre qui semble excellent.</p>
<ul>
<li><strong>❌ À éviter</strong> — généraliser immédiatement ce résultat à toute la base clients sans questionner la taille de l'échantillon</li>
<li><strong>✅ À privilégier</strong> — reconnaître que 10 clients est un échantillon trop petit pour conclure, et proposer un test à plus grande échelle avant de généraliser</li>
</ul>
<p><strong>Un biais plus subtil — le biais de sélection :</strong> quand on compare les clients ayant participé à une offre à ceux n'y ayant pas participé, il faut se méfier d'une explication trompeuse : les clients qui participent sont peut-être déjà, au départ, plus fidèles ou plus engagés que les autres — indépendamment de l'offre elle-même. Une bonne évaluation dans la durée doit envisager cette explication alternative avant de conclure que l'offre est seule responsable du résultat.</p>
<p><strong>Regarder au-delà du taux de conversion :</strong> le taux de conversion (combien de clients rachètent) ne capture pas tout. D'autres indicateurs peuvent révéler un effet que le taux de conversion seul sous-estime, par exemple le <strong>taux de recommandation</strong> (des clients satisfaits qui parlent de Vasseur sans forcément racheter tout de suite) ou l'<strong>ancienneté moyenne</strong> des clients fidélisés.</p>
<p><strong>En résumé, avant de valider une évaluation, je vérifie que je :</strong></p>
<ul>
<li>✓ Questionne la taille de l'échantillon avant de faire confiance à un pourcentage</li>
<li>✓ Repère si la période ou le contexte de test était particulier</li>
<li>✓ Envisage qu'un groupe comparé soit déjà différent au départ (biais de sélection)</li>
<li>✓ Ne me limite pas au seul taux de conversion pour juger de l'efficacité réelle</li>
</ul>
</div>`},


// ═══ PALIER 3 — Professionnel compétent ═══

'C1.1-P3':{t:"Arbitrer une veille incertaine",c:`<div class="res-section res-pro">
<p><strong>C1.1 — Arbitrer entre informations fiables et informations incertaines.</strong> Tu sais déjà croiser deux sources de veille qui se contredisent (palier 2). Au niveau professionnel, la difficulté augmente : tu reçois souvent plusieurs informations en même temps, de fiabilité inégale — certaines vérifiées (chiffres internes Vasseur), d'autres rapportées ou non confirmées (rumeur de marché, annonce pas encore officielle) — et tu dois décider, parfois avec un budget ou un délai limité, sans attendre une certitude totale.</p>
<p><strong>La règle professionnelle : trier avant de décider.</strong> Une information non confirmée n'est pas forcément fausse — mais elle ne doit jamais peser autant qu'une information vérifiée dans une décision. Le bon réflexe : classer chaque information selon sa source (chiffre interne, article sourcé, propos rapportés, rumeur), puis décider en t'appuyant en priorité sur les informations les plus fiables, sans ignorer les autres mais sans leur donner trop de poids.</p>
<p><strong>Cas pratique — un arbitrage de stock chez Vasseur :</strong></p>
<p>Michel doit décider comment répartir un budget de réapprovisionnement limité entre deux segments. Il dispose de : des chiffres de vente Vasseur fiables (SUV hybrides en hausse localement), une tendance nationale contraire (SUV hybrides en baisse, source professionnelle sourcée), et une rumeur non confirmée sur une promotion concurrente.</p>
<ul>
<li>❌ <strong>À éviter</strong> — trancher sur la première information reçue, ou sur celle qui va dans le sens de ce qu'on pensait déjà avant de regarder le dossier</li>
<li>✅ <strong>À privilégier</strong> — classer chaque information par fiabilité, puis construire la décision sur les informations les plus solides, en signalant explicitement ce qui reste incertain</li>
</ul>
<p><strong>⚠️ Erreur fréquente à éviter :</strong> présenter une information non confirmée à la direction comme si elle était acquise. Une rumeur peut être mentionnée — mais toujours signalée comme telle, jamais présentée avec la même autorité qu'un chiffre vérifié.</p>
<p><strong>En résumé, avant de trancher sur une veille à enjeux, je vérifie que je :</strong></p>
<ul>
<li>✓ Distingue clairement ce qui est vérifié de ce qui est rapporté ou supposé</li>
<li>✓ Construis ma décision en priorité sur les informations les plus fiables</li>
<li>✓ Signale explicitement, dans ma communication, ce qui reste incertain</li>
</ul>
</div>`},

'C1.2-P3':{t:"Piloter l'omnicanal en situation d'enjeu",c:`<div class="res-section res-pro">
<p><strong>C1.2 — Piloter l'omnicanal quand plusieurs canaux et plusieurs personnes sont impliqués.</strong> Tu sais assurer la continuité d'un échange qui bascule d'un canal à l'autre (palier 2). Au niveau professionnel, la difficulté s'ajoute : plusieurs interlocuteurs internes (toi, un collègue, la logistique) peuvent avoir donné des informations différentes au même client, sur des canaux différents, à des moments différents — et c'est toi qui dois réconcilier tout ça avant que le client ne le découvre seul.</p>
<p><strong>La règle professionnelle : prévenir plutôt que découvrir ensemble.</strong> Dès que tu repères un écart entre deux informations données au client (deux prix, deux dates, deux promesses), le réflexe professionnel n'est jamais d'attendre que le client s'en aperçoive — c'est de vérifier, trancher en interne, puis informer le client de façon proactive, sur le canal le plus adapté à l'urgence de la situation.</p>
<p><strong>Cas pratique — deux dates de livraison pour un même client :</strong></p>
<p>Un client B2B a reçu une date de livraison par mail (6 semaines), puis une date différente confirmée en interne par la logistique (9 semaines), suite à un aléa fournisseur — sans que personne ne l'en ait encore informé, à quelques jours d'une signature.</p>
<ul>
<li>❌ <strong>À éviter</strong> — laisser la situation en l'état en espérant que ça passe, ou attendre le rendez-vous de signature pour l'annoncer en direct</li>
<li>✅ <strong>À privilégier</strong> — vérifier la date qui fait foi, puis contacter le client avant le rendez-vous, sur un canal adapté à l'urgence (téléphone plutôt que mail si le délai est court), avec une solution concrète si possible</li>
</ul>
<p><strong>⚠️ Erreur fréquente à éviter :</strong> traiter cette situation comme un simple problème de communication interne à régler entre collègues, en oubliant que c'est d'abord le client qui doit être informé rapidement — pas en dernier.</p>
<p><strong>En résumé, face à une incohérence d'information entre canaux ou interlocuteurs, je vérifie que je :</strong></p>
<ul>
<li>✓ Identifie l'information qui doit désormais faire foi avant de communiquer</li>
<li>✓ Informe le client de façon proactive, avant qu'il ne découvre l'écart seul</li>
<li>✓ Choisis le canal adapté à l'urgence de la situation, pas seulement l'habitude</li>
</ul>
</div>`},

'C1.3-P3':{t:"Exécuter une vente complexe sous pression",c:`<div class="res-section res-pro">
<p><strong>C1.3 — Exécuter un dossier de vente quand plusieurs difficultés se combinent.</strong> Tu sais déjà monter un dossier avec plusieurs paramètres (reprise + financement + interlocuteurs multiples, palier 2). Au niveau professionnel, la difficulté n'est plus seulement de combiner plusieurs éléments — c'est de gérer plusieurs erreurs ou tensions en même temps (un cadrage de négociation contesté, plusieurs écarts découverts simultanément à la livraison), souvent avec le client présent ou une pression de temps.</p>
<p><strong>La règle professionnelle : trier avant d'annoncer.</strong> Face à plusieurs problèmes détectés en même temps, le réflexe du professionnel n'est jamais de tout annoncer en vrac, ni de paniquer sur celui qui semble le plus grave en premier. Il faut d'abord classer les écarts selon leur impact réel pour le client, puis les traiter dans cet ordre, en gardant une communication honnête sur chacun.</p>
<p><strong>Cas pratique — trois écarts découverts à la livraison :</strong></p>
<p>Un client vient récupérer son véhicule : une option demandée manque au dossier, la valeur de reprise de son ancien véhicule est finalement inférieure à celle annoncée, et le mode de financement inscrit sur le contrat ne correspond pas à ce qu'il avait demandé.</p>
<ul>
<li>❌ <strong>À éviter</strong> — annoncer les trois problèmes en vrac dès l'arrivée du client, ou minimiser l'un d'eux pour "adoucir" la situation</li>
<li>✅ <strong>À privilégier</strong> — identifier lequel de ces écarts a le plus d'impact concret pour le client (souvent le financement, car il engage sur plusieurs années), l'annoncer en premier avec une solution, puis traiter les autres dans l'ordre</li>
</ul>
<p><strong>⚠️ Erreur fréquente à éviter :</strong> vouloir tout corriger seul et dans l'urgence sur place, au risque d'improviser une solution non validée. Certains écarts (comme un mode de financement erroné) demandent souvent une vérification ou une validation avant d'être corrigés définitivement.</p>
<p><strong>En résumé, face à plusieurs écarts découverts en même temps, je vérifie que je :</strong></p>
<ul>
<li>✓ Classe les écarts par impact réel pour le client avant de les annoncer</li>
<li>✓ Reste honnête sur chacun, sans en minimiser un pour adoucir la situation</li>
<li>✓ Ne corrige pas seul dans l'urgence ce qui doit être vérifié ou validé avant</li>
</ul>
</div>`},

  'C2.1-P3':{t:"Piloter un dossier sous tension, seul",c:`<div class="res-section res-pro">
<p><strong>C2.1 — Piloter un dossier de suivi quand plusieurs signaux se contredisent.</strong> Tu sais annoncer un retard et anticiper un risque isolé. En situation professionnelle réelle, plusieurs informations arrivent souvent en même temps, parfois contradictoires (l'atelier dit une chose, le transporteur en dit une autre), et c'est à toi de trancher ce que tu communiques au client — sans attendre que quelqu'un te dise quoi faire.</p>
<p><strong>Cas pratique — deux sources qui se contredisent chez Vasseur :</strong></p>
<p>Un Trafic doit être livré dans 4 jours à Transports Rigal (flotte de 2 véhicules). Le matin même, Bruno Faucher t'indique que la préparation sera prête dans les temps. L'après-midi, le transporteur chargé d'acheminer le véhicule signale par mail un risque de grève partielle qui pourrait décaler l'acheminement de 2 à 5 jours, sans certitude à ce stade.</p>
<ul>
<li>❌ <strong>À éviter</strong> — se fier uniquement à la dernière information reçue (le risque de grève) et annoncer un retard certain, ou à l'inverse ignorer le mail du transporteur parce que Bruno, lui, est dans les temps</li>
<li>✅ <strong>À privilégier</strong> — considérer les deux informations comme complémentaires (l'une porte sur la préparation, l'autre sur l'acheminement) : le retard n'est pas confirmé mais le risque est réel et mérite d'être partagé au client de façon proportionnée, avec un point de suivi fixé toi-même dans 48h plutôt que d'attendre passivement</li>
</ul>
<p>Piloter un dossier, ce n'est pas seulement transmettre une information reçue : c'est croiser plusieurs sources, identifier laquelle est la plus fiable ou la plus récente, et décider — sans validation systématique d'un responsable — de ce qui doit remonter jusqu'au client et à quel moment.</p>
<p><strong>⚠️ Erreur fréquente à éviter :</strong> traiter deux sources d'information comme s'il fallait choisir entre elles. La plupart du temps, elles se complètent — la vraie compétence est de les articuler, pas de trancher laquelle "a raison".</p>
<p><strong>En résumé, avant de communiquer sur un dossier à signaux multiples, je vérifie que je :</strong></p>
<ul>
<li>✓ Ai rapproché toutes les informations disponibles, même si elles semblent porter sur des sujets différents</li>
<li>✓ Distingue un risque encore incertain d'un retard confirmé, dans le ton employé</li>
<li>✓ Fixe moi-même un point de suivi précis plutôt que d'attendre une nouvelle alerte</li>
<li>✓ Décide seul du bon niveau d'information à transmettre, sans sur-communiquer ni sous-informer</li>
</ul>
</div>`},

  'C2.2-P3':{t:"Arbitrer un dossier de services face à des contraintes réelles",c:`<div class="res-section res-pro">
<p><strong>C2.2 — Arbitrer la mise en œuvre des services associés quand tout ne peut pas être satisfait en même temps.</strong> Tu sais coordonner plusieurs prestataires et suivre leurs délais respectifs. Sur le terrain, la difficulté professionnelle est différente : il faut parfois choisir entre deux solutions qui ont chacune un coût (financier ou en délai), sans réponse évidente, et l'assumer devant le client.</p>
<p><strong>Petit rappel :</strong> la LOA (Location avec Option d'Achat) est un mode de financement où le client loue le véhicule et paie pour son usage, sans en être propriétaire pendant la durée du contrat, avec une mensualité plus légère qu'un crédit classique.</p>
<p><strong>Cas pratique — un arbitrage financement chez Vasseur :</strong></p>
<p>Mme Lechene achète un Austral à 32 900 € et hésite entre deux financements proposés par l'organisme partenaire : une LOA sur 4 ans (mensualité 349 €, mais un kilométrage plafonné à 12 000 km/an, au-delà duquel des pénalités s'appliquent) ou un crédit classique sur 5 ans (mensualité 419 €, aucune limite de kilométrage, elle reste propriétaire dès le premier mois). Elle t'indique rouler environ 18 000 km/an pour son activité d'infirmière libérale, mais hésite car la mensualité LOA est plus légère.</p>
<ul>
<li>❌ <strong>À éviter</strong> — la laisser choisir la LOA uniquement parce que la mensualité est plus basse, sans lui signaler que son kilométrage réel dépasse largement le plafond du contrat</li>
<li>✅ <strong>À privilégier</strong> — chiffrer concrètement ce que représenterait le dépassement de kilométrage en LOA sur 4 ans, et le comparer honnêtement à l'écart de mensualité du crédit classique, avant de la laisser décider en connaissance de cause</li>
</ul>
<p>Mettre en œuvre un service associé ne se limite pas à transmettre un dossier au bon prestataire : quand plusieurs options sont possibles, un professionnel compétent chiffre les conséquences réelles de chacune avant de laisser le client choisir — sans pour autant décider à sa place.</p>
<p><strong>⚠️ Erreur fréquente à éviter :</strong> présenter uniquement l'option qui semble la plus simple à vendre (mensualité la plus basse) sans vérifier qu'elle correspond réellement à l'usage du client. Un chiffre séduisant qui coûte cher plus tard nuit à la confiance autant qu'un retard mal annoncé.</p>
<p><strong>En résumé, avant de finaliser un dossier de services associés avec plusieurs options possibles, je vérifie que je :</strong></p>
<ul>
<li>✓ Chiffre concrètement les conséquences de chaque option, pas seulement leur coût affiché</li>
<li>✓ Confronte l'option envisagée à l'usage réel du client (kilométrage, besoin, durée)</li>
<li>✓ Explique l'arbitrage clairement, sans jargon non expliqué, pour que le client décide en connaissance de cause</li>
<li>✓ Laisse la décision finale au client, sans l'orienter vers l'option la plus simple à conclure</li>
</ul>
</div>`},

  'C2.3-P3':{t:"Décider seul jusqu'où aller sur une réclamation",c:`<div class="res-section res-pro">
<p><strong>C2.3 — Décider seul de la limite entre ce que tu peux régler et ce qui doit remonter.</strong> Tu sais gérer une responsabilité partagée ou une réclamation récurrente. La compétence professionnelle qui se joue maintenant est différente : savoir évaluer, sans consulter systématiquement Michel, jusqu'où tu peux t'engager financièrement ou juridiquement — et reconnaître seul le moment où un dossier dépasse ce que tu peux décider.</p>
<p><strong>Cas pratique — un geste commercial à la limite de ta marge de décision :</strong></p>
<p>Un client B2B (Groupe Delacroix, flotte de 4 Trafic) signale qu'un des véhicules livrés présente un défaut de peinture visible sur une portière. L'atelier confirme le défaut et propose une reprise en peinture sous garantie (aucun coût réel pour Vasseur), mais le client, agacé par ce contretemps sur un dossier déjà volumineux, réclame aussi un geste commercial de 800 € sur la facture globale — un montant que tu n'as encore jamais accordé seul.</p>
<ul>
<li>❌ <strong>À éviter</strong> — accepter les 800 € directement pour "faire plaisir" à un gros client sans savoir si ce montant est dans tes prérogatives, ou refuser sèchement sans rien proposer d'autre par peur de mal faire</li>
<li>✅ <strong>À privilégier</strong> — traiter immédiatement ce qui relève de toi (la reprise en peinture, sans coût, validée), et transmettre la demande de geste commercial à Michel avec un dossier argumenté (valeur du client, nature du désagrément), en informant le client d'un délai de réponse précis plutôt que de trancher seul un montant inhabituel</li>
</ul>
<p>Un professionnel compétent ne cherche pas à tout régler seul pour paraître autonome, ni à tout transmettre par prudence excessive : il sait distinguer ce qui relève clairement de sa marge de manœuvre (un défaut avéré, une solution sans coût pour Vasseur) de ce qui dépasse un seuil qu'il doit faire valider.</p>
<p><strong>⚠️ Erreur fréquente à éviter :</strong> confondre "vouloir bien faire" et "avoir le mandat pour décider". Un engagement financier inhabituel pris seul, même bien intentionné, peut mettre Vasseur en difficulté si la direction n'était pas au courant.</p>
<p><strong>En résumé, face à une réclamation qui implique un engagement inhabituel, je vérifie que je :</strong></p>
<ul>
<li>✓ Traite immédiatement ce qui relève clairement de ma marge de décision</li>
<li>✓ Reconnais le moment où un montant ou un enjeu dépasse ce que je peux valider seul</li>
<li>✓ Transmets un dossier argumenté, pas juste une demande brute, à la personne compétente</li>
<li>✓ Informe le client d'un délai précis plutôt que de le laisser sans réponse en attendant l'arbitrage</li>
</ul>
</div>`},

  'C2.4-P3':{t:"Distinguer la cause réelle d'un symptôme visible",c:`<div class="res-section res-pro">
<p><strong>C2.4 — Distinguer la cause réelle d'un symptôme visible dans les résultats de satisfaction.</strong> Tu sais lire une tendance dans le temps et comparer deux segments de clientèle. La compétence professionnelle qui se joue maintenant est d'aller au-delà d'un chiffre qui semble parler de lui-même : deux indicateurs peuvent sembler se contredire, et il faut creuser avant de conclure — au risque sinon de corriger le mauvais problème.</p>
<p><strong>Cas pratique — deux indicateurs qui semblent se contredire chez Vasseur :</strong></p>
<p>Michel te montre deux résultats du même trimestre : le NPS (Net Promoter Score, une note de 0 à 10 mesurant si le client recommanderait Vasseur, avec les catégories Promoteurs 9-10, Passifs 7-8, Détracteurs 0-6) global de Vasseur est en légère hausse (36 contre 32 le trimestre précédent), mais le nombre de réclamations déposées a augmenté de 40% sur la même période.</p>
<ul>
<li>❌ <strong>À éviter</strong> — conclure que "tout va bien" en te basant uniquement sur le NPS en hausse, ou au contraire "tout va mal" en te basant uniquement sur les réclamations en hausse, sans chercher à expliquer l'écart entre les deux</li>
<li>✅ <strong>À privilégier</strong> — formuler des hypothèses vérifiables pour expliquer cet écart apparent (par exemple : la hausse du volume de ventes du trimestre explique-t-elle mécaniquement la hausse du nombre absolu de réclamations, même si leur proportion baisse ? les réclamations concernent-elles surtout un point précis, différent de ce qui motive la satisfaction globale ?), puis vérifier ces hypothèses avec les données disponibles avant de conclure</li>
</ul>
<p>Un chiffre isolé, même juste, peut raconter une histoire incomplète. La compétence professionnelle est de croiser plusieurs indicateurs, d'expliquer un écart apparent plutôt que de choisir celui qui arrange la conclusion qu'on avait déjà en tête, et de proposer une action qui corrige la cause réelle plutôt que le symptôme le plus visible.</p>
<p><strong>⚠️ Erreur fréquente à éviter :</strong> traiter un symptôme visible (le nombre de réclamations) sans avoir identifié s'il révèle un vrai problème de fond ou un simple effet mécanique (plus de ventes = plus de réclamations en valeur absolue, sans que le taux ne se dégrade).</p>
<p><strong>En résumé, avant de conclure sur des indicateurs de satisfaction qui semblent se contredire, je vérifie que je :</strong></p>
<ul>
<li>✓ Ne me base pas sur un seul indicateur quand plusieurs sont disponibles</li>
<li>✓ Formule plusieurs hypothèses pour expliquer un écart, avant de choisir laquelle privilégier</li>
<li>✓ Vérifie mes hypothèses avec les données disponibles plutôt que de les affirmer</li>
<li>✓ Propose une action qui cible la cause identifiée, pas seulement le chiffre le plus visible</li>
</ul>
</div>`},

  'C3.1-P3':{t:"Arbitrer un portefeuille de contacts sous contrainte de temps",c:`<div class="res-section res-pro">
<p><strong>C3.1 — Arbitrer un portefeuille de contacts sous contrainte de temps.</strong> Tu sais rédiger un bon message pour un client donné. En situation réelle, un vendeur gère un <strong>portefeuille</strong> (l’ensemble des clients dont il a la charge) de plusieurs dizaines ou centaines de personnes enregistrées dans le CRM — le <em>Customer Relationship Management</em>, le logiciel qui centralise l’historique de chaque client (achats, contacts, réclamations). Le temps disponible pour contacter ces clients est limité : la compétence professionnelle est de choisir QUI contacter en priorité, avec des informations parfois incomplètes ou contradictoires d’un collègue à l’autre.</p>
<p><strong>Cas pratique — une semaine de contacts chez Vasseur :</strong></p>
<p>Tu disposes d’1h30 cette semaine pour des contacts de fidélisation, soit environ 5 clients sur les 40 marqués « à recontacter » dans le CRM. Deux fiches se contredisent : le CRM indique que Mme Coquet n’a pas été contactée depuis 8 mois, mais Karim se souvient l’avoir eue au téléphone la semaine dernière, sans avoir mis à jour sa fiche.</p>
<ul>
<li><strong>❌ À éviter</strong> — contacter les 5 premiers clients de la liste par ordre alphabétique ou par ancienneté de fiche, sans vérifier la fiabilité de l’information</li>
<li><strong>✅ À privilégier</strong> — vérifier rapidement l’information douteuse (un message à Karim) avant d’agir, puis prioriser selon des critères objectifs : ancienneté réelle du dernier contact, valeur du client, motif de contact disponible</li>
</ul>
<p><strong>⚠️ Erreur fréquente à éviter :</strong> traiter une fiche CRM non mise à jour comme une vérité absolue. Le CRM est un outil, pas la réalité — il ne reflète que ce que les collègues ont pris le temps d’y noter.</p>
<p><strong>En résumé, avant de prioriser un ensemble de contacts, je vérifie que je :</strong></p>
<ul>
<li>✓ Vérifie une information douteuse avant de m’y fier pour prioriser</li>
<li>✓ Définis des critères de priorité clairs plutôt qu’un ordre arbitraire</li>
<li>✓ Accepte de ne pas pouvoir tout faire, et assume mes choix d’exclusion</li>
</ul>
</div>`},

  'C3.2-P3':{t:"Arbitrer un budget de fidélisation entre plusieurs leviers",c:`<div class="res-section res-pro">
<p><strong>C3.2 — Arbitrer un budget de fidélisation entre plusieurs leviers.</strong> Construire une action isolée ne suffit plus au niveau professionnel confirmé. On reçoit une <strong>enveloppe budgétaire</strong> — une somme fixée à l’avance, non extensible — à répartir entre plusieurs leviers ou segments dont les résultats attendus diffèrent. La compétence est de faire des choix argumentés, y compris quand la hiérarchie pousse vers une exception à la règle.</p>
<p><strong>Cas pratique — une enveloppe de 3 000 € pour le trimestre :</strong></p>
<p>Michel confie une enveloppe de 3 000 € à répartir entre trois leviers : un programme de parrainage (coût estimé 250 €/vente générée), une offre de reprise majorée pour clients anciens (coût 400 €/vente), et un geste ciblé auprès des flottes B2B (coût 600 € par flotte, sachant qu’un client B2B rachète en moyenne 4 véhicules d’un coup). Le budget ne permet pas de financer les trois leviers à pleine puissance.</p>
<ul>
<li><strong>❌ À éviter</strong> — répartir le budget à parts égales entre les trois leviers « pour ne pas faire de jaloux », sans comparer leur rendement réel</li>
<li><strong>✅ À privilégier</strong> — comparer le rendement de chaque levier (résultat attendu rapporté au coût), puis proposer une répartition argumentée, quitte à ne pas financer un levier ce trimestre-ci</li>
</ul>
<p><strong>Quand la hiérarchie demande une exception :</strong> Michel demande d’inclure un client très influent (un seul achat, mais très actif sur les réseaux sociaux Vasseur) dans une offre réservée aux clients à 2 achats ou plus. Céder systématiquement casse la règle pour tout le monde ; refuser sans discussion ignore la réalité commerciale. La bonne posture professionnelle : proposer une solution qui respecte l’esprit de la règle (un geste hors-cadre, distinct de l’offre elle-même) plutôt qu’un renoncement pur et simple.</p>
<p><strong>⚠️ Erreur fréquente à éviter :</strong> présenter un arbitrage budgétaire uniquement en chiffres, sans expliquer le raisonnement — Michel doit pouvoir comprendre pourquoi un levier passe avant un autre.</p>
<p><strong>En résumé, avant de proposer une répartition budgétaire, je vérifie que je :</strong></p>
<ul>
<li>✓ Compare le rendement réel des leviers, pas seulement leur coût affiché</li>
<li>✓ Assume de ne pas financer un levier plutôt que de tout diluer sans effet</li>
<li>✓ Propose une alternative cohérente face à une demande d’exception, plutôt qu’un refus sec ou une capitulation</li>
</ul>
</div>`},

  'C3.3-P3':{t:"Construire une évaluation fiable malgré des données imparfaites",c:`<div class="res-section res-pro">
<p><strong>C3.3 — Construire une évaluation fiable malgré des données imparfaites.</strong> Tu sais repérer un biais isolé sur un seul résultat. En situation professionnelle, les données disponibles sont souvent incomplètes, parfois contradictoires entre deux sources (le CRM commercial et les chiffres de la comptabilité, par exemple), et plusieurs indicateurs peuvent évoluer en sens contraire au même moment. La compétence est de construire malgré cela une recommandation argumentée, sans attendre une donnée parfaite qui n’existera jamais.</p>
<p><strong>Un indicateur de synthèse utile — le ROI :</strong> le retour sur investissement (ROI, <em>Return On Investment</em>) rapporte le gain généré par une action à son coût. Un ROI de 2 signifie que l’action a rapporté deux fois ce qu’elle a coûté. Il permet de comparer des actions de nature différente, mais ne dit rien de leur effet sur la relation client dans la durée — pour ça, on regarde plutôt le NPS (l’indicateur de satisfaction déjà vu en C2.4, sur une échelle de recommandation de 0 à 10).</p>
<p><strong>Cas pratique — deux sources qui se contredisent :</strong></p>
<p>Le CRM indique 34 ventes générées par une campagne de fidélisation ; le tableau de la comptabilité n’en compte que 29 sur la même période. Michel veut un chiffre unique pour la réunion de direction de vendredi.</p>
<ul>
<li><strong>❌ À éviter</strong> — choisir arbitrairement le chiffre le plus flatteur, ou présenter les deux chiffres sans jamais trancher</li>
<li><strong>✅ À privilégier</strong> — comprendre l’origine de l’écart avant de trancher (délai d’enregistrement différent, périmètre différent), puis choisir la source la plus fiable pour l’usage visé, en le signalant clairement</li>
</ul>
<p><strong>Quand deux indicateurs se contredisent :</strong> une action peut voir son taux de conversion progresser tout en voyant son NPS reculer chez les clients touchés — signe que l’action fait vendre, mais dégrade la relation. Ne retenir que l’indicateur qui arrange la conclusion est une erreur professionnelle grave.</p>
<p><strong>⚠️ Erreur fréquente à éviter :</strong> conclure « on ne peut rien dire, les données sont trop imparfaites ». Un professionnel formule une recommandation prudente et argumentée avec les données disponibles ; il ne se réfugie pas derrière leur imperfection.</p>
<p><strong>En résumé, avant de présenter un bilan, je vérifie que je :</strong></p>
<ul>
<li>✓ Explique un écart entre deux sources avant de choisir un chiffre à retenir</li>
<li>✓ Ne retiens pas seulement l’indicateur qui m’arrange si un autre le contredit</li>
<li>✓ Formule une recommandation malgré des données imparfaites, sans m’y dérober</li>
</ul>
</div>`},

'B4.1-P3':{t:"Qualifier un prospect quand les sources se contredisent",c:`<div class="res-section res-pro">
<p><strong>B4.1 — Qualifier un prospect quand les sources se contredisent.</strong> Tu sais croiser deux sources pour enrichir un profil (palier 2). En poste, la difficulté n'est plus seulement de croiser des informations complémentaires : c'est de gérer des informations qui se contredisent frontalement. Un commercial compétent ne choisit pas la source qui l'arrange ni n'ignore la contradiction — il cherche à la lever par une question précise, et s'il ne peut pas la lever tout de suite, il construit une réponse prudente qui n'engage rien de trop risqué.</p>
<p><strong>Rappel express :</strong> BANT = Budget, Autorité, Need (besoin), Timeline (délai) — les 4 éléments à connaître pour qualifier un prospect. B2B = vente à une entreprise, B2C = vente à un particulier.</p>
<p><strong>Cas pratique chiffré chez Vasseur :</strong> le Groupe Bréard (entreprise de BTP, plusieurs chantiers) veut renouveler une flotte de 8 utilitaires. Deux sources existent dans le dossier : la fiche client remplie lors d'un premier échange indique un budget global d'environ 180 000 €, valable pour l'ensemble de la flotte ; mais un compte-rendu de réunion plus récent, rédigé par Isabelle après un second contact, note que le dirigeant a évoqué un budget "plus serré que prévu" à cause d'un investissement immobilier en cours, sans donner de chiffre précis.</p>
<ul>
<li>❌ <strong>À éviter</strong> — construire une proposition sur 180 000 € parce que c'est le seul chiffre écrit noir sur blanc, en ignorant la remarque plus récente ; ou au contraire supposer un budget bien inférieur sans aucune base chiffrée</li>
<li>✅ <strong>À privilégier</strong> — repérer que l'information la plus récente (le second échange) doit primer sur la première tant qu'elle n'est pas confirmée, poser une question directe et non intrusive pour lever le doute ("pour bien calibrer notre proposition, quelle enveloppe globale envisagez-vous pour cette flotte ?"), et en attendant la réponse, préparer une offre modulable plutôt qu'un chiffre figé</li>
</ul>
<p><strong>⚠️ Erreur fréquente à éviter :</strong> considérer qu'une contradiction entre deux sources est un problème à résoudre seul, en devinant. Ce n'est presque jamais le cas : la bonne réponse professionnelle est very souvent de poser la question qui lève le doute, formulée de façon à ne pas donner l'impression de douter de la parole du client.</p>
<p><strong>En résumé, avant de qualifier un prospect à partir de plusieurs sources, je vérifie que je :</strong></p>
<ul>
<li>✓ Repère une contradiction entre deux sources avant de construire quoi que ce soit dessus</li>
<li>✓ Donne la priorité à l'information la plus récente tant qu'elle n'est pas confirmée par le contraire</li>
<li>✓ Pose une question ciblée pour lever le doute plutôt que de trancher moi-même à sa place</li>
<li>✓ Prépare une réponse prudente (modulable) tant que la contradiction n'est pas levée</li>
</ul>
</div>`},

'B4.2-P3':{t:"Répartir un budget de prospection entre plusieurs opérations",c:`<div class="res-section res-pro">
<p><strong>B4.2 — Répartir un budget de prospection entre plusieurs opérations.</strong> Tu sais choisir entre deux options de campagne selon un budget réduit (palier 2). En poste, l'arbitrage porte rarement sur seulement deux options : il faut souvent répartir un budget unique entre plusieurs opérations qui visent des cibles différentes, sans pouvoir tout financer au niveau idéal. La compétence n'est plus de choisir A ou B, mais de construire une répartition argumentée entre plusieurs postes.</p>
<p><strong>Cas pratique chiffré chez Vasseur :</strong> Karim dispose de 6 000 € pour ce trimestre et doit couvrir trois besoins : une campagne mail B2B ciblant les artisans (coût faible, ~500 €, portée large mais taux de conversion habituellement modeste), une présence au salon auto régional (coût élevé, ~4 000 €, portée plus restreinte mais taux de conversion nettement meilleur et bonne visibilité pour le pôle Vasseur Sélection occasion), et une campagne réseaux sociaux pour la Renault 5 E-Tech visant les jeunes actifs (coût modéré, ~1 500 €, portée moyenne, retour difficile à estimer précisément faute d'historique sur ce modèle).</p>
<ul>
<li>❌ <strong>À éviter</strong> — répartir le budget à parts égales entre les trois (2 000 € chacun) par souci d'équité apparente, sans tenir compte du potentiel réel de chaque opération</li>
<li>✅ <strong>À privilégier</strong> — comparer les trois options sur les mêmes critères (coût, portée, taux de conversion attendu ou incertain), financer en priorité le salon qui a le meilleur historique de conversion, garder un budget mail suffisant car son coût est faible pour son potentiel, et n'allouer qu'un budget test limité à la campagne réseaux sociaux tant que son retour reste incertain</li>
</ul>
<p><strong>⚠️ Erreur fréquente à éviter :</strong> traiter chaque opération indépendamment, comme trois décisions séparées. Une répartition de budget est une seule décision globale : financer généreusement une opération a toujours un coût d'opportunité sur les deux autres, il faut le dire explicitement dans l'arbitrage.</p>
<p><strong>En résumé, avant de répartir un budget de prospection entre plusieurs opérations, je vérifie que je :</strong></p>
<ul>
<li>✓ Compare toutes les options sur les mêmes critères (coût, portée, taux de conversion attendu)</li>
<li>✓ Ne répartis jamais un budget à parts égales par simple facilité</li>
<li>✓ Explique le coût d'opportunité de chaque choix (financer l'un, c'est réduire les autres)</li>
<li>✓ Prévois un budget test limité pour une opération dont le retour reste incertain</li>
</ul>
</div>`},

'B4.3-P3':{t:"Gérer un contact avec plusieurs interlocuteurs aux priorités opposées",c:`<div class="res-section res-pro">
<p><strong>B4.3 — Gérer un contact avec plusieurs interlocuteurs aux priorités opposées.</strong> Tu sais enchaîner deux objections d'un même interlocuteur sans perdre le fil (palier 2). En B2B, une même opération de prospection implique souvent plusieurs personnes côté client, dont les priorités ne coïncident pas toujours. Rester maître de l'échange, ici, c'est aussi savoir concilier deux points de vue internes chez le client, pas seulement répondre à des objections successives.</p>
<p><strong>Cas pratique chiffré chez Vasseur :</strong> lors d'un rendez-vous chez un client B2B (entreprise de nettoyage industriel, flotte de 5 véhicules), le responsable d'exploitation insiste sur le prix et penche pour 5 Kangoo Van (environ 24 000 € pièce), tandis que la dirigeante, présente en fin de rendez-vous, évoque l'image de l'entreprise auprès de ses clients et semble plus intéressée par des véhicules mieux équipés, quitte à en prendre un peu moins.</p>
<ul>
<li>❌ <strong>À éviter</strong> — répondre uniquement au responsable d'exploitation (premier interlocuteur, premier à parler) en ignorant ensuite la remarque de la dirigeante, ou inversement changer complètement de discours dès qu'elle intervient, au risque de contredire ce qui venait d'être dit</li>
<li>✅ <strong>À privilégier</strong> — reformuler les deux priorités pour montrer qu'elles ont été entendues toutes les deux ("je comprends que le budget global compte, et que l'image compte aussi pour les véhicules les plus visibles"), puis proposer une piste qui articule les deux sans trancher à leur place (par exemple une flotte mixte : 3 Kangoo Van standard + 2 véhicules mieux équipés pour les interventions les plus visibles), et clarifier avec eux qui validera la décision finale</li>
</ul>
<p><strong>⚠️ Erreur fréquente à éviter :</strong> répondre trop vite au premier interlocuteur qui parle en pensant avoir conclu, alors qu'en B2B la décision finale implique souvent plusieurs personnes dont les priorités ne sont pas identiques. Il faut identifier qui décide réellement, ou si la décision est partagée, avant de considérer un accord comme acquis.</p>
<p><strong>En résumé, face à plusieurs interlocuteurs aux priorités différentes, je vérifie que je :</strong></p>
<ul>
<li>✓ Repère et reformule chaque priorité exprimée, même si elle vient d'une personne différente</li>
<li>✓ Ne tranche jamais moi-même entre deux priorités contradictoires côté client</li>
<li>✓ Propose une piste qui tient compte des deux points de vue, pas un compromis inventé au hasard</li>
<li>✓ Clarifie qui valide réellement la décision avant de considérer l'échange comme conclu</li>
</ul>
</div>`},

'B4.4-P3':{t:"Piloter un portefeuille de devis et diagnostiquer une baisse multi-cause",c:`<div class="res-section res-pro">
<p><strong>B4.4 — Piloter un portefeuille de devis et diagnostiquer une baisse multi-cause.</strong> Tu sais comparer deux ou trois devis pour prioriser une relance (palier 2). En poste, un commercial actif a souvent plusieurs devis en attente en même temps, avec des échéances et des enjeux qui ne s'alignent jamais parfaitement — il faut arbitrer un vrai portefeuille, pas juste ranger 2-3 dossiers par date. De la même façon, une baisse de performance a rarement une seule cause évidente : plusieurs éléments changent souvent en même temps, et il faut une méthode pour ne pas conclure trop vite.</p>
<p><strong>Rappel express :</strong> un devis est une proposition chiffrée à durée de validité limitée ; le relancer avant expiration, avec un élément nouveau plutôt qu'un simple rappel de délai, est la règle de base déjà vue en palier 1 et 2.</p>
<p><strong>Cas pratique chiffré chez Vasseur — un portefeuille de devis à prioriser :</strong> un lundi matin, 5 devis sont en attente : un Kangoo Van (expire dans 2 jours, montant standard, client déjà fidèle), une Clio (expire dans 9 jours, montant standard, premier contact), une flotte de 3 Trafic pour une entreprise de transport (expire dans 4 jours, montant nettement plus élevé, client stratégique), un Austral occasion Vasseur Sélection (expire dans 3 jours, montant moyen, client hésitant qui a déjà demandé un délai une fois), et une Twingo E-Tech (expire dans 12 jours, montant faible, prospect peu qualifié). Le temps disponible ne permet de relancer sérieusement que 3 devis aujourd'hui.</p>
<ul>
<li>❌ <strong>À éviter</strong> — traiter uniquement par ordre d'expiration (Kangoo Van, Austral, Trafic) sans tenir compte de l'enjeu, ce qui laisserait de côté la flotte de Trafic un jour de plus alors qu'elle est le dossier le plus important</li>
<li>✅ <strong>À privilégier</strong> — croiser urgence ET enjeu : la flotte de Trafic (enjeu majeur, échéance proche) et le Kangoo Van (échéance la plus proche) passent avant l'Austral Vasseur Sélection (le client a déjà montré une hésitation, une relance trop pressante pourrait être contre-productive) ; la Clio et la Twingo, moins urgentes et moins qualifiées, attendent demain sans risque réel</li>
</ul>
<p><strong>Cas pratique chiffré — diagnostiquer une baisse multi-cause :</strong> le taux de réponse des campagnes mail Vasseur chute de 10% à 3% ce mois-ci. Mais contrairement à une baisse isolée, trois éléments ont changé en même temps : un nouveau modèle de message a été testé, l'envoi a eu lieu une semaine plus tard que d'habitude (période de vacances scolaires), et le budget de relance téléphonique associé a été réduit de moitié.</p>
<ul>
<li>❌ <strong>À éviter</strong> — désigner une seule cause au hasard (souvent la plus visible, ici le nouveau message) et la corriger seule, en espérant que ça suffise</li>
<li>✅ <strong>À privilégier</strong> — lister les 3 changements, estimer lequel est le plus probablement déterminant (la période de vacances scolaires affecte historiquement tous les indicateurs Vasseur, c'est donc une piste sérieuse), puis proposer un test qui isole une variable à la fois pour le mois suivant (revenir au calendrier habituel en gardant le nouveau message, par exemple) plutôt que de tout changer d'un coup</li>
</ul>
<p><strong>⚠️ Erreur fréquente à éviter :</strong> quand plusieurs causes sont possibles, changer plusieurs éléments en même temps pour "corriger" la baisse. On ne peut alors plus savoir lequel a réellement fait effet — un diagnostic sérieux teste une variable à la fois.</p>
<p><strong>En résumé, avant de prioriser un portefeuille de devis ou de diagnostiquer une baisse, je vérifie que je :</strong></p>
<ul>
<li>✓ Classe mes devis en croisant urgence ET enjeu, jamais un seul des deux critères isolément</li>
<li>✓ Tiens compte du profil du client (fidèle, hésitant, stratégique) dans le choix du ton de relance</li>
<li>✓ Liste tous les éléments qui ont changé avant de désigner une cause probable</li>
<li>✓ Propose de tester une variable à la fois plutôt que de tout modifier en même temps</li>
</ul>
</div>`},

'B4.5-P3':{t:"Valoriser une offre en coût total plutôt qu'en prix d'achat",c:`<div class="res-section res-pro">
<p><strong>B4.5 — Valoriser une offre en coût total plutôt qu'en prix d'achat.</strong> Tu sais construire un argumentaire caractéristique → avantage → bénéfice et l'adapter à un client déjà informé (palier 2). En poste, un des arguments professionnels les plus puissants — et les plus mal maîtrisés par les débutants — consiste à comparer non pas le prix d'achat affiché, mais le <strong>coût total de possession</strong> (souvent noté <strong>TCO</strong>, de l'anglais "Total Cost of Ownership") : c'est-à-dire le prix d'achat, additionné de l'entretien, de la consommation de carburant ou d'électricité, et diminué de la valeur de revente estimée. Un véhicule plus cher à l'achat peut coûter moins cher sur la durée — et inversement.</p>
<p><strong>Cas pratique chiffré chez Vasseur — un client B2B qui ne regarde que le prix d'achat :</strong> une entreprise de transport de colis compare un Trafic Vasseur (32 000 €) à un utilitaire concurrent moins cher à l'achat (29 000 €), et penche pour le concurrent sur ce seul critère.</p>
<ul>
<li>❌ <strong>À éviter</strong> — se contenter de répéter que "le Trafic est un meilleur véhicule" sans rien de chiffré, ou proposer une remise pour aligner le prix d'achat, ce qui reviendrait à accepter que la comparaison du client (prix d'achat seul) était la bonne</li>
<li>✅ <strong>À privilégier</strong> — reconstruire la comparaison sur 5 ans avec les postes qui manquent : consommation (le Trafic consommant en moyenne un peu moins sur ce type d'usage, soit environ 600 € d'économie annuelle estimée), entretien (contrat d'entretien Vasseur à coût fixe, plus prévisible), et valeur de revente (les Trafic Vasseur se revendent historiquement mieux, écart estimé à environ 1 500 € sur 5 ans) ; présenter un tableau simple : 3 000 € d'écart à l'achat, mais un coût total sur 5 ans en réalité favorable au Trafic</li>
</ul>
<p><strong>Cas pratique — le même principe côté particulier :</strong> un client hésite entre un Captur neuf Vasseur (28 000 €) et un modèle équivalent en occasion Vasseur Sélection (21 000 €, garantie 12 mois incluse). Ici, valoriser honnêtement ne veut pas dire pousser systématiquement le neuf : il faut interroger le vrai besoin (kilométrage annuel, durée de détention envisagée, envie ou non d'un véhicule sous garantie constructeur complète) avant de recommander l'une ou l'autre offre — les deux existent chez Vasseur, et pousser la mauvaise pour une commission plus élevée abîme la confiance du client à long terme.</p>
<p><strong>⚠️ Erreur fréquente à éviter :</strong> présenter un calcul de coût total flou ou approximatif ("sur la durée ça revient moins cher, croyez-moi") sans aucun chiffre. Un argument de coût total qui n'est pas chiffré n'est pas plus convaincant qu'un argument de prix — il doit être aussi précis et vérifiable que le prix d'achat qu'il vient nuancer.</p>
<p><strong>En résumé, avant de valoriser une offre au-delà du seul prix d'achat, je vérifie que je :</strong></p>
<ul>
<li>✓ Identifie les postes de coût qui manquent à la comparaison du client (entretien, consommation, revente)</li>
<li>✓ Chiffre ces postes, même approximativement, plutôt que de rester dans l'argument vague</li>
<li>✓ Reste honnête si l'option la moins chère à l'achat est aussi la meilleure pour ce client précis</li>
<li>✓ Ne pousse jamais une offre plus chère uniquement parce qu'elle est plus avantageuse pour Vasseur</li>
</ul>
</div>`},

};

if (typeof module !== 'undefined') module.exports = { COMP, RES };
