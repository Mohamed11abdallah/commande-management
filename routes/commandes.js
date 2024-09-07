const express = require('express');
const router = express.Router();

const clients = require('../models/clients');
const produits = require('../models/produits');
const commandes = require('../models/commandes');

// Route pour créer une commande
router.post('/', (req, res) => {
    const { clientId, produits: produitsCommandes, date, statut } = req.body;
    
    // Validation des données
    const client = clients.find(c => c.id === clientId);
    if (!client) {
        return res.status(400).json({ error: 'Client non trouvé' });
    }

    const produitsExistants = produitsCommandes.every(p => produits.find(prod => prod.id === p.produitId));
    if (!produitsExistants) {
        return res.status(400).json({ error: 'Un ou plusieurs produits ne sont pas valides' });
    }

    const newCommande = {
        id: commandes.length + 1,
        clientId,
        produits: produitsCommandes,
        date,
        statut
    };
    
    commandes.push(newCommande);
    res.status(201).json(newCommande);
});

// Route pour lire une commande
router.get('/:id', (req, res) => {
    const commande = commandes.find(c => c.id === parseInt(req.params.id));
    if (!commande) {
        return res.status(404).json({ error: 'Commande non trouvée' });
    }
    res.json(commande);
});

// Route pour mettre à jour une commande
router.put('/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
    const index = commandes.findIndex(c => c.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ error: 'Commande non trouvée' });
    }
    
    commandes.splice(index, 1);
    res.status(204).end();
});

module.exports = router;
