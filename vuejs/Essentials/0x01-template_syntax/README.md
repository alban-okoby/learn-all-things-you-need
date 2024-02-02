# Syntaxe du modèle
La syntaxe du model est basée sur *HTML*

## 1. Interpolation (moustache `{{ }}`)
```html
   <span> {{ myValue }}</span
```

## 2. HTML brut (*v-html* attribut)
```html
    <p v-html="html-value"> Lorem ipsme </p>
```

## 3. Liaison d'attributs ( *v-bind* directive)
Si la valeur liée est nullou undefined, alors l'attribut sera supprimé de l'élément rendu.
```html
    <div v-bind:id="dynamicId"></div>
    ou abrégée
    <div :id="dynamicId"></div>
```

## 4. Raccourci du même nom
```html
    <div :id></div> <!--Si nom valeur vaut id --> <br>
    autrement 
    <div :id="id"></div> ou  <div v-bind:id="id"></div>  
    
```

## 5. Liaison dynamique de plusieurs attributs
Pour un tel object :
```javascript
    data() {
        return {
            myObjectOfAttrs: {
                id: 'myContainer',
                class: 'myClass'
            }
        }
    }
```
Il est possible de les liers (`id` et `class` ensemble)
```HTML
    <div v-bind="myObjectOfAttrs"></div>
```

## 6. Utilisation d'expressions JS dans les cas suivants :
- ✅ Interpolations de texte intérieures (moustaches)
- ✅ Dans la valeur d'attribut de toutes les directives Vue 
(attributs spéciaux commençant par v-)
```HTML
    {{ count += 1 }} <br>
    {{ myArray.length }} <br>
    <div :id="`number-${id}`"></div>
```

## 7. Fonctions d'appel
 ```HTML
    <time :title="toTitleDate(date)" :datetime="date"> {{ formatDate(date) }}</time>
 ```
