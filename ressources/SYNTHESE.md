https://drive.google.com/file/d/1Thz7z3ALt1K-RcMde7k47H_d5vdHnh4K/view?usp=sharing

# Angular

> Framework Angular

**5 concepts foondamtaux**

* `@NgModule` - Organiser code (Component, Direcitve, Pipe, Service )
    * `@Component` 
    * `@Directive` 
    * `@Pipe` 
* `@Service` 


**19 concepts foondamtaux**

*Création*

* `@NgModule` 
    * `@Component` 
    * `@Directive` 
    * `@Pipe` 
* `@Service` 

*Communication*

* `@Input` 
* `@Output` 
* `@ViewChild` 
* `@ViewChildren` 
* `@ContentChild` 
* `@ContentChildren` 
* `@HostListener` 
* `@HostBinding`  ??
* `@Attribute`

*Injection*

* `@Inject` 
* `@Optional`
* `@Host`
* `@Self`
* `@SkipSelf`

# Angular Template

* Directive utilitaires# Angular Template

```html

<ng-content select="CSSSelector"></ng-content>
<ng-container></ng-container>
<ng-template #templateVar></ng-template #templateVar>

```

## CSS : 

> La `ViewEncapusaltion` strategy permet de gérer l'encpasulation CSS

# Angular Structure Applicative

* Modulariser le code.
* Mettre en place la documentation.  

# Angular Module ou NgModule

> Bloc d'organisation des composantes angular.

```ts
@NgModule({
    declarations:[] // Component, Directive, Pipe
    imports:[], // NgModule ou ( Standalone ) Pour être utiliser dans les déclarations
    exports:[], // Component, Directive, Pipe ou autre NgModule
    providers:[] // Service
    // 
    bootstrap:[] //BrowserModule
})
export class MyModule{
}
```

# Angular Injection Token

> ABSTRACTION - **Question posée à l'injecteur**

# Reconfiguration de l'injecteur

```ts
@NgModule({
...
    providers:[
        MyService,
        {
            provide:'KLEEGROUP',
            useValue:'VALUE PROVIDED',
            multi:true
        },
        {
            provide:MyService,
            useClass:SubstitutionService
        },
        {
            provide:KLEE_TOKEN,
            useValue:'VALUE PROVIDED'
            // useExisting
            // useClass
            // useFactory
            // deps:[]
        }
    ]
...
})
export class MyModule{
}
```


# Angular Lazy Loading : Chargement à la demande

> Par défault le *bundle* applicatif est chargé entièrement. 

L'utilisationd route lazy load permet de scénariser le chargement.


# Angular Fondamentaux JavaScript

> Fichiers JavaScript  *chargé avec une encapsulation (scope)*

* `import` import statique
* `export`
* `import().then()` import dynamique

Un module js ou ESM peuvent contenir un seul export par défaut.

# Angular Formulaire

> Représentation des interactions.

* `pristine/dirty`
* `touched/untouched`
* `valid/invlaid`

> Les `formControl` possèdent un objet d'erreur valorier par leurs validators.

* TDF (Template Driven Form)
    * `ngForm`
    * `ngModel`
* Reactive Forms (Template Driven Form)
    * `formGroup`
    * `formControl`

