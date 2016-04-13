class ChatService {
  constructor($http, FirebaseConfigService) {
    this._$http = $http;
    this._FirebaseConfigService = FirebaseConfigService;
    this._fireBaseObjectName = 'chat';
  }

  getMessages(userId) {
    var url = this._FirebaseConfigService.getBaseUrl() + this._fireBaseObjectName + '/' + userId + '.json';
    return this._$http
      .get(url)
      .then(res => this._FirebaseConfigService.normalizeToArray(res.data));
  };

  add(userId, newMessage) {
    var url = this._FirebaseConfigService.getBaseUrl() + this._fireBaseObjectName + '/' + userId + '.json';
    return this._$http.post(url, newMessage);
  };
}

export default ChatService;