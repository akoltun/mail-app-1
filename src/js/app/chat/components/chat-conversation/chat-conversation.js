import './chat-conversation.css';
import chatConversationTemplate from './chat-conversation.html';

const chatConversationComponent = {
  template: chatConversationTemplate,
  bindings: {
    messages: '<',
    selectedUserName: '@'
  }
};

export default chatConversationComponent;