import MailsService from './services/mails-service';
import mailsComposeEmailComponent from './components/mails-compose-email/mails-compose-email'
import mailsListComponent from './components/mails-list/mails-list'
import mailsNavigationComponent from './components/mails-navigation/mails-navigation'
import mailsPageComponent from './components/mails-page/mails-page'
import mailsLetterComponent from './components/mails-letter/mails-letter'
import mailsStarComponent from './components/mails-star/mails-star'

const mails = angular.module('mails', ['ngMessages', 'ui.router']);

mails.config(function ($stateProvider) {
  $stateProvider
    .state('mail', {
      url: '/mail',
      template: '<mails-page></mails-page>',
      abstract: true,
      resolve: {
        "currentAuth": function(AuthService) {
          return AuthService.$requireAuth();
        }
      }
    })
    .state('compose', {
      parent: 'mail',
      url: '/compose/:mailId',
      template: '<mails-compose-email mail-id="{{$ctrl.mailId}}"></mails-compose-email>',
      controller: function ($stateParams) {
        this.mailId = $stateParams.mailId;
      },
      controllerAs: '$ctrl'
    })
    .state('letter', {
      parent: 'mail',
      url: '/letter:mailId',
      template: '<mails-letter mail-id="{{$ctrl.mailId}}"></mails-letter>',
      controller: function ($stateParams) {
        this.mailId = $stateParams.mailId;
      },
      controllerAs: '$ctrl'
    })
    .state('box', {
      parent: 'mail',
      url: '/box=:boxId',
      template: '<mails-list box-id="$ctrl.boxId"></mails-list>',
      controller: function ($stateParams,MailsService) {
        MailsService.setSelectedBoxId($stateParams.boxId);
        this.boxId = $stateParams.boxId;
      },
      controllerAs: '$ctrl'
    });
});
mails.service('MailsService', MailsService);
mails.component('mailsComposeEmail', mailsComposeEmailComponent);
mails.component('mailsList', mailsListComponent);
mails.component('mailsNavigation', mailsNavigationComponent);
mails.component('mailsPage', mailsPageComponent);
mails.component('mailsLetter', mailsLetterComponent);
mails.component('mailsStar', mailsStarComponent);

export default mails;