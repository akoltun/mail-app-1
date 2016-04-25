import composeEmailTemplate from './mails-compose-email.html';

class Controller {
  constructor($state, MailsService) {
    MailsService.setSelectedBoxId('drafts');
    this._$state = $state;
    this._MailsService = MailsService;
    if(this.mailId){
      MailsService
        .get(this.mailId)
        .then( mail => {
          this.saveDMailDraft = mail;
          this.mailDraft = angular.copy(mail);
        });
    }else{
      this.mailDraft = {};
    }
  }

  discard() {
    if(this.mailId){
      this._MailsService.remove(this.saveDMailDraft);
      this._$state.go('box', {boxId: 'drafts'});
    }else{
      this._$state.go('box', {boxId: 'inbox'});
    }
  }

  saveDraft() {
    this.mailDraft.type = this._MailsService.ITEM_TYPE_DRAFT;
    this.mailDraft.date = Date.now();
    if (this.mailDraft.id) {
      this._MailsService.update(this.mailDraft, this.saveDMailDraft);
    } else {
      this._MailsService.add(this.mailDraft);
    }
    this._$state.go('box', {boxId: 'drafts'});
  }

  send() {
    this.mailDraft.type = this._MailsService.ITEM_TYPE_SENT;
    this.mailDraft.date = Date.now();
    if (this.mailDraft.id) {
      this._MailsService.update(this.mailDraft, this.saveDMailDraft);
    } else {
      this._MailsService.add(this.mailDraft);
    }
    this._$state.go('box', {boxId: 'sent'});
  }
}

const mailsComposeEmail = {
  template: composeEmailTemplate,
  controller: Controller,
  bindings: {
    mailId: '@'
  }
};

export default mailsComposeEmail;