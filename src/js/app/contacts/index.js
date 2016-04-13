import contactsPageComponent from './components/contacts-page/contacts-page';
import contactsUserCardComponent from './components/contacts-user-card/contacts-user-card';
import ContactsService from './services/contacts-service'

const contacts = angular.module('contacts', ['ngMessages', 'ui.router']);

contacts.config(function ($stateProvider) {
  $stateProvider
    .state('contacts', {
      url: '/contacts',
      template: '<contacts-page></contacts-page>',
      resolve: {
        "currentAuth": function(AuthService) {
          return AuthService.$requireAuth();
        }
      }
    });
});
contacts.component('contactsUserCard', contactsUserCardComponent);
contacts.component('contactsPage', contactsPageComponent);
contacts.service('ContactsService', ContactsService);

export default contacts;