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
<p><strong>B4.1 — Trouver et qualifier des prospects chez Vasseur.</strong> Un prospect est un client potentiel qu'on n'a pas encore. Chez Vasseur, on distingue deux familles de prospects : les particuliers (achat citadine, SUV, électrique) et les professionnels (artisans, PME — utilitaires).</p>
<p><strong>Sources utiles :</strong> formulaires du site laboro-edu, appels entrants, salons auto, base clients existante (relance), réseaux professionnels locaux (chambres de commerce, annuaires d'artisans).</p>
<p><strong>Qualifier un prospect (méthode BANT) :</strong></p>
<ul>
<li><strong>B</strong>udget — le prospect a-t-il les moyens ou le financement envisagé ?</li>
<li><strong>A</strong>utorité — est-ce lui qui décide (particulier) ou faut-il valider avec un gérant (pro) ?</li>
<li><strong>N</strong>eed (besoin) — quel est son besoin réel (usage du véhicule) ?</li>
<li><strong>T</strong>imeline — sous quel délai compte-t-il acheter ?</li>
</ul>
<p>Un prospect qualifié = on connaît ces 4 éléments, même approximativement. Un prospect non qualifié doit être relancé avec des questions ciblées avant toute proposition commerciale.</p>
</div>`},

  'B4.2':{t:"Concevoir un plan et des supports de prospection",c:`<div class="res-section res-debutant">
<p><strong>B4.2 — Préparer une opération de prospection chez Vasseur.</strong> Avant de contacter qui que ce soit, il faut définir : la cible précise, le message clé (bénéfice concret, pas juste "on a de nouveaux modèles"), le canal (mail, téléphone, réseaux sociaux, salon), et le calendrier (avec relance prévue).</p>
<p><strong>Un bon plan de prospection contient toujours :</strong></p>
<ul>
<li>Une cible définie avec des critères précis (pas "tout le monde")</li>
<li>Un message adapté à cette cible (un artisan et un jeune actif n'ont pas les mêmes attentes)</li>
<li>Un canal cohérent avec la cible (le B2B répond mieux au mail/téléphone qu'aux réseaux sociaux)</li>
<li>Une relance planifiée (une seule tentative ne suffit presque jamais)</li>
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
</div>`},

  'C1.1':{t:'La veille commerciale',c:`<div class="res-section res-debutant">
<p><strong>C1.1 — Assurer la veille commerciale chez Vasseur.</strong> La veille, c'est suivre en permanence ce qui se passe autour de soi : les offres concurrentes (autres concessions, mandataires en ligne), les tendances du marché (électrique en hausse, ZFE), et les dispositifs d'aide à l'achat en vigueur.</p>
<p><strong>À quoi ça sert concrètement ?</strong> À pouvoir répondre à un client qui compare une offre Vasseur à une offre concurrente, sans dénigrer le concurrent mais en mettant en avant les vrais avantages Vasseur (garantie, SAV, essai possible, accompagnement).</p>
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
</div>`},

  'C1.3':{t:"L'exécution de la vente",c:`<div class="res-section res-debutant">
<p><strong>C1.3 — Finaliser une vente chez Vasseur.</strong> Une fois l'accord de principe du client obtenu, il faut monter un dossier complet : identité, véhicule choisi (avec options), prix, mode de paiement (comptant, crédit, LOA), et le cas échéant reprise du véhicule précédent.</p>
<p><strong>Points de vigilance :</strong> ne jamais sortir du cadrage de négociation autorisé (marge de remise maximale fixée par Karim/Isabelle) ; en cas de demande excessive, proposer une contrepartie alternative (garantie étendue plutôt qu'une remise supplémentaire).</p>
</div>`},

  'C2.1':{t:'Le suivi de la commande client',c:`<div class="res-section res-debutant">
<p><strong>C2.1 — Suivre une commande après la vente.</strong> Une fois la vente conclue, le client doit être tenu informé : confirmation des étapes (préparation, contrôle, livraison), et information immédiate en cas de retard ou d'imprévu — sans jamais cacher la cause, avec une tonalité toujours rassurante.</p>
<p>Le dossier doit aussi être transmis correctement à l'atelier (Bruno Faucher) pour la préparation du véhicule, avec toutes les informations utiles (options, date souhaitée, contrôles à effectuer).</p>
</div>`},

};

if (typeof module !== 'undefined') module.exports = { COMP, RES };
