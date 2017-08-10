com.sncf.ionic2
===============

Présentation
------------

Le starter kit **Ionic 2** est un socle technique de référence permettant l'implémentation d'application **Web mobile & Hybride** de type **"Single Page Application"**.
Il fournit tout l'outillage nécessaire pour développer une application robuste et performante, en fournissant une expérience développeur évolué (CLI, TypeScript, livereload, scaffolding) et assure la qualité logicielle avec le système intégré de **validation de code source** et de **tests unitaires et fonctionels**.

Exigences
---------

* [node 6.9.X LTS](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)
* [CNTLM](http://cntlm.sourceforge.net/)

Outillages
----------

* [Angular CLI ](https://cli.angular.io/)
* [Gulp task runner](http://gulpjs.com/)
* Component Driven Development
* [Ionic](http://ionicframework.com/)
* [Documentation technique auto-générée](https://compodoc.github.io/compodoc/)
* [Tests unitaires](https://jasmine.github.io/) et [tests de non-regression](http://www.protractortest.org/#/)
* DevOps & Container Docker (en attente du registry SNCF officiel)

Premiers pas
------------

* [Télécharger le projet](http://alm.sncf.fr/sources/benjamin.heintz/com.sncf.ionic2-sidemenu/repository/archive.zip?ref=master)
* Ouvrir un invite de commande à la racine du projet
* Installation des dépendances


		npm install

* Consulter la documentation


		npm run doc

* Lancer le serveur de développement


		npm run serve

* [Ouvrir votre navigateur](http://localhost:3000)
* [Utiliser votre IDE](https://code.visualstudio.com/)

Installation
------------

installation des dépendances:

        npm install

Commandes
---------

**Lancer application** (serveur http web compatible environnement Cloud SAAS)

        npm start

**Lancer serveur de développement** (build, watch, sourcemap, assets, livereload, etc...)

        npm run serve

**Lancer documentation technique auto-générée**

        npm run doc

**Validation de code source** (tslint)

        npm run lint

**Lancer les tests unitaires**

        npm run test

**Lancer les tests de non-régression** (selenium/protractor)

        npm run e2e

**Mise à jour du Webdriver manager**

        npm run pree2e

**Build de l'application pour release** en intégration (Ahead of time compilation)

        npm run build:int

**Build de l'application pour release** en production (Ahead of time compilation)

        npm run build:prod

**Generation de composant**

        npm run ng generate component ./<modulename>/components/<name>

        npm run ng generate class ./<modulename>/models/<name>

        npm run ng generate pipe ./<modulename>/pipes/<name>

        npm run ng generate services ./<modulename>/services/<name>