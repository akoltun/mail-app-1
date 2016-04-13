function chatOnUpdateScrollDirective() {
  return {
    restrict: 'A',
    link (scope, element, attrs, chatConversationController) {
      function scrollToTop() {
        element[0].scrollTop = 0;
      }
      scope.$watch( () => chatConversationController.messages, scrollToTop, true);
    },
    require: '^^chatConversation',
    scope: {}
  }
}

export default chatOnUpdateScrollDirective;