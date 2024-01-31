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
    import App from  from 'lien-vers-app.vue';

    const app = createApp(App)
```

## 3. Montage ( *mount* ) de l'application
```html
    <div id="app"></div>
```
```javascript
    app.mount('#app')
```