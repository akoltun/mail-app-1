import userCardTemplate from './contacts-user-card.html';

class Controller {
  remove(){
    this.contactsCtrl.removeUser(this.user);
  };

  stopEdition(){
    this.mode = 'presentation';
    delete this.userDraft;
    if (this.contactsCtrl.getMode != 'list') {
      this.contactsCtrl.setMode('list');
    }
  };

  save(){
    if (this.userDraft.id) {
      this.contactsCtrl.updateUser(this.userDraft, this.user);
    } else {
      this.contactsCtrl.addUser(this.userDraft);
    }
    this.stopEdition();
  };

  startEdition(){
    this.mode = 'edit';
    this.userDraft = angular.copy(this.user);
    this.userDraft.birthdate = new Date(this.userDraft.birthdate);
  };
}

const contactsUserCardComponent = {
  bindings: {
    user: '=',
    mode: '@'
  },
  template: userCardTemplate,
  require: {
    contactsCtrl: '^^contactsPage'
  },
  controller: Controller
};

export default contactsUserCardComponent;