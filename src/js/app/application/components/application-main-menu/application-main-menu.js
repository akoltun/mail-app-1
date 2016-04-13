import './application-main-menu.css';
import mainMenuTemplate from './application-main-menu.html';

class Controller {
  constructor($state){
    this._$state = $state;
  }

  isSelected(menuItem){
    return this._$state.includes(menuItem.state);
  }
}

const applicationMainMenuComponent = {
  template: mainMenuTemplate,
  bindings: {
    currentPageId: '=',
    menuItems: '<'
  },
  controller: Controller
};

export default applicationMainMenuComponent;