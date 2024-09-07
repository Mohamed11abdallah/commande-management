const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Exemple de stockage en mémoire (à remplacer par une base de données réelle)
let commandes = [];

// Route pour créer une commande
app.post('/commandes', (req, res) => {
    const { clientId, produits, date, statut } = req.body;
    if (!clientId || !produits || !date || !statut) {
        return res.status(400).json({ error: 'Tous les champs sont requis' });
    }
    
    const newCommande = {
        id: commandes.length + 1,
        clientId,
        produits,
        date,
        statut
    };
    
    commandes.push(newCommande);
    res.status(201).json(newCommande);
});

// Route pour lire une commande
app.get('/commandes/:id', (req, res) => {
    const commande = commandes.find(c => c.id === parseInt(req.params.id));
    if (!commande) {
        return res.status(404).json({ error: 'Commande non trouvée' });
    }
    res.json(commande);
});

// Route pour mettre à jour une commande
app.put('/commandes/:id', (req, res) => {
    const commande = commandes.find(c => c.id === parseInt(req.params.id));
    if (!commande) {
        return res.status(404).json({ error: 'Commande non trouvée' });
    }
    
    const { clientId, produits, date, statut } = req.body;
    if (clientId) commande.clientId = clientId;
    if (produits) commande.produits = produits;
    if (date) commande.date = date;
    if (statut) commande.statut = statut;
    
    res.json(commande);
});

// Route pour supprimer une commande
app.delete('/commandes/:id', (req, res) => {
    const index = commandes.findIndex(c => c.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ error: 'Commande non trouvée' });
    }
    
    commandes.splice(index, 1);
    res.status(204).end();
});

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
