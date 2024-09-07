# Gestion des Commandes API

Une API RESTful pour la gestion des commandes, construite avec Express.js. Cette API permet d'effectuer les opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) sur les commandes.

## Prérequis

- [Node.js](https://nodejs.org/) (v14 ou supérieur)
- [npm](https://www.npmjs.com/) (pour la gestion des dépendances)

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/Mohamed11abdallah/commande-management.git

2. Accédez au répertoire du projet :
   ```bash
   cd nom-du-projet

3. Installez les dépendances :
   ```bash
   npm install

## Utilisation

1. Démarrez le serveur :
   ```bash
   npm start


2. Le serveur sera disponible à l'adresse suivante :
   ```bash
   [git clone https://github.com/Mohamed11abdallah/commande-management.git](http://localhost:3000)

## Test de l'API

Cette section vous guide pour tester l'API de gestion des commandes à l'aide de Postman ou de tout autre client HTTP. Vous trouverez ci-dessous les détails des endpoints disponibles, ainsi que des exemples de requêtes et de réponses pour chaque opération CRUD (Créer, Lire, Mettre à jour, Supprimer).

### 1. Créer une Commande

- **Méthode** : `POST`
- **URL** : `/commandes`
- **Description** : Crée une nouvelle commande.
- **Corps de la Requête (Body)** : JSON
  ```json
  {
    "clientId": 1,
    "produits": [
      { "produitId": 1, "quantite": 2 }
    ],
    "date": "2024-09-07",
    "statut": "En cours"
  }

### 2. Lire une Commande

- **Méthode** : `GET`
- **URL** : `/commandes/:id`
- **Description** :  Récupère les détails d'une commande 

### 3. Mettre à Jour une Commande

- **Méthode** : `PUT`
- **URL** : `/commandes/:id`
- **Description** : Met à jour les détails d'une commande existante.
- **Corps de la Requête (Body)** : JSON
  ```json
  {
    "statut": "Expédiée"
  }

### 1. Supprimer une Commande

- **Méthode** : `DELETE`
- **URL** : `/commandes/:id`
- **Description** : Supprime une commande spécifique en utilisant son identifiant.
