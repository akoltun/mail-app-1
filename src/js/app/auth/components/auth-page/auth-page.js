import authPageTemplate from './auth-page.html';

class Controller {
  constructor($state, AuthService) {
    this._$state = $state;
    this._AuthService = AuthService;
    this.email = 'aaa@bbb.ccc';
    this.password = 'aaa@bbb.ccc';
  }

  auth(){
    let credentials = {
      email: this.email,
      password: this.password
    };
    this._AuthService.$authWithPassword(credentials)
      .then(() => {
        this._$state.go('box', {boxId: 'inbox'});
      })
      .catch((error) => {
        alert("Authentication failed:" + error);
      });
  }

}

const authPageComponent = {
  template: authPageTemplate,
  controller: Controller
};

export default authPageComponent;

