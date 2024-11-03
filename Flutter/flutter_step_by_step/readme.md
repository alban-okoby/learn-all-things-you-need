# Flutter Roadmap

## Flutter Fundamentals

### Introduction

Introduction à Flutter et ses cas d’utilisation, installation de Flutter, configuration de l'environnement de développement.

### Folder Structure

Exploration de la structure d’un projet Flutter, répertoires et fichiers importants (`lib`, `pubspec.yaml`, `android`, `ios`, etc.).

### Packages

Gestion des packages dans Flutter : ajout, suppression, et utilisation des dépendances dans `pubspec.yaml`.

### Assets

Gestion des ressources (images, icônes, fichiers JSON, etc.), définition et utilisation des assets dans une application Flutter.

### Widget

Introduction aux widgets : les composants de base de Flutter, leur rôle et comment les utiliser pour construire des interfaces.

### Two Types of Widgets

Différence entre **StatelessWidget** et **StatefulWidget**. Quand et comment utiliser chaque type de widget.

### Widget Tree

Construction de l’arbre des widgets et organisation hiérarchique des composants pour une interface organisée.

### Starter App Walkthrough

Exploration d'une application de démarrage Flutter pour comprendre les concepts de base et voir Flutter en action.

### Quiz

Révision des concepts fondamentaux de Flutter avec un quiz.


## UI Fundamentals

### Simple Widgets

Widgets de base comme `Text`, `Image`, `Icon`, et `Button` pour construire une interface utilisateur simple.

### Container

Utilisation du widget `Container` pour gérer le placement, les dimensions, et le style des éléments.

### Layout Widgets

Introduction aux widgets de mise en page (`Row`, `Column`, `Stack`) pour organiser les éléments de manière structurée.

### Forms

Création et gestion de formulaires avec validation, utilisant des widgets comme `TextFormField` et `Form`.

### How to Find the Right Widget

Stratégies pour identifier et sélectionner les bons widgets en fonction des besoins de l’interface.

### Theming

Appliquer des thèmes globaux et personnalisés pour un style uniforme dans l’application.

### Understanding Constraints

Notions de contraintes et de dimensions dans Flutter pour maîtriser le positionnement des widgets.

### Quiz

Test des connaissances sur les concepts d’UI de Flutter.


## Project: UI Challenge

### Best Way to Learn

Introduction aux projets pratiques et à leur importance pour renforcer l'apprentissage.

### X Clone

Présentation du projet de clonage d’une interface de connexion et d'accueil inspirée de X (anciennement Twitter).

### Challenge 1: Login Screen

Création de l’écran de connexion avec champs de saisie et bouton de validation.

### Walkthrough

Solution pas-à-pas du premier défi avec explication des choix techniques.

### Challenge 2: Validation

Ajout de la validation pour les champs du formulaire de connexion.

### Walkthrough

Solution détaillée pour implémenter la validation de manière efficace.

### Challenge 3: Home Page

Création de la page d’accueil avec affichage des messages (tweets/posts) et personnalisation.

### Walkthrough

Solution guidée pour finaliser la page d’accueil.


## Advanced UI

### Platform-Based Widgets

Utilisation des widgets spécifiques aux plateformes Android et iOS (ex. `Cupertino` widgets pour iOS).

### MediaQuery

Utiliser `MediaQuery` pour adapter la taille, l’orientation, et la densité de pixels en fonction de l’appareil.

### LayoutBuilder

Utilisation de `LayoutBuilder` pour créer des interfaces adaptatives en fonction de l'espace disponible.

### Slivers

Découverte des **Slivers** pour des listes et scrollables complexes, comme les applications de réseaux sociaux.

### Responsive Theory

Concepts et bonnes pratiques pour concevoir des interfaces responsives sur différents écrans.

### Quiz

Quiz pour tester les connaissances sur les composants avancés de l’UI et la conception réactive.


## Navigation

### Navigation Stack

Introduction à la pile de navigation : comment ajouter, empiler, et retirer des écrans.

### Named Paths

Utilisation des chemins nommés pour naviguer entre écrans de manière plus structurée.

### Navigation Packages

Découverte des packages de navigation, comme `go_router`, pour simplifier la gestion des routes.

### What to use?

Sélection de la meilleure méthode de navigation en fonction de la complexité de l’application.

### Quiz

Quiz pour réviser les concepts de navigation et d’architecture de routes.


## State Management

### Basics of State

Introduction aux différents types d'état (local, global) et pourquoi la gestion de l’état est cruciale.

### ChangeNotifier

Utilisation de `ChangeNotifier` pour mettre à jour l’état de manière réactive dans les widgets.

### Separation of Concerns

Organisation du code en séparant la logique métier et l’interface pour une meilleure maintenabilité.

### Immutability vs Mutability

Comprendre l'importance de l’immutabilité et comment la gérer dans Flutter.

### ValueNotifier

Utilisation de `ValueNotifier` pour suivre et gérer l’état de façon réactive et optimisée.

### InheritedWidget

Utilisation d'`InheritedWidget` pour partager l’état dans l’arbre des widgets.

### Packages

Présentation des principaux packages de gestion de l’état (ex. Provider, Riverpod).

### Quiz

Quiz pour évaluer la compréhension des concepts de gestion d’état.


## Architecture

### MVVM Introduction

Introduction au modèle MVVM (Modèle-Vue-Modèle de Vue) pour une architecture organisée.

### View

Construction de la Vue en utilisant les widgets pour afficher les données.

### View Model

Gestion de la logique métier dans le ViewModel pour découpler la Vue et la logique.

### Service

Implémentation des services pour gérer les opérations comme la récupération de données.

### Entities

Modélisation des entités pour représenter les objets de données.

### Repositories

Abstraction des sources de données dans des Repositories pour isoler les dépendances.

### Dependency Injection

Utilisation de l’injection de dépendances pour créer des applications modulaire.

### How to Handle Remote Data

Gestion des données distantes (APIs) pour séparer les appels réseau de l’interface.

### Abstracting Dependencies

Isoler et abstraire les dépendances pour faciliter les tests.

### Quiz

Quiz final pour réviser les concepts d’architecture et de conception d’application.

