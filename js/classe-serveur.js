cat > ajout_routes.js << 'EOF'
const fs = require('fs');
const chemin = 'server.js';
let contenu = fs.readFileSync(chemin, 'utf8');

const marqueur = 'app.listen(PORT';
if (!contenu.includes(marqueur)) {
  console.error('Marqueur "app.listen(PORT" introuvable — rien n\'a ete modifie.');
  process.exit(1);
}
if (contenu.includes("/api/eleves/supprimer")) {
  console.log('Les routes existent deja — rien a faire.');
  process.exit(0);
}

const nouvellesRoutes = `
// ═══════════════════════════════════════════════════════════
//   Gestion complete d'un eleve : changer de classe / reinitialiser / supprimer
// ═══════════════════════════════════════════════════════════
app.post('/api/eleves/changer-classe', verifierToken, (req, res) => {
  if (req.utilisateur.role !== 'enseignant') {
    return res.status(403).json({ ok: false, erreur: 'Reserve aux enseignants.' });
  }
  const { eleve_id, classeCode } = req.body;
  if (!eleve_id || !classeCode) {
    return res.status(400).json({ ok: false, erreur: 'eleve_id et classeCode requis.' });
  }
  const MAP_CLASSES = { '1ere-PVOC': 'CLS_2026_MCVB' };
  const classe_id = MAP_CLASSES[classeCode];
  if (!classe_id) {
    return res.status(400).json({ ok: false, erreur: 'Classe inconnue : ' + classeCode });
  }
  const classe = db.prepare('SELECT id FROM classes WHERE id = ?').get(classe_id);
  if (!classe) {
    return res.status(400).json({ ok: false, erreur: "La classe n'existe pas encore en base." });
  }
  const eleve = db.prepare('SELECT id FROM eleves WHERE id = ?').get(eleve_id);
  if (!eleve) {
    return res.status(404).json({ ok: false, erreur: 'Eleve introuvable.' });
  }
  try {
    const tx = db.transaction(() => {
      db.prepare('DELETE FROM classe_eleves WHERE eleve_id = ?').run(eleve_id);
      db.prepare('INSERT INTO classe_eleves (classe_id, eleve_id) VALUES (?, ?)').run(classe_id, eleve_id);
    });
    tx();
    return res.json({ ok: true, classe: classeCode });
  } catch (e) {
    console.error('Erreur changer-classe:', e);
    return res.status(500).json({ ok: false, erreur: 'Impossible de changer la classe.' });
  }
});

app.post('/api/eleves/reinitialiser', verifierToken, (req, res) => {
  if (req.utilisateur.role !== 'enseignant') {
    return res.status(403).json({ ok: false, erreur: 'Reserve aux enseignants.' });
  }
  const { eleve_id } = req.body;
  if (!eleve_id) {
    return res.status(400).json({ ok: false, erreur: 'eleve_id requis.' });
  }
  const eleve = db.prepare('SELECT id FROM eleves WHERE id = ?').get(eleve_id);
  if (!eleve) {
    return res.status(404).json({ ok: false, erreur: 'Eleve introuvable.' });
  }
  try {
    const tx = db.transaction(() => {
      db.prepare('DELETE FROM progression_criteres WHERE progression_id IN (SELECT id FROM progressions WHERE eleve_id = ?)').run(eleve_id);
      db.prepare('DELETE FROM progressions WHERE eleve_id = ?').run(eleve_id);
    });
    tx();
    return res.json({ ok: true });
  } catch (e) {
    console.error('Erreur reinitialiser:', e);
    return res.status(500).json({ ok: false, erreur: 'Impossible de reinitialiser.' });
  }
});

app.post('/api/eleves/supprimer', verifierToken, (req, res) => {
  if (req.utilisateur.role !== 'enseignant') {
    return res.status(403).json({ ok: false, erreur: 'Reserve aux enseignants.' });
  }
  const { eleve_id } = req.body;
  if (!eleve_id) {
    return res.status(400).json({ ok: false, erreur: 'eleve_id requis.' });
  }
  const eleve = db.prepare('SELECT id FROM eleves WHERE id = ?').get(eleve_id);
  if (!eleve) {
    return res.status(404).json({ ok: false, erreur: 'Eleve introuvable.' });
  }
  try {
    const tx = db.transaction(() => {
      db.prepare('DELETE FROM portfolio_tokens WHERE eleve_id = ?').run(eleve_id);
      db.prepare('DELETE FROM progression_criteres WHERE progression_id IN (SELECT id FROM progressions WHERE eleve_id = ?)').run(eleve_id);
      db.prepare('DELETE FROM progressions WHERE eleve_id = ?').run(eleve_id);
      db.prepare('DELETE FROM classe_eleves WHERE eleve_id = ?').run(eleve_id);
      db.prepare('DELETE FROM eleves WHERE id = ?').run(eleve_id);
    });
    tx();
    return res.json({ ok: true });
  } catch (e) {
    console.error('Erreur supprimer eleve:', e);
    return res.status(500).json({ ok: false, erreur: "Impossible de supprimer l'eleve." });
  }
});

`;

contenu = contenu.replace(marqueur, nouvellesRoutes + marqueur);
fs.writeFileSync(chemin, contenu, 'utf8');
console.log('OK — 3 routes ajoutees dans server.js, juste avant app.listen.');
EOF
