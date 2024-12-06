# Création d'une application de gestion de recettes avec TailwindCSS et Alpine.js

## Objectif

Développer une application de consultation de recettes de cuisine permettant de visualiser et filtrer une liste de recettes fournie au format JSON. L'accent sera mis sur l'utilisation des fonctionnalités de base d'Alpine.js et un design responsive avec TailwindCSS.

## Données Fournies
Un fichier [`recipes.json`](./src/data/recipes.json) contenant 50 recettes sera fourni avec la structure suivante :
```json
{
  "recipes": [
    {
      "id": 1,
      "title": "Tarte aux pommes",
      "difficulty": "facile",
      "preparationTime": 45,
      "servings": 6,
      "category": "dessert",
      "ingredients": [
        { "name": "pommes", "quantity": "6", "unit": "pièces" },
        { "name": "farine", "quantity": "250", "unit": "g" }
      ],
      "instructions": [
        "Préchauffer le four à 180°C",
        "Éplucher et couper les pommes"
      ],
      "imageUrl": "/images/tarte-pommes.jpg"
    }
  ]
}
```

## Instructions

### 1. Design et structure de la page

* Utiliser TailwindCSS pour créer une interface simple et élégante
* La page doit contenir :
    - Une barre de navigation
    - Une zone de filtre par difficulté
    - Une grille de recettes responsive (3 colonnes sur desktop, 2 sur tablette, 1 sur mobile)
    - Une zone d'affichage détaillée pour la recette sélectionnée
* Assurer la responsivité pour mobile et desktop

### 2. Composants Alpine.js à implémenter

#### Menu de Navigation

* Menu hamburger sur mobile avec `x-show` et `@click`
* Affichage du nombre total de recettes

#### Système de filtrage simple

* Filtre unique par niveau de difficulté avec `x-model`:
    - Facile
    - Intermédiaire
    - Difficile
* Affichage dynamique du nombre de recettes filtrées avec `x-text`

#### Affichage des recettes

* Vue condensée dans la grille montrant :
    - Titre
    - Niveau de difficulté
    - Temps de préparation
    - Catégorie
* Vue détaillée (modale ou panneau) au clic avec `x-show` et `@click` affichant :
    - Tous les détails de la recette
    - Liste des ingrédients avec template `x-for`
    - Instructions étape par étape avec :
        * Utilisation de `x-for` pour itérer sur le tableau d'instructions
        * Numérotation automatique des étapes (1, 2, 3...)
        * Une seule étape visible à la fois
        * Boutons "Précédent" et "Suivant" pour naviguer entre les étapes
        * Afficher les étapes avec un slider (effet opacity)
        * La première étape est visible par défaut
        * Le bouton "Précédent" est désactivé sur la première étape
        * Le bouton "Suivant" est désactivé sur la dernière étape
    - Bouton de fermeture pour revenir à la grille

### 3. Interactivité et UX

* Transitions fluides pour :
    - Ouverture/fermeture des détails
    - Apparition/disparition des éléments filtrés
* Affichage des états :
    - Message "Aucune recette trouvée" si le filtre ne donne aucun résultat
    - Nombre de recettes affichées selon le filtre appliqué

### 4. Bonnes pratiques de développement

* Organiser le code de manière claire
* Utiliser les templates Alpine.js de manière appropriée
* Commenter les parties importantes du code

### 5. Défis bonus (5 Points Supplémentaires)

#### Filtres additionnels (2 points)

* Ajout de filtres supplémentaires :
    - Par temps de préparation (Rapide < 30min, Moyen 30-60min, Long > 60min)
    - Par catégorie (Entrée, Plat, Dessert)
* Barre de recherche par titre
* Les filtres doivent fonctionner en combinaison

#### Système de favoris (2 points)

* Bouton pour marquer une recette en favori
* Persistance des favoris en localStorage (utilisation du plugin [Persist](https://alpinejs.dev/plugins/persist) de Alpine.js)

#### Barre de progression (1 point)

* Afficher une jauge de progression dans les étapes de la recette

## Barème de notation (20 Points + 5 Points Bonus)

### Design et structure de la page (5 Points)

* Mise en page et style avec TailwindCSS : 3 points
* Responsivité et adaptation mobile/desktop : 2 points

### Composants Alpine.js (7 Points)

* Menu de navigation responsive : 1.5 points
* Système de filtrage par difficulté : 2 points
* Affichage/masquage des détails et navigation dans les étapes : 3.5 points

### Interactivité et UX (5 Points)

* Utilisation correcte des directives Alpine.js : 3 points
* Transitions et gestion des états : 2 points

### Bonnes pratiques de développement (3 Points)

* Organisation du code : 1.5 points
* Utilisation appropriée des templates : 1.5 points

### Défis bonus (5 Points supplémentaires)

* Filtres additionnels : 2 points
* Système de favoris : 2 points
* Barre de progression : 1 point
