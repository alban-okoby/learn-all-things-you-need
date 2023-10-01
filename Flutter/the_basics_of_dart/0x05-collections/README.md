# Learn Dart

### <strong>Objectif :<strong> Comprendre les collections en Dart

Les collections sont essentielles en programmation pour stocker et gérer des ensembles de données. <br>
 En Dart, il existe plusieurs types de collections couramment utilisés, notamment
 
 - les listes (List);
 - les ensembles (Set);
 - les cartes (Map);
 - les files (Queue);
 - LinkedHashSet;
 - SplayTreeSet

| Etude | Description | Objectifs |
| -------- | ----------- |-------- |
| [List](https://github.com/alban-okoby/learn-all-things-you-need/tree/main/Flutter/the_basics_of_dart/0x05-collections/1-list.dart) | une liste (`List`)  est : <ul> <li> une collection ordonnée d'éléments</li> <li>Les éléments peuvent être de n'importe quel type de données et dupliqués </li> <li>les élémnets sont indexés par leur position dans la liste </li> </ul> | Déclarer une List, accéder, ajouter, supprimer ses éléments |
| [Set](https://github.com/alban-okoby/learn-all-things-you-need/tree/main/Flutter/the_basics_of_dart/0x05-collections/2-set.dart) | Un ensemble (`Set`) est une collection non ordonnée d'éléments uniques. Les ensembles sont utiles lorsque vous devez stocker une collection d'éléments distincts sans doublons. | Déclarer un ensemble, accéder, ajouter, supprimer ses éléments.|
| [Map](https://github.com/alban-okoby/learn-all-things-you-need/tree/main/Flutter/the_basics_of_dart/0x05-collections/3-map.dart) | Une carte (`Map`) est : <ul> <li> une collection d'associations clé-valeur </li> <li> constitué d'une clé unique et d'une valeur correspondante </li> <li> Déclaré avec **Map<CléType, ValeurType> nomDeCarte = {clé1: valeur1, clé2: valeur2, ...};** </li> Les cartes sont utiles pour stocker des données structurées </ul> | Déclarer une Map, accéder, ajouter, supprimer ses éléments. |
| [Queue](https://github.com/alban-okoby/learn-all-things-you-need/tree/main/Flutter/the_basics_of_dart/0x05-collections/4-queue.dart) | Une file (`Queue`) est une collection qui gère une file (FIFO : "premier entré, premier sorti"). Utilisé pour les opérations de file d'attente. Importé à l'aide de import 'dart:collection';. | Déclarer une **Queue**, accéder, ajouter, supprimer ses éléments. |
| [LinkedHashSet](https://github.com/alban-okoby/learn-all-things-you-need/tree/main/Flutter/the_basics_of_dart/0x05-collections/5-linked_hash_set.dart) | Un ensemble lié (`LinkedHashSet`) est une version ordornée d'un ensemble (`Set`) qui gère une file (FIFO : "premier entré, premier sorti"). Utilisé pour les opérations de file d'attente. Importé à l'aide de import 'dart:collection';. | Déclarer une **LinkedHashSet**, accéder, ajouter, supprimer ses éléments. |
| [SplayTreeSet ](https://github.com/alban-okoby/learn-all-things-you-need/tree/main/Flutter/the_basics_of_dart/0x05-collections/6-splay_tree_set.dart) | Un Ensemble d'Arbres Splay (`SplayTreeSet `) est : <ul> <li> Un ensemble trié qui utilise une structure d'arbre splay. </li> <li> Les éléments sont automatiquement triés lors de l'insertion. </li> <li> Permet des opérations de recherche plus rapides sur des données triées. </li> </ul>  | Déclarer une **SplayTreeSet** , accéder, ajouter, supprimer ses éléments. |
Flutter\the_basics_of_dart\0x05-collections\


## Excercices

### Excercice 1 (SET)
**Objectif** : Pouvoir écrire une fonction qui prend une liste d'éléments en entrée et renvoie un ensemble (Set) contenant les mêmes éléments, mais sans doublons.

**Description** : Écrivez une fonction qui prend une liste en entrée et crée un ensemble à partir des éléments de la liste. Ensuite, renvoyez cet ensemble sans les doublons. Par exemple, si la liste d'entrée est [1, 2, 2, 3, 4, 4, 5], la fonction devrait renvoyer un ensemble contenant [1, 2, 3, 4, 5].

### Excercise 2 (SET)
**Objectif** : Pouvoir écrire une fonction qui prend deux listes en entrée et renvoie un ensemble contenant les éléments communs aux deux listes.

**Description** : Pouvoir écrire une fonction qui prend deux listes en entrée et crée un ensemble contenant les éléments qui se trouvent à la fois dans la première liste et dans la deuxième liste. Par exemple, si les deux listes sont [1, 2, 3] et [2, 3, 4], la fonction devrait renvoyer un ensemble contenant [2, 3].

### Exercice 3 (Map) : Calculateur de Statistiques
**Objectif** : Pouvoir écrire une fonction qui prend une liste de nombres en entrée et renvoie un ensemble de statistiques, y compris la moyenne, la valeur minimale et la valeur maximale.

**Description** : Écrivez une fonction qui prend une liste de nombres en entrée et renvoie une carte (Map) contenant la moyenne, la valeur minimale et la valeur maximale de la liste. Par exemple, si la liste d'entrée est [12, 5, 8, 17, 9], la fonction devrait renvoyer une carte contenant { 'moyenne': 10.2, 'min': 5, 'max': 17 }.

### Exercice 4 (Map) : Gestion de Produits
**Objectif** : Pouvoir écrire un programme qui gère une liste de produits et permet d'ajouter, de supprimer et de rechercher des produits par leur nom en utilisant `Map`.

**Description** : Écrivez un programme qui utilise une carte (Map) pour gérer une liste de produits. Vous devrez implémenter trois fonctions :

- Une fonction pour ajouter un produit avec un nom et un prix.
- Une fonction pour supprimer un produit par son nom.
- Une fonction pour rechercher un produit par son nom et renvoyer son prix.

### Exercice 5 (Queue) : Gestionnaire de Tâches
**Objectif** : Pouvoir écrire un programme qui simule un gestionnaire de tâches en utilisant `Queue`. Les utilisateurs peuvent ajouter des tâches à une file d'attente et les marquer comme terminées.

**Description** : Écrivez un programme qui permet aux utilisateurs d'ajouter des tâches à une file d'attente et de marquer les tâches comme terminées. Vous devrez implémenter les fonctions suivantes :

- Une fonction pour ajouter une tâche à la file d'attente.
- Une fonction pour marquer la première tâche de la file comme terminée et la retirer de la file.
- Une fonction pour afficher la file d'attente des tâches restantes.

### Exercice 6 (Queue): File de Messages
Objectif : Écrivez un programme qui gère une file de messages. Les messages sont ajoutés à la file et peuvent être lus dans l'ordre où ils ont été ajoutés.

**Description** : Écrivez un programme qui permet aux utilisateurs d'ajouter des messages à une file et de les lire dans l'ordre. Vous devrez implémenter les fonctions suivantes :

- Une fonction pour ajouter un message à la file.
- Une fonction pour lire le message en tête de file et le retirer de la file.
- Une fonction pour afficher la file de messages.

### Exercice 7 : Liste Unique d'Étudiants (LinkedHashSet)
**Objectif** : Pouvoir écrire un programme qui gère une liste unique d'étudiants en utilisant `LinkedHashSet`.

**Description** : Écrivez un programme qui permet aux utilisateurs d'ajouter des noms d'étudiants à une liste unique tout en maintenant l'ordre d'ajout. Vous devrez implémenter les fonctions suivantes :

- Une fonction pour ajouter un nom d'étudiant à la liste.
- Une fonction pour afficher la liste de noms d'étudiants unique dans l'ordre d'ajout.

### Exercice 8 : Liste Unique de Produits (LinkedHashSet)
**Objectif** : Écrire un programme qui gère une liste d'éléments (produits) uniques en utilisant `LinkedHashSet`.

**Description** : Écrivez un programme qui permet aux utilisateurs d'ajouter des produits à une liste unique tout en maintenant l'ordre d'ajout. Chaque produit est décrit par son nom. Vous devrez implémenter les fonctions suivantes :

- Une fonction pour ajouter un produit à la liste.
- Une fonction pour afficher la liste de produits unique dans l'ordre d'ajout.

### Exercice 9 : Liste Triée de Dates (SplayTreeSet)
**Objectif** : Pouvoir écrire un programme qui gère une liste triée d'éléments (dates) en utilisant `SplayTreeSet`.

**Description** : Écrivez un programme qui permet aux utilisateurs d'ajouter des dates à une liste triée en utilisant `SplayTreeSet`. Vous devrez implémenter les fonctions suivantes :

- Une fonction pour ajouter une date à la liste triée.
- Une fonction pour afficher la liste triée dans l'ordre croissant.

### Exercice 10 : Liste Triée de Nombres (SplayTreeSet)
Objectif : pouvoir écrire un programme qui gère une liste triée d'éléments (nombres) en utilisant `SplayTreeSet`.

**Description** : Écrivez un programme qui permet aux utilisateurs d'ajouter des nombres à une liste triée en utilisant `SplayTreeSet`. Vous devrez implémenter les fonctions suivantes :

- Une fonction pour ajouter un nombre à la liste triée.
- Une fonction pour afficher la liste triée dans l'ordre croissant.

<br>
 Have happy learning ✨ <br>
 Alban 🐱‍👤