import './chat-root.css';
import chatRootTemplate from './chat-root.html';

class Controller {
  constructor($timeout, $rootScope, ChatService, ContactsService) {
    this._ChatService = ChatService;
    this._$timeout = $timeout;
    this._chatUpdateDelay = 2000;
    this.chatIsEnabled = false;
    ContactsService
      .getContacts()
      .then((users) => {
        this.users = users;
      });
    $rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState) => {
      if(this._isMailStateLeaving(toState, fromState)){
        this.endChat();
      }
    });
  }

  _isMailStateLeaving(toState, fromState){
    return (fromState.name == 'mail' || fromState.parent == 'mail')
            &&
           (toState.name != 'mail' && toState.parent != 'mail')
  }

  isChatEnabled(){
    return this.chatIsEnabled;
  }

  setInterlocutor(user){
    this.selectedUser = user;
  }

  startChat() {
    if(!this.isChatEnabled()){
      this.chatIsEnabled = true;
      this._processMessagesReceivingLoop();
    }
  };

  endChat() {
    if(this.isChatEnabled()){
      this._$timeout.cancel(this._timeout);
      this.chatIsEnabled = false;
      delete this.selectedUser;
    }
  };

  _getMessages() {
    return this._ChatService
      .getMessages(this.selectedUser.id)
      .then((messages) => {
        this.messages = messages;
      });
  }

  _processMessagesReceivingLoop() {
    this._getMessages()
      .then(() => {
        this._timeout = this._$timeout(()=> {
          this._processMessagesReceivingLoop()
        }, this._chatUpdateDelay);
      });
  }
}

const chatPageComponent = {
  template: chatRootTemplate,
  controller: Controller
};

export default chatPageComponent;