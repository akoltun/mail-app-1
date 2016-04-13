import mailListTemplate from './mails-list.html';

class Controller {
  constructor($state, $scope, MailsService) {
    this._$state = $state;
    this._MailsService = MailsService;
    this.checkedMailsList = new Set();
    MailsService
      .getMailList()
      .then((mailList) => {
        $scope.$watch( () => mailList, mailList => {
          this.mailList = this._filterList(mailList);
        },true);
      });
  }

  delete(){
    this.checkedMailsList.forEach(mail =>{
      if(this.boxId == 'bin'){
        this._MailsService.remove(mail);
      }else{
        mail.bin = true;
        this._MailsService.update(mail);
      }
      this.checkedMailsList.delete(mail);
    })
  }

  moveToSpam(){
    this.checkedMailsList.forEach(mail =>{
      mail.spam = true;
      this._MailsService.update(mail);
      this.checkedMailsList.delete(mail);
    })
  }

  moveFromSpam(){
    this.checkedMailsList.forEach(mail =>{
      mail.spam = false;
      this._MailsService.update(mail);
      this.checkedMailsList.delete(mail);
    })
  }

  restoreFromBin(){
    this.checkedMailsList.forEach(mail =>{
      mail.bin = false;
      this._MailsService.update(mail);
      this.checkedMailsList.delete(mail);
    })
  }

  onCheckboxChange(mail,checked){
    if(checked){
      this.checkedMailsList.add(mail);
    }else{
      this.checkedMailsList.delete(mail);
    }
  }
  
  _filterList(mailList) {
    return mailList.filter((mail) => {
      if(this.boxId == "spam"){
        return !!mail.spam;
      }else if(this.boxId == "bin"){
        return !!mail.bin;
      }
      return !mail.spam && !mail.bin && mail.type == this.boxId;
    });
  }

  viewEmail(mail) {
    if(mail.type == this._MailsService.ITEM_TYPE_DRAFT)
      this._$state.go('compose', {mailId: mail.id});
    else
      this._$state.go('letter', {mailId: mail.id});
  }
}

const mailsComposeEmailComponent = {
  template: mailListTemplate,
  bindings: {
    boxId: '<'
  },
  controller: Controller
};

export default mailsComposeEmailComponent;