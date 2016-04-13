class AuthService{
  constructor(FirebaseConfigService) {
    this._auth = FirebaseConfigService.getAuth();
  }

  $waitForAuth(){
    return this._auth.$waitForAuth();
  }

  $requireAuth(){
    return this._auth.$requireAuth();
  }

  $authWithPassword(credentials){
    return this._auth.$authWithPassword(credentials);
  }

  $unauth(){
    return this._auth.$unauth();
  }

  $onAuth(callback){
    return this._auth.$onAuth(callback)
  }

  $getAuth(){
    return this._auth.$getAuth();
  }

}
export default AuthService;