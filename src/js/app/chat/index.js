import chatRootComponent from './components/chat-root/chat-root'
import chatInterlocutorSelectorComponent from './components/chat-interlocutor-selector/chat-interlocutor-selector'
import chatConversationComponent from './components/chat-conversation/chat-conversation'
import chatControlsComponent from './components/chat-controls/chat-controls'
import chatOnUpdateScrollDirective from './directives/chat-on-update-scroll/chat-on-update-scroll';
import ChatService from './services/chat-service'

const chat = angular.module('chat', ['ngMessages', 'ui.router','contacts']);

chat.component('chatRoot', chatRootComponent);
chat.component('chatInterlocutorSelector', chatInterlocutorSelectorComponent);
chat.component('chatConversation', chatConversationComponent);
chat.component('chatControls', chatControlsComponent);
chat.directive('chatOnUpdateScroll', chatOnUpdateScrollDirective);
chat.service('ChatService', ChatService);

export default chat;