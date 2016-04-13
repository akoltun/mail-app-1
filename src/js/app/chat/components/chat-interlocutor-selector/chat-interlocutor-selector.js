import chatInterlocutorSelectorTemplate from './chat-interlocutor-selector.html';

class Controller {
  startChat(user) {
    this.chatPageController.setInterlocutor(user);
    if (!this.chatPageController.isChatEnabled()) {
      this.chatPageController.startChat();
    }
  }
}

const chatInterlocutorSelectorComponent = {
  template: chatInterlocutorSelectorTemplate,
  controller: Controller,
  bindings: {
    users: '<',
    selectedUser: '='
  },
  require: {
    chatPageController: '^^chatRoot'
  }
};

export default chatInterlocutorSelectorComponent;