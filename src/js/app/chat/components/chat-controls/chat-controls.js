import chatControlsTemplate from './chat-controls.html';

class Controller{
  constructor(ChatService){
    this._ChatService = ChatService;
  };
  
  sendMessage() {
    let message = {};
    message.date = Date.now();
    message.text = this.messageText;
    message.type = 'sent';
    this.messageText = '';
    this._ChatService.add(this.selectedUser.id, message);
  };
}

const chatControlsComponent = {
  template: chatControlsTemplate,
  bindings: {
    selectedUser: '<'
  },
  controller: Controller
};

export default chatControlsComponent;