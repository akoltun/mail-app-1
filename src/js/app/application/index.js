import applicationPageComponent from './components/application-page/application-page';
import applicationMainMenuComponent from './components/application-main-menu/application-main-menu';
import FirebaseConfigService from './services/firebase-config-service/firebase-config-service';

const mailApplication = angular.module('mailApplication',
  ['ngMessages', 'ui.router','mails','chat','contacts','bootstrap','auth']);

mailApplication.config(function ($urlRouterProvider) {
  $urlRouterProvider.otherwise('/mail/box=inbox');
});

mailApplication.component('applicationPage', applicationPageComponent);
mailApplication.component('applicationMainMenu', applicationMainMenuComponent);
mailApplication.service('FirebaseConfigService', FirebaseConfigService);

export default mailApplication;

