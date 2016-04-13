import './mails-star.css'
import mailsStarTemplate from './mails-star.html';

class Controller {
  constructor(MailsService) {
    this._MailsService = MailsService;
    this._starsList = [
      {id:0, className: 'glyphicon glyphicon-star-empty'},
      {id:1, className: 'glyphicon glyphicon-star text-primary'},
      {id:2, className: 'glyphicon glyphicon-star text-success'},
      {id:3, className: 'glyphicon glyphicon-star text-info'},
      {id:4, className: 'glyphicon glyphicon-star text-warning'},
      {id:5, className: 'glyphicon glyphicon-star text-danger'}
    ];
    this._setClassName(this.mail.selectedStarId);
  }

  _setClassName(index = 0){
    this.className = this._starsList[index].className;
  }

  switchStar(){
    if(!this.mail.selectedStarId){
      this.mail.selectedStarId = 0;
    }
    if(this.mail.selectedStarId === (this._starsList.length - 1) ){
      this.mail.selectedStarId = -1;
    }
    this.mail.selectedStarId++;
    this._setClassName(this.mail.selectedStarId);
    this._MailsService.update(this.mail);
  }
}

const mailsStarComponent = {
  template: mailsStarTemplate,
  controller: Controller,
  bindings: {
    mail: '='
  }
};

export default mailsStarComponent;