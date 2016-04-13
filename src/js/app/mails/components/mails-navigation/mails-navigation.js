import mailNavigationTemplate from './mails-navigation.html';

class Controller {
  constructor(MailsService) {
    this._MailsService = MailsService;
    this.boxes = [{
      id: 'inbox',
      title: "Inbox"
    }, {
      id: 'sent',
      title: "Sent Mail"
    }, {
      id: 'drafts',
      title: "Drafts"
    }, {
      id: 'spam',
      title: "Spam"
    }, {
      id: 'bin',
      title: "Bin"
    }];
  }
  
  getSelectedBoxId(){
    return this._MailsService.getSelectedBoxId();
  }
}

const mailsNavigationComponent = {
  template: mailNavigationTemplate,
  controller: Controller
};

export default mailsNavigationComponent;