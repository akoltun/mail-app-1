import mailsLetterTemplate from './mails-letter.html';

class Controller {
  constructor($state, MailsService) {
    this._$state = $state;
    this._MailsService = MailsService;
    MailsService
      .get(this.mailId)
      .then( mail => {
        if(mail.bin){
          MailsService.setSelectedBoxId('bin');
        }else if(mail.spam){
          MailsService.setSelectedBoxId('spam');
        }else{
          MailsService.setSelectedBoxId(mail.type);
        }
        this.mail = mail;
      });
  }

  delete(){
    let boxId = this.mail.type;
    if(this.mail.bin){
      boxId = 'bin';
      this._MailsService.remove(this.mail);
    }else{
      this.mail.bin = true;
      this._MailsService.update(this.mail);
    }
    this._$state.go('box', {boxId: boxId});
  }

  restoreFromBin(){
    this.mail.bin = false;
    this._MailsService.update(this.mail);
    this._$state.go('box', {boxId: this.mail.type});
  }

  moveToSpam(){
    this.mail.spam = true;
    this._MailsService.update(this.mail);
    this._$state.go('box', {boxId: 'inbox'});
  }

  moveFromSpam(){
    this.mail.spam = false;
    this._MailsService.update(this.mail);
    this._$state.go('box', {boxId: 'inbox'});
  }

}

const mailsLetterComponent = {
  template: mailsLetterTemplate,
  controller: Controller,
  bindings: {
    mailId: '@'
  }
};

export default mailsLetterComponent;