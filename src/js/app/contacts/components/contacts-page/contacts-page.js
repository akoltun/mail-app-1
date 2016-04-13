import './contacts-page.css';
import contactsTemplate from './contacts-page.html';

class Controller {
  constructor(ContactsService) {
    this._ContactsService = ContactsService;
    this.mode = 'list';
    ContactsService
      .getContacts()
      .then((users) => {
        this.users = users;
      });
  }

  setMode(mode) {
    this.mode = mode;
  };

  getMode() {
    return this.mode;
  };

  addUser(newUser) {
    this._ContactsService.add(newUser)
      .then(newUser => {
        this.users.push(newUser);
      });
  };

  updateUser(newUser, oldUser) {
    this._ContactsService.update(newUser)
      .then(newUser => {
        this.users[this.users.indexOf(oldUser)] = newUser;
      });
  };

  removeUser(user) {
    this._ContactsService.remove(user)
      .then(() => {
        this.users.splice(this.users.indexOf(user), 1);
      });
  };
}

const contactsPageComponent = {
  template: contactsTemplate,
  controller: Controller
};

export default contactsPageComponent;