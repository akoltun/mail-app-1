import './application-page.css'
import mailAppTemplate from './application-page.html';

class Controller {
  constructor($state, AuthService, FirebaseConfigService) {
    this._$state = $state;
    this._AuthService = AuthService;
    this._FirebaseConfigService = FirebaseConfigService;
    this.menuItems = [{
      title: 'Mails',
      state: 'mail',
      href: 'box({boxId:"inbox"})'
    }, {
      title: 'Contacts',
      state: 'contacts',
      href: 'contacts'
    }];
    this.loggined = false;

    AuthService.$onAuth(authData =>{
      if(authData){
        this.loggined = true;
      }else{
        this.loggined = false;
        this._$state.go('auth');
      }
    });

  }
  unauth(){
    this._AuthService.$unauth();
  }
}

const applicationPageComponent = {
  template: mailAppTemplate,
  controller: Controller
};

export default applicationPageComponent;

