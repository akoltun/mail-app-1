class FirebaseConfigService {
  constructor($firebaseAuth) {
    this._baseUrl = 'https://angular-js-ru-a1h05.firebaseio.com/';
    this._fireBase = new Firebase(this._baseUrl);
    this._auth = $firebaseAuth(this._fireBase);
  }

  getBaseUrl() {
    return this._baseUrl + this._auth.$getAuth().uid + '/';
  };

  getAuth(){
    return this._auth;
  }

  normalizeToArray(object) {
    if (!object) return [];
    return Object.keys(object).map(key => {
      let normalizedObject = object[key];
      normalizedObject.id = key;
      return normalizedObject;
    });
  };
}

export default FirebaseConfigService;