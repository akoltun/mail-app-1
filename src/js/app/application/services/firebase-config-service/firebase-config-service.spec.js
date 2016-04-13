function FirebaseConfigServiceSpec() {

  var FirebaseConfigService;

  beforeEach(inject(function (_FirebaseConfigService_) {
    FirebaseConfigService = _FirebaseConfigService_;
  }));

  it('should return correct baseURL',function () {
    expect(FirebaseConfigService.getBaseUrl()).toBe('https://angular-js-ru-a1h05.firebaseio.com/');
  })
}

export default FirebaseConfigServiceSpec;