class ContactsService {
  constructor($http, $q, FirebaseConfigService) {
    this._$http = $http;
    this._$q = $q;
    this._FirebaseConfigService = FirebaseConfigService;
    this._fireBaseObjectName = 'users';
  }

  getContacts() {
    const url = this._FirebaseConfigService.getBaseUrl() + this._fireBaseObjectName + '.json';
    if (this._users) {
      return this._$q.resolve(this._users);
    }
    return this._$http
      .get(url)
      .then(res => {
        this._users = this._FirebaseConfigService.normalizeToArray(res.data);
        return this._users;
      });

  };

  add(newItem) {
    const url = this._FirebaseConfigService.getBaseUrl() + this._fireBaseObjectName + '.json';
    return this._$http.post(url, newItem)
      .then(response => {
        newItem.id = response.data.name;
        return newItem;
      });
  };

  update(item) {
    const url = this._FirebaseConfigService.getBaseUrl() + this._fireBaseObjectName + '/' + item.id + '.json';
    return this._$http.put(url, item)
      .then(response => response.data);
  };

  remove(item) {
    const url = this._FirebaseConfigService.getBaseUrl() + this._fireBaseObjectName + '/' + item.id + '.json';
    return this._$http.delete(url);
  };
}

export default ContactsService;