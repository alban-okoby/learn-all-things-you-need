# Comprendre les composants en détails

| Composant | Exemple | Documentation approfondie |
|:-----|:--------:|:--------:|
|  *Registration*  | **Enregistrement des composants** | Conditionnent l'affichage  | `<span v-if="isCorrect"> Congratulations ✨ </span>`  | |
|  *v-for* | **Boucle** | Itéraction de 0 ou plusieurs élements  | ` <li v-for="e in elements"> {{ e.value }} </li>`| |
|  *v-model* | **Formulaire** | Liaison bidirectionnelle sur un element de saisie de formulaire ou un composant | ` <input v-model="text" />`| |
|  *v-text* | **Formatage** | formater du texte | `<span v-text="myMgs">  </span>` <=> ` <span> {{ myMgs }}  </span>`| |
|  *v-html* | **Wrappage** | Met à jour le `innerHTML` element | `<span v-html="representeMonHtml">  </span>` <=> ` <span> {{ myMgs }}  </span>`| |
|  *v-on* | **Evénement** | Ecouteur d'événements  | ` <button v-on:[event]="actionToDo"> </button>` <=> `<button @[event]="actionToDo"> </button>`| |
|  *v-bind* | **Attributs** | Liaison dynamique d'attributs  | `<button v-bind:[key]="value"> </button>` <=> `<button :[key]="value"> </button>` <br> `<img v-bind:src="imgSrc">` <=> `<img :src="imgSrc">` <br> `<span v-bind:class="{ red: isRed }"> The red value </span>` <br> `<span v-bind:class="[ classA, classB ]"> </span>`| |
|  *v-slot* | **Délimitaion** | Désigne les emplacements nommés ou les emplacements délimités qui s'attendent à recevoir des accessoires (header, footer, aside ...). Délimité à `<template></template>` | `<template v-slot:header> HEADER CONTENT  </template>` <=> `<template #header> HEADER CONTENT  </template>`| [docs](https://vuejs.org/guide/components/slots.html) |
|  *v-pre* | **Affichage Brut sans compilation** | Ignore la compilation pour cet élément et ses enfants | `<template v-pre> HEADER CONTENT  </template>` <=> `<template #header> HEADER CONTENT  </template>`| [docs](https://vuejs.org/api/built-in-directives#v-pre) |
|  *v-once* | **Rendu unique** | Effectuez le rendu de l'élément et du composant une seule fois et ignorez les futures mises à jour | `<template v-once> CONTENT NEVER CHANGE  </template>`| [docs](https://vuejs.org/api/built-in-directives#v-once) |
|  *v-memo* | **Mémorisation** | Mémorisez un sous-arbre du modèle(Attend un tableau fixe) | `<div v-memo="[valueA, valueB]"> CONTENT </div>` | [docs](https://vuejs.org/api/built-in-directives#v-memo) |
|  *v-cloak* | **Compilation** | Masque le modèle non compiler jusqu'a ce qu'il soit prêt (ne prend aucun param, et est néccéssaire que dans les config sans étapes de construction `non-build-step setups` ) | `[v-cloack] {display: none}` and `<span v-cloak> {{ value }}</span>` | [docs](https://vuejs.org/api/built-in-directives#v-cloak) |
