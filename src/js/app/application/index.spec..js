import FirebaseConfigServiceSpec from './services/firebase-config-service/firebase-config-service.spec';

describe('mailApplication',function () {

  beforeEach(window.module('mailApplication'));

  describe('FirebaseConfigService',FirebaseConfigServiceSpec);
});