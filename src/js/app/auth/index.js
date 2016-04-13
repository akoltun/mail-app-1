import AuthService from './services/auth-service'
import authPageComponent from './components/auth-page/auth-page';
const auth = angular.module('auth', ['firebase']);

auth.run(function ($rootScope, $state) {
  $rootScope.$on("$stateChangeError", function (event, toState, toParams, fromState, fromParams, error) {
    if (error === "AUTH_REQUIRED") {
      $state.go("auth");
    }
  });
});

auth.service("AuthService", AuthService);
auth.component("authPage", authPageComponent);

auth.config(function ($stateProvider) {
  $stateProvider
    .state("auth", {
      template: "<auth-page></auth-page>",
      resolve: {
        "currentAuth": function($state, AuthService) {
          return AuthService
            .$waitForAuth()
            .then(authData => {
              if(authData){
                $state.go('box', {boxId: 'inbox'});
              }
            });
        }
      },
      url: '/auth'
    });
});

export default auth;