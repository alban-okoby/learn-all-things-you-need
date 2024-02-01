# Création d'une application Vue

## 1. L'instance d'application
```javascript
    import { createApp } from 'vue';

    const app = createApp({
        /** Le composant racine */
    })
```

## 2. Le composant racine
```javascript
    import App from 'lien-vers-app.vue';

    const app = createApp(App)
```

## 3. Montage ( *mount* ) de l'application
```html
    <div id="app"></div>
```
```javascript
    app.mount('#app')
```

## 4. Modèle de composant racine dans le DOM
```html
    <div id="app">
        <button @click="count++">{{ count }}</button>
    </div>
```
```javascript
    import { createApp } from 'vue';

    const app = createApp({
        data() { 
            return {
                count: 0
            }
        }
    });

    app.mount('#app')
```

## 5. Configurations d'application (object *.config*, méthode *component* ..)
```javascript
    app.config.errorHandler = (err) => {
        /* Gestion des erreurs */
    }
```
Pour enregistrer un composant (Le rend disponible n'importe où)
```javascript
    app.component('TodoDeleteButton', TodoDeleteButton) 
```

Tout voir sur [API d'application](https://vuejs.org/api/application.html)

## 6. Plusieurs instances d'application (c'est possible sur la même page)
```javascript
    conts app1 = createApp({
        /* Instance d'application 1*/
    })
    app1.mount('#container-app1');

    conts app2 = createApp({
        /* Instance d'application 2*/
    })
    app2.mount('#container-app2');
```

