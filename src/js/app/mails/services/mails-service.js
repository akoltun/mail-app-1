class MailsService {
  constructor($http, $q, FirebaseConfigService) {
    this._$http = $http;
    this._$q = $q;
    this._FirebaseConfigService = FirebaseConfigService;
    this._fireBaseObjectName = 'mailList';
    this.ITEM_TYPE_DRAFT = 'drafts';
    this.ITEM_TYPE_SENT = 'sent';
    this.ITEM_TYPE_INBOX = 'inbox';
  }
  
  getSelectedBoxId(){
    return this._selectedBoxId;
  }
  
  setSelectedBoxId(boxId){
    this._selectedBoxId = boxId;
  }

  getMailList() {
    const url = this._FirebaseConfigService.getBaseUrl() + this._fireBaseObjectName + '.json';
    if (this._mailList) {
      return this._$q.resolve(this._mailList);
    }
    return this._$http
      .get(url)
      .then(res => {
        this._mailList = this._FirebaseConfigService.normalizeToArray(res.data);
        return this._mailList;
      });
  };

  get(id) {
    return this
      .getMailList()
      .then( mailList => mailList.filter(mail => mail.id == id)[0]);
  }

  add(newItem) {
    const url = this._FirebaseConfigService.getBaseUrl() + this._fireBaseObjectName + '.json';
    return this._$http.post(url, newItem)
      .then(response => {
        newItem.id = response.data.name;
        this._mailList.push(newItem);
        return newItem;
      });
  };

  update(newItem, oldItem) {
    const url = this._FirebaseConfigService.getBaseUrl() + this._fireBaseObjectName + '/' + newItem.id + '.json';
    return this._$http.put(url, newItem)
      .then(response => response.data)
      .then(newItem => {
        this._mailList[this._mailList.indexOf(oldItem ? oldItem : newItem)] = newItem;
      })
  };

  remove(item) {
    const url = this._FirebaseConfigService.getBaseUrl() + this._fireBaseObjectName + '/' + item.id + '.json';
    return this._$http
      .delete(url)
      .then(() => {
        delete this._mailList[this._mailList.indexOf(item)];
      });
  };
}
export default MailsService;