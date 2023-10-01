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
| [List](https://github.com/alban-okoby/learn-all-things-you-need/tree/main/Flutter/the_basics_of_dart/0x05-collections/list.dart) | une liste (`List`)  est : <ul> <li> une collection ordonnée d'éléments</li> <li>Les éléments peuvent être de n'importe quel type de données et dupliqués </li> <li>les élémnets sont indexés par leur position dans la liste </li> </ul> | Déclarer une List, accéder, ajouter, supprimer ses éléments |
| [Set](https://github.com/alban-okoby/learn-all-things-you-need/tree/main/Flutter/the_basics_of_dart/0x05-collections/set.dart) | Un ensemble (`Set`) est une collection non ordonnée d'éléments uniques. Les ensembles sont utiles lorsque vous devez stocker une collection d'éléments distincts sans doublons. | Déclarer un ensemble, accéder, ajouter, supprimer ses éléments.|
| [Map](https://github.com/alban-okoby/learn-all-things-you-need/tree/main/Flutter/the_basics_of_dart/0x05-collections/map.dart) | Une carte (`Map`) est : <ul> <li> une collection d'associations clé-valeur </li> <li> constitué d'une clé unique et d'une valeur correspondante </li> <li> Déclaré avec **Map<CléType, ValeurType> nomDeCarte = {clé1: valeur1, clé2: valeur2, ...};** </li> Les cartes sont utiles pour stocker des données structurées </ul> | Déclarer une Map, accéder, ajouter, supprimer ses éléments. |
| [Queue](https://github.com/alban-okoby/learn-all-things-you-need/tree/main/Flutter/the_basics_of_dart/0x05-collections/queue.dart) | Une file (`Queue`) est une collection qui gère une file (FIFO : "premier entré, premier sorti"). Utilisé pour les opérations de file d'attente. Importé à l'aide de import 'dart:collection';. | Déclarer une **Queue**, accéder, ajouter, supprimer ses éléments. |
| [LinkedHashSet](https://github.com/alban-okoby/learn-all-things-you-need/tree/main/Flutter/the_basics_of_dart/0x05-collections/linkedHashSet.dart) | Un ensemble lié (`LinkedHashSet`) est une version ordornée d'un ensemble (`Set`) qui gère une file (FIFO : "premier entré, premier sorti"). Utilisé pour les opérations de file d'attente. Importé à l'aide de import 'dart:collection';. | Déclarer une **LinkedHashSet**, accéder, ajouter, supprimer ses éléments. |
| [SplayTreeSet ](https://github.com/alban-okoby/learn-all-things-you-need/tree/main/Flutter/the_basics_of_dart/0x05-collections/queue.dart) | Un Ensemble d'Arbres Splay (`SplayTreeSet `) est : <ul> <li> Un ensemble trié qui utilise une structure d'arbre splay. </li> <li> Les éléments sont automatiquement triés lors de l'insertion. </li> <li> Permet des opérations de recherche plus rapides sur des données triées. </li> </ul>  | Déclarer une **SplayTreeSet** , accéder, ajouter, supprimer ses éléments. |


### Excercices

#### Excercice 1 (SET)
**Objectif** : Écrivez une fonction qui prend une liste d'éléments en entrée et renvoie un ensemble (Set) contenant les mêmes éléments, mais sans doublons.

**Description** : Écrivez une fonction qui prend une liste en entrée et crée un ensemble à partir des éléments de la liste. Ensuite, renvoyez cet ensemble sans les doublons. Par exemple, si la liste d'entrée est [1, 2, 2, 3, 4, 4, 5], la fonction devrait renvoyer un ensemble contenant [1, 2, 3, 4, 5].

#### Excercise 2 (SET)
**Objectif** : Écrivez une fonction qui prend deux listes en entrée et renvoie un ensemble contenant les éléments communs aux deux listes.

**Description** : Écrivez une fonction qui prend deux listes en entrée et crée un ensemble contenant les éléments qui se trouvent à la fois dans la première liste et dans la deuxième liste. Par exemple, si les deux listes sont [1, 2, 3] et [2, 3, 4], la fonction devrait renvoyer un ensemble contenant [2, 3].