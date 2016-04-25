/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(5);

	__webpack_require__(16);

	__webpack_require__(20);

	__webpack_require__(23);

	__webpack_require__(38);

		__webpack_require__(46);

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _applicationPage = __webpack_require__(6);

	var _applicationPage2 = _interopRequireDefault(_applicationPage);

	var _applicationMainMenu = __webpack_require__(11);

	var _applicationMainMenu2 = _interopRequireDefault(_applicationMainMenu);

	var _firebaseConfigService = __webpack_require__(15);

	var _firebaseConfigService2 = _interopRequireDefault(_firebaseConfigService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mailApplication = angular.module('mailApplication', ['ngMessages', 'ui.router', 'mails', 'chat', 'contacts', 'bootstrap', 'auth']);

	mailApplication.config(function ($urlRouterProvider) {
	  $urlRouterProvider.otherwise('/mail/box=inbox');
	});

	mailApplication.component('applicationPage', _applicationPage2.default);
	mailApplication.component('applicationMainMenu', _applicationMainMenu2.default);
	mailApplication.service('FirebaseConfigService', _firebaseConfigService2.default);

	exports.default = mailApplication;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(7);

	var _applicationPage = __webpack_require__(10);

	var _applicationPage2 = _interopRequireDefault(_applicationPage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = function () {
	  function Controller($state, AuthService, FirebaseConfigService) {
	    var _this = this;

	    _classCallCheck(this, Controller);

	    this._$state = $state;
	    this._AuthService = AuthService;
	    this._FirebaseConfigService = FirebaseConfigService;
	    this.menuItems = [{
	      title: 'Mails',
	      state: 'mail',
	      href: 'box({boxId:"inbox"})'
	    }, {
	      title: 'Contacts',
	      state: 'contacts',
	      href: 'contacts'
	    }];
	    this.loggined = false;

	    AuthService.$onAuth(function (authData) {
	      if (authData) {
	        _this.loggined = true;
	      } else {
	        _this.loggined = false;
	        _this._$state.go('auth');
	      }
	    });
	  }

	  _createClass(Controller, [{
	    key: 'unauth',
	    value: function unauth() {
	      this._AuthService.$unauth();
	    }
	  }]);

	  return Controller;
	}();

	var applicationPageComponent = {
	  template: _applicationPage2.default,
	  controller: Controller
	};

		exports.default = applicationPageComponent;

/***/ },
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<header class=\"application-page-header\"> <a ui-sref=\"box({boxId:'inbox'})\" class=\"application-page-header__logo\"></a>\n<a ng-if=\"$ctrl.loggined\" ng-click=\"$ctrl.unauth()\" class=\"btn btn-danger application-page-header__logout\">Logout</a> </header> <section class=\"toolbar\"> <application-main-menu current-page-id=\"$ctrl.currentPageId\" menu-items=\"$ctrl.menuItems\"></application-main-menu> </section> <ui-view></ui-view>";
	ngModule.run(["$templateCache",function(c){c.put("components/application-page/application-page.html",v1)}]);
	module.exports=v1;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(12);

	var _applicationMainMenu = __webpack_require__(14);

	var _applicationMainMenu2 = _interopRequireDefault(_applicationMainMenu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = function () {
	  function Controller($state) {
	    _classCallCheck(this, Controller);

	    this._$state = $state;
	  }

	  _createClass(Controller, [{
	    key: 'isSelected',
	    value: function isSelected(menuItem) {
	      return this._$state.includes(menuItem.state);
	    }
	  }]);

	  return Controller;
	}();

	var applicationMainMenuComponent = {
	  template: _applicationMainMenu2.default,
	  bindings: {
	    currentPageId: '=',
	    menuItems: '<'
	  },
	  controller: Controller
	};

		exports.default = applicationMainMenuComponent;

/***/ },
/* 12 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 13 */,
/* 14 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<bootstrap-dropdown class=\"application-main-menu\" menu-title=\"MailApp\"> <li ng-repeat=\"menuItem in $ctrl.menuItems\" ng-class=\"{'active': $ctrl.isSelected(menuItem)}\"> <a class=\"btn btn-link\" ui-sref=\"{{menuItem.href}}\" href=\"#\"> {{menuItem.title}} </a> </li> </bootstrap-dropdown>";
	ngModule.run(["$templateCache",function(c){c.put("components/application-main-menu/application-main-menu.html",v1)}]);
	module.exports=v1;

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FirebaseConfigService = function () {
	  function FirebaseConfigService($firebaseAuth) {
	    _classCallCheck(this, FirebaseConfigService);

	    this._baseUrl = 'https://angular-js-ru-a1h05.firebaseio.com/';
	    this._fireBase = new Firebase(this._baseUrl);
	    this._auth = $firebaseAuth(this._fireBase);
	  }

	  _createClass(FirebaseConfigService, [{
	    key: 'getBaseUrl',
	    value: function getBaseUrl() {
	      return this._baseUrl + this._auth.$getAuth().uid + '/';
	    }
	  }, {
	    key: 'getAuth',
	    value: function getAuth() {
	      return this._auth;
	    }
	  }, {
	    key: 'normalizeToArray',
	    value: function normalizeToArray(object) {
	      if (!object) return [];
	      return Object.keys(object).map(function (key) {
	        var normalizedObject = object[key];
	        normalizedObject.id = key;
	        return normalizedObject;
	      });
	    }
	  }]);

	  return FirebaseConfigService;
	}();

		exports.default = FirebaseConfigService;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _authService = __webpack_require__(17);

	var _authService2 = _interopRequireDefault(_authService);

	var _authPage = __webpack_require__(18);

	var _authPage2 = _interopRequireDefault(_authPage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var auth = angular.module('auth', ['firebase']);

	auth.run(function ($rootScope, $state) {
	  $rootScope.$on("$stateChangeError", function (event, toState, toParams, fromState, fromParams, error) {
	    if (error === "AUTH_REQUIRED") {
	      $state.go("auth");
	    }
	  });
	});

	auth.service("AuthService", _authService2.default);
	auth.component("authPage", _authPage2.default);

	auth.config(function ($stateProvider) {
	  $stateProvider.state("auth", {
	    template: "<auth-page></auth-page>",
	    resolve: {
	      "currentAuth": function currentAuth($state, AuthService) {
	        return AuthService.$waitForAuth().then(function (authData) {
	          if (authData) {
	            $state.go('box', { boxId: 'inbox' });
	          }
	        });
	      }
	    },
	    url: '/auth'
	  });
	});

		exports.default = auth;

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AuthService = function () {
	  function AuthService(FirebaseConfigService) {
	    _classCallCheck(this, AuthService);

	    this._auth = FirebaseConfigService.getAuth();
	  }

	  _createClass(AuthService, [{
	    key: "$waitForAuth",
	    value: function $waitForAuth() {
	      return this._auth.$waitForAuth();
	    }
	  }, {
	    key: "$requireAuth",
	    value: function $requireAuth() {
	      return this._auth.$requireAuth();
	    }
	  }, {
	    key: "$authWithPassword",
	    value: function $authWithPassword(credentials) {
	      return this._auth.$authWithPassword(credentials);
	    }
	  }, {
	    key: "$unauth",
	    value: function $unauth() {
	      return this._auth.$unauth();
	    }
	  }, {
	    key: "$onAuth",
	    value: function $onAuth(callback) {
	      return this._auth.$onAuth(callback);
	    }
	  }, {
	    key: "$getAuth",
	    value: function $getAuth() {
	      return this._auth.$getAuth();
	    }
	  }]);

	  return AuthService;
	}();

		exports.default = AuthService;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _authPage = __webpack_require__(19);

	var _authPage2 = _interopRequireDefault(_authPage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = function () {
	  function Controller($state, AuthService) {
	    _classCallCheck(this, Controller);

	    this._$state = $state;
	    this._AuthService = AuthService;
	    this.email = 'aaa@bbb.ccc';
	    this.password = 'aaa@bbb.ccc';
	  }

	  _createClass(Controller, [{
	    key: 'auth',
	    value: function auth() {
	      var _this = this;

	      var credentials = {
	        email: this.email,
	        password: this.password
	      };
	      this._AuthService.$authWithPassword(credentials).then(function () {
	        _this._$state.go('box', { boxId: 'inbox' });
	      }).catch(function (error) {
	        alert("Authentication failed:" + error);
	      });
	    }
	  }]);

	  return Controller;
	}();

	var authPageComponent = {
	  template: _authPage2.default,
	  controller: Controller
	};

		exports.default = authPageComponent;

/***/ },
/* 19 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"container\"> <h2 class=\"text-center\">Sign in to continue to MailApp</h2> <br> <div class=\"panel panel-default\"> <div class=\"panel-body\"> <form class=\"form-horizontal\" ng-submit=\"$ctrl.auth()\"> <div class=\"form-group\"> <label class=\"col-sm-2 control-label\">Email</label> <div class=\"col-sm-10\"> <input type=\"email\" class=\"form-control\" placeholder=\"Email\" ng-model=\"$ctrl.email\"> </div> </div> <div class=\"form-group\"> <label class=\"col-sm-2 control-label\">Password</label> <div class=\"col-sm-10\"> <input type=\"password\" class=\"form-control\" placeholder=\"Password\" ng-model=\"$ctrl.password\"> </div> </div> <div class=\"form-group\"> <div class=\"col-sm-offset-2 col-sm-10\"> <button type=\"submit\" class=\"btn btn-default btn-primary\">Sign in</button> </div> </div> </form> </div> </div> </div>";
	ngModule.run(["$templateCache",function(c){c.put("components/auth-page/auth-page.html",v1)}]);
	module.exports=v1;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _bootstrapDropdown = __webpack_require__(21);

	var _bootstrapDropdown2 = _interopRequireDefault(_bootstrapDropdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var bootstrap = angular.module('bootstrap', []);

	bootstrap.directive('bootstrapDropdown', _bootstrapDropdown2.default);

	exports.default = bootstrap;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _bootstrapDropdown = __webpack_require__(22);

	var _bootstrapDropdown2 = _interopRequireDefault(_bootstrapDropdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function bootstrapDropdownDirective($timeout, $document) {
	  return {
	    template: _bootstrapDropdown2.default,
	    restrict: 'E',
	    controllerAs: '$ctrl',
	    link: function link(scope, element) {
	      function open() {
	        element.find('div').addClass('open');
	        element.find('button').off('click', open);
	        //without timeout it bubbles and executes close function immediately
	        $timeout(function () {
	          $document.on('click', close);
	        }, 0);
	      }

	      function close() {
	        element.find('div').removeClass('open');
	        $document.off('click', close);
	        element.find('button').on('click', open);
	      }

	      element.find('button').on('click', open);
	    },

	    transclude: true,
	    scope: {
	      menuTitle: '@'
	    }
	  };
	}

		exports.default = bootstrapDropdownDirective;

/***/ },
/* 22 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"dropdown\"> <button type=\"button\" class=\"btn btn-link\"> {{menuTitle}}\n<span class=\"caret\"></span> </button> <ul class=\"dropdown-menu\" ng-transclude></ul> </div>";
	ngModule.run(["$templateCache",function(c){c.put("directives/bootstrap-dropdown/bootstrap-dropdown.html",v1)}]);
	module.exports=v1;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _chatRoot = __webpack_require__(24);

	var _chatRoot2 = _interopRequireDefault(_chatRoot);

	var _chatInterlocutorSelector = __webpack_require__(28);

	var _chatInterlocutorSelector2 = _interopRequireDefault(_chatInterlocutorSelector);

	var _chatConversation = __webpack_require__(30);

	var _chatConversation2 = _interopRequireDefault(_chatConversation);

	var _chatControls = __webpack_require__(34);

	var _chatControls2 = _interopRequireDefault(_chatControls);

	var _chatOnUpdateScroll = __webpack_require__(36);

	var _chatOnUpdateScroll2 = _interopRequireDefault(_chatOnUpdateScroll);

	var _chatService = __webpack_require__(37);

	var _chatService2 = _interopRequireDefault(_chatService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var chat = angular.module('chat', ['ngMessages', 'ui.router', 'contacts']);

	chat.component('chatRoot', _chatRoot2.default);
	chat.component('chatInterlocutorSelector', _chatInterlocutorSelector2.default);
	chat.component('chatConversation', _chatConversation2.default);
	chat.component('chatControls', _chatControls2.default);
	chat.directive('chatOnUpdateScroll', _chatOnUpdateScroll2.default);
	chat.service('ChatService', _chatService2.default);

	exports.default = chat;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(25);

	var _chatRoot = __webpack_require__(27);

	var _chatRoot2 = _interopRequireDefault(_chatRoot);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = function () {
	  function Controller($timeout, $rootScope, ChatService, ContactsService) {
	    var _this = this;

	    _classCallCheck(this, Controller);

	    this._ChatService = ChatService;
	    this._$timeout = $timeout;
	    this._chatUpdateDelay = 2000;
	    this.chatIsEnabled = false;
	    ContactsService.getContacts().then(function (users) {
	      _this.users = users;
	    });
	    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState) {
	      if (_this._isMailStateLeaving(toState, fromState)) {
	        _this.endChat();
	      }
	    });
	  }

	  _createClass(Controller, [{
	    key: '_isMailStateLeaving',
	    value: function _isMailStateLeaving(toState, fromState) {
	      return (fromState.name == 'mail' || fromState.parent == 'mail') && toState.name != 'mail' && toState.parent != 'mail';
	    }
	  }, {
	    key: 'isChatEnabled',
	    value: function isChatEnabled() {
	      return this.chatIsEnabled;
	    }
	  }, {
	    key: 'setInterlocutor',
	    value: function setInterlocutor(user) {
	      this.selectedUser = user;
	    }
	  }, {
	    key: 'startChat',
	    value: function startChat() {
	      if (!this.isChatEnabled()) {
	        this.chatIsEnabled = true;
	        this._processMessagesReceivingLoop();
	      }
	    }
	  }, {
	    key: 'endChat',
	    value: function endChat() {
	      if (this.isChatEnabled()) {
	        this._$timeout.cancel(this._timeout);
	        this.chatIsEnabled = false;
	        delete this.selectedUser;
	      }
	    }
	  }, {
	    key: '_getMessages',
	    value: function _getMessages() {
	      var _this2 = this;

	      return this._ChatService.getMessages(this.selectedUser.id).then(function (messages) {
	        _this2.messages = messages;
	      });
	    }
	  }, {
	    key: '_processMessagesReceivingLoop',
	    value: function _processMessagesReceivingLoop() {
	      var _this3 = this;

	      this._getMessages().then(function () {
	        _this3._timeout = _this3._$timeout(function () {
	          _this3._processMessagesReceivingLoop();
	        }, _this3._chatUpdateDelay);
	      });
	    }
	  }]);

	  return Controller;
	}();

	var chatPageComponent = {
	  template: _chatRoot2.default,
	  controller: Controller
	};

		exports.default = chatPageComponent;

/***/ },
/* 25 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 26 */,
/* 27 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"panel panel-default panel-info\"> <button class=\"close chat-root-close\" ng-click=\"$ctrl.endChat()\" ng-if=\"$ctrl.chatIsEnabled\"> <span>×</span> </button> <div class=\"panel-body\"> <chat-interlocutor-selector users=\"$ctrl.users\" selected-user=\"$ctrl.selectedUser\"> </chat-interlocutor-selector> <chat-conversation selected-user-name=\"{{$ctrl.selectedUser.fullName}}\" messages=\"$ctrl.messages\" ng-if=\"$ctrl.selectedUser\"></chat-conversation> <chat-controls selected-user=\"$ctrl.selectedUser\" ng-if=\"$ctrl.selectedUser\"></chat-controls> </div> </div>";
	ngModule.run(["$templateCache",function(c){c.put("components/chat-root/chat-root.html",v1)}]);
	module.exports=v1;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _chatInterlocutorSelector = __webpack_require__(29);

	var _chatInterlocutorSelector2 = _interopRequireDefault(_chatInterlocutorSelector);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = function () {
	  function Controller() {
	    _classCallCheck(this, Controller);
	  }

	  _createClass(Controller, [{
	    key: 'startChat',
	    value: function startChat(user) {
	      this.chatPageController.setInterlocutor(user);
	      if (!this.chatPageController.isChatEnabled()) {
	        this.chatPageController.startChat();
	      }
	    }
	  }]);

	  return Controller;
	}();

	var chatInterlocutorSelectorComponent = {
	  template: _chatInterlocutorSelector2.default,
	  controller: Controller,
	  bindings: {
	    users: '<',
	    selectedUser: '='
	  },
	  require: {
	    chatPageController: '^^chatRoot'
	  }
	};

		exports.default = chatInterlocutorSelectorComponent;

/***/ },
/* 29 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"form-group\"> <label>Chat:</label> <select class=\"form-control\" ng-change=\"$ctrl.startChat($ctrl.selectedUser)\" ng-options=\"user as user.fullName for user in $ctrl.users track by user.id\" ng-model=\"$ctrl.selectedUser\"> </select> </div>";
	ngModule.run(["$templateCache",function(c){c.put("components/chat-interlocutor-selector/chat-interlocutor-selector.html",v1)}]);
	module.exports=v1;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(31);

	var _chatConversation = __webpack_require__(33);

	var _chatConversation2 = _interopRequireDefault(_chatConversation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var chatConversationComponent = {
	  template: _chatConversation2.default,
	  bindings: {
	    messages: '<',
	    selectedUserName: '@'
	  }
	};

		exports.default = chatConversationComponent;

/***/ },
/* 31 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 32 */,
/* 33 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"pre-scrollable panel panel-default chat-conversation\" chat-on-update-scroll> <div ng-repeat=\"message in $ctrl.messages | orderBy : message.date : true\"> <div ng-if=\"message.type == 'inbox'\" class=\"text-danger\">&nbsp;Me:</div> <div ng-if=\"message.type == 'sent'\" class=\"text-danger text-right\">&nbsp;{{$ctrl.selectedUserName}}:</div> <div ng-class=\"{'text-right' : message.type == 'sent'}\" class=\"text-primary\"> &nbsp;{{message.date | date: 'dd/MM/yyyy, HH:mm'}} </div> <div class=\"well well-sm\">{{message.text}}</div> </div> </div>";
	ngModule.run(["$templateCache",function(c){c.put("components/chat-conversation/chat-conversation.html",v1)}]);
	module.exports=v1;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _chatControls = __webpack_require__(35);

	var _chatControls2 = _interopRequireDefault(_chatControls);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = function () {
	  function Controller(ChatService) {
	    _classCallCheck(this, Controller);

	    this._ChatService = ChatService;
	  }

	  _createClass(Controller, [{
	    key: 'sendMessage',
	    value: function sendMessage() {
	      var message = {};
	      message.date = Date.now();
	      message.text = this.messageText;
	      message.type = 'sent';
	      this.messageText = '';
	      this._ChatService.add(this.selectedUser.id, message);
	    }
	  }]);

	  return Controller;
	}();

	var chatControlsComponent = {
	  template: _chatControls2.default,
	  bindings: {
	    selectedUser: '<'
	  },
	  controller: Controller
	};

		exports.default = chatControlsComponent;

/***/ },
/* 35 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"form-group\"> <input placeholder=\"Enter your message\" class=\"form-control\" ng-keyup=\"$event.keyCode == 13 && $ctrl.sendMessage()\" ng-model=\"$ctrl.messageText\" type=\"text\"> <br> <div class=\"text-right\"> <button ng-click=\"$ctrl.sendMessage()\" type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!$ctrl.messageText\">Submit </button> </div> </div>";
	ngModule.run(["$templateCache",function(c){c.put("components/chat-controls/chat-controls.html",v1)}]);
	module.exports=v1;

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function chatOnUpdateScrollDirective() {
	  return {
	    restrict: 'A',
	    link: function link(scope, element, attrs, chatConversationController) {
	      function scrollToTop() {
	        element[0].scrollTop = 0;
	      }
	      scope.$watch(function () {
	        return chatConversationController.messages;
	      }, scrollToTop, true);
	    },

	    require: '^^chatConversation',
	    scope: {}
	  };
	}

		exports.default = chatOnUpdateScrollDirective;

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ChatService = function () {
	  function ChatService($http, FirebaseConfigService) {
	    _classCallCheck(this, ChatService);

	    this._$http = $http;
	    this._FirebaseConfigService = FirebaseConfigService;
	    this._fireBaseObjectName = 'chat';
	  }

	  _createClass(ChatService, [{
	    key: 'getMessages',
	    value: function getMessages(userId) {
	      var _this = this;

	      var url = this._FirebaseConfigService.getBaseUrl() + this._fireBaseObjectName + '/' + userId + '.json';
	      return this._$http.get(url).then(function (res) {
	        return _this._FirebaseConfigService.normalizeToArray(res.data);
	      });
	    }
	  }, {
	    key: 'add',
	    value: function add(userId, newMessage) {
	      var url = this._FirebaseConfigService.getBaseUrl() + this._fireBaseObjectName + '/' + userId + '.json';
	      return this._$http.post(url, newMessage);
	    }
	  }]);

	  return ChatService;
	}();

		exports.default = ChatService;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _contactsPage = __webpack_require__(39);

	var _contactsPage2 = _interopRequireDefault(_contactsPage);

	var _contactsUserCard = __webpack_require__(43);

	var _contactsUserCard2 = _interopRequireDefault(_contactsUserCard);

	var _contactsService = __webpack_require__(45);

	var _contactsService2 = _interopRequireDefault(_contactsService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var contacts = angular.module('contacts', ['ngMessages', 'ui.router']);

	contacts.config(function ($stateProvider) {
	  $stateProvider.state('contacts', {
	    url: '/contacts',
	    template: '<contacts-page></contacts-page>',
	    resolve: {
	      "currentAuth": function currentAuth(AuthService) {
	        return AuthService.$requireAuth();
	      }
	    }
	  });
	});
	contacts.component('contactsUserCard', _contactsUserCard2.default);
	contacts.component('contactsPage', _contactsPage2.default);
	contacts.service('ContactsService', _contactsService2.default);

	exports.default = contacts;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(40);

	var _contactsPage = __webpack_require__(42);

	var _contactsPage2 = _interopRequireDefault(_contactsPage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = function () {
	  function Controller(ContactsService) {
	    var _this = this;

	    _classCallCheck(this, Controller);

	    this._ContactsService = ContactsService;
	    this.mode = 'list';
	    ContactsService.getContacts().then(function (users) {
	      _this.users = users;
	    });
	  }

	  _createClass(Controller, [{
	    key: 'setMode',
	    value: function setMode(mode) {
	      this.mode = mode;
	    }
	  }, {
	    key: 'getMode',
	    value: function getMode() {
	      return this.mode;
	    }
	  }, {
	    key: 'addUser',
	    value: function addUser(newUser) {
	      var _this2 = this;

	      this._ContactsService.add(newUser).then(function (newUser) {
	        _this2.users.push(newUser);
	      });
	    }
	  }, {
	    key: 'updateUser',
	    value: function updateUser(newUser, oldUser) {
	      var _this3 = this;

	      this._ContactsService.update(newUser).then(function (newUser) {
	        _this3.users[_this3.users.indexOf(oldUser)] = newUser;
	      });
	    }
	  }, {
	    key: 'removeUser',
	    value: function removeUser(user) {
	      var _this4 = this;

	      this._ContactsService.remove(user).then(function () {
	        _this4.users.splice(_this4.users.indexOf(user), 1);
	      });
	    }
	  }]);

	  return Controller;
	}();

	var contactsPageComponent = {
	  template: _contactsPage2.default,
	  controller: Controller
	};

		exports.default = contactsPageComponent;

/***/ },
/* 40 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 41 */,
/* 42 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<header class=\"contacts-page-header\"> <h1 class=\"contacts-page-header__title\">Contacts</h1> </header> <div class=\"container\"> <div class=\"text-left\"> <button ng-click=\"$ctrl.setMode(&quot;new&quot;)\" ng-disabled=\"$ctrl.mode === &quot;new&quot;\" class=\"btn btn-success btn-lg\"> Add new contact </button> <br><br> </div> <div class=\"panel-group\"> <contacts-user-card ng-if=\"$ctrl.mode === &quot;new&quot;\" mode=\"edit\" user=\"user\"> </contacts-user-card> <contacts-user-card ng-if=\"$ctrl.mode === &quot;list&quot;\" ng-repeat=\"user in $ctrl.users\" user=\"user\" mode=\"presentation\"> </contacts-user-card> </div> </div>";
	ngModule.run(["$templateCache",function(c){c.put("components/contacts-page/contacts-page.html",v1)}]);
	module.exports=v1;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _contactsUserCard = __webpack_require__(44);

	var _contactsUserCard2 = _interopRequireDefault(_contactsUserCard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = function () {
	  function Controller() {
	    _classCallCheck(this, Controller);
	  }

	  _createClass(Controller, [{
	    key: 'remove',
	    value: function remove() {
	      this.contactsCtrl.removeUser(this.user);
	    }
	  }, {
	    key: 'stopEdition',
	    value: function stopEdition() {
	      this.mode = 'presentation';
	      delete this.userDraft;
	      if (this.contactsCtrl.getMode != 'list') {
	        this.contactsCtrl.setMode('list');
	      }
	    }
	  }, {
	    key: 'save',
	    value: function save() {
	      if (this.userDraft.id) {
	        this.contactsCtrl.updateUser(this.userDraft, this.user);
	      } else {
	        this.contactsCtrl.addUser(this.userDraft);
	      }
	      this.stopEdition();
	    }
	  }, {
	    key: 'startEdition',
	    value: function startEdition() {
	      this.mode = 'edit';
	      this.userDraft = angular.copy(this.user);
	      this.userDraft.birthdate = new Date(this.userDraft.birthdate);
	    }
	  }]);

	  return Controller;
	}();

	var contactsUserCardComponent = {
	  bindings: {
	    user: '=',
	    mode: '@'
	  },
	  template: _contactsUserCard2.default,
	  require: {
	    contactsCtrl: '^^contactsPage'
	  },
	  controller: Controller
	};

		exports.default = contactsUserCardComponent;

/***/ },
/* 44 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"panel panel-default\"> <div class=\"panel-heading\"> <h4 class=\"panel-title\"><div href=\"javascript:;\" class=\"collapsed\"> {{$ctrl.user.fullName}} </div></h4> </div> <div class=\"panel-collapse collapse in\"> <div class=\"panel-body\" ng-if=\"$ctrl.mode == &quot;presentation&quot;\"> <address> <strong>Email</strong><br> <div>{{$ctrl.user.email}}</div> </address> <address> <strong>Address</strong><br> {{$ctrl.user.address}} </address> <button ng-click=\"$ctrl.startEdition()\" class=\"btn btn-default\">Edit</button>\n<button ng-click=\"$ctrl.remove()\" class=\"btn btn-default\">Delete</button> </div> <div class=\"panel-body\" ng-if=\"$ctrl.mode == &quot;edit&quot;\"> <form name=\"usercard\"> <div class=\"form-group\" ng-class=\"{&quot;has-error&quot;: !usercard.fullName.$valid && usercard.fullName.$dirty}\"> <label>Name</label> <input class=\"form-control\" ng-model=\"$ctrl.userDraft.fullName\" name=\"fullName\" type=\"text\" required> <label ng-messages=\"usercard.fullName.$error\"> <span ng-message=\"required\">Field is mantodory</span> </label> </div> <div class=\"form-group\" ng-class=\"{&quot;has-error&quot;: !usercard.email.$valid && usercard.email.$dirty}\"> <label>Email</label> <input class=\"form-control\" ng-model=\"$ctrl.userDraft.email\" type=\"email\" required name=\"email\"> <label ng-messages=\"usercard.email.$error\"> <span ng-message=\"required\">Field is mantodory</span>\n<span ng-message=\"email\">Value have to be valid email</span> </label> </div> <div class=\"form-group\"> <label>Address</label> <input class=\"form-control\" ng-model=\"$ctrl.userDraft.address\" type=\"text\"> </div> <button ng-disabled=\"!usercard.$valid\" ng-click=\"$ctrl.save()\" class=\"btn btn-default\">Save</button>\n<button ng-click=\"$ctrl.stopEdition()\" type=\"submit\" class=\"btn btn-default\">Discard</button> </form> </div> </div> </div>";
	ngModule.run(["$templateCache",function(c){c.put("components/contacts-user-card/contacts-user-card.html",v1)}]);
	module.exports=v1;

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ContactsService = function () {
	  function ContactsService($http, $q, FirebaseConfigService) {
	    _classCallCheck(this, ContactsService);

	    this._$http = $http;
	    this._$q = $q;
	    this._FirebaseConfigService = FirebaseConfigService;
	    this._fireBaseObjectName = 'users';
	  }

	  _createClass(ContactsService, [{
	    key: 'getContacts',
	    value: function getContacts() {
	      var _this = this;

	      var url = this._FirebaseConfigService.getBaseUrl() + this._fireBaseObjectName + '.json';
	      if (this._users) {
	        return this._$q.resolve(this._users);
	      }
	      return this._$http.get(url).then(function (res) {
	        _this._users = _this._FirebaseConfigService.normalizeToArray(res.data);
	        return _this._users;
	      });
	    }
	  }, {
	    key: 'add',
	    value: function add(newItem) {
	      var url = this._FirebaseConfigService.getBaseUrl() + this._fireBaseObjectName + '.json';
	      return this._$http.post(url, newItem).then(function (response) {
	        newItem.id = response.data.name;
	        return newItem;
	      });
	    }
	  }, {
	    key: 'update',
	    value: function update(item) {
	      var url = this._FirebaseConfigService.getBaseUrl() + this._fireBaseObjectName + '/' + item.id + '.json';
	      return this._$http.put(url, item).then(function (response) {
	        return response.data;
	      });
	    }
	  }, {
	    key: 'remove',
	    value: function remove(item) {
	      var url = this._FirebaseConfigService.getBaseUrl() + this._fireBaseObjectName + '/' + item.id + '.json';
	      return this._$http.delete(url);
	    }
	  }]);

	  return ContactsService;
	}();

		exports.default = ContactsService;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mailsService = __webpack_require__(47);

	var _mailsService2 = _interopRequireDefault(_mailsService);

	var _mailsComposeEmail = __webpack_require__(48);

	var _mailsComposeEmail2 = _interopRequireDefault(_mailsComposeEmail);

	var _mailsList = __webpack_require__(50);

	var _mailsList2 = _interopRequireDefault(_mailsList);

	var _mailsNavigation = __webpack_require__(52);

	var _mailsNavigation2 = _interopRequireDefault(_mailsNavigation);

	var _mailsPage = __webpack_require__(54);

	var _mailsPage2 = _interopRequireDefault(_mailsPage);

	var _mailsLetter = __webpack_require__(56);

	var _mailsLetter2 = _interopRequireDefault(_mailsLetter);

	var _mailsStar = __webpack_require__(58);

	var _mailsStar2 = _interopRequireDefault(_mailsStar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mails = angular.module('mails', ['ngMessages', 'ui.router']);

	mails.config(function ($stateProvider) {
	  $stateProvider.state('mail', {
	    url: '/mail',
	    template: '<mails-page></mails-page>',
	    abstract: true,
	    resolve: {
	      "currentAuth": function currentAuth(AuthService) {
	        return AuthService.$requireAuth();
	      }
	    }
	  }).state('compose', {
	    parent: 'mail',
	    url: '/compose/:mailId',
	    template: '<mails-compose-email mail-id="{{$ctrl.mailId}}"></mails-compose-email>',
	    controller: function controller($stateParams) {
	      this.mailId = $stateParams.mailId;
	    },
	    controllerAs: '$ctrl'
	  }).state('letter', {
	    parent: 'mail',
	    url: '/letter:mailId',
	    template: '<mails-letter mail-id="{{$ctrl.mailId}}"></mails-letter>',
	    controller: function controller($stateParams) {
	      this.mailId = $stateParams.mailId;
	    },
	    controllerAs: '$ctrl'
	  }).state('box', {
	    parent: 'mail',
	    url: '/box=:boxId',
	    template: '<mails-list box-id="$ctrl.boxId"></mails-list>',
	    controller: function controller($stateParams, MailsService) {
	      MailsService.setSelectedBoxId($stateParams.boxId);
	      this.boxId = $stateParams.boxId;
	    },
	    controllerAs: '$ctrl'
	  });
	});
	mails.service('MailsService', _mailsService2.default);
	mails.component('mailsComposeEmail', _mailsComposeEmail2.default);
	mails.component('mailsList', _mailsList2.default);
	mails.component('mailsNavigation', _mailsNavigation2.default);
	mails.component('mailsPage', _mailsPage2.default);
	mails.component('mailsLetter', _mailsLetter2.default);
	mails.component('mailsStar', _mailsStar2.default);

	exports.default = mails;

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MailsService = function () {
	  function MailsService($http, $q, FirebaseConfigService) {
	    _classCallCheck(this, MailsService);

	    this._$http = $http;
	    this._$q = $q;
	    this._FirebaseConfigService = FirebaseConfigService;
	    this._fireBaseObjectName = 'mailList';
	    this.ITEM_TYPE_DRAFT = 'drafts';
	    this.ITEM_TYPE_SENT = 'sent';
	    this.ITEM_TYPE_INBOX = 'inbox';
	  }

	  _createClass(MailsService, [{
	    key: 'getSelectedBoxId',
	    value: function getSelectedBoxId() {
	      return this._selectedBoxId;
	    }
	  }, {
	    key: 'setSelectedBoxId',
	    value: function setSelectedBoxId(boxId) {
	      this._selectedBoxId = boxId;
	    }
	  }, {
	    key: 'getMailList',
	    value: function getMailList() {
	      var _this = this;

	      var url = this._FirebaseConfigService.getBaseUrl() + this._fireBaseObjectName + '.json';
	      if (this._mailList) {
	        return this._$q.resolve(this._mailList);
	      }
	      return this._$http.get(url).then(function (res) {
	        _this._mailList = _this._FirebaseConfigService.normalizeToArray(res.data);
	        return _this._mailList;
	      });
	    }
	  }, {
	    key: 'get',
	    value: function get(id) {
	      return this.getMailList().then(function (mailList) {
	        return mailList.filter(function (mail) {
	          return mail.id == id;
	        })[0];
	      });
	    }
	  }, {
	    key: 'add',
	    value: function add(newItem) {
	      var _this2 = this;

	      var url = this._FirebaseConfigService.getBaseUrl() + this._fireBaseObjectName + '.json';
	      return this._$http.post(url, newItem).then(function (response) {
	        newItem.id = response.data.name;
	        _this2._mailList.push(newItem);
	        return newItem;
	      });
	    }
	  }, {
	    key: 'update',
	    value: function update(newItem, oldItem) {
	      var _this3 = this;

	      var url = this._FirebaseConfigService.getBaseUrl() + this._fireBaseObjectName + '/' + newItem.id + '.json';
	      return this._$http.put(url, newItem).then(function (response) {
	        return response.data;
	      }).then(function (newItem) {
	        _this3._mailList[_this3._mailList.indexOf(oldItem ? oldItem : newItem)] = newItem;
	      });
	    }
	  }, {
	    key: 'remove',
	    value: function remove(item) {
	      var _this4 = this;

	      var url = this._FirebaseConfigService.getBaseUrl() + this._fireBaseObjectName + '/' + item.id + '.json';
	      return this._$http.delete(url).then(function () {
	        delete _this4._mailList[_this4._mailList.indexOf(item)];
	      });
	    }
	  }]);

	  return MailsService;
	}();

		exports.default = MailsService;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _mailsComposeEmail = __webpack_require__(49);

	var _mailsComposeEmail2 = _interopRequireDefault(_mailsComposeEmail);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = function () {
	  function Controller($state, MailsService) {
	    var _this = this;

	    _classCallCheck(this, Controller);

	    MailsService.setSelectedBoxId('drafts');
	    this._$state = $state;
	    this._MailsService = MailsService;
	    if (this.mailId) {
	      MailsService.get(this.mailId).then(function (mail) {
	        _this.saveDMailDraft = mail;
	        _this.mailDraft = angular.copy(mail);
	      });
	    } else {
	      this.mailDraft = {};
	    }
	  }

	  _createClass(Controller, [{
	    key: 'discard',
	    value: function discard() {
	      if (this.mailId) {
	        this._MailsService.remove(this.saveDMailDraft);
	        this._$state.go('box', { boxId: 'drafts' });
	      }
	      this._$state.go('box', { boxId: 'inbox' });
	    }
	  }, {
	    key: 'saveDraft',
	    value: function saveDraft() {
	      this.mailDraft.type = this._MailsService.ITEM_TYPE_DRAFT;
	      this.mailDraft.date = Date.now();
	      if (this.mailDraft.id) {
	        this._MailsService.update(this.mailDraft, this.saveDMailDraft);
	      } else {
	        this._MailsService.add(this.mailDraft);
	      }
	      this._$state.go('box', { boxId: 'drafts' });
	    }
	  }, {
	    key: 'send',
	    value: function send() {
	      this.mailDraft.type = this._MailsService.ITEM_TYPE_SENT;
	      this.mailDraft.date = Date.now();
	      if (this.mailDraft.id) {
	        this._MailsService.update(this.mailDraft, this.saveDMailDraft);
	      } else {
	        this._MailsService.add(this.mailDraft);
	      }
	      this._$state.go('box', { boxId: 'sent' });
	    }
	  }]);

	  return Controller;
	}();

	var mailsComposeEmail = {
	  template: _mailsComposeEmail2.default,
	  controller: Controller,
	  bindings: {
	    mailId: '@'
	  }
	};

		exports.default = mailsComposeEmail;

/***/ },
/* 49 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<p> <button type=\"button\" class=\"btn btn-success btn-sm\" ng-click=\"$ctrl.send()\" ng-disabled=\"!mail.$valid\">Send</button>\n<button type=\"button\" class=\"btn btn-primary btn-sm\" ng-click=\"$ctrl.saveDraft()\">Save & Close</button>\n<button type=\"button\" class=\"btn btn-danger btn-sm\" ng-click=\"$ctrl.discard()\">Discard draft</button> </p> <form name=\"mail\"> <mails-star ng-if=\"$ctrl.mailDraft\" mail=\"$ctrl.mailDraft\"></mails-star> <label class=\"text-danger\" ng-messages=\"mail.email.$error\"> <span ng-message=\"required\">Field is mantodory</span>\n<span ng-message=\"email\">Value have to be valid email</span> </label> <div class=\"input-group\" ng-class=\"{&quot;has-error&quot;: !mail.email.$valid}\"> <span class=\"input-group-addon\">To</span>\n<input name=\"email\" ng-model=\"$ctrl.mailDraft.email\" type=\"email\" class=\"form-control\" placeholder=\"Address\" required> </div> <br> <label class=\"text-danger\" ng-messages=\"mail.subject.$error\"> <span ng-message=\"required\">Field is mantodory</span> </label> <div class=\"input-group\" ng-class=\"{&quot;has-error&quot;: !mail.subject.$valid}\"> <span class=\"input-group-addon\">Subject</span>\n<input name=\"subject\" ng-model=\"$ctrl.mailDraft.subject\" type=\"text\" class=\"form-control\" placeholder=\"Subject\" required> </div> <br> <label class=\"text-danger\" ng-messages=\"mail.message.$error\"> <span ng-message=\"required\">Field is mantodory</span> </label> <div class=\"form-group\" ng-class=\"{&quot;has-error&quot;: !mail.message.$valid}\"> <textarea name=\"message\" ng-model=\"$ctrl.mailDraft.message\" placeholder=\"some text\" class=\"form-control\" rows=\"3\" required>\r\n    </textarea> </div> </form>";
	ngModule.run(["$templateCache",function(c){c.put("components/mails-compose-email/mails-compose-email.html",v1)}]);
	module.exports=v1;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _mailsList = __webpack_require__(51);

	var _mailsList2 = _interopRequireDefault(_mailsList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = function () {
	  function Controller($state, $scope, MailsService) {
	    var _this = this;

	    _classCallCheck(this, Controller);

	    this._$state = $state;
	    this._MailsService = MailsService;
	    this.checkedMailsList = new Set();
	    MailsService.getMailList().then(function (mailList) {
	      $scope.$watch(function () {
	        return mailList;
	      }, function (mailList) {
	        _this.mailList = _this._filterList(mailList);
	      }, true);
	    });
	  }

	  _createClass(Controller, [{
	    key: 'delete',
	    value: function _delete() {
	      var _this2 = this;

	      this.checkedMailsList.forEach(function (mail) {
	        if (_this2.boxId == 'bin') {
	          _this2._MailsService.remove(mail);
	        } else {
	          mail.bin = true;
	          _this2._MailsService.update(mail);
	        }
	        _this2.checkedMailsList.delete(mail);
	      });
	    }
	  }, {
	    key: 'moveToSpam',
	    value: function moveToSpam() {
	      var _this3 = this;

	      this.checkedMailsList.forEach(function (mail) {
	        mail.spam = true;
	        _this3._MailsService.update(mail);
	        _this3.checkedMailsList.delete(mail);
	      });
	    }
	  }, {
	    key: 'moveFromSpam',
	    value: function moveFromSpam() {
	      var _this4 = this;

	      this.checkedMailsList.forEach(function (mail) {
	        mail.spam = false;
	        _this4._MailsService.update(mail);
	        _this4.checkedMailsList.delete(mail);
	      });
	    }
	  }, {
	    key: 'restoreFromBin',
	    value: function restoreFromBin() {
	      var _this5 = this;

	      this.checkedMailsList.forEach(function (mail) {
	        mail.bin = false;
	        _this5._MailsService.update(mail);
	        _this5.checkedMailsList.delete(mail);
	      });
	    }
	  }, {
	    key: 'onCheckboxChange',
	    value: function onCheckboxChange(mail, checked) {
	      if (checked) {
	        this.checkedMailsList.add(mail);
	      } else {
	        this.checkedMailsList.delete(mail);
	      }
	    }
	  }, {
	    key: '_filterList',
	    value: function _filterList(mailList) {
	      var _this6 = this;

	      return mailList.filter(function (mail) {
	        if (_this6.boxId == "spam") {
	          return !!mail.spam;
	        } else if (_this6.boxId == "bin") {
	          return !!mail.bin;
	        }
	        return !mail.spam && !mail.bin && mail.type == _this6.boxId;
	      });
	    }
	  }, {
	    key: 'viewEmail',
	    value: function viewEmail(mail) {
	      if (mail.type == this._MailsService.ITEM_TYPE_DRAFT) this._$state.go('compose', { mailId: mail.id });else this._$state.go('letter', { mailId: mail.id });
	    }
	  }]);

	  return Controller;
	}();

	var mailsComposeEmailComponent = {
	  template: _mailsList2.default,
	  bindings: {
	    boxId: '<'
	  },
	  controller: Controller
	};

		exports.default = mailsComposeEmailComponent;

/***/ },
/* 51 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<fieldset ng-disabled=\"!$ctrl.checkedMailsList.size\"> <button type=\"button\" class=\"btn btn-danger btn-sm\" ng-click=\"$ctrl.delete()\">Delete</button>\n<button ng-if=\"$ctrl.boxId == 'inbox'\" type=\"button\" class=\"btn btn-warning btn-sm\" ng-click=\"$ctrl.moveToSpam()\">Spam!</button>\n<button ng-if=\"$ctrl.boxId == 'spam'\" type=\"button\" class=\"btn btn-warning btn-sm\" ng-click=\"$ctrl.moveFromSpam()\">Not spam</button>\n<button ng-if=\"$ctrl.boxId == 'bin'\" type=\"button\" class=\"btn btn-warning btn-sm\" ng-click=\"$ctrl.restoreFromBin()\">Restore</button> </fieldset> <br> <table class=\"table table-hover\"> <tbody> <tr ng-repeat=\"mail in $ctrl.mailList  | orderBy : mail.date : true\" ng-click=\"$ctrl.viewEmail(mail)\"> <td> <label ng-click=\"$event.stopPropagation();\"> <input ng-change=\"$ctrl.onCheckboxChange(mail,checked)\" ng-model=\"checked\" type=\"checkbox\"> </label> <mails-star mail=\"mail\" ng-click=\"$event.stopPropagation();\"></mails-star> </td> <td>{{mail.email}}</td> <td>{{mail.subject}}</td> <td>{{mail.date | date: 'd LLLL'}}</td> </tr> </tbody> </table>";
	ngModule.run(["$templateCache",function(c){c.put("components/mails-list/mails-list.html",v1)}]);
	module.exports=v1;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _mailsNavigation = __webpack_require__(53);

	var _mailsNavigation2 = _interopRequireDefault(_mailsNavigation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = function () {
	  function Controller(MailsService) {
	    _classCallCheck(this, Controller);

	    this._MailsService = MailsService;
	    this.boxes = [{
	      id: 'inbox',
	      title: "Inbox"
	    }, {
	      id: 'sent',
	      title: "Sent Mail"
	    }, {
	      id: 'drafts',
	      title: "Drafts"
	    }, {
	      id: 'spam',
	      title: "Spam"
	    }, {
	      id: 'bin',
	      title: "Bin"
	    }];
	  }

	  _createClass(Controller, [{
	    key: 'getSelectedBoxId',
	    value: function getSelectedBoxId() {
	      return this._MailsService.getSelectedBoxId();
	    }
	  }]);

	  return Controller;
	}();

	var mailsNavigationComponent = {
	  template: _mailsNavigation2.default,
	  controller: Controller
	};

		exports.default = mailsNavigationComponent;

/***/ },
/* 53 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<button class=\"btn btn-block btn-warning\" ui-sref=\"compose\">Compose</button> <br> <ul class=\"nav nav-pills nav-stacked\"> <li ng-repeat=\"box in $ctrl.boxes\" ng-class=\"{'active': box.id == $ctrl.getSelectedBoxId()}\"> <a ui-sref=\"box({boxId: box.id})\">{{box.title}}</a> </li> </ul>";
	ngModule.run(["$templateCache",function(c){c.put("components/mails-navigation/mails-navigation.html",v1)}]);
	module.exports=v1;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mailsPage = __webpack_require__(55);

	var _mailsPage2 = _interopRequireDefault(_mailsPage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mailsPageComponent = {
	  template: _mailsPage2.default
	};

		exports.default = mailsPageComponent;

/***/ },
/* 55 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"container-fluid\"> <div class=\"row\"> <div class=\"col-md-2\"> <mails-navigation></mails-navigation> <hr> <chat-root></chat-root> </div> <div class=\"col-md-10\"> <ui-view></ui-view> </div> </div> </div>";
	ngModule.run(["$templateCache",function(c){c.put("components/mails-page/mails-page.html",v1)}]);
	module.exports=v1;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _mailsLetter = __webpack_require__(57);

	var _mailsLetter2 = _interopRequireDefault(_mailsLetter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = function () {
	  function Controller($state, MailsService) {
	    var _this = this;

	    _classCallCheck(this, Controller);

	    this._$state = $state;
	    this._MailsService = MailsService;
	    MailsService.get(this.mailId).then(function (mail) {
	      if (mail.bin) {
	        MailsService.setSelectedBoxId('bin');
	      } else if (mail.spam) {
	        MailsService.setSelectedBoxId('spam');
	      } else {
	        MailsService.setSelectedBoxId(mail.type);
	      }
	      _this.mail = mail;
	    });
	  }

	  _createClass(Controller, [{
	    key: 'delete',
	    value: function _delete() {
	      var boxId = this.mail.type;
	      if (this.mail.bin) {
	        boxId = 'bin';
	        this._MailsService.remove(this.mail);
	      } else {
	        this.mail.bin = true;
	        this._MailsService.update(this.mail);
	      }
	      this._$state.go('box', { boxId: boxId });
	    }
	  }, {
	    key: 'restoreFromBin',
	    value: function restoreFromBin() {
	      this.mail.bin = false;
	      this._MailsService.update(this.mail);
	      this._$state.go('box', { boxId: this.mail.type });
	    }
	  }, {
	    key: 'moveToSpam',
	    value: function moveToSpam() {
	      this.mail.spam = true;
	      this._MailsService.update(this.mail);
	      this._$state.go('box', { boxId: 'inbox' });
	    }
	  }, {
	    key: 'moveFromSpam',
	    value: function moveFromSpam() {
	      this.mail.spam = false;
	      this._MailsService.update(this.mail);
	      this._$state.go('box', { boxId: 'inbox' });
	    }
	  }]);

	  return Controller;
	}();

	var mailsLetterComponent = {
	  template: _mailsLetter2.default,
	  controller: Controller,
	  bindings: {
	    mailId: '@'
	  }
	};

		exports.default = mailsLetterComponent;

/***/ },
/* 57 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<p> <button type=\"button\" class=\"btn btn-danger btn-sm\" ng-click=\"$ctrl.delete()\">Delete</button>\n<button ng-if=\"$ctrl.mail.type == 'inbox' && !$ctrl.mail.spam\" type=\"button\" class=\"btn btn-warning btn-sm\" ng-click=\"$ctrl.moveToSpam()\">Spam!</button>\n<button ng-if=\"$ctrl.mail.type == 'inbox' && $ctrl.mail.spam\" type=\"button\" class=\"btn btn-warning btn-sm\" ng-click=\"$ctrl.moveFromSpam()\">Not spam</button>\n<button ng-if=\"$ctrl.mail.bin\" type=\"button\" class=\"btn btn-warning btn-sm\" ng-click=\"$ctrl.restoreFromBin()\">Restore</button> </p> <mails-star ng-if=\"$ctrl.mail\" mail=\"$ctrl.mail\"></mails-star> <div class=\"input-group\"> <span class=\"input-group-addon\"> <span ng-if=\"$ctrl.mail.type == 'inbox'\">From</span>\n<span ng-if=\"$ctrl.mail.type == 'sent'\">To</span> </span>\n<input name=\"email\" disabled=\"disabled\" ng-model=\"$ctrl.mail.email\" type=\"email\" class=\"form-control\" placeholder=\"Address\" required> </div> <br> <div class=\"input-group\"> <span class=\"input-group-addon\">Subject</span>\n<input name=\"subject\" disabled=\"disabled\" ng-model=\"$ctrl.mail.subject\" type=\"text\" class=\"form-control\" placeholder=\"Subject\" required> </div> <br> <label class=\"text-danger\" ng-messages=\"mail.message.$error\"> <span ng-message=\"required\">Field is mantodory</span> </label> <div class=\"form-group\"> <textarea name=\"message\" disabled=\"disabled\" ng-model=\"$ctrl.mail.message\" placeholder=\"some text\" class=\"form-control\" rows=\"3\" required>\r\n  </textarea> </div>";
	ngModule.run(["$templateCache",function(c){c.put("components/mails-letter/mails-letter.html",v1)}]);
	module.exports=v1;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(59);

	var _mailsStar = __webpack_require__(61);

	var _mailsStar2 = _interopRequireDefault(_mailsStar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = function () {
	  function Controller(MailsService) {
	    _classCallCheck(this, Controller);

	    this._MailsService = MailsService;
	    this._starsList = [{ id: 0, className: 'glyphicon glyphicon-star-empty' }, { id: 1, className: 'glyphicon glyphicon-star text-primary' }, { id: 2, className: 'glyphicon glyphicon-star text-success' }, { id: 3, className: 'glyphicon glyphicon-star text-info' }, { id: 4, className: 'glyphicon glyphicon-star text-warning' }, { id: 5, className: 'glyphicon glyphicon-star text-danger' }];
	    this._setClassName(this.mail.selectedStarId);
	  }

	  _createClass(Controller, [{
	    key: '_setClassName',
	    value: function _setClassName() {
	      var index = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

	      this.className = this._starsList[index].className;
	    }
	  }, {
	    key: 'switchStar',
	    value: function switchStar() {
	      if (!this.mail.selectedStarId) {
	        this.mail.selectedStarId = 0;
	      }
	      if (this.mail.selectedStarId === this._starsList.length - 1) {
	        this.mail.selectedStarId = -1;
	      }
	      this.mail.selectedStarId++;
	      this._setClassName(this.mail.selectedStarId);
	      this._MailsService.update(this.mail);
	    }
	  }]);

	  return Controller;
	}();

	var mailsStarComponent = {
	  template: _mailsStar2.default,
	  controller: Controller,
	  bindings: {
	    mail: '='
	  }
	};

		exports.default = mailsStarComponent;

/***/ },
/* 59 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 60 */,
/* 61 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<span ng-click=\"$ctrl.switchStar()\" class=\"{{$ctrl.className}}\"></span>";
	ngModule.run(["$templateCache",function(c){c.put("components/mails-star/mails-star.html",v1)}]);
	module.exports=v1;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDM2ODhiMTA0MGEzYWE4NGNiMWQiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY3NzL2FwcC9zdHlsZXMuY3NzIiwid2VicGFjazovLy9zcmMvanMvYXBwL2FwcGxpY2F0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvanMvYXBwL2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvYXBwbGljYXRpb24tcGFnZS9hcHBsaWNhdGlvbi1wYWdlLmpzIiwid2VicGFjazovLy8uL2pzL2FwcC9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2FwcGxpY2F0aW9uLXBhZ2UvYXBwbGljYXRpb24tcGFnZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwL2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvYXBwbGljYXRpb24tcGFnZS9hcHBsaWNhdGlvbi1wYWdlLmh0bWwiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9hcHAvYXBwbGljYXRpb24vY29tcG9uZW50cy9hcHBsaWNhdGlvbi1tYWluLW1lbnUvYXBwbGljYXRpb24tbWFpbi1tZW51LmpzIiwid2VicGFjazovLy8uL2pzL2FwcC9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2FwcGxpY2F0aW9uLW1haW4tbWVudS9hcHBsaWNhdGlvbi1tYWluLW1lbnUuY3NzIiwid2VicGFjazovLy8uL2pzL2FwcC9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2FwcGxpY2F0aW9uLW1haW4tbWVudS9hcHBsaWNhdGlvbi1tYWluLW1lbnUuaHRtbCIsIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC9hcHBsaWNhdGlvbi9zZXJ2aWNlcy9maXJlYmFzZS1jb25maWctc2VydmljZS9maXJlYmFzZS1jb25maWctc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC9hdXRoL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvanMvYXBwL2F1dGgvc2VydmljZXMvYXV0aC1zZXJ2aWNlLmpzIiwid2VicGFjazovLy9zcmMvanMvYXBwL2F1dGgvY29tcG9uZW50cy9hdXRoLXBhZ2UvYXV0aC1wYWdlLmpzIiwid2VicGFjazovLy8uL2pzL2FwcC9hdXRoL2NvbXBvbmVudHMvYXV0aC1wYWdlL2F1dGgtcGFnZS5odG1sIiwid2VicGFjazovLy9zcmMvanMvYXBwL2Jvb3RzdHJhcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC9ib290c3RyYXAvZGlyZWN0aXZlcy9ib290c3RyYXAtZHJvcGRvd24vYm9vdHN0cmFwLWRyb3Bkb3duLmpzIiwid2VicGFjazovLy8uL2pzL2FwcC9ib290c3RyYXAvZGlyZWN0aXZlcy9ib290c3RyYXAtZHJvcGRvd24vYm9vdHN0cmFwLWRyb3Bkb3duLmh0bWwiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9hcHAvY2hhdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC9jaGF0L2NvbXBvbmVudHMvY2hhdC1yb290L2NoYXQtcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9hcHAvY2hhdC9jb21wb25lbnRzL2NoYXQtcm9vdC9jaGF0LXJvb3QuY3NzIiwid2VicGFjazovLy8uL2pzL2FwcC9jaGF0L2NvbXBvbmVudHMvY2hhdC1yb290L2NoYXQtcm9vdC5odG1sIiwid2VicGFjazovLy9zcmMvanMvYXBwL2NoYXQvY29tcG9uZW50cy9jaGF0LWludGVybG9jdXRvci1zZWxlY3Rvci9jaGF0LWludGVybG9jdXRvci1zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9hcHAvY2hhdC9jb21wb25lbnRzL2NoYXQtaW50ZXJsb2N1dG9yLXNlbGVjdG9yL2NoYXQtaW50ZXJsb2N1dG9yLXNlbGVjdG9yLmh0bWwiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9hcHAvY2hhdC9jb21wb25lbnRzL2NoYXQtY29udmVyc2F0aW9uL2NoYXQtY29udmVyc2F0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL2FwcC9jaGF0L2NvbXBvbmVudHMvY2hhdC1jb252ZXJzYXRpb24vY2hhdC1jb252ZXJzYXRpb24uY3NzIiwid2VicGFjazovLy8uL2pzL2FwcC9jaGF0L2NvbXBvbmVudHMvY2hhdC1jb252ZXJzYXRpb24vY2hhdC1jb252ZXJzYXRpb24uaHRtbCIsIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC9jaGF0L2NvbXBvbmVudHMvY2hhdC1jb250cm9scy9jaGF0LWNvbnRyb2xzLmpzIiwid2VicGFjazovLy8uL2pzL2FwcC9jaGF0L2NvbXBvbmVudHMvY2hhdC1jb250cm9scy9jaGF0LWNvbnRyb2xzLmh0bWwiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9hcHAvY2hhdC9kaXJlY3RpdmVzL2NoYXQtb24tdXBkYXRlLXNjcm9sbC9jaGF0LW9uLXVwZGF0ZS1zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9hcHAvY2hhdC9zZXJ2aWNlcy9jaGF0LXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9hcHAvY29udGFjdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9hcHAvY29udGFjdHMvY29tcG9uZW50cy9jb250YWN0cy1wYWdlL2NvbnRhY3RzLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwL2NvbnRhY3RzL2NvbXBvbmVudHMvY29udGFjdHMtcGFnZS9jb250YWN0cy1wYWdlLmNzcyIsIndlYnBhY2s6Ly8vLi9qcy9hcHAvY29udGFjdHMvY29tcG9uZW50cy9jb250YWN0cy1wYWdlL2NvbnRhY3RzLXBhZ2UuaHRtbCIsIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC9jb250YWN0cy9jb21wb25lbnRzL2NvbnRhY3RzLXVzZXItY2FyZC9jb250YWN0cy11c2VyLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwL2NvbnRhY3RzL2NvbXBvbmVudHMvY29udGFjdHMtdXNlci1jYXJkL2NvbnRhY3RzLXVzZXItY2FyZC5odG1sIiwid2VicGFjazovLy9zcmMvanMvYXBwL2NvbnRhY3RzL3NlcnZpY2VzL2NvbnRhY3RzLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9hcHAvbWFpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9hcHAvbWFpbHMvc2VydmljZXMvbWFpbHMtc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC9tYWlscy9jb21wb25lbnRzL21haWxzLWNvbXBvc2UtZW1haWwvbWFpbHMtY29tcG9zZS1lbWFpbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9hcHAvbWFpbHMvY29tcG9uZW50cy9tYWlscy1jb21wb3NlLWVtYWlsL21haWxzLWNvbXBvc2UtZW1haWwuaHRtbCIsIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC9tYWlscy9jb21wb25lbnRzL21haWxzLWxpc3QvbWFpbHMtbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9hcHAvbWFpbHMvY29tcG9uZW50cy9tYWlscy1saXN0L21haWxzLWxpc3QuaHRtbCIsIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC9tYWlscy9jb21wb25lbnRzL21haWxzLW5hdmlnYXRpb24vbWFpbHMtbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9hcHAvbWFpbHMvY29tcG9uZW50cy9tYWlscy1uYXZpZ2F0aW9uL21haWxzLW5hdmlnYXRpb24uaHRtbCIsIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC9tYWlscy9jb21wb25lbnRzL21haWxzLXBhZ2UvbWFpbHMtcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9hcHAvbWFpbHMvY29tcG9uZW50cy9tYWlscy1wYWdlL21haWxzLXBhZ2UuaHRtbCIsIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC9tYWlscy9jb21wb25lbnRzL21haWxzLWxldHRlci9tYWlscy1sZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwL21haWxzL2NvbXBvbmVudHMvbWFpbHMtbGV0dGVyL21haWxzLWxldHRlci5odG1sIiwid2VicGFjazovLy9zcmMvanMvYXBwL21haWxzL2NvbXBvbmVudHMvbWFpbHMtc3Rhci9tYWlscy1zdGFyLmpzIiwid2VicGFjazovLy8uL2pzL2FwcC9tYWlscy9jb21wb25lbnRzL21haWxzLXN0YXIvbWFpbHMtc3Rhci5jc3MiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwL21haWxzL2NvbXBvbmVudHMvbWFpbHMtc3Rhci9tYWlscy1zdGFyLmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA0MzY4OGIxMDQwYTNhYTg0Y2IxZFxuICoqLyIsImltcG9ydCAnLi4vLi4vY3NzL2FwcC9zdHlsZXMuY3NzJ1xyXG5pbXBvcnQgJy4vYXBwbGljYXRpb24nO1xyXG5pbXBvcnQgJy4vYXV0aCc7XHJcbmltcG9ydCAnLi9ib290c3RyYXAnO1xyXG5pbXBvcnQgJy4vY2hhdCc7XHJcbmltcG9ydCAnLi9jb250YWN0cyc7XHJcbmltcG9ydCAnLi9tYWlscyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9qcy9hcHAvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9jc3MvYXBwL3N0eWxlcy5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgYXBwbGljYXRpb25QYWdlQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9hcHBsaWNhdGlvbi1wYWdlL2FwcGxpY2F0aW9uLXBhZ2UnO1xyXG5pbXBvcnQgYXBwbGljYXRpb25NYWluTWVudUNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvYXBwbGljYXRpb24tbWFpbi1tZW51L2FwcGxpY2F0aW9uLW1haW4tbWVudSc7XHJcbmltcG9ydCBGaXJlYmFzZUNvbmZpZ1NlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy9maXJlYmFzZS1jb25maWctc2VydmljZS9maXJlYmFzZS1jb25maWctc2VydmljZSc7XHJcblxyXG5jb25zdCBtYWlsQXBwbGljYXRpb24gPSBhbmd1bGFyLm1vZHVsZSgnbWFpbEFwcGxpY2F0aW9uJyxcclxuICBbJ25nTWVzc2FnZXMnLCAndWkucm91dGVyJywnbWFpbHMnLCdjaGF0JywnY29udGFjdHMnLCdib290c3RyYXAnLCdhdXRoJ10pO1xyXG5cclxubWFpbEFwcGxpY2F0aW9uLmNvbmZpZyhmdW5jdGlvbiAoJHVybFJvdXRlclByb3ZpZGVyKSB7XHJcbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL21haWwvYm94PWluYm94Jyk7XHJcbn0pO1xyXG5cclxubWFpbEFwcGxpY2F0aW9uLmNvbXBvbmVudCgnYXBwbGljYXRpb25QYWdlJywgYXBwbGljYXRpb25QYWdlQ29tcG9uZW50KTtcclxubWFpbEFwcGxpY2F0aW9uLmNvbXBvbmVudCgnYXBwbGljYXRpb25NYWluTWVudScsIGFwcGxpY2F0aW9uTWFpbk1lbnVDb21wb25lbnQpO1xyXG5tYWlsQXBwbGljYXRpb24uc2VydmljZSgnRmlyZWJhc2VDb25maWdTZXJ2aWNlJywgRmlyZWJhc2VDb25maWdTZXJ2aWNlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1haWxBcHBsaWNhdGlvbjtcclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9qcy9hcHAvYXBwbGljYXRpb24vaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgJy4vYXBwbGljYXRpb24tcGFnZS5jc3MnXHJcbmltcG9ydCBtYWlsQXBwVGVtcGxhdGUgZnJvbSAnLi9hcHBsaWNhdGlvbi1wYWdlLmh0bWwnO1xyXG5cclxuY2xhc3MgQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHN0YXRlLCBBdXRoU2VydmljZSwgRmlyZWJhc2VDb25maWdTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLl8kc3RhdGUgPSAkc3RhdGU7XHJcbiAgICB0aGlzLl9BdXRoU2VydmljZSA9IEF1dGhTZXJ2aWNlO1xyXG4gICAgdGhpcy5fRmlyZWJhc2VDb25maWdTZXJ2aWNlID0gRmlyZWJhc2VDb25maWdTZXJ2aWNlO1xyXG4gICAgdGhpcy5tZW51SXRlbXMgPSBbe1xyXG4gICAgICB0aXRsZTogJ01haWxzJyxcclxuICAgICAgc3RhdGU6ICdtYWlsJyxcclxuICAgICAgaHJlZjogJ2JveCh7Ym94SWQ6XCJpbmJveFwifSknXHJcbiAgICB9LCB7XHJcbiAgICAgIHRpdGxlOiAnQ29udGFjdHMnLFxyXG4gICAgICBzdGF0ZTogJ2NvbnRhY3RzJyxcclxuICAgICAgaHJlZjogJ2NvbnRhY3RzJ1xyXG4gICAgfV07XHJcbiAgICB0aGlzLmxvZ2dpbmVkID0gZmFsc2U7XHJcblxyXG4gICAgQXV0aFNlcnZpY2UuJG9uQXV0aChhdXRoRGF0YSA9PntcclxuICAgICAgaWYoYXV0aERhdGEpe1xyXG4gICAgICAgIHRoaXMubG9nZ2luZWQgPSB0cnVlO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLmxvZ2dpbmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fJHN0YXRlLmdvKCdhdXRoJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcbiAgdW5hdXRoKCl7XHJcbiAgICB0aGlzLl9BdXRoU2VydmljZS4kdW5hdXRoKCk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBhcHBsaWNhdGlvblBhZ2VDb21wb25lbnQgPSB7XHJcbiAgdGVtcGxhdGU6IG1haWxBcHBUZW1wbGF0ZSxcclxuICBjb250cm9sbGVyOiBDb250cm9sbGVyXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHBsaWNhdGlvblBhZ2VDb21wb25lbnQ7XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvanMvYXBwL2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvYXBwbGljYXRpb24tcGFnZS9hcHBsaWNhdGlvbi1wYWdlLmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vanMvYXBwL2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvYXBwbGljYXRpb24tcGFnZS9hcHBsaWNhdGlvbi1wYWdlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhbmd1bGFyPXdpbmRvdy5hbmd1bGFyLG5nTW9kdWxlO1xudHJ5IHtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShbXCJuZ1wiXSl9XG5jYXRjaChlKXtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShcIm5nXCIsW10pfVxudmFyIHYxPVwiPGhlYWRlciBjbGFzcz1cXFwiYXBwbGljYXRpb24tcGFnZS1oZWFkZXJcXFwiPiA8YSB1aS1zcmVmPVxcXCJib3goe2JveElkOidpbmJveCd9KVxcXCIgY2xhc3M9XFxcImFwcGxpY2F0aW9uLXBhZ2UtaGVhZGVyX19sb2dvXFxcIj48L2E+XFxuPGEgbmctaWY9XFxcIiRjdHJsLmxvZ2dpbmVkXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwudW5hdXRoKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlciBhcHBsaWNhdGlvbi1wYWdlLWhlYWRlcl9fbG9nb3V0XFxcIj5Mb2dvdXQ8L2E+IDwvaGVhZGVyPiA8c2VjdGlvbiBjbGFzcz1cXFwidG9vbGJhclxcXCI+IDxhcHBsaWNhdGlvbi1tYWluLW1lbnUgY3VycmVudC1wYWdlLWlkPVxcXCIkY3RybC5jdXJyZW50UGFnZUlkXFxcIiBtZW51LWl0ZW1zPVxcXCIkY3RybC5tZW51SXRlbXNcXFwiPjwvYXBwbGljYXRpb24tbWFpbi1tZW51PiA8L3NlY3Rpb24+IDx1aS12aWV3PjwvdWktdmlldz5cIjtcbm5nTW9kdWxlLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGMpe2MucHV0KFwiY29tcG9uZW50cy9hcHBsaWNhdGlvbi1wYWdlL2FwcGxpY2F0aW9uLXBhZ2UuaHRtbFwiLHYxKX1dKTtcbm1vZHVsZS5leHBvcnRzPXYxO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9qcy9hcHAvYXBwbGljYXRpb24vY29tcG9uZW50cy9hcHBsaWNhdGlvbi1wYWdlL2FwcGxpY2F0aW9uLXBhZ2UuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgJy4vYXBwbGljYXRpb24tbWFpbi1tZW51LmNzcyc7XHJcbmltcG9ydCBtYWluTWVudVRlbXBsYXRlIGZyb20gJy4vYXBwbGljYXRpb24tbWFpbi1tZW51Lmh0bWwnO1xyXG5cclxuY2xhc3MgQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHN0YXRlKXtcclxuICAgIHRoaXMuXyRzdGF0ZSA9ICRzdGF0ZTtcclxuICB9XHJcblxyXG4gIGlzU2VsZWN0ZWQobWVudUl0ZW0pe1xyXG4gICAgcmV0dXJuIHRoaXMuXyRzdGF0ZS5pbmNsdWRlcyhtZW51SXRlbS5zdGF0ZSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBhcHBsaWNhdGlvbk1haW5NZW51Q29tcG9uZW50ID0ge1xyXG4gIHRlbXBsYXRlOiBtYWluTWVudVRlbXBsYXRlLFxyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBjdXJyZW50UGFnZUlkOiAnPScsXHJcbiAgICBtZW51SXRlbXM6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogQ29udHJvbGxlclxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwbGljYXRpb25NYWluTWVudUNvbXBvbmVudDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvanMvYXBwL2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvYXBwbGljYXRpb24tbWFpbi1tZW51L2FwcGxpY2F0aW9uLW1haW4tbWVudS5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2pzL2FwcC9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2FwcGxpY2F0aW9uLW1haW4tbWVudS9hcHBsaWNhdGlvbi1tYWluLW1lbnUuY3NzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhbmd1bGFyPXdpbmRvdy5hbmd1bGFyLG5nTW9kdWxlO1xudHJ5IHtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShbXCJuZ1wiXSl9XG5jYXRjaChlKXtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShcIm5nXCIsW10pfVxudmFyIHYxPVwiPGJvb3RzdHJhcC1kcm9wZG93biBjbGFzcz1cXFwiYXBwbGljYXRpb24tbWFpbi1tZW51XFxcIiBtZW51LXRpdGxlPVxcXCJNYWlsQXBwXFxcIj4gPGxpIG5nLXJlcGVhdD1cXFwibWVudUl0ZW0gaW4gJGN0cmwubWVudUl0ZW1zXFxcIiBuZy1jbGFzcz1cXFwieydhY3RpdmUnOiAkY3RybC5pc1NlbGVjdGVkKG1lbnVJdGVtKX1cXFwiPiA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1saW5rXFxcIiB1aS1zcmVmPVxcXCJ7e21lbnVJdGVtLmhyZWZ9fVxcXCIgaHJlZj1cXFwiI1xcXCI+IHt7bWVudUl0ZW0udGl0bGV9fSA8L2E+IDwvbGk+IDwvYm9vdHN0cmFwLWRyb3Bkb3duPlwiO1xubmdNb2R1bGUucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYyl7Yy5wdXQoXCJjb21wb25lbnRzL2FwcGxpY2F0aW9uLW1haW4tbWVudS9hcHBsaWNhdGlvbi1tYWluLW1lbnUuaHRtbFwiLHYxKX1dKTtcbm1vZHVsZS5leHBvcnRzPXYxO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9qcy9hcHAvYXBwbGljYXRpb24vY29tcG9uZW50cy9hcHBsaWNhdGlvbi1tYWluLW1lbnUvYXBwbGljYXRpb24tbWFpbi1tZW51Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiY2xhc3MgRmlyZWJhc2VDb25maWdTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigkZmlyZWJhc2VBdXRoKSB7XHJcbiAgICB0aGlzLl9iYXNlVXJsID0gJ2h0dHBzOi8vYW5ndWxhci1qcy1ydS1hMWgwNS5maXJlYmFzZWlvLmNvbS8nO1xyXG4gICAgdGhpcy5fZmlyZUJhc2UgPSBuZXcgRmlyZWJhc2UodGhpcy5fYmFzZVVybCk7XHJcbiAgICB0aGlzLl9hdXRoID0gJGZpcmViYXNlQXV0aCh0aGlzLl9maXJlQmFzZSk7XHJcbiAgfVxyXG5cclxuICBnZXRCYXNlVXJsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Jhc2VVcmwgKyB0aGlzLl9hdXRoLiRnZXRBdXRoKCkudWlkICsgJy8nO1xyXG4gIH07XHJcblxyXG4gIGdldEF1dGgoKXtcclxuICAgIHJldHVybiB0aGlzLl9hdXRoO1xyXG4gIH1cclxuXHJcbiAgbm9ybWFsaXplVG9BcnJheShvYmplY3QpIHtcclxuICAgIGlmICghb2JqZWN0KSByZXR1cm4gW107XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0KS5tYXAoa2V5ID0+IHtcclxuICAgICAgbGV0IG5vcm1hbGl6ZWRPYmplY3QgPSBvYmplY3Rba2V5XTtcclxuICAgICAgbm9ybWFsaXplZE9iamVjdC5pZCA9IGtleTtcclxuICAgICAgcmV0dXJuIG5vcm1hbGl6ZWRPYmplY3Q7XHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaXJlYmFzZUNvbmZpZ1NlcnZpY2U7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2pzL2FwcC9hcHBsaWNhdGlvbi9zZXJ2aWNlcy9maXJlYmFzZS1jb25maWctc2VydmljZS9maXJlYmFzZS1jb25maWctc2VydmljZS5qc1xuICoqLyIsImltcG9ydCBBdXRoU2VydmljZSBmcm9tICcuL3NlcnZpY2VzL2F1dGgtc2VydmljZSdcclxuaW1wb3J0IGF1dGhQYWdlQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9hdXRoLXBhZ2UvYXV0aC1wYWdlJztcclxuY29uc3QgYXV0aCA9IGFuZ3VsYXIubW9kdWxlKCdhdXRoJywgWydmaXJlYmFzZSddKTtcclxuXHJcbmF1dGgucnVuKGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkc3RhdGUpIHtcclxuICAkcm9vdFNjb3BlLiRvbihcIiRzdGF0ZUNoYW5nZUVycm9yXCIsIGZ1bmN0aW9uIChldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcywgZXJyb3IpIHtcclxuICAgIGlmIChlcnJvciA9PT0gXCJBVVRIX1JFUVVJUkVEXCIpIHtcclxuICAgICAgJHN0YXRlLmdvKFwiYXV0aFwiKTtcclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcblxyXG5hdXRoLnNlcnZpY2UoXCJBdXRoU2VydmljZVwiLCBBdXRoU2VydmljZSk7XHJcbmF1dGguY29tcG9uZW50KFwiYXV0aFBhZ2VcIiwgYXV0aFBhZ2VDb21wb25lbnQpO1xyXG5cclxuYXV0aC5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XHJcbiAgJHN0YXRlUHJvdmlkZXJcclxuICAgIC5zdGF0ZShcImF1dGhcIiwge1xyXG4gICAgICB0ZW1wbGF0ZTogXCI8YXV0aC1wYWdlPjwvYXV0aC1wYWdlPlwiLFxyXG4gICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgXCJjdXJyZW50QXV0aFwiOiBmdW5jdGlvbigkc3RhdGUsIEF1dGhTZXJ2aWNlKSB7XHJcbiAgICAgICAgICByZXR1cm4gQXV0aFNlcnZpY2VcclxuICAgICAgICAgICAgLiR3YWl0Rm9yQXV0aCgpXHJcbiAgICAgICAgICAgIC50aGVuKGF1dGhEYXRhID0+IHtcclxuICAgICAgICAgICAgICBpZihhdXRoRGF0YSl7XHJcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2JveCcsIHtib3hJZDogJ2luYm94J30pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB1cmw6ICcvYXV0aCdcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGF1dGg7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2pzL2FwcC9hdXRoL2luZGV4LmpzXG4gKiovIiwiY2xhc3MgQXV0aFNlcnZpY2V7XHJcbiAgY29uc3RydWN0b3IoRmlyZWJhc2VDb25maWdTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLl9hdXRoID0gRmlyZWJhc2VDb25maWdTZXJ2aWNlLmdldEF1dGgoKTtcclxuICB9XHJcblxyXG4gICR3YWl0Rm9yQXV0aCgpe1xyXG4gICAgcmV0dXJuIHRoaXMuX2F1dGguJHdhaXRGb3JBdXRoKCk7XHJcbiAgfVxyXG5cclxuICAkcmVxdWlyZUF1dGgoKXtcclxuICAgIHJldHVybiB0aGlzLl9hdXRoLiRyZXF1aXJlQXV0aCgpO1xyXG4gIH1cclxuXHJcbiAgJGF1dGhXaXRoUGFzc3dvcmQoY3JlZGVudGlhbHMpe1xyXG4gICAgcmV0dXJuIHRoaXMuX2F1dGguJGF1dGhXaXRoUGFzc3dvcmQoY3JlZGVudGlhbHMpO1xyXG4gIH1cclxuXHJcbiAgJHVuYXV0aCgpe1xyXG4gICAgcmV0dXJuIHRoaXMuX2F1dGguJHVuYXV0aCgpO1xyXG4gIH1cclxuXHJcbiAgJG9uQXV0aChjYWxsYmFjayl7XHJcbiAgICByZXR1cm4gdGhpcy5fYXV0aC4kb25BdXRoKGNhbGxiYWNrKVxyXG4gIH1cclxuXHJcbiAgJGdldEF1dGgoKXtcclxuICAgIHJldHVybiB0aGlzLl9hdXRoLiRnZXRBdXRoKCk7XHJcbiAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBBdXRoU2VydmljZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvanMvYXBwL2F1dGgvc2VydmljZXMvYXV0aC1zZXJ2aWNlLmpzXG4gKiovIiwiaW1wb3J0IGF1dGhQYWdlVGVtcGxhdGUgZnJvbSAnLi9hdXRoLXBhZ2UuaHRtbCc7XHJcblxyXG5jbGFzcyBDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc3RhdGUsIEF1dGhTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLl8kc3RhdGUgPSAkc3RhdGU7XHJcbiAgICB0aGlzLl9BdXRoU2VydmljZSA9IEF1dGhTZXJ2aWNlO1xyXG4gICAgdGhpcy5lbWFpbCA9ICdhYWFAYmJiLmNjYyc7XHJcbiAgICB0aGlzLnBhc3N3b3JkID0gJ2FhYUBiYmIuY2NjJztcclxuICB9XHJcblxyXG4gIGF1dGgoKXtcclxuICAgIGxldCBjcmVkZW50aWFscyA9IHtcclxuICAgICAgZW1haWw6IHRoaXMuZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkXHJcbiAgICB9O1xyXG4gICAgdGhpcy5fQXV0aFNlcnZpY2UuJGF1dGhXaXRoUGFzc3dvcmQoY3JlZGVudGlhbHMpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLl8kc3RhdGUuZ28oJ2JveCcsIHtib3hJZDogJ2luYm94J30pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgYWxlcnQoXCJBdXRoZW50aWNhdGlvbiBmYWlsZWQ6XCIgKyBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IGF1dGhQYWdlQ29tcG9uZW50ID0ge1xyXG4gIHRlbXBsYXRlOiBhdXRoUGFnZVRlbXBsYXRlLFxyXG4gIGNvbnRyb2xsZXI6IENvbnRyb2xsZXJcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGF1dGhQYWdlQ29tcG9uZW50O1xyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2pzL2FwcC9hdXRoL2NvbXBvbmVudHMvYXV0aC1wYWdlL2F1dGgtcGFnZS5qc1xuICoqLyIsInZhciBhbmd1bGFyPXdpbmRvdy5hbmd1bGFyLG5nTW9kdWxlO1xudHJ5IHtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShbXCJuZ1wiXSl9XG5jYXRjaChlKXtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShcIm5nXCIsW10pfVxudmFyIHYxPVwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj4gPGgyIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+U2lnbiBpbiB0byBjb250aW51ZSB0byBNYWlsQXBwPC9oMj4gPGJyPiA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj4gPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+IDxmb3JtIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWxcXFwiIG5nLXN1Ym1pdD1cXFwiJGN0cmwuYXV0aCgpXFxcIj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiY29sLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+RW1haWw8L2xhYmVsPiA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTBcXFwiPiA8aW5wdXQgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbWFpbFxcXCIgbmctbW9kZWw9XFxcIiRjdHJsLmVtYWlsXFxcIj4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIj5QYXNzd29yZDwvbGFiZWw+IDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMFxcXCI+IDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlBhc3N3b3JkXFxcIiBuZy1tb2RlbD1cXFwiJGN0cmwucGFzc3dvcmRcXFwiPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tb2Zmc2V0LTIgY29sLXNtLTEwXFxcIj4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgYnRuLXByaW1hcnlcXFwiPlNpZ24gaW48L2J1dHRvbj4gPC9kaXY+IDwvZGl2PiA8L2Zvcm0+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+XCI7XG5uZ01vZHVsZS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihjKXtjLnB1dChcImNvbXBvbmVudHMvYXV0aC1wYWdlL2F1dGgtcGFnZS5odG1sXCIsdjEpfV0pO1xubW9kdWxlLmV4cG9ydHM9djE7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2pzL2FwcC9hdXRoL2NvbXBvbmVudHMvYXV0aC1wYWdlL2F1dGgtcGFnZS5odG1sXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBib290c3RyYXBEcm9wZG93bkRpcmVjdGl2ZSBmcm9tICcuL2RpcmVjdGl2ZXMvYm9vdHN0cmFwLWRyb3Bkb3duL2Jvb3RzdHJhcC1kcm9wZG93bic7XHJcblxyXG5jb25zdCBib290c3RyYXAgPSBhbmd1bGFyLm1vZHVsZSgnYm9vdHN0cmFwJyxbXSk7XHJcblxyXG5ib290c3RyYXAuZGlyZWN0aXZlKCdib290c3RyYXBEcm9wZG93bicsYm9vdHN0cmFwRHJvcGRvd25EaXJlY3RpdmUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYm9vdHN0cmFwO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9qcy9hcHAvYm9vdHN0cmFwL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IGJvb3RzdHJhcERyb3Bkb3duVGVtcGxhdGUgZnJvbSAnLi9ib290c3RyYXAtZHJvcGRvd24uaHRtbCc7XHJcblxyXG5mdW5jdGlvbiBib290c3RyYXBEcm9wZG93bkRpcmVjdGl2ZSgkdGltZW91dCwgJGRvY3VtZW50KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHRlbXBsYXRlOiBib290c3RyYXBEcm9wZG93blRlbXBsYXRlLFxyXG4gICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgIGNvbnRyb2xsZXJBczogJyRjdHJsJyxcclxuICAgIGxpbmsgKHNjb3BlLCBlbGVtZW50KSB7XHJcbiAgICAgIGZ1bmN0aW9uIG9wZW4oKSB7XHJcbiAgICAgICAgZWxlbWVudC5maW5kKCdkaXYnKS5hZGRDbGFzcygnb3BlbicpO1xyXG4gICAgICAgIGVsZW1lbnQuZmluZCgnYnV0dG9uJykub2ZmKCdjbGljaycsb3Blbik7XHJcbiAgICAgICAgLy93aXRob3V0IHRpbWVvdXQgaXQgYnViYmxlcyBhbmQgZXhlY3V0ZXMgY2xvc2UgZnVuY3Rpb24gaW1tZWRpYXRlbHlcclxuICAgICAgICAkdGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgJGRvY3VtZW50Lm9uKCdjbGljaycsIGNsb3NlKTtcclxuICAgICAgICB9LDApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBjbG9zZSgpIHtcclxuICAgICAgICBlbGVtZW50LmZpbmQoJ2RpdicpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgJGRvY3VtZW50Lm9mZignY2xpY2snLCBjbG9zZSk7XHJcbiAgICAgICAgZWxlbWVudC5maW5kKCdidXR0b24nKS5vbignY2xpY2snLG9wZW4pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlbGVtZW50LmZpbmQoJ2J1dHRvbicpLm9uKCdjbGljaycsb3Blbik7XHJcbiAgICB9LFxyXG4gICAgdHJhbnNjbHVkZTogdHJ1ZSxcclxuICAgIHNjb3BlOiB7XHJcbiAgICAgIG1lbnVUaXRsZTogJ0AnXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBib290c3RyYXBEcm9wZG93bkRpcmVjdGl2ZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvanMvYXBwL2Jvb3RzdHJhcC9kaXJlY3RpdmVzL2Jvb3RzdHJhcC1kcm9wZG93bi9ib290c3RyYXAtZHJvcGRvd24uanNcbiAqKi8iLCJ2YXIgYW5ndWxhcj13aW5kb3cuYW5ndWxhcixuZ01vZHVsZTtcbnRyeSB7bmdNb2R1bGU9YW5ndWxhci5tb2R1bGUoW1wibmdcIl0pfVxuY2F0Y2goZSl7bmdNb2R1bGU9YW5ndWxhci5tb2R1bGUoXCJuZ1wiLFtdKX1cbnZhciB2MT1cIjxkaXYgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxpbmtcXFwiPiB7e21lbnVUaXRsZX19XFxuPHNwYW4gY2xhc3M9XFxcImNhcmV0XFxcIj48L3NwYW4+IDwvYnV0dG9uPiA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiIG5nLXRyYW5zY2x1ZGU+PC91bD4gPC9kaXY+XCI7XG5uZ01vZHVsZS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihjKXtjLnB1dChcImRpcmVjdGl2ZXMvYm9vdHN0cmFwLWRyb3Bkb3duL2Jvb3RzdHJhcC1kcm9wZG93bi5odG1sXCIsdjEpfV0pO1xubW9kdWxlLmV4cG9ydHM9djE7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2pzL2FwcC9ib290c3RyYXAvZGlyZWN0aXZlcy9ib290c3RyYXAtZHJvcGRvd24vYm9vdHN0cmFwLWRyb3Bkb3duLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IGNoYXRSb290Q29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9jaGF0LXJvb3QvY2hhdC1yb290J1xyXG5pbXBvcnQgY2hhdEludGVybG9jdXRvclNlbGVjdG9yQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9jaGF0LWludGVybG9jdXRvci1zZWxlY3Rvci9jaGF0LWludGVybG9jdXRvci1zZWxlY3RvcidcclxuaW1wb3J0IGNoYXRDb252ZXJzYXRpb25Db21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL2NoYXQtY29udmVyc2F0aW9uL2NoYXQtY29udmVyc2F0aW9uJ1xyXG5pbXBvcnQgY2hhdENvbnRyb2xzQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9jaGF0LWNvbnRyb2xzL2NoYXQtY29udHJvbHMnXHJcbmltcG9ydCBjaGF0T25VcGRhdGVTY3JvbGxEaXJlY3RpdmUgZnJvbSAnLi9kaXJlY3RpdmVzL2NoYXQtb24tdXBkYXRlLXNjcm9sbC9jaGF0LW9uLXVwZGF0ZS1zY3JvbGwnO1xyXG5pbXBvcnQgQ2hhdFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy9jaGF0LXNlcnZpY2UnXHJcblxyXG5jb25zdCBjaGF0ID0gYW5ndWxhci5tb2R1bGUoJ2NoYXQnLCBbJ25nTWVzc2FnZXMnLCAndWkucm91dGVyJywnY29udGFjdHMnXSk7XHJcblxyXG5jaGF0LmNvbXBvbmVudCgnY2hhdFJvb3QnLCBjaGF0Um9vdENvbXBvbmVudCk7XHJcbmNoYXQuY29tcG9uZW50KCdjaGF0SW50ZXJsb2N1dG9yU2VsZWN0b3InLCBjaGF0SW50ZXJsb2N1dG9yU2VsZWN0b3JDb21wb25lbnQpO1xyXG5jaGF0LmNvbXBvbmVudCgnY2hhdENvbnZlcnNhdGlvbicsIGNoYXRDb252ZXJzYXRpb25Db21wb25lbnQpO1xyXG5jaGF0LmNvbXBvbmVudCgnY2hhdENvbnRyb2xzJywgY2hhdENvbnRyb2xzQ29tcG9uZW50KTtcclxuY2hhdC5kaXJlY3RpdmUoJ2NoYXRPblVwZGF0ZVNjcm9sbCcsIGNoYXRPblVwZGF0ZVNjcm9sbERpcmVjdGl2ZSk7XHJcbmNoYXQuc2VydmljZSgnQ2hhdFNlcnZpY2UnLCBDaGF0U2VydmljZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGF0O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9qcy9hcHAvY2hhdC9pbmRleC5qc1xuICoqLyIsImltcG9ydCAnLi9jaGF0LXJvb3QuY3NzJztcclxuaW1wb3J0IGNoYXRSb290VGVtcGxhdGUgZnJvbSAnLi9jaGF0LXJvb3QuaHRtbCc7XHJcblxyXG5jbGFzcyBDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcigkdGltZW91dCwgJHJvb3RTY29wZSwgQ2hhdFNlcnZpY2UsIENvbnRhY3RzU2VydmljZSkge1xyXG4gICAgdGhpcy5fQ2hhdFNlcnZpY2UgPSBDaGF0U2VydmljZTtcclxuICAgIHRoaXMuXyR0aW1lb3V0ID0gJHRpbWVvdXQ7XHJcbiAgICB0aGlzLl9jaGF0VXBkYXRlRGVsYXkgPSAyMDAwO1xyXG4gICAgdGhpcy5jaGF0SXNFbmFibGVkID0gZmFsc2U7XHJcbiAgICBDb250YWN0c1NlcnZpY2VcclxuICAgICAgLmdldENvbnRhY3RzKClcclxuICAgICAgLnRoZW4oKHVzZXJzKSA9PiB7XHJcbiAgICAgICAgdGhpcy51c2VycyA9IHVzZXJzO1xyXG4gICAgICB9KTtcclxuICAgICRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdWNjZXNzJywgKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlKSA9PiB7XHJcbiAgICAgIGlmKHRoaXMuX2lzTWFpbFN0YXRlTGVhdmluZyh0b1N0YXRlLCBmcm9tU3RhdGUpKXtcclxuICAgICAgICB0aGlzLmVuZENoYXQoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfaXNNYWlsU3RhdGVMZWF2aW5nKHRvU3RhdGUsIGZyb21TdGF0ZSl7XHJcbiAgICByZXR1cm4gKGZyb21TdGF0ZS5uYW1lID09ICdtYWlsJyB8fCBmcm9tU3RhdGUucGFyZW50ID09ICdtYWlsJylcclxuICAgICAgICAgICAgJiZcclxuICAgICAgICAgICAodG9TdGF0ZS5uYW1lICE9ICdtYWlsJyAmJiB0b1N0YXRlLnBhcmVudCAhPSAnbWFpbCcpXHJcbiAgfVxyXG5cclxuICBpc0NoYXRFbmFibGVkKCl7XHJcbiAgICByZXR1cm4gdGhpcy5jaGF0SXNFbmFibGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0SW50ZXJsb2N1dG9yKHVzZXIpe1xyXG4gICAgdGhpcy5zZWxlY3RlZFVzZXIgPSB1c2VyO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRDaGF0KCkge1xyXG4gICAgaWYoIXRoaXMuaXNDaGF0RW5hYmxlZCgpKXtcclxuICAgICAgdGhpcy5jaGF0SXNFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5fcHJvY2Vzc01lc3NhZ2VzUmVjZWl2aW5nTG9vcCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGVuZENoYXQoKSB7XHJcbiAgICBpZih0aGlzLmlzQ2hhdEVuYWJsZWQoKSl7XHJcbiAgICAgIHRoaXMuXyR0aW1lb3V0LmNhbmNlbCh0aGlzLl90aW1lb3V0KTtcclxuICAgICAgdGhpcy5jaGF0SXNFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgIGRlbGV0ZSB0aGlzLnNlbGVjdGVkVXNlcjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBfZ2V0TWVzc2FnZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fQ2hhdFNlcnZpY2VcclxuICAgICAgLmdldE1lc3NhZ2VzKHRoaXMuc2VsZWN0ZWRVc2VyLmlkKVxyXG4gICAgICAudGhlbigobWVzc2FnZXMpID0+IHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gbWVzc2FnZXM7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX3Byb2Nlc3NNZXNzYWdlc1JlY2VpdmluZ0xvb3AoKSB7XHJcbiAgICB0aGlzLl9nZXRNZXNzYWdlcygpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLl90aW1lb3V0ID0gdGhpcy5fJHRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICB0aGlzLl9wcm9jZXNzTWVzc2FnZXNSZWNlaXZpbmdMb29wKClcclxuICAgICAgICB9LCB0aGlzLl9jaGF0VXBkYXRlRGVsYXkpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGNoYXRQYWdlQ29tcG9uZW50ID0ge1xyXG4gIHRlbXBsYXRlOiBjaGF0Um9vdFRlbXBsYXRlLFxyXG4gIGNvbnRyb2xsZXI6IENvbnRyb2xsZXJcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoYXRQYWdlQ29tcG9uZW50O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9qcy9hcHAvY2hhdC9jb21wb25lbnRzL2NoYXQtcm9vdC9jaGF0LXJvb3QuanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9qcy9hcHAvY2hhdC9jb21wb25lbnRzL2NoYXQtcm9vdC9jaGF0LXJvb3QuY3NzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhbmd1bGFyPXdpbmRvdy5hbmd1bGFyLG5nTW9kdWxlO1xudHJ5IHtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShbXCJuZ1wiXSl9XG5jYXRjaChlKXtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShcIm5nXCIsW10pfVxudmFyIHYxPVwiPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdCBwYW5lbC1pbmZvXFxcIj4gPGJ1dHRvbiBjbGFzcz1cXFwiY2xvc2UgY2hhdC1yb290LWNsb3NlXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwuZW5kQ2hhdCgpXFxcIiBuZy1pZj1cXFwiJGN0cmwuY2hhdElzRW5hYmxlZFxcXCI+IDxzcGFuPsOXPC9zcGFuPiA8L2J1dHRvbj4gPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+IDxjaGF0LWludGVybG9jdXRvci1zZWxlY3RvciB1c2Vycz1cXFwiJGN0cmwudXNlcnNcXFwiIHNlbGVjdGVkLXVzZXI9XFxcIiRjdHJsLnNlbGVjdGVkVXNlclxcXCI+IDwvY2hhdC1pbnRlcmxvY3V0b3Itc2VsZWN0b3I+IDxjaGF0LWNvbnZlcnNhdGlvbiBzZWxlY3RlZC11c2VyLW5hbWU9XFxcInt7JGN0cmwuc2VsZWN0ZWRVc2VyLmZ1bGxOYW1lfX1cXFwiIG1lc3NhZ2VzPVxcXCIkY3RybC5tZXNzYWdlc1xcXCIgbmctaWY9XFxcIiRjdHJsLnNlbGVjdGVkVXNlclxcXCI+PC9jaGF0LWNvbnZlcnNhdGlvbj4gPGNoYXQtY29udHJvbHMgc2VsZWN0ZWQtdXNlcj1cXFwiJGN0cmwuc2VsZWN0ZWRVc2VyXFxcIiBuZy1pZj1cXFwiJGN0cmwuc2VsZWN0ZWRVc2VyXFxcIj48L2NoYXQtY29udHJvbHM+IDwvZGl2PiA8L2Rpdj5cIjtcbm5nTW9kdWxlLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGMpe2MucHV0KFwiY29tcG9uZW50cy9jaGF0LXJvb3QvY2hhdC1yb290Lmh0bWxcIix2MSl9XSk7XG5tb2R1bGUuZXhwb3J0cz12MTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vanMvYXBwL2NoYXQvY29tcG9uZW50cy9jaGF0LXJvb3QvY2hhdC1yb290Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IGNoYXRJbnRlcmxvY3V0b3JTZWxlY3RvclRlbXBsYXRlIGZyb20gJy4vY2hhdC1pbnRlcmxvY3V0b3Itc2VsZWN0b3IuaHRtbCc7XHJcblxyXG5jbGFzcyBDb250cm9sbGVyIHtcclxuICBzdGFydENoYXQodXNlcikge1xyXG4gICAgdGhpcy5jaGF0UGFnZUNvbnRyb2xsZXIuc2V0SW50ZXJsb2N1dG9yKHVzZXIpO1xyXG4gICAgaWYgKCF0aGlzLmNoYXRQYWdlQ29udHJvbGxlci5pc0NoYXRFbmFibGVkKCkpIHtcclxuICAgICAgdGhpcy5jaGF0UGFnZUNvbnRyb2xsZXIuc3RhcnRDaGF0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBjaGF0SW50ZXJsb2N1dG9yU2VsZWN0b3JDb21wb25lbnQgPSB7XHJcbiAgdGVtcGxhdGU6IGNoYXRJbnRlcmxvY3V0b3JTZWxlY3RvclRlbXBsYXRlLFxyXG4gIGNvbnRyb2xsZXI6IENvbnRyb2xsZXIsXHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHVzZXJzOiAnPCcsXHJcbiAgICBzZWxlY3RlZFVzZXI6ICc9J1xyXG4gIH0sXHJcbiAgcmVxdWlyZToge1xyXG4gICAgY2hhdFBhZ2VDb250cm9sbGVyOiAnXl5jaGF0Um9vdCdcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGF0SW50ZXJsb2N1dG9yU2VsZWN0b3JDb21wb25lbnQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2pzL2FwcC9jaGF0L2NvbXBvbmVudHMvY2hhdC1pbnRlcmxvY3V0b3Itc2VsZWN0b3IvY2hhdC1pbnRlcmxvY3V0b3Itc2VsZWN0b3IuanNcbiAqKi8iLCJ2YXIgYW5ndWxhcj13aW5kb3cuYW5ndWxhcixuZ01vZHVsZTtcbnRyeSB7bmdNb2R1bGU9YW5ndWxhci5tb2R1bGUoW1wibmdcIl0pfVxuY2F0Y2goZSl7bmdNb2R1bGU9YW5ndWxhci5tb2R1bGUoXCJuZ1wiLFtdKX1cbnZhciB2MT1cIjxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWw+Q2hhdDo8L2xhYmVsPiA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLWNoYW5nZT1cXFwiJGN0cmwuc3RhcnRDaGF0KCRjdHJsLnNlbGVjdGVkVXNlcilcXFwiIG5nLW9wdGlvbnM9XFxcInVzZXIgYXMgdXNlci5mdWxsTmFtZSBmb3IgdXNlciBpbiAkY3RybC51c2VycyB0cmFjayBieSB1c2VyLmlkXFxcIiBuZy1tb2RlbD1cXFwiJGN0cmwuc2VsZWN0ZWRVc2VyXFxcIj4gPC9zZWxlY3Q+IDwvZGl2PlwiO1xubmdNb2R1bGUucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYyl7Yy5wdXQoXCJjb21wb25lbnRzL2NoYXQtaW50ZXJsb2N1dG9yLXNlbGVjdG9yL2NoYXQtaW50ZXJsb2N1dG9yLXNlbGVjdG9yLmh0bWxcIix2MSl9XSk7XG5tb2R1bGUuZXhwb3J0cz12MTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vanMvYXBwL2NoYXQvY29tcG9uZW50cy9jaGF0LWludGVybG9jdXRvci1zZWxlY3Rvci9jaGF0LWludGVybG9jdXRvci1zZWxlY3Rvci5odG1sXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCAnLi9jaGF0LWNvbnZlcnNhdGlvbi5jc3MnO1xyXG5pbXBvcnQgY2hhdENvbnZlcnNhdGlvblRlbXBsYXRlIGZyb20gJy4vY2hhdC1jb252ZXJzYXRpb24uaHRtbCc7XHJcblxyXG5jb25zdCBjaGF0Q29udmVyc2F0aW9uQ29tcG9uZW50ID0ge1xyXG4gIHRlbXBsYXRlOiBjaGF0Q29udmVyc2F0aW9uVGVtcGxhdGUsXHJcbiAgYmluZGluZ3M6IHtcclxuICAgIG1lc3NhZ2VzOiAnPCcsXHJcbiAgICBzZWxlY3RlZFVzZXJOYW1lOiAnQCdcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGF0Q29udmVyc2F0aW9uQ29tcG9uZW50O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9qcy9hcHAvY2hhdC9jb21wb25lbnRzL2NoYXQtY29udmVyc2F0aW9uL2NoYXQtY29udmVyc2F0aW9uLmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vanMvYXBwL2NoYXQvY29tcG9uZW50cy9jaGF0LWNvbnZlcnNhdGlvbi9jaGF0LWNvbnZlcnNhdGlvbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGFuZ3VsYXI9d2luZG93LmFuZ3VsYXIsbmdNb2R1bGU7XG50cnkge25nTW9kdWxlPWFuZ3VsYXIubW9kdWxlKFtcIm5nXCJdKX1cbmNhdGNoKGUpe25nTW9kdWxlPWFuZ3VsYXIubW9kdWxlKFwibmdcIixbXSl9XG52YXIgdjE9XCI8ZGl2IGNsYXNzPVxcXCJwcmUtc2Nyb2xsYWJsZSBwYW5lbCBwYW5lbC1kZWZhdWx0IGNoYXQtY29udmVyc2F0aW9uXFxcIiBjaGF0LW9uLXVwZGF0ZS1zY3JvbGw+IDxkaXYgbmctcmVwZWF0PVxcXCJtZXNzYWdlIGluICRjdHJsLm1lc3NhZ2VzIHwgb3JkZXJCeSA6IG1lc3NhZ2UuZGF0ZSA6IHRydWVcXFwiPiA8ZGl2IG5nLWlmPVxcXCJtZXNzYWdlLnR5cGUgPT0gJ2luYm94J1xcXCIgY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIj4mbmJzcDtNZTo8L2Rpdj4gPGRpdiBuZy1pZj1cXFwibWVzc2FnZS50eXBlID09ICdzZW50J1xcXCIgY2xhc3M9XFxcInRleHQtZGFuZ2VyIHRleHQtcmlnaHRcXFwiPiZuYnNwO3t7JGN0cmwuc2VsZWN0ZWRVc2VyTmFtZX19OjwvZGl2PiA8ZGl2IG5nLWNsYXNzPVxcXCJ7J3RleHQtcmlnaHQnIDogbWVzc2FnZS50eXBlID09ICdzZW50J31cXFwiIGNsYXNzPVxcXCJ0ZXh0LXByaW1hcnlcXFwiPiAmbmJzcDt7e21lc3NhZ2UuZGF0ZSB8IGRhdGU6ICdkZC9NTS95eXl5LCBISDptbSd9fSA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwid2VsbCB3ZWxsLXNtXFxcIj57e21lc3NhZ2UudGV4dH19PC9kaXY+IDwvZGl2PiA8L2Rpdj5cIjtcbm5nTW9kdWxlLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGMpe2MucHV0KFwiY29tcG9uZW50cy9jaGF0LWNvbnZlcnNhdGlvbi9jaGF0LWNvbnZlcnNhdGlvbi5odG1sXCIsdjEpfV0pO1xubW9kdWxlLmV4cG9ydHM9djE7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2pzL2FwcC9jaGF0L2NvbXBvbmVudHMvY2hhdC1jb252ZXJzYXRpb24vY2hhdC1jb252ZXJzYXRpb24uaHRtbFxuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgY2hhdENvbnRyb2xzVGVtcGxhdGUgZnJvbSAnLi9jaGF0LWNvbnRyb2xzLmh0bWwnO1xyXG5cclxuY2xhc3MgQ29udHJvbGxlcntcclxuICBjb25zdHJ1Y3RvcihDaGF0U2VydmljZSl7XHJcbiAgICB0aGlzLl9DaGF0U2VydmljZSA9IENoYXRTZXJ2aWNlO1xyXG4gIH07XHJcbiAgXHJcbiAgc2VuZE1lc3NhZ2UoKSB7XHJcbiAgICBsZXQgbWVzc2FnZSA9IHt9O1xyXG4gICAgbWVzc2FnZS5kYXRlID0gRGF0ZS5ub3coKTtcclxuICAgIG1lc3NhZ2UudGV4dCA9IHRoaXMubWVzc2FnZVRleHQ7XHJcbiAgICBtZXNzYWdlLnR5cGUgPSAnc2VudCc7XHJcbiAgICB0aGlzLm1lc3NhZ2VUZXh0ID0gJyc7XHJcbiAgICB0aGlzLl9DaGF0U2VydmljZS5hZGQodGhpcy5zZWxlY3RlZFVzZXIuaWQsIG1lc3NhZ2UpO1xyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IGNoYXRDb250cm9sc0NvbXBvbmVudCA9IHtcclxuICB0ZW1wbGF0ZTogY2hhdENvbnRyb2xzVGVtcGxhdGUsXHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHNlbGVjdGVkVXNlcjogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBDb250cm9sbGVyXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGF0Q29udHJvbHNDb21wb25lbnQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2pzL2FwcC9jaGF0L2NvbXBvbmVudHMvY2hhdC1jb250cm9scy9jaGF0LWNvbnRyb2xzLmpzXG4gKiovIiwidmFyIGFuZ3VsYXI9d2luZG93LmFuZ3VsYXIsbmdNb2R1bGU7XG50cnkge25nTW9kdWxlPWFuZ3VsYXIubW9kdWxlKFtcIm5nXCJdKX1cbmNhdGNoKGUpe25nTW9kdWxlPWFuZ3VsYXIubW9kdWxlKFwibmdcIixbXSl9XG52YXIgdjE9XCI8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGlucHV0IHBsYWNlaG9sZGVyPVxcXCJFbnRlciB5b3VyIG1lc3NhZ2VcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLWtleXVwPVxcXCIkZXZlbnQua2V5Q29kZSA9PSAxMyAmJiAkY3RybC5zZW5kTWVzc2FnZSgpXFxcIiBuZy1tb2RlbD1cXFwiJGN0cmwubWVzc2FnZVRleHRcXFwiIHR5cGU9XFxcInRleHRcXFwiPiA8YnI+IDxkaXYgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiA8YnV0dG9uIG5nLWNsaWNrPVxcXCIkY3RybC5zZW5kTWVzc2FnZSgpXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWRpc2FibGVkPVxcXCIhJGN0cmwubWVzc2FnZVRleHRcXFwiPlN1Ym1pdCA8L2J1dHRvbj4gPC9kaXY+IDwvZGl2PlwiO1xubmdNb2R1bGUucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYyl7Yy5wdXQoXCJjb21wb25lbnRzL2NoYXQtY29udHJvbHMvY2hhdC1jb250cm9scy5odG1sXCIsdjEpfV0pO1xubW9kdWxlLmV4cG9ydHM9djE7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2pzL2FwcC9jaGF0L2NvbXBvbmVudHMvY2hhdC1jb250cm9scy9jaGF0LWNvbnRyb2xzLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZnVuY3Rpb24gY2hhdE9uVXBkYXRlU2Nyb2xsRGlyZWN0aXZlKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgbGluayAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjaGF0Q29udmVyc2F0aW9uQ29udHJvbGxlcikge1xyXG4gICAgICBmdW5jdGlvbiBzY3JvbGxUb1RvcCgpIHtcclxuICAgICAgICBlbGVtZW50WzBdLnNjcm9sbFRvcCA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgc2NvcGUuJHdhdGNoKCAoKSA9PiBjaGF0Q29udmVyc2F0aW9uQ29udHJvbGxlci5tZXNzYWdlcywgc2Nyb2xsVG9Ub3AsIHRydWUpO1xyXG4gICAgfSxcclxuICAgIHJlcXVpcmU6ICdeXmNoYXRDb252ZXJzYXRpb24nLFxyXG4gICAgc2NvcGU6IHt9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGF0T25VcGRhdGVTY3JvbGxEaXJlY3RpdmU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2pzL2FwcC9jaGF0L2RpcmVjdGl2ZXMvY2hhdC1vbi11cGRhdGUtc2Nyb2xsL2NoYXQtb24tdXBkYXRlLXNjcm9sbC5qc1xuICoqLyIsImNsYXNzIENoYXRTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigkaHR0cCwgRmlyZWJhc2VDb25maWdTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLl8kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5fRmlyZWJhc2VDb25maWdTZXJ2aWNlID0gRmlyZWJhc2VDb25maWdTZXJ2aWNlO1xyXG4gICAgdGhpcy5fZmlyZUJhc2VPYmplY3ROYW1lID0gJ2NoYXQnO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWVzc2FnZXModXNlcklkKSB7XHJcbiAgICB2YXIgdXJsID0gdGhpcy5fRmlyZWJhc2VDb25maWdTZXJ2aWNlLmdldEJhc2VVcmwoKSArIHRoaXMuX2ZpcmVCYXNlT2JqZWN0TmFtZSArICcvJyArIHVzZXJJZCArICcuanNvbic7XHJcbiAgICByZXR1cm4gdGhpcy5fJGh0dHBcclxuICAgICAgLmdldCh1cmwpXHJcbiAgICAgIC50aGVuKHJlcyA9PiB0aGlzLl9GaXJlYmFzZUNvbmZpZ1NlcnZpY2Uubm9ybWFsaXplVG9BcnJheShyZXMuZGF0YSkpO1xyXG4gIH07XHJcblxyXG4gIGFkZCh1c2VySWQsIG5ld01lc3NhZ2UpIHtcclxuICAgIHZhciB1cmwgPSB0aGlzLl9GaXJlYmFzZUNvbmZpZ1NlcnZpY2UuZ2V0QmFzZVVybCgpICsgdGhpcy5fZmlyZUJhc2VPYmplY3ROYW1lICsgJy8nICsgdXNlcklkICsgJy5qc29uJztcclxuICAgIHJldHVybiB0aGlzLl8kaHR0cC5wb3N0KHVybCwgbmV3TWVzc2FnZSk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdFNlcnZpY2U7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2pzL2FwcC9jaGF0L3NlcnZpY2VzL2NoYXQtc2VydmljZS5qc1xuICoqLyIsImltcG9ydCBjb250YWN0c1BhZ2VDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhY3RzLXBhZ2UvY29udGFjdHMtcGFnZSc7XHJcbmltcG9ydCBjb250YWN0c1VzZXJDYXJkQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9jb250YWN0cy11c2VyLWNhcmQvY29udGFjdHMtdXNlci1jYXJkJztcclxuaW1wb3J0IENvbnRhY3RzU2VydmljZSBmcm9tICcuL3NlcnZpY2VzL2NvbnRhY3RzLXNlcnZpY2UnXHJcblxyXG5jb25zdCBjb250YWN0cyA9IGFuZ3VsYXIubW9kdWxlKCdjb250YWN0cycsIFsnbmdNZXNzYWdlcycsICd1aS5yb3V0ZXInXSk7XHJcblxyXG5jb250YWN0cy5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XHJcbiAgJHN0YXRlUHJvdmlkZXJcclxuICAgIC5zdGF0ZSgnY29udGFjdHMnLCB7XHJcbiAgICAgIHVybDogJy9jb250YWN0cycsXHJcbiAgICAgIHRlbXBsYXRlOiAnPGNvbnRhY3RzLXBhZ2U+PC9jb250YWN0cy1wYWdlPicsXHJcbiAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICBcImN1cnJlbnRBdXRoXCI6IGZ1bmN0aW9uKEF1dGhTZXJ2aWNlKSB7XHJcbiAgICAgICAgICByZXR1cm4gQXV0aFNlcnZpY2UuJHJlcXVpcmVBdXRoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbmNvbnRhY3RzLmNvbXBvbmVudCgnY29udGFjdHNVc2VyQ2FyZCcsIGNvbnRhY3RzVXNlckNhcmRDb21wb25lbnQpO1xyXG5jb250YWN0cy5jb21wb25lbnQoJ2NvbnRhY3RzUGFnZScsIGNvbnRhY3RzUGFnZUNvbXBvbmVudCk7XHJcbmNvbnRhY3RzLnNlcnZpY2UoJ0NvbnRhY3RzU2VydmljZScsIENvbnRhY3RzU2VydmljZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250YWN0cztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvanMvYXBwL2NvbnRhY3RzL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0ICcuL2NvbnRhY3RzLXBhZ2UuY3NzJztcclxuaW1wb3J0IGNvbnRhY3RzVGVtcGxhdGUgZnJvbSAnLi9jb250YWN0cy1wYWdlLmh0bWwnO1xyXG5cclxuY2xhc3MgQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoQ29udGFjdHNTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLl9Db250YWN0c1NlcnZpY2UgPSBDb250YWN0c1NlcnZpY2U7XHJcbiAgICB0aGlzLm1vZGUgPSAnbGlzdCc7XHJcbiAgICBDb250YWN0c1NlcnZpY2VcclxuICAgICAgLmdldENvbnRhY3RzKClcclxuICAgICAgLnRoZW4oKHVzZXJzKSA9PiB7XHJcbiAgICAgICAgdGhpcy51c2VycyA9IHVzZXJzO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldE1vZGUobW9kZSkge1xyXG4gICAgdGhpcy5tb2RlID0gbW9kZTtcclxuICB9O1xyXG5cclxuICBnZXRNb2RlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubW9kZTtcclxuICB9O1xyXG5cclxuICBhZGRVc2VyKG5ld1VzZXIpIHtcclxuICAgIHRoaXMuX0NvbnRhY3RzU2VydmljZS5hZGQobmV3VXNlcilcclxuICAgICAgLnRoZW4obmV3VXNlciA9PiB7XHJcbiAgICAgICAgdGhpcy51c2Vycy5wdXNoKG5ld1VzZXIpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICB1cGRhdGVVc2VyKG5ld1VzZXIsIG9sZFVzZXIpIHtcclxuICAgIHRoaXMuX0NvbnRhY3RzU2VydmljZS51cGRhdGUobmV3VXNlcilcclxuICAgICAgLnRoZW4obmV3VXNlciA9PiB7XHJcbiAgICAgICAgdGhpcy51c2Vyc1t0aGlzLnVzZXJzLmluZGV4T2Yob2xkVXNlcildID0gbmV3VXNlcjtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVtb3ZlVXNlcih1c2VyKSB7XHJcbiAgICB0aGlzLl9Db250YWN0c1NlcnZpY2UucmVtb3ZlKHVzZXIpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLnVzZXJzLnNwbGljZSh0aGlzLnVzZXJzLmluZGV4T2YodXNlciksIDEpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBjb250YWN0c1BhZ2VDb21wb25lbnQgPSB7XHJcbiAgdGVtcGxhdGU6IGNvbnRhY3RzVGVtcGxhdGUsXHJcbiAgY29udHJvbGxlcjogQ29udHJvbGxlclxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdHNQYWdlQ29tcG9uZW50O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9qcy9hcHAvY29udGFjdHMvY29tcG9uZW50cy9jb250YWN0cy1wYWdlL2NvbnRhY3RzLXBhZ2UuanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9qcy9hcHAvY29udGFjdHMvY29tcG9uZW50cy9jb250YWN0cy1wYWdlL2NvbnRhY3RzLXBhZ2UuY3NzXG4gKiogbW9kdWxlIGlkID0gNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhbmd1bGFyPXdpbmRvdy5hbmd1bGFyLG5nTW9kdWxlO1xudHJ5IHtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShbXCJuZ1wiXSl9XG5jYXRjaChlKXtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShcIm5nXCIsW10pfVxudmFyIHYxPVwiPGhlYWRlciBjbGFzcz1cXFwiY29udGFjdHMtcGFnZS1oZWFkZXJcXFwiPiA8aDEgY2xhc3M9XFxcImNvbnRhY3RzLXBhZ2UtaGVhZGVyX190aXRsZVxcXCI+Q29udGFjdHM8L2gxPiA8L2hlYWRlcj4gPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj4gPGRpdiBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIj4gPGJ1dHRvbiBuZy1jbGljaz1cXFwiJGN0cmwuc2V0TW9kZSgmcXVvdDtuZXcmcXVvdDspXFxcIiBuZy1kaXNhYmxlZD1cXFwiJGN0cmwubW9kZSA9PT0gJnF1b3Q7bmV3JnF1b3Q7XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1sZ1xcXCI+IEFkZCBuZXcgY29udGFjdCA8L2J1dHRvbj4gPGJyPjxicj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInBhbmVsLWdyb3VwXFxcIj4gPGNvbnRhY3RzLXVzZXItY2FyZCBuZy1pZj1cXFwiJGN0cmwubW9kZSA9PT0gJnF1b3Q7bmV3JnF1b3Q7XFxcIiBtb2RlPVxcXCJlZGl0XFxcIiB1c2VyPVxcXCJ1c2VyXFxcIj4gPC9jb250YWN0cy11c2VyLWNhcmQ+IDxjb250YWN0cy11c2VyLWNhcmQgbmctaWY9XFxcIiRjdHJsLm1vZGUgPT09ICZxdW90O2xpc3QmcXVvdDtcXFwiIG5nLXJlcGVhdD1cXFwidXNlciBpbiAkY3RybC51c2Vyc1xcXCIgdXNlcj1cXFwidXNlclxcXCIgbW9kZT1cXFwicHJlc2VudGF0aW9uXFxcIj4gPC9jb250YWN0cy11c2VyLWNhcmQ+IDwvZGl2PiA8L2Rpdj5cIjtcbm5nTW9kdWxlLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGMpe2MucHV0KFwiY29tcG9uZW50cy9jb250YWN0cy1wYWdlL2NvbnRhY3RzLXBhZ2UuaHRtbFwiLHYxKX1dKTtcbm1vZHVsZS5leHBvcnRzPXYxO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9qcy9hcHAvY29udGFjdHMvY29tcG9uZW50cy9jb250YWN0cy1wYWdlL2NvbnRhY3RzLXBhZ2UuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgdXNlckNhcmRUZW1wbGF0ZSBmcm9tICcuL2NvbnRhY3RzLXVzZXItY2FyZC5odG1sJztcclxuXHJcbmNsYXNzIENvbnRyb2xsZXIge1xyXG4gIHJlbW92ZSgpe1xyXG4gICAgdGhpcy5jb250YWN0c0N0cmwucmVtb3ZlVXNlcih0aGlzLnVzZXIpO1xyXG4gIH07XHJcblxyXG4gIHN0b3BFZGl0aW9uKCl7XHJcbiAgICB0aGlzLm1vZGUgPSAncHJlc2VudGF0aW9uJztcclxuICAgIGRlbGV0ZSB0aGlzLnVzZXJEcmFmdDtcclxuICAgIGlmICh0aGlzLmNvbnRhY3RzQ3RybC5nZXRNb2RlICE9ICdsaXN0Jykge1xyXG4gICAgICB0aGlzLmNvbnRhY3RzQ3RybC5zZXRNb2RlKCdsaXN0Jyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgc2F2ZSgpe1xyXG4gICAgaWYgKHRoaXMudXNlckRyYWZ0LmlkKSB7XHJcbiAgICAgIHRoaXMuY29udGFjdHNDdHJsLnVwZGF0ZVVzZXIodGhpcy51c2VyRHJhZnQsIHRoaXMudXNlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNvbnRhY3RzQ3RybC5hZGRVc2VyKHRoaXMudXNlckRyYWZ0KTtcclxuICAgIH1cclxuICAgIHRoaXMuc3RvcEVkaXRpb24oKTtcclxuICB9O1xyXG5cclxuICBzdGFydEVkaXRpb24oKXtcclxuICAgIHRoaXMubW9kZSA9ICdlZGl0JztcclxuICAgIHRoaXMudXNlckRyYWZ0ID0gYW5ndWxhci5jb3B5KHRoaXMudXNlcik7XHJcbiAgICB0aGlzLnVzZXJEcmFmdC5iaXJ0aGRhdGUgPSBuZXcgRGF0ZSh0aGlzLnVzZXJEcmFmdC5iaXJ0aGRhdGUpO1xyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IGNvbnRhY3RzVXNlckNhcmRDb21wb25lbnQgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHVzZXI6ICc9JyxcclxuICAgIG1vZGU6ICdAJ1xyXG4gIH0sXHJcbiAgdGVtcGxhdGU6IHVzZXJDYXJkVGVtcGxhdGUsXHJcbiAgcmVxdWlyZToge1xyXG4gICAgY29udGFjdHNDdHJsOiAnXl5jb250YWN0c1BhZ2UnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBDb250cm9sbGVyXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250YWN0c1VzZXJDYXJkQ29tcG9uZW50O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9qcy9hcHAvY29udGFjdHMvY29tcG9uZW50cy9jb250YWN0cy11c2VyLWNhcmQvY29udGFjdHMtdXNlci1jYXJkLmpzXG4gKiovIiwidmFyIGFuZ3VsYXI9d2luZG93LmFuZ3VsYXIsbmdNb2R1bGU7XG50cnkge25nTW9kdWxlPWFuZ3VsYXIubW9kdWxlKFtcIm5nXCJdKX1cbmNhdGNoKGUpe25nTW9kdWxlPWFuZ3VsYXIubW9kdWxlKFwibmdcIixbXSl9XG52YXIgdjE9XCI8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj4gPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+IDxoNCBjbGFzcz1cXFwicGFuZWwtdGl0bGVcXFwiPjxkaXYgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBjbGFzcz1cXFwiY29sbGFwc2VkXFxcIj4ge3skY3RybC51c2VyLmZ1bGxOYW1lfX0gPC9kaXY+PC9oND4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInBhbmVsLWNvbGxhcHNlIGNvbGxhcHNlIGluXFxcIj4gPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCIgbmctaWY9XFxcIiRjdHJsLm1vZGUgPT0gJnF1b3Q7cHJlc2VudGF0aW9uJnF1b3Q7XFxcIj4gPGFkZHJlc3M+IDxzdHJvbmc+RW1haWw8L3N0cm9uZz48YnI+IDxkaXY+e3skY3RybC51c2VyLmVtYWlsfX08L2Rpdj4gPC9hZGRyZXNzPiA8YWRkcmVzcz4gPHN0cm9uZz5BZGRyZXNzPC9zdHJvbmc+PGJyPiB7eyRjdHJsLnVzZXIuYWRkcmVzc319IDwvYWRkcmVzcz4gPGJ1dHRvbiBuZy1jbGljaz1cXFwiJGN0cmwuc3RhcnRFZGl0aW9uKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPkVkaXQ8L2J1dHRvbj5cXG48YnV0dG9uIG5nLWNsaWNrPVxcXCIkY3RybC5yZW1vdmUoKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+RGVsZXRlPC9idXR0b24+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIiBuZy1pZj1cXFwiJGN0cmwubW9kZSA9PSAmcXVvdDtlZGl0JnF1b3Q7XFxcIj4gPGZvcm0gbmFtZT1cXFwidXNlcmNhcmRcXFwiPiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieyZxdW90O2hhcy1lcnJvciZxdW90OzogIXVzZXJjYXJkLmZ1bGxOYW1lLiR2YWxpZCAmJiB1c2VyY2FyZC5mdWxsTmFtZS4kZGlydHl9XFxcIj4gPGxhYmVsPk5hbWU8L2xhYmVsPiA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIiRjdHJsLnVzZXJEcmFmdC5mdWxsTmFtZVxcXCIgbmFtZT1cXFwiZnVsbE5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIHJlcXVpcmVkPiA8bGFiZWwgbmctbWVzc2FnZXM9XFxcInVzZXJjYXJkLmZ1bGxOYW1lLiRlcnJvclxcXCI+IDxzcGFuIG5nLW1lc3NhZ2U9XFxcInJlcXVpcmVkXFxcIj5GaWVsZCBpcyBtYW50b2Rvcnk8L3NwYW4+IDwvbGFiZWw+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieyZxdW90O2hhcy1lcnJvciZxdW90OzogIXVzZXJjYXJkLmVtYWlsLiR2YWxpZCAmJiB1c2VyY2FyZC5lbWFpbC4kZGlydHl9XFxcIj4gPGxhYmVsPkVtYWlsPC9sYWJlbD4gPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCIkY3RybC51c2VyRHJhZnQuZW1haWxcXFwiIHR5cGU9XFxcImVtYWlsXFxcIiByZXF1aXJlZCBuYW1lPVxcXCJlbWFpbFxcXCI+IDxsYWJlbCBuZy1tZXNzYWdlcz1cXFwidXNlcmNhcmQuZW1haWwuJGVycm9yXFxcIj4gPHNwYW4gbmctbWVzc2FnZT1cXFwicmVxdWlyZWRcXFwiPkZpZWxkIGlzIG1hbnRvZG9yeTwvc3Bhbj5cXG48c3BhbiBuZy1tZXNzYWdlPVxcXCJlbWFpbFxcXCI+VmFsdWUgaGF2ZSB0byBiZSB2YWxpZCBlbWFpbDwvc3Bhbj4gPC9sYWJlbD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWw+QWRkcmVzczwvbGFiZWw+IDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwiJGN0cmwudXNlckRyYWZ0LmFkZHJlc3NcXFwiIHR5cGU9XFxcInRleHRcXFwiPiA8L2Rpdj4gPGJ1dHRvbiBuZy1kaXNhYmxlZD1cXFwiIXVzZXJjYXJkLiR2YWxpZFxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLnNhdmUoKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+U2F2ZTwvYnV0dG9uPlxcbjxidXR0b24gbmctY2xpY2s9XFxcIiRjdHJsLnN0b3BFZGl0aW9uKClcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+RGlzY2FyZDwvYnV0dG9uPiA8L2Zvcm0+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+XCI7XG5uZ01vZHVsZS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihjKXtjLnB1dChcImNvbXBvbmVudHMvY29udGFjdHMtdXNlci1jYXJkL2NvbnRhY3RzLXVzZXItY2FyZC5odG1sXCIsdjEpfV0pO1xubW9kdWxlLmV4cG9ydHM9djE7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2pzL2FwcC9jb250YWN0cy9jb21wb25lbnRzL2NvbnRhY3RzLXVzZXItY2FyZC9jb250YWN0cy11c2VyLWNhcmQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJjbGFzcyBDb250YWN0c1NlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCRodHRwLCAkcSwgRmlyZWJhc2VDb25maWdTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLl8kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5fJHEgPSAkcTtcclxuICAgIHRoaXMuX0ZpcmViYXNlQ29uZmlnU2VydmljZSA9IEZpcmViYXNlQ29uZmlnU2VydmljZTtcclxuICAgIHRoaXMuX2ZpcmVCYXNlT2JqZWN0TmFtZSA9ICd1c2Vycyc7XHJcbiAgfVxyXG5cclxuICBnZXRDb250YWN0cygpIHtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMuX0ZpcmViYXNlQ29uZmlnU2VydmljZS5nZXRCYXNlVXJsKCkgKyB0aGlzLl9maXJlQmFzZU9iamVjdE5hbWUgKyAnLmpzb24nO1xyXG4gICAgaWYgKHRoaXMuX3VzZXJzKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl8kcS5yZXNvbHZlKHRoaXMuX3VzZXJzKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl8kaHR0cFxyXG4gICAgICAuZ2V0KHVybClcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICB0aGlzLl91c2VycyA9IHRoaXMuX0ZpcmViYXNlQ29uZmlnU2VydmljZS5ub3JtYWxpemVUb0FycmF5KHJlcy5kYXRhKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlcnM7XHJcbiAgICAgIH0pO1xyXG5cclxuICB9O1xyXG5cclxuICBhZGQobmV3SXRlbSkge1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5fRmlyZWJhc2VDb25maWdTZXJ2aWNlLmdldEJhc2VVcmwoKSArIHRoaXMuX2ZpcmVCYXNlT2JqZWN0TmFtZSArICcuanNvbic7XHJcbiAgICByZXR1cm4gdGhpcy5fJGh0dHAucG9zdCh1cmwsIG5ld0l0ZW0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBuZXdJdGVtLmlkID0gcmVzcG9uc2UuZGF0YS5uYW1lO1xyXG4gICAgICAgIHJldHVybiBuZXdJdGVtO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICB1cGRhdGUoaXRlbSkge1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5fRmlyZWJhc2VDb25maWdTZXJ2aWNlLmdldEJhc2VVcmwoKSArIHRoaXMuX2ZpcmVCYXNlT2JqZWN0TmFtZSArICcvJyArIGl0ZW0uaWQgKyAnLmpzb24nO1xyXG4gICAgcmV0dXJuIHRoaXMuXyRodHRwLnB1dCh1cmwsIGl0ZW0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpO1xyXG4gIH07XHJcblxyXG4gIHJlbW92ZShpdGVtKSB7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLl9GaXJlYmFzZUNvbmZpZ1NlcnZpY2UuZ2V0QmFzZVVybCgpICsgdGhpcy5fZmlyZUJhc2VPYmplY3ROYW1lICsgJy8nICsgaXRlbS5pZCArICcuanNvbic7XHJcbiAgICByZXR1cm4gdGhpcy5fJGh0dHAuZGVsZXRlKHVybCk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdHNTZXJ2aWNlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9qcy9hcHAvY29udGFjdHMvc2VydmljZXMvY29udGFjdHMtc2VydmljZS5qc1xuICoqLyIsImltcG9ydCBNYWlsc1NlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy9tYWlscy1zZXJ2aWNlJztcclxuaW1wb3J0IG1haWxzQ29tcG9zZUVtYWlsQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9tYWlscy1jb21wb3NlLWVtYWlsL21haWxzLWNvbXBvc2UtZW1haWwnXHJcbmltcG9ydCBtYWlsc0xpc3RDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL21haWxzLWxpc3QvbWFpbHMtbGlzdCdcclxuaW1wb3J0IG1haWxzTmF2aWdhdGlvbkNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvbWFpbHMtbmF2aWdhdGlvbi9tYWlscy1uYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgbWFpbHNQYWdlQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9tYWlscy1wYWdlL21haWxzLXBhZ2UnXHJcbmltcG9ydCBtYWlsc0xldHRlckNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvbWFpbHMtbGV0dGVyL21haWxzLWxldHRlcidcclxuaW1wb3J0IG1haWxzU3RhckNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvbWFpbHMtc3Rhci9tYWlscy1zdGFyJ1xyXG5cclxuY29uc3QgbWFpbHMgPSBhbmd1bGFyLm1vZHVsZSgnbWFpbHMnLCBbJ25nTWVzc2FnZXMnLCAndWkucm91dGVyJ10pO1xyXG5cclxubWFpbHMuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xyXG4gICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAuc3RhdGUoJ21haWwnLCB7XHJcbiAgICAgIHVybDogJy9tYWlsJyxcclxuICAgICAgdGVtcGxhdGU6ICc8bWFpbHMtcGFnZT48L21haWxzLXBhZ2U+JyxcclxuICAgICAgYWJzdHJhY3Q6IHRydWUsXHJcbiAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICBcImN1cnJlbnRBdXRoXCI6IGZ1bmN0aW9uKEF1dGhTZXJ2aWNlKSB7XHJcbiAgICAgICAgICByZXR1cm4gQXV0aFNlcnZpY2UuJHJlcXVpcmVBdXRoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKCdjb21wb3NlJywge1xyXG4gICAgICBwYXJlbnQ6ICdtYWlsJyxcclxuICAgICAgdXJsOiAnL2NvbXBvc2UvOm1haWxJZCcsXHJcbiAgICAgIHRlbXBsYXRlOiAnPG1haWxzLWNvbXBvc2UtZW1haWwgbWFpbC1pZD1cInt7JGN0cmwubWFpbElkfX1cIj48L21haWxzLWNvbXBvc2UtZW1haWw+JyxcclxuICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24gKCRzdGF0ZVBhcmFtcykge1xyXG4gICAgICAgIHRoaXMubWFpbElkID0gJHN0YXRlUGFyYW1zLm1haWxJZDtcclxuICAgICAgfSxcclxuICAgICAgY29udHJvbGxlckFzOiAnJGN0cmwnXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKCdsZXR0ZXInLCB7XHJcbiAgICAgIHBhcmVudDogJ21haWwnLFxyXG4gICAgICB1cmw6ICcvbGV0dGVyOm1haWxJZCcsXHJcbiAgICAgIHRlbXBsYXRlOiAnPG1haWxzLWxldHRlciBtYWlsLWlkPVwie3skY3RybC5tYWlsSWR9fVwiPjwvbWFpbHMtbGV0dGVyPicsXHJcbiAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uICgkc3RhdGVQYXJhbXMpIHtcclxuICAgICAgICB0aGlzLm1haWxJZCA9ICRzdGF0ZVBhcmFtcy5tYWlsSWQ7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRyb2xsZXJBczogJyRjdHJsJ1xyXG4gICAgfSlcclxuICAgIC5zdGF0ZSgnYm94Jywge1xyXG4gICAgICBwYXJlbnQ6ICdtYWlsJyxcclxuICAgICAgdXJsOiAnL2JveD06Ym94SWQnLFxyXG4gICAgICB0ZW1wbGF0ZTogJzxtYWlscy1saXN0IGJveC1pZD1cIiRjdHJsLmJveElkXCI+PC9tYWlscy1saXN0PicsXHJcbiAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uICgkc3RhdGVQYXJhbXMsTWFpbHNTZXJ2aWNlKSB7XHJcbiAgICAgICAgTWFpbHNTZXJ2aWNlLnNldFNlbGVjdGVkQm94SWQoJHN0YXRlUGFyYW1zLmJveElkKTtcclxuICAgICAgICB0aGlzLmJveElkID0gJHN0YXRlUGFyYW1zLmJveElkO1xyXG4gICAgICB9LFxyXG4gICAgICBjb250cm9sbGVyQXM6ICckY3RybCdcclxuICAgIH0pO1xyXG59KTtcclxubWFpbHMuc2VydmljZSgnTWFpbHNTZXJ2aWNlJywgTWFpbHNTZXJ2aWNlKTtcclxubWFpbHMuY29tcG9uZW50KCdtYWlsc0NvbXBvc2VFbWFpbCcsIG1haWxzQ29tcG9zZUVtYWlsQ29tcG9uZW50KTtcclxubWFpbHMuY29tcG9uZW50KCdtYWlsc0xpc3QnLCBtYWlsc0xpc3RDb21wb25lbnQpO1xyXG5tYWlscy5jb21wb25lbnQoJ21haWxzTmF2aWdhdGlvbicsIG1haWxzTmF2aWdhdGlvbkNvbXBvbmVudCk7XHJcbm1haWxzLmNvbXBvbmVudCgnbWFpbHNQYWdlJywgbWFpbHNQYWdlQ29tcG9uZW50KTtcclxubWFpbHMuY29tcG9uZW50KCdtYWlsc0xldHRlcicsIG1haWxzTGV0dGVyQ29tcG9uZW50KTtcclxubWFpbHMuY29tcG9uZW50KCdtYWlsc1N0YXInLCBtYWlsc1N0YXJDb21wb25lbnQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFpbHM7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2pzL2FwcC9tYWlscy9pbmRleC5qc1xuICoqLyIsImNsYXNzIE1haWxzU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoJGh0dHAsICRxLCBGaXJlYmFzZUNvbmZpZ1NlcnZpY2UpIHtcclxuICAgIHRoaXMuXyRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLl8kcSA9ICRxO1xyXG4gICAgdGhpcy5fRmlyZWJhc2VDb25maWdTZXJ2aWNlID0gRmlyZWJhc2VDb25maWdTZXJ2aWNlO1xyXG4gICAgdGhpcy5fZmlyZUJhc2VPYmplY3ROYW1lID0gJ21haWxMaXN0JztcclxuICAgIHRoaXMuSVRFTV9UWVBFX0RSQUZUID0gJ2RyYWZ0cyc7XHJcbiAgICB0aGlzLklURU1fVFlQRV9TRU5UID0gJ3NlbnQnO1xyXG4gICAgdGhpcy5JVEVNX1RZUEVfSU5CT1ggPSAnaW5ib3gnO1xyXG4gIH1cclxuICBcclxuICBnZXRTZWxlY3RlZEJveElkKCl7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRCb3hJZDtcclxuICB9XHJcbiAgXHJcbiAgc2V0U2VsZWN0ZWRCb3hJZChib3hJZCl7XHJcbiAgICB0aGlzLl9zZWxlY3RlZEJveElkID0gYm94SWQ7XHJcbiAgfVxyXG5cclxuICBnZXRNYWlsTGlzdCgpIHtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMuX0ZpcmViYXNlQ29uZmlnU2VydmljZS5nZXRCYXNlVXJsKCkgKyB0aGlzLl9maXJlQmFzZU9iamVjdE5hbWUgKyAnLmpzb24nO1xyXG4gICAgaWYgKHRoaXMuX21haWxMaXN0KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl8kcS5yZXNvbHZlKHRoaXMuX21haWxMaXN0KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl8kaHR0cFxyXG4gICAgICAuZ2V0KHVybClcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICB0aGlzLl9tYWlsTGlzdCA9IHRoaXMuX0ZpcmViYXNlQ29uZmlnU2VydmljZS5ub3JtYWxpemVUb0FycmF5KHJlcy5kYXRhKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWFpbExpc3Q7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGdldChpZCkge1xyXG4gICAgcmV0dXJuIHRoaXNcclxuICAgICAgLmdldE1haWxMaXN0KClcclxuICAgICAgLnRoZW4oIG1haWxMaXN0ID0+IG1haWxMaXN0LmZpbHRlcihtYWlsID0+IG1haWwuaWQgPT0gaWQpWzBdKTtcclxuICB9XHJcblxyXG4gIGFkZChuZXdJdGVtKSB7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLl9GaXJlYmFzZUNvbmZpZ1NlcnZpY2UuZ2V0QmFzZVVybCgpICsgdGhpcy5fZmlyZUJhc2VPYmplY3ROYW1lICsgJy5qc29uJztcclxuICAgIHJldHVybiB0aGlzLl8kaHR0cC5wb3N0KHVybCwgbmV3SXRlbSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIG5ld0l0ZW0uaWQgPSByZXNwb25zZS5kYXRhLm5hbWU7XHJcbiAgICAgICAgdGhpcy5fbWFpbExpc3QucHVzaChuZXdJdGVtKTtcclxuICAgICAgICByZXR1cm4gbmV3SXRlbTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXBkYXRlKG5ld0l0ZW0sIG9sZEl0ZW0pIHtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMuX0ZpcmViYXNlQ29uZmlnU2VydmljZS5nZXRCYXNlVXJsKCkgKyB0aGlzLl9maXJlQmFzZU9iamVjdE5hbWUgKyAnLycgKyBuZXdJdGVtLmlkICsgJy5qc29uJztcclxuICAgIHJldHVybiB0aGlzLl8kaHR0cC5wdXQodXJsLCBuZXdJdGVtKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKVxyXG4gICAgICAudGhlbihuZXdJdGVtID0+IHtcclxuICAgICAgICB0aGlzLl9tYWlsTGlzdFt0aGlzLl9tYWlsTGlzdC5pbmRleE9mKG9sZEl0ZW0gPyBvbGRJdGVtIDogbmV3SXRlbSldID0gbmV3SXRlbTtcclxuICAgICAgfSlcclxuICB9O1xyXG5cclxuICByZW1vdmUoaXRlbSkge1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5fRmlyZWJhc2VDb25maWdTZXJ2aWNlLmdldEJhc2VVcmwoKSArIHRoaXMuX2ZpcmVCYXNlT2JqZWN0TmFtZSArICcvJyArIGl0ZW0uaWQgKyAnLmpzb24nO1xyXG4gICAgcmV0dXJuIHRoaXMuXyRodHRwXHJcbiAgICAgIC5kZWxldGUodXJsKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX21haWxMaXN0W3RoaXMuX21haWxMaXN0LmluZGV4T2YoaXRlbSldO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1haWxzU2VydmljZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvanMvYXBwL21haWxzL3NlcnZpY2VzL21haWxzLXNlcnZpY2UuanNcbiAqKi8iLCJpbXBvcnQgY29tcG9zZUVtYWlsVGVtcGxhdGUgZnJvbSAnLi9tYWlscy1jb21wb3NlLWVtYWlsLmh0bWwnO1xyXG5cclxuY2xhc3MgQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHN0YXRlLCBNYWlsc1NlcnZpY2UpIHtcclxuICAgIE1haWxzU2VydmljZS5zZXRTZWxlY3RlZEJveElkKCdkcmFmdHMnKTtcclxuICAgIHRoaXMuXyRzdGF0ZSA9ICRzdGF0ZTtcclxuICAgIHRoaXMuX01haWxzU2VydmljZSA9IE1haWxzU2VydmljZTtcclxuICAgIGlmKHRoaXMubWFpbElkKXtcclxuICAgICAgTWFpbHNTZXJ2aWNlXHJcbiAgICAgICAgLmdldCh0aGlzLm1haWxJZClcclxuICAgICAgICAudGhlbiggbWFpbCA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNhdmVETWFpbERyYWZ0ID0gbWFpbDtcclxuICAgICAgICAgIHRoaXMubWFpbERyYWZ0ID0gYW5ndWxhci5jb3B5KG1haWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMubWFpbERyYWZ0ID0ge307XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkaXNjYXJkKCkge1xyXG4gICAgaWYodGhpcy5tYWlsSWQpe1xyXG4gICAgICB0aGlzLl9NYWlsc1NlcnZpY2UucmVtb3ZlKHRoaXMuc2F2ZURNYWlsRHJhZnQpO1xyXG4gICAgICB0aGlzLl8kc3RhdGUuZ28oJ2JveCcsIHtib3hJZDogJ2RyYWZ0cyd9KTtcclxuICAgIH1cclxuICAgIHRoaXMuXyRzdGF0ZS5nbygnYm94Jywge2JveElkOiAnaW5ib3gnfSk7XHJcbiAgfVxyXG5cclxuICBzYXZlRHJhZnQoKSB7XHJcbiAgICB0aGlzLm1haWxEcmFmdC50eXBlID0gdGhpcy5fTWFpbHNTZXJ2aWNlLklURU1fVFlQRV9EUkFGVDtcclxuICAgIHRoaXMubWFpbERyYWZ0LmRhdGUgPSBEYXRlLm5vdygpO1xyXG4gICAgaWYgKHRoaXMubWFpbERyYWZ0LmlkKSB7XHJcbiAgICAgIHRoaXMuX01haWxzU2VydmljZS51cGRhdGUodGhpcy5tYWlsRHJhZnQsIHRoaXMuc2F2ZURNYWlsRHJhZnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fTWFpbHNTZXJ2aWNlLmFkZCh0aGlzLm1haWxEcmFmdCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl8kc3RhdGUuZ28oJ2JveCcsIHtib3hJZDogJ2RyYWZ0cyd9KTtcclxuICB9XHJcblxyXG4gIHNlbmQoKSB7XHJcbiAgICB0aGlzLm1haWxEcmFmdC50eXBlID0gdGhpcy5fTWFpbHNTZXJ2aWNlLklURU1fVFlQRV9TRU5UO1xyXG4gICAgdGhpcy5tYWlsRHJhZnQuZGF0ZSA9IERhdGUubm93KCk7XHJcbiAgICBpZiAodGhpcy5tYWlsRHJhZnQuaWQpIHtcclxuICAgICAgdGhpcy5fTWFpbHNTZXJ2aWNlLnVwZGF0ZSh0aGlzLm1haWxEcmFmdCwgdGhpcy5zYXZlRE1haWxEcmFmdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9NYWlsc1NlcnZpY2UuYWRkKHRoaXMubWFpbERyYWZ0KTtcclxuICAgIH1cclxuICAgIHRoaXMuXyRzdGF0ZS5nbygnYm94Jywge2JveElkOiAnc2VudCd9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1haWxzQ29tcG9zZUVtYWlsID0ge1xyXG4gIHRlbXBsYXRlOiBjb21wb3NlRW1haWxUZW1wbGF0ZSxcclxuICBjb250cm9sbGVyOiBDb250cm9sbGVyLFxyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBtYWlsSWQ6ICdAJ1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1haWxzQ29tcG9zZUVtYWlsO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9qcy9hcHAvbWFpbHMvY29tcG9uZW50cy9tYWlscy1jb21wb3NlLWVtYWlsL21haWxzLWNvbXBvc2UtZW1haWwuanNcbiAqKi8iLCJ2YXIgYW5ndWxhcj13aW5kb3cuYW5ndWxhcixuZ01vZHVsZTtcbnRyeSB7bmdNb2R1bGU9YW5ndWxhci5tb2R1bGUoW1wibmdcIl0pfVxuY2F0Y2goZSl7bmdNb2R1bGU9YW5ndWxhci5tb2R1bGUoXCJuZ1wiLFtdKX1cbnZhciB2MT1cIjxwPiA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2VzcyBidG4tc21cXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5zZW5kKClcXFwiIG5nLWRpc2FibGVkPVxcXCIhbWFpbC4kdmFsaWRcXFwiPlNlbmQ8L2J1dHRvbj5cXG48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tc21cXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5zYXZlRHJhZnQoKVxcXCI+U2F2ZSAmIENsb3NlPC9idXR0b24+XFxuPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlciBidG4tc21cXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5kaXNjYXJkKClcXFwiPkRpc2NhcmQgZHJhZnQ8L2J1dHRvbj4gPC9wPiA8Zm9ybSBuYW1lPVxcXCJtYWlsXFxcIj4gPG1haWxzLXN0YXIgbmctaWY9XFxcIiRjdHJsLm1haWxEcmFmdFxcXCIgbWFpbD1cXFwiJGN0cmwubWFpbERyYWZ0XFxcIj48L21haWxzLXN0YXI+IDxsYWJlbCBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiIG5nLW1lc3NhZ2VzPVxcXCJtYWlsLmVtYWlsLiRlcnJvclxcXCI+IDxzcGFuIG5nLW1lc3NhZ2U9XFxcInJlcXVpcmVkXFxcIj5GaWVsZCBpcyBtYW50b2Rvcnk8L3NwYW4+XFxuPHNwYW4gbmctbWVzc2FnZT1cXFwiZW1haWxcXFwiPlZhbHVlIGhhdmUgdG8gYmUgdmFsaWQgZW1haWw8L3NwYW4+IDwvbGFiZWw+IDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieyZxdW90O2hhcy1lcnJvciZxdW90OzogIW1haWwuZW1haWwuJHZhbGlkfVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+VG88L3NwYW4+XFxuPGlucHV0IG5hbWU9XFxcImVtYWlsXFxcIiBuZy1tb2RlbD1cXFwiJGN0cmwubWFpbERyYWZ0LmVtYWlsXFxcIiB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkFkZHJlc3NcXFwiIHJlcXVpcmVkPiA8L2Rpdj4gPGJyPiA8bGFiZWwgY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIiBuZy1tZXNzYWdlcz1cXFwibWFpbC5zdWJqZWN0LiRlcnJvclxcXCI+IDxzcGFuIG5nLW1lc3NhZ2U9XFxcInJlcXVpcmVkXFxcIj5GaWVsZCBpcyBtYW50b2Rvcnk8L3NwYW4+IDwvbGFiZWw+IDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieyZxdW90O2hhcy1lcnJvciZxdW90OzogIW1haWwuc3ViamVjdC4kdmFsaWR9XFxcIj4gPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj5TdWJqZWN0PC9zcGFuPlxcbjxpbnB1dCBuYW1lPVxcXCJzdWJqZWN0XFxcIiBuZy1tb2RlbD1cXFwiJGN0cmwubWFpbERyYWZ0LnN1YmplY3RcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJTdWJqZWN0XFxcIiByZXF1aXJlZD4gPC9kaXY+IDxicj4gPGxhYmVsIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCIgbmctbWVzc2FnZXM9XFxcIm1haWwubWVzc2FnZS4kZXJyb3JcXFwiPiA8c3BhbiBuZy1tZXNzYWdlPVxcXCJyZXF1aXJlZFxcXCI+RmllbGQgaXMgbWFudG9kb3J5PC9zcGFuPiA8L2xhYmVsPiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieyZxdW90O2hhcy1lcnJvciZxdW90OzogIW1haWwubWVzc2FnZS4kdmFsaWR9XFxcIj4gPHRleHRhcmVhIG5hbWU9XFxcIm1lc3NhZ2VcXFwiIG5nLW1vZGVsPVxcXCIkY3RybC5tYWlsRHJhZnQubWVzc2FnZVxcXCIgcGxhY2Vob2xkZXI9XFxcInNvbWUgdGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcm93cz1cXFwiM1xcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvdGV4dGFyZWE+IDwvZGl2PiA8L2Zvcm0+XCI7XG5uZ01vZHVsZS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihjKXtjLnB1dChcImNvbXBvbmVudHMvbWFpbHMtY29tcG9zZS1lbWFpbC9tYWlscy1jb21wb3NlLWVtYWlsLmh0bWxcIix2MSl9XSk7XG5tb2R1bGUuZXhwb3J0cz12MTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vanMvYXBwL21haWxzL2NvbXBvbmVudHMvbWFpbHMtY29tcG9zZS1lbWFpbC9tYWlscy1jb21wb3NlLWVtYWlsLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IG1haWxMaXN0VGVtcGxhdGUgZnJvbSAnLi9tYWlscy1saXN0Lmh0bWwnO1xyXG5cclxuY2xhc3MgQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHN0YXRlLCAkc2NvcGUsIE1haWxzU2VydmljZSkge1xyXG4gICAgdGhpcy5fJHN0YXRlID0gJHN0YXRlO1xyXG4gICAgdGhpcy5fTWFpbHNTZXJ2aWNlID0gTWFpbHNTZXJ2aWNlO1xyXG4gICAgdGhpcy5jaGVja2VkTWFpbHNMaXN0ID0gbmV3IFNldCgpO1xyXG4gICAgTWFpbHNTZXJ2aWNlXHJcbiAgICAgIC5nZXRNYWlsTGlzdCgpXHJcbiAgICAgIC50aGVuKChtYWlsTGlzdCkgPT4ge1xyXG4gICAgICAgICRzY29wZS4kd2F0Y2goICgpID0+IG1haWxMaXN0LCBtYWlsTGlzdCA9PiB7XHJcbiAgICAgICAgICB0aGlzLm1haWxMaXN0ID0gdGhpcy5fZmlsdGVyTGlzdChtYWlsTGlzdCk7XHJcbiAgICAgICAgfSx0cnVlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGUoKXtcclxuICAgIHRoaXMuY2hlY2tlZE1haWxzTGlzdC5mb3JFYWNoKG1haWwgPT57XHJcbiAgICAgIGlmKHRoaXMuYm94SWQgPT0gJ2Jpbicpe1xyXG4gICAgICAgIHRoaXMuX01haWxzU2VydmljZS5yZW1vdmUobWFpbCk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIG1haWwuYmluID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9NYWlsc1NlcnZpY2UudXBkYXRlKG1haWwpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2hlY2tlZE1haWxzTGlzdC5kZWxldGUobWFpbCk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgbW92ZVRvU3BhbSgpe1xyXG4gICAgdGhpcy5jaGVja2VkTWFpbHNMaXN0LmZvckVhY2gobWFpbCA9PntcclxuICAgICAgbWFpbC5zcGFtID0gdHJ1ZTtcclxuICAgICAgdGhpcy5fTWFpbHNTZXJ2aWNlLnVwZGF0ZShtYWlsKTtcclxuICAgICAgdGhpcy5jaGVja2VkTWFpbHNMaXN0LmRlbGV0ZShtYWlsKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBtb3ZlRnJvbVNwYW0oKXtcclxuICAgIHRoaXMuY2hlY2tlZE1haWxzTGlzdC5mb3JFYWNoKG1haWwgPT57XHJcbiAgICAgIG1haWwuc3BhbSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLl9NYWlsc1NlcnZpY2UudXBkYXRlKG1haWwpO1xyXG4gICAgICB0aGlzLmNoZWNrZWRNYWlsc0xpc3QuZGVsZXRlKG1haWwpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJlc3RvcmVGcm9tQmluKCl7XHJcbiAgICB0aGlzLmNoZWNrZWRNYWlsc0xpc3QuZm9yRWFjaChtYWlsID0+e1xyXG4gICAgICBtYWlsLmJpbiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLl9NYWlsc1NlcnZpY2UudXBkYXRlKG1haWwpO1xyXG4gICAgICB0aGlzLmNoZWNrZWRNYWlsc0xpc3QuZGVsZXRlKG1haWwpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uQ2hlY2tib3hDaGFuZ2UobWFpbCxjaGVja2VkKXtcclxuICAgIGlmKGNoZWNrZWQpe1xyXG4gICAgICB0aGlzLmNoZWNrZWRNYWlsc0xpc3QuYWRkKG1haWwpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuY2hlY2tlZE1haWxzTGlzdC5kZWxldGUobWFpbCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIF9maWx0ZXJMaXN0KG1haWxMaXN0KSB7XHJcbiAgICByZXR1cm4gbWFpbExpc3QuZmlsdGVyKChtYWlsKSA9PiB7XHJcbiAgICAgIGlmKHRoaXMuYm94SWQgPT0gXCJzcGFtXCIpe1xyXG4gICAgICAgIHJldHVybiAhIW1haWwuc3BhbTtcclxuICAgICAgfWVsc2UgaWYodGhpcy5ib3hJZCA9PSBcImJpblwiKXtcclxuICAgICAgICByZXR1cm4gISFtYWlsLmJpbjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gIW1haWwuc3BhbSAmJiAhbWFpbC5iaW4gJiYgbWFpbC50eXBlID09IHRoaXMuYm94SWQ7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHZpZXdFbWFpbChtYWlsKSB7XHJcbiAgICBpZihtYWlsLnR5cGUgPT0gdGhpcy5fTWFpbHNTZXJ2aWNlLklURU1fVFlQRV9EUkFGVClcclxuICAgICAgdGhpcy5fJHN0YXRlLmdvKCdjb21wb3NlJywge21haWxJZDogbWFpbC5pZH0pO1xyXG4gICAgZWxzZVxyXG4gICAgICB0aGlzLl8kc3RhdGUuZ28oJ2xldHRlcicsIHttYWlsSWQ6IG1haWwuaWR9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1haWxzQ29tcG9zZUVtYWlsQ29tcG9uZW50ID0ge1xyXG4gIHRlbXBsYXRlOiBtYWlsTGlzdFRlbXBsYXRlLFxyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBib3hJZDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBDb250cm9sbGVyXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWlsc0NvbXBvc2VFbWFpbENvbXBvbmVudDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvanMvYXBwL21haWxzL2NvbXBvbmVudHMvbWFpbHMtbGlzdC9tYWlscy1saXN0LmpzXG4gKiovIiwidmFyIGFuZ3VsYXI9d2luZG93LmFuZ3VsYXIsbmdNb2R1bGU7XG50cnkge25nTW9kdWxlPWFuZ3VsYXIubW9kdWxlKFtcIm5nXCJdKX1cbmNhdGNoKGUpe25nTW9kdWxlPWFuZ3VsYXIubW9kdWxlKFwibmdcIixbXSl9XG52YXIgdjE9XCI8ZmllbGRzZXQgbmctZGlzYWJsZWQ9XFxcIiEkY3RybC5jaGVja2VkTWFpbHNMaXN0LnNpemVcXFwiPiA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLmRlbGV0ZSgpXFxcIj5EZWxldGU8L2J1dHRvbj5cXG48YnV0dG9uIG5nLWlmPVxcXCIkY3RybC5ib3hJZCA9PSAnaW5ib3gnXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmcgYnRuLXNtXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwubW92ZVRvU3BhbSgpXFxcIj5TcGFtITwvYnV0dG9uPlxcbjxidXR0b24gbmctaWY9XFxcIiRjdHJsLmJveElkID09ICdzcGFtJ1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nIGJ0bi1zbVxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLm1vdmVGcm9tU3BhbSgpXFxcIj5Ob3Qgc3BhbTwvYnV0dG9uPlxcbjxidXR0b24gbmctaWY9XFxcIiRjdHJsLmJveElkID09ICdiaW4nXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmcgYnRuLXNtXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwucmVzdG9yZUZyb21CaW4oKVxcXCI+UmVzdG9yZTwvYnV0dG9uPiA8L2ZpZWxkc2V0PiA8YnI+IDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtaG92ZXJcXFwiPiA8dGJvZHk+IDx0ciBuZy1yZXBlYXQ9XFxcIm1haWwgaW4gJGN0cmwubWFpbExpc3QgIHwgb3JkZXJCeSA6IG1haWwuZGF0ZSA6IHRydWVcXFwiIG5nLWNsaWNrPVxcXCIkY3RybC52aWV3RW1haWwobWFpbClcXFwiPiA8dGQ+IDxsYWJlbCBuZy1jbGljaz1cXFwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xcXCI+IDxpbnB1dCBuZy1jaGFuZ2U9XFxcIiRjdHJsLm9uQ2hlY2tib3hDaGFuZ2UobWFpbCxjaGVja2VkKVxcXCIgbmctbW9kZWw9XFxcImNoZWNrZWRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIj4gPC9sYWJlbD4gPG1haWxzLXN0YXIgbWFpbD1cXFwibWFpbFxcXCIgbmctY2xpY2s9XFxcIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcXFwiPjwvbWFpbHMtc3Rhcj4gPC90ZD4gPHRkPnt7bWFpbC5lbWFpbH19PC90ZD4gPHRkPnt7bWFpbC5zdWJqZWN0fX08L3RkPiA8dGQ+e3ttYWlsLmRhdGUgfCBkYXRlOiAnZCBMTExMJ319PC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT5cIjtcbm5nTW9kdWxlLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGMpe2MucHV0KFwiY29tcG9uZW50cy9tYWlscy1saXN0L21haWxzLWxpc3QuaHRtbFwiLHYxKX1dKTtcbm1vZHVsZS5leHBvcnRzPXYxO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9qcy9hcHAvbWFpbHMvY29tcG9uZW50cy9tYWlscy1saXN0L21haWxzLWxpc3QuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgbWFpbE5hdmlnYXRpb25UZW1wbGF0ZSBmcm9tICcuL21haWxzLW5hdmlnYXRpb24uaHRtbCc7XHJcblxyXG5jbGFzcyBDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcihNYWlsc1NlcnZpY2UpIHtcclxuICAgIHRoaXMuX01haWxzU2VydmljZSA9IE1haWxzU2VydmljZTtcclxuICAgIHRoaXMuYm94ZXMgPSBbe1xyXG4gICAgICBpZDogJ2luYm94JyxcclxuICAgICAgdGl0bGU6IFwiSW5ib3hcIlxyXG4gICAgfSwge1xyXG4gICAgICBpZDogJ3NlbnQnLFxyXG4gICAgICB0aXRsZTogXCJTZW50IE1haWxcIlxyXG4gICAgfSwge1xyXG4gICAgICBpZDogJ2RyYWZ0cycsXHJcbiAgICAgIHRpdGxlOiBcIkRyYWZ0c1wiXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnc3BhbScsXHJcbiAgICAgIHRpdGxlOiBcIlNwYW1cIlxyXG4gICAgfSwge1xyXG4gICAgICBpZDogJ2JpbicsXHJcbiAgICAgIHRpdGxlOiBcIkJpblwiXHJcbiAgICB9XTtcclxuICB9XHJcbiAgXHJcbiAgZ2V0U2VsZWN0ZWRCb3hJZCgpe1xyXG4gICAgcmV0dXJuIHRoaXMuX01haWxzU2VydmljZS5nZXRTZWxlY3RlZEJveElkKCk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYWlsc05hdmlnYXRpb25Db21wb25lbnQgPSB7XHJcbiAgdGVtcGxhdGU6IG1haWxOYXZpZ2F0aW9uVGVtcGxhdGUsXHJcbiAgY29udHJvbGxlcjogQ29udHJvbGxlclxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFpbHNOYXZpZ2F0aW9uQ29tcG9uZW50O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9qcy9hcHAvbWFpbHMvY29tcG9uZW50cy9tYWlscy1uYXZpZ2F0aW9uL21haWxzLW5hdmlnYXRpb24uanNcbiAqKi8iLCJ2YXIgYW5ndWxhcj13aW5kb3cuYW5ndWxhcixuZ01vZHVsZTtcbnRyeSB7bmdNb2R1bGU9YW5ndWxhci5tb2R1bGUoW1wibmdcIl0pfVxuY2F0Y2goZSl7bmdNb2R1bGU9YW5ndWxhci5tb2R1bGUoXCJuZ1wiLFtdKX1cbnZhciB2MT1cIjxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tYmxvY2sgYnRuLXdhcm5pbmdcXFwiIHVpLXNyZWY9XFxcImNvbXBvc2VcXFwiPkNvbXBvc2U8L2J1dHRvbj4gPGJyPiA8dWwgY2xhc3M9XFxcIm5hdiBuYXYtcGlsbHMgbmF2LXN0YWNrZWRcXFwiPiA8bGkgbmctcmVwZWF0PVxcXCJib3ggaW4gJGN0cmwuYm94ZXNcXFwiIG5nLWNsYXNzPVxcXCJ7J2FjdGl2ZSc6IGJveC5pZCA9PSAkY3RybC5nZXRTZWxlY3RlZEJveElkKCl9XFxcIj4gPGEgdWktc3JlZj1cXFwiYm94KHtib3hJZDogYm94LmlkfSlcXFwiPnt7Ym94LnRpdGxlfX08L2E+IDwvbGk+IDwvdWw+XCI7XG5uZ01vZHVsZS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihjKXtjLnB1dChcImNvbXBvbmVudHMvbWFpbHMtbmF2aWdhdGlvbi9tYWlscy1uYXZpZ2F0aW9uLmh0bWxcIix2MSl9XSk7XG5tb2R1bGUuZXhwb3J0cz12MTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vanMvYXBwL21haWxzL2NvbXBvbmVudHMvbWFpbHMtbmF2aWdhdGlvbi9tYWlscy1uYXZpZ2F0aW9uLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA1M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IG1lc3NhZ2VzVGVtcGxhdGUgZnJvbSAnLi9tYWlscy1wYWdlLmh0bWwnO1xyXG5cclxuY29uc3QgbWFpbHNQYWdlQ29tcG9uZW50ID0ge1xyXG4gIHRlbXBsYXRlOiBtZXNzYWdlc1RlbXBsYXRlXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWlsc1BhZ2VDb21wb25lbnQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2pzL2FwcC9tYWlscy9jb21wb25lbnRzL21haWxzLXBhZ2UvbWFpbHMtcGFnZS5qc1xuICoqLyIsInZhciBhbmd1bGFyPXdpbmRvdy5hbmd1bGFyLG5nTW9kdWxlO1xudHJ5IHtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShbXCJuZ1wiXSl9XG5jYXRjaChlKXtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShcIm5nXCIsW10pfVxudmFyIHYxPVwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj4gPGRpdiBjbGFzcz1cXFwicm93XFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTJcXFwiPiA8bWFpbHMtbmF2aWdhdGlvbj48L21haWxzLW5hdmlnYXRpb24+IDxocj4gPGNoYXQtcm9vdD48L2NoYXQtcm9vdD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+IDx1aS12aWV3PjwvdWktdmlldz4gPC9kaXY+IDwvZGl2PiA8L2Rpdj5cIjtcbm5nTW9kdWxlLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGMpe2MucHV0KFwiY29tcG9uZW50cy9tYWlscy1wYWdlL21haWxzLXBhZ2UuaHRtbFwiLHYxKX1dKTtcbm1vZHVsZS5leHBvcnRzPXYxO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9qcy9hcHAvbWFpbHMvY29tcG9uZW50cy9tYWlscy1wYWdlL21haWxzLXBhZ2UuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDU1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgbWFpbHNMZXR0ZXJUZW1wbGF0ZSBmcm9tICcuL21haWxzLWxldHRlci5odG1sJztcclxuXHJcbmNsYXNzIENvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzdGF0ZSwgTWFpbHNTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLl8kc3RhdGUgPSAkc3RhdGU7XHJcbiAgICB0aGlzLl9NYWlsc1NlcnZpY2UgPSBNYWlsc1NlcnZpY2U7XHJcbiAgICBNYWlsc1NlcnZpY2VcclxuICAgICAgLmdldCh0aGlzLm1haWxJZClcclxuICAgICAgLnRoZW4oIG1haWwgPT4ge1xyXG4gICAgICAgIGlmKG1haWwuYmluKXtcclxuICAgICAgICAgIE1haWxzU2VydmljZS5zZXRTZWxlY3RlZEJveElkKCdiaW4nKTtcclxuICAgICAgICB9ZWxzZSBpZihtYWlsLnNwYW0pe1xyXG4gICAgICAgICAgTWFpbHNTZXJ2aWNlLnNldFNlbGVjdGVkQm94SWQoJ3NwYW0nKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIE1haWxzU2VydmljZS5zZXRTZWxlY3RlZEJveElkKG1haWwudHlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWFpbCA9IG1haWw7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlKCl7XHJcbiAgICBsZXQgYm94SWQgPSB0aGlzLm1haWwudHlwZTtcclxuICAgIGlmKHRoaXMubWFpbC5iaW4pe1xyXG4gICAgICBib3hJZCA9ICdiaW4nO1xyXG4gICAgICB0aGlzLl9NYWlsc1NlcnZpY2UucmVtb3ZlKHRoaXMubWFpbCk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5tYWlsLmJpbiA9IHRydWU7XHJcbiAgICAgIHRoaXMuX01haWxzU2VydmljZS51cGRhdGUodGhpcy5tYWlsKTtcclxuICAgIH1cclxuICAgIHRoaXMuXyRzdGF0ZS5nbygnYm94Jywge2JveElkOiBib3hJZH0pO1xyXG4gIH1cclxuXHJcbiAgcmVzdG9yZUZyb21CaW4oKXtcclxuICAgIHRoaXMubWFpbC5iaW4gPSBmYWxzZTtcclxuICAgIHRoaXMuX01haWxzU2VydmljZS51cGRhdGUodGhpcy5tYWlsKTtcclxuICAgIHRoaXMuXyRzdGF0ZS5nbygnYm94Jywge2JveElkOiB0aGlzLm1haWwudHlwZX0pO1xyXG4gIH1cclxuXHJcbiAgbW92ZVRvU3BhbSgpe1xyXG4gICAgdGhpcy5tYWlsLnNwYW0gPSB0cnVlO1xyXG4gICAgdGhpcy5fTWFpbHNTZXJ2aWNlLnVwZGF0ZSh0aGlzLm1haWwpO1xyXG4gICAgdGhpcy5fJHN0YXRlLmdvKCdib3gnLCB7Ym94SWQ6ICdpbmJveCd9KTtcclxuICB9XHJcblxyXG4gIG1vdmVGcm9tU3BhbSgpe1xyXG4gICAgdGhpcy5tYWlsLnNwYW0gPSBmYWxzZTtcclxuICAgIHRoaXMuX01haWxzU2VydmljZS51cGRhdGUodGhpcy5tYWlsKTtcclxuICAgIHRoaXMuXyRzdGF0ZS5nbygnYm94Jywge2JveElkOiAnaW5ib3gnfSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgbWFpbHNMZXR0ZXJDb21wb25lbnQgPSB7XHJcbiAgdGVtcGxhdGU6IG1haWxzTGV0dGVyVGVtcGxhdGUsXHJcbiAgY29udHJvbGxlcjogQ29udHJvbGxlcixcclxuICBiaW5kaW5nczoge1xyXG4gICAgbWFpbElkOiAnQCdcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWlsc0xldHRlckNvbXBvbmVudDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvanMvYXBwL21haWxzL2NvbXBvbmVudHMvbWFpbHMtbGV0dGVyL21haWxzLWxldHRlci5qc1xuICoqLyIsInZhciBhbmd1bGFyPXdpbmRvdy5hbmd1bGFyLG5nTW9kdWxlO1xudHJ5IHtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShbXCJuZ1wiXSl9XG5jYXRjaChlKXtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShcIm5nXCIsW10pfVxudmFyIHYxPVwiPHA+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwuZGVsZXRlKClcXFwiPkRlbGV0ZTwvYnV0dG9uPlxcbjxidXR0b24gbmctaWY9XFxcIiRjdHJsLm1haWwudHlwZSA9PSAnaW5ib3gnICYmICEkY3RybC5tYWlsLnNwYW1cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4td2FybmluZyBidG4tc21cXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5tb3ZlVG9TcGFtKClcXFwiPlNwYW0hPC9idXR0b24+XFxuPGJ1dHRvbiBuZy1pZj1cXFwiJGN0cmwubWFpbC50eXBlID09ICdpbmJveCcgJiYgJGN0cmwubWFpbC5zcGFtXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmcgYnRuLXNtXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwubW92ZUZyb21TcGFtKClcXFwiPk5vdCBzcGFtPC9idXR0b24+XFxuPGJ1dHRvbiBuZy1pZj1cXFwiJGN0cmwubWFpbC5iaW5cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4td2FybmluZyBidG4tc21cXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5yZXN0b3JlRnJvbUJpbigpXFxcIj5SZXN0b3JlPC9idXR0b24+IDwvcD4gPG1haWxzLXN0YXIgbmctaWY9XFxcIiRjdHJsLm1haWxcXFwiIG1haWw9XFxcIiRjdHJsLm1haWxcXFwiPjwvbWFpbHMtc3Rhcj4gPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPiA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPiA8c3BhbiBuZy1pZj1cXFwiJGN0cmwubWFpbC50eXBlID09ICdpbmJveCdcXFwiPkZyb208L3NwYW4+XFxuPHNwYW4gbmctaWY9XFxcIiRjdHJsLm1haWwudHlwZSA9PSAnc2VudCdcXFwiPlRvPC9zcGFuPiA8L3NwYW4+XFxuPGlucHV0IG5hbWU9XFxcImVtYWlsXFxcIiBkaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwiIG5nLW1vZGVsPVxcXCIkY3RybC5tYWlsLmVtYWlsXFxcIiB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkFkZHJlc3NcXFwiIHJlcXVpcmVkPiA8L2Rpdj4gPGJyPiA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+IDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+U3ViamVjdDwvc3Bhbj5cXG48aW5wdXQgbmFtZT1cXFwic3ViamVjdFxcXCIgZGlzYWJsZWQ9XFxcImRpc2FibGVkXFxcIiBuZy1tb2RlbD1cXFwiJGN0cmwubWFpbC5zdWJqZWN0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiU3ViamVjdFxcXCIgcmVxdWlyZWQ+IDwvZGl2PiA8YnI+IDxsYWJlbCBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiIG5nLW1lc3NhZ2VzPVxcXCJtYWlsLm1lc3NhZ2UuJGVycm9yXFxcIj4gPHNwYW4gbmctbWVzc2FnZT1cXFwicmVxdWlyZWRcXFwiPkZpZWxkIGlzIG1hbnRvZG9yeTwvc3Bhbj4gPC9sYWJlbD4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDx0ZXh0YXJlYSBuYW1lPVxcXCJtZXNzYWdlXFxcIiBkaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwiIG5nLW1vZGVsPVxcXCIkY3RybC5tYWlsLm1lc3NhZ2VcXFwiIHBsYWNlaG9sZGVyPVxcXCJzb21lIHRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHJvd3M9XFxcIjNcXFwiIHJlcXVpcmVkPlxcclxcbiAgPC90ZXh0YXJlYT4gPC9kaXY+XCI7XG5uZ01vZHVsZS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihjKXtjLnB1dChcImNvbXBvbmVudHMvbWFpbHMtbGV0dGVyL21haWxzLWxldHRlci5odG1sXCIsdjEpfV0pO1xubW9kdWxlLmV4cG9ydHM9djE7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2pzL2FwcC9tYWlscy9jb21wb25lbnRzL21haWxzLWxldHRlci9tYWlscy1sZXR0ZXIuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDU3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgJy4vbWFpbHMtc3Rhci5jc3MnXHJcbmltcG9ydCBtYWlsc1N0YXJUZW1wbGF0ZSBmcm9tICcuL21haWxzLXN0YXIuaHRtbCc7XHJcblxyXG5jbGFzcyBDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcihNYWlsc1NlcnZpY2UpIHtcclxuICAgIHRoaXMuX01haWxzU2VydmljZSA9IE1haWxzU2VydmljZTtcclxuICAgIHRoaXMuX3N0YXJzTGlzdCA9IFtcclxuICAgICAge2lkOjAsIGNsYXNzTmFtZTogJ2dseXBoaWNvbiBnbHlwaGljb24tc3Rhci1lbXB0eSd9LFxyXG4gICAgICB7aWQ6MSwgY2xhc3NOYW1lOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1zdGFyIHRleHQtcHJpbWFyeSd9LFxyXG4gICAgICB7aWQ6MiwgY2xhc3NOYW1lOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1zdGFyIHRleHQtc3VjY2Vzcyd9LFxyXG4gICAgICB7aWQ6MywgY2xhc3NOYW1lOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1zdGFyIHRleHQtaW5mbyd9LFxyXG4gICAgICB7aWQ6NCwgY2xhc3NOYW1lOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1zdGFyIHRleHQtd2FybmluZyd9LFxyXG4gICAgICB7aWQ6NSwgY2xhc3NOYW1lOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1zdGFyIHRleHQtZGFuZ2VyJ31cclxuICAgIF07XHJcbiAgICB0aGlzLl9zZXRDbGFzc05hbWUodGhpcy5tYWlsLnNlbGVjdGVkU3RhcklkKTtcclxuICB9XHJcblxyXG4gIF9zZXRDbGFzc05hbWUoaW5kZXggPSAwKXtcclxuICAgIHRoaXMuY2xhc3NOYW1lID0gdGhpcy5fc3RhcnNMaXN0W2luZGV4XS5jbGFzc05hbWU7XHJcbiAgfVxyXG5cclxuICBzd2l0Y2hTdGFyKCl7XHJcbiAgICBpZighdGhpcy5tYWlsLnNlbGVjdGVkU3RhcklkKXtcclxuICAgICAgdGhpcy5tYWlsLnNlbGVjdGVkU3RhcklkID0gMDtcclxuICAgIH1cclxuICAgIGlmKHRoaXMubWFpbC5zZWxlY3RlZFN0YXJJZCA9PT0gKHRoaXMuX3N0YXJzTGlzdC5sZW5ndGggLSAxKSApe1xyXG4gICAgICB0aGlzLm1haWwuc2VsZWN0ZWRTdGFySWQgPSAtMTtcclxuICAgIH1cclxuICAgIHRoaXMubWFpbC5zZWxlY3RlZFN0YXJJZCsrO1xyXG4gICAgdGhpcy5fc2V0Q2xhc3NOYW1lKHRoaXMubWFpbC5zZWxlY3RlZFN0YXJJZCk7XHJcbiAgICB0aGlzLl9NYWlsc1NlcnZpY2UudXBkYXRlKHRoaXMubWFpbCk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYWlsc1N0YXJDb21wb25lbnQgPSB7XHJcbiAgdGVtcGxhdGU6IG1haWxzU3RhclRlbXBsYXRlLFxyXG4gIGNvbnRyb2xsZXI6IENvbnRyb2xsZXIsXHJcbiAgYmluZGluZ3M6IHtcclxuICAgIG1haWw6ICc9J1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1haWxzU3RhckNvbXBvbmVudDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvanMvYXBwL21haWxzL2NvbXBvbmVudHMvbWFpbHMtc3Rhci9tYWlscy1zdGFyLmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vanMvYXBwL21haWxzL2NvbXBvbmVudHMvbWFpbHMtc3Rhci9tYWlscy1zdGFyLmNzc1xuICoqIG1vZHVsZSBpZCA9IDU5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYW5ndWxhcj13aW5kb3cuYW5ndWxhcixuZ01vZHVsZTtcbnRyeSB7bmdNb2R1bGU9YW5ndWxhci5tb2R1bGUoW1wibmdcIl0pfVxuY2F0Y2goZSl7bmdNb2R1bGU9YW5ndWxhci5tb2R1bGUoXCJuZ1wiLFtdKX1cbnZhciB2MT1cIjxzcGFuIG5nLWNsaWNrPVxcXCIkY3RybC5zd2l0Y2hTdGFyKClcXFwiIGNsYXNzPVxcXCJ7eyRjdHJsLmNsYXNzTmFtZX19XFxcIj48L3NwYW4+XCI7XG5uZ01vZHVsZS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihjKXtjLnB1dChcImNvbXBvbmVudHMvbWFpbHMtc3Rhci9tYWlscy1zdGFyLmh0bWxcIix2MSl9XSk7XG5tb2R1bGUuZXhwb3J0cz12MTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vanMvYXBwL21haWxzL2NvbXBvbmVudHMvbWFpbHMtc3Rhci9tYWlscy1zdGFyLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA2MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7Ozs7OztBQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7OztBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBSkE7QUFEQTtBQWZBO0FBQ0E7QUFGQTs7QUEwQkE7QUFDQTs7OztBQTNCQTs7O0FBK0JBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7O0FDdkNBOzs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRkE7O0FBS0E7QUFDQTs7OztBQU5BOzs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBQ0E7QUFRQTs7Ozs7O0FDdEJBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBRkE7O0FBT0E7QUFDQTs7OztBQUdBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7OztBQWpCQTs7O0FBeUJBOzs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBREE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQURBO0FBSEE7QUFEQTtBQVdBO0FBZEE7QUFEQTtBQUNBO0FBa0JBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRkE7O0FBS0E7QUFDQTs7OztBQUdBO0FBQ0E7Ozs7QUFHQTtBQUNBOzs7O0FBR0E7QUFDQTs7OztBQUdBO0FBQ0E7Ozs7QUFHQTtBQUNBOzs7O0FBMUJBOzs7QUE4QkE7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQUZBOztBQVFBOzs7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFEQTtBQUlBO0FBREE7Ozs7QUFqQkE7OztBQXdCQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFGQTtBQUtBO0FBREE7QUFKQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFwQkE7QUFDQTtBQXFCQTtBQUNBO0FBQ0E7QUFEQTtBQXZCQTtBQURBO0FBQ0E7QUE2QkE7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7OztBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFWQTtBQUNBO0FBRkE7O0FBa0JBO0FBQ0E7Ozs7QUFLQTtBQUNBOzs7O0FBR0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7Ozs7QUFPQTs7O0FBQ0E7QUFHQTtBQURBOzs7O0FBS0E7OztBQUNBO0FBRUE7QUFDQTtBQURBO0FBREE7Ozs7QUF6REE7OztBQWlFQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7Ozs7OztBQ3pFQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBOzs7Ozs7O0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBOzs7O0FBSEE7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBUEE7QUFDQTtBQVdBOzs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQUNBO0FBT0E7Ozs7OztBQ1hBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUZBOztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBWEE7OztBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBO0FBQ0E7QUFPQTs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQU5BO0FBQ0E7QUFPQTtBQUNBO0FBVEE7QUFEQTtBQUNBO0FBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFGQTs7QUFPQTs7O0FBQ0E7QUFDQTtBQUVBO0FBQUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFoQkE7OztBQW9CQTs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUpBO0FBREE7QUFZQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTs7O0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBREE7QUFMQTtBQUNBO0FBRkE7O0FBV0E7QUFDQTs7OztBQUdBO0FBQ0E7Ozs7QUFHQTs7O0FBQ0E7QUFFQTtBQURBOzs7O0FBS0E7OztBQUNBO0FBRUE7QUFEQTs7OztBQUtBOzs7QUFDQTtBQUVBO0FBREE7Ozs7QUFuQ0E7OztBQXlDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7Ozs7OztBQ2pEQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBOzs7Ozs7O0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBOzs7O0FBS0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUhBO0FBS0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7OztBQXpCQTs7O0FBNkJBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBVEE7QUFDQTtBQVdBOzs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFGQTs7QUFRQTs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUdBO0FBQ0E7QUFGQTs7OztBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUF2Q0E7OztBQTJDQTs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBTEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQWxCQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQTNCQTtBQThCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBckNBO0FBREE7QUF5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFGQTs7QUFXQTtBQUNBOzs7O0FBR0E7QUFDQTs7OztBQUdBOzs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBR0E7QUFDQTtBQUZBOzs7O0FBTUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBOzs7O0FBR0E7OztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTs7OztBQU9BOzs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBREE7Ozs7QUFLQTs7O0FBQ0E7QUFDQTtBQUdBO0FBREE7Ozs7QUE3REE7OztBQWtFQTs7Ozs7Ozs7Ozs7Ozs7QUNsRUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7OztBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUZBO0FBSEE7QUFRQTtBQVJBO0FBSkE7QUFDQTtBQUZBOztBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUhBO0FBS0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUhBO0FBS0E7Ozs7QUE1Q0E7OztBQWdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQUNBO0FBT0E7Ozs7OztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7OztBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU5BO0FBQ0E7QUFGQTs7QUFjQTs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBSkE7QUFNQTtBQVBBOzs7O0FBV0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7Ozs7QUFPQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7OztBQU9BOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOzs7O0FBT0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUhBOzs7O0FBT0E7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBTkE7Ozs7QUFVQTtBQUNBOzs7O0FBdEVBOzs7QUE2RUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7QUFDQTtBQU9BOzs7Ozs7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBWEE7QUFhQTtBQUNBO0FBZEE7QUFGQTtBQUNBO0FBRkE7O0FBcUJBO0FBQ0E7Ozs7QUF0QkE7OztBQTBCQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBSEE7QUFLQTtBQVJBO0FBTEE7QUFDQTtBQUZBOztBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBTEE7QUFPQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7OztBQTdDQTs7O0FBa0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUhBO0FBQ0E7QUFPQTs7Ozs7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBVkE7QUFDQTtBQUZBOztBQWNBO0FBQUE7QUFDQTtBQUFBOzs7O0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7Ozs7QUEzQkE7OztBQStCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQUNBO0FBT0E7Ozs7OztBQzFDQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==