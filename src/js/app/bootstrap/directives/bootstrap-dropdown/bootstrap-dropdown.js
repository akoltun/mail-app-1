import bootstrapDropdownTemplate from './bootstrap-dropdown.html';

function bootstrapDropdownDirective($timeout, $document) {
  return {
    template: bootstrapDropdownTemplate,
    restrict: 'E',
    controllerAs: '$ctrl',
    link (scope, element) {
      function open() {
        element.find('div').addClass('open');
        element.find('button').off('click',open);
        //without timeout it bubbles and executes close function immediately
        $timeout(()=>{
          $document.on('click', close);
        },0);
      }

      function close() {
        element.find('div').removeClass('open');
        $document.off('click', close);
        element.find('button').on('click',open);
      }

      element.find('button').on('click',open);
    },
    transclude: true,
    scope: {
      menuTitle: '@'
    }
  }
}

export default bootstrapDropdownDirective;