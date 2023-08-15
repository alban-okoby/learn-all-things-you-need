### Les Controllers avec nestjs

### faire des opérations CRUD
- Create
- Read
- Update
- Delete

#### Les requêts HTTP
@Controller() : est l'annotation principale des requêtes HTTP
Avec les requêtes spécifique selon le cas :
- @All() : pour n'importe quelle requête HTTP
- @Get() : pour la demande
- @Post() : pour la création
- @Put() : pour la modification
- @Delete() : pour la suppression
- @Head() : Entête de reponse
- @HttpCode() : Code d'état de la requête
- @Redirect() ou res.redirect() : redirection d'url
- @Options()
- @patch()


Toutes ces annotations (décorateurs) proviennent de la bibliothèque ```@nestjs/common```

Les décorateurs de paramètres :
- @request() ou @Req()
- @response() ou @res()
- @Next()
- @Session()
- @Body()
- @Query()
- @Ip()
- @HostParam()
- @Headers()
- @Param()
Pour accéder à l'élément : 
```ts
    req.body
``` 
(au cas où il y a un paramètre: @Body(myParam?: any))
```ts
    req.body[myParam]
```
Faisons un exemple de requête qui fait une demande avec un paramètre.

```ts
    @get()
    getElement(@Req() myRequest: Request): any {
        return 'Bla bla';
    }

    @post()
    createElement(@Req() myRequest: Request): any {
        return 'Element created successfuly ✅';
    }
```


Have happy coding 🚀 <br>

Alban 🐱‍👤