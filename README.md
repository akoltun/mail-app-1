#Introduction

The purpose of this project is to build some kind of mail application using AngularJS as main work of AngularJS course
on [javascript.ru](http://learn.javascript.ru/courses/angular) by [Stepan Suvorov](http://stepansuvorov.com/).


#Project structure

##Module bundler
**Wepack** was used in order to split codebase of single page applications into manageable small components.

###Webpack plugins:

- **NoErrorsPlugin** - Skipping emitting phase if some asset has error.

- **HtmlWebpackPlugin** - Was used for generating index html file with generated output files included.

- **CleanWebpackPlugin** - Remove destination folder before building

- **ExtractTextPlugin** - Move css chunks to separate files instead of inlining them to javascript.

###Loaders:

- **babel** - Was used to enable es6 syntax support.
By using transform-es2015-modules-commonjs plugin ES2015 modules were transformed to CommonJS.

- **ng-cache** - for handling imports of html files

- **style-loader** - inserts css into the page

- **css-loader** - resolving imports via import,url,require

- *file-loader* - for resolving images,fonts files imports.




##File structure

###dist
Distance folder for build output. index.html is starting point of running project.

###webpack.config.js
Webpack config. In addition to loaders and Plugins it contains entry points and output path.

###css/app
Contains general styles

###css/vendor
Contains third party libraries like bootstrap

###js/index.html
It is template on which base index.html of output is formed

###js/vendor
Folder contains third party libraries. Angular.js and other angular modules can be found there.
Furthermore this folder contains firebase.js and angularfire.min.js which are used for working with firebase.com database.

###js/vendor/index.html
This file serve as webpack entry point and contains imports of all js/css vendors libraries.

###js/app/index
entry point of webpack with imports of application modules

###js/app/module-name
Folder with angular module

###js/app/module-name/index.js
File which contains imports and declarations of all services,components,directives which are used in this module

###js/app/module-name/components/
Folder with components of module

###js/app/module-name/directive/
Folder with directives of module

###js/app/module-name/services/
Folder with services of module

###js/app/module-name/components/component-name
Folder of specific component:
 - **component-name.js** file which consist of plain javascript with export of object
 - **component-name.html** file with angular.js template
 - **component-name.css** file with css

 ###js/app/module-name/directives/directive-name
 Folder of specific directive:
  - **directive-name.js** file which consist of plain javascript with export of function
  - **directive-name.html** file with angular.js template
  - **directive-name.css** file with css

###js/app/module-name/services/service-name.js
File with plain javascript which contains export of class

##Project description
Modular-component approach was used for building this project.
https://www.firebase.com/ was used as backend.
Classes and arrow function from ES6 were widely used thought the application.

#Important note.
The project is far long from perfect state and will be updated with new angular and user features implemented

#Plans about this project:
###Development features:
- improve readme.md
- improve webpack config(e.t. minification with ngInject)
- Use es6 classes ineritance
- Look into $watch with third  parameter true to figure out if it needs to be removed
- Refactor working with backend (first need to decide what best approach is. It could be plain js,firebase.js,restangular)
- Refactor some components by using callbacks instead of some extra functionality(like remove update of item from star component)
- Replace highlighting of box menu by extraction box id from item with using ui-router for selected box
- Use '&' for binding expression to component
- Try to use $parsers or $formatters
- Use resolve of ui-router to get data from server then pass it to service from which it could be got by copoment.
- Write unit tests (https://github.com/karma-runner/karma-coverage)
- Write u2e tests

###Users features:
- Contacts autocomplete in email field
- Loader indicator(Probably it is good idea to put it into ui-view directive?)
- Show quantity of letters and create lazy-loading/pagination for letters
- Move letters writing to popup
- add some additional sighn of that something is wrong when user did not filled all required fields