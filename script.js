/*
* Update 2016-03-28:
* Еще много не сделано. К этому занятию добавлено:
* 1)Добавлена робота с роутерами для главных страниц приложения и списка писем.
* 2)Добавлено создание письма.
*
* */
angular.module('myApp', ['ngMessages', 'ui.router'])

  .config(function ($stateProvider) {
    $stateProvider
      .state('mail', {
        url: '/mail',
        template: '<messages></messages>'
      })
      .state('compose', {
        parent: 'mail',
        url: '/compose:draftId',
        template: '<compose-email draft-id="$ctrl.draftId"></compose-email>',
        controller: function ($stateParams) {
          this.draftId = $stateParams.draftId;
        },
        controllerAs: '$ctrl'
      })
      .state('message', {
        parent: 'mail',
        url: '/message:id',
        template: '<message id="$ctrl.id"></message>',
        controller: function ($stateParams) {
          this.id = $stateParams.id;
        },
        controllerAs: '$ctrl'
      })
      .state('box', {
        parent: 'mail',
        url: '/box=:boxId',
        template: '<mail-list box-id="$ctrl.boxId"></mail-list>',
        controller: function ($stateParams) {
          this.boxId = $stateParams.boxId;
        },
        controllerAs: '$ctrl'
      })
      .state('contacts', {
        url: '/contacts',
        template: '<contacts></contacts>'
      })
      .state('chat', {
        url: '/chat',
        template: '<chat></chat>'
      })
  })

  .component('mailApp', {
    templateUrl: 'mailApp.html',
    controller: function () {
      this.menuItems = [{
        title: 'Mails',
        state: 'mail'
      }, {
        title: 'Contacts',
        state: 'contacts'
      }, {
        title: 'Chat',
        state: 'chat'
      }];
    }
  })

  .component('composeEmail', {
    templateUrl: 'composeEmail.html',
    controller: function ($state, MailListService) {
      this.discard = function () {
        $state.go('mail');
      };
      this.saveDraft = function () {
        this.mailDraft.date = Date.now();
        if (this.mailDraft.id) {
          MailListService.update(this.mailDraft, MailListService.ITEM_TYPE_DRAFT);
        } else {
          MailListService.add(this.mailDraft, MailListService.ITEM_TYPE_DRAFT);
        }
        $state.go('box', {boxId: 'drafts'});
      };
      this.send = function () {
        this.mailDraft.date = Date.now();

        MailListService.add(this.mailDraft, MailListService.ITEM_TYPE_SENT);

        $state.go('box', {boxId: 'sent'});
      }
    }
  })

  .component('chat', {
    templateUrl: 'chat.html',
    controller: function (ChatService, ContactsService, $timeout, $scope) {
      var timeout;
      var self = this;
      ContactsService
        .getContacts()
        .then((users) => {
          self.users = users;
        });


      $scope.$on('$destroy', function () {
        self.endChat();
      });

      this.startChat = function () {
        getMessages();
      };

      this.endChat = function () {
        $timeout.cancel(timeout);
      };

      this.sendMessage = function () {
        var message = {};
        message.date = Date.now();
        message.text = this.messageText;
        this.messageText = '';
        ChatService.add(this.selectedUser.id, message);
      };

      function getMessages() {
        ChatService
          .getMessages(self.selectedUser.id)
          .then((messages) => {
            self.messages = messages;
          })
          .then(() => {
            timeout = $timeout(getMessages, 1000);
          });
      }
    }
  })

  .component('mainMenu', {
    templateUrl: 'mainMenu.html',
    bindings: {
      currentPageId: '=',
      menuItems: '<'
    },
    controller: function () {
      this.selectPage = function (currentPageId) {
        this.currentPageId = currentPageId;
      };
    }
  })

  .component('mailNavigation', {
    templateUrl: 'mailNavigation.html',
    controller: function () {
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
  })

  .component('mailList', {
    templateUrl: 'mailList.html',
    bindings: {
      boxId: '<'
    },
    controller: function (MailListService) {
      MailListService
        .getMailList()
        .then((mailList) => {
          this.mailList = mailList[this.boxId];
        });
    }
  })

  .component('messages', {
    templateUrl: 'messages.html'
  })

  .component('userCard', {
    bindings: {
      user: '=',
      mode: '@'
    },
    templateUrl: 'userCard.html',
    require: {
      contactsCtrl: '^^contacts'
    },
    controller: function () {
      this.remove = function () {
        this.contactsCtrl.removeUser(this.user);
      };
      this.stopEdition = function () {
        this.mode = 'presentation';
        delete this.userDraft;
        if (this.contactsCtrl.getMode != 'list') {
          this.contactsCtrl.setMode('list');
        }
      };
      this.save = function () {
        if (this.userDraft.id) {
          this.contactsCtrl.updateUser(this.userDraft, this.user);
        } else {
          this.contactsCtrl.addUser(this.userDraft);
        }

        this.stopEdition();
      };
      this.startEdition = function () {
        this.mode = 'edit';
        this.userDraft = angular.copy(this.user);
        this.userDraft.birthdate = new Date(this.userDraft.birthdate);
      };
    }
  })

  .component('contacts', {
    templateUrl: 'contacts.html',
    controller: function (ContactsService) {
      this.mode = 'list';
      ContactsService
        .getContacts()
        .then((users) => {
          this.users = users;
        });

      this.setMode = function (mode) {
        this.mode = mode;
      };

      this.getMode = function () {
        return this.mode;
      };

      this.addUser = function (newUser) {
        ContactsService.add(newUser)
          .then(newUser => {
            this.users.push(newUser);
          });
      };

      this.updateUser = function (newUser, oldUser) {
        ContactsService.update(newUser)
          .then(newUser => {
            this.users[this.users.indexOf(oldUser)] = newUser;
          });
      };

      this.removeUser = function (user) {
        ContactsService.remove(user)
          .then(() => {
            this.users.splice(this.users.indexOf(user), 1);
          });
      };

    }
  })

  .service('FirebaseConfig', function () {
    var baseUrl = 'https://angular-js-ru-a1h05.firebaseio.com/';
    this.getBaseUrl = function () {
      return baseUrl;
    };
    this.normalizeToArray = function (object) {
      if (!object) return [];
      return Object.keys(object).map(key => {
        let normalizedObject = object[key];
        normalizedObject.id = key;
        return normalizedObject;
      });
    };
  })

  .service('MailListService', function ($http, $q, FirebaseConfig) {
    this.ITEM_TYPE_DRAFT = 'drafts';
    this.ITEM_TYPE_SENT = 'sent';
    var dataObjectName = 'mailList';
    var mailList;
    this.getMailList = function () {
      var url = FirebaseConfig.getBaseUrl() + dataObjectName + '.json';
      if (mailList) {
        return $q.resolve(mailList);
      }
      return $http
        .get(url)
        .then(res => {
          mailList = {};
          for (var boxId in res.data) {
            mailList[boxId] = FirebaseConfig.normalizeToArray(res.data[boxId]);
          }
          return mailList;
        });

    };
    this.add = function (newItem, boxId) {
      var url = FirebaseConfig.getBaseUrl() + dataObjectName + '/' + boxId + '.json';
      return $http.post(url, newItem)
        .then(response => {
          newItem.id = response.data.name;
          mailList[boxId].push(newItem);
          return newItem;
        });
    };
    this.update = function (item, boxId) {
      var url = FirebaseConfig.getBaseUrl() + dataObjectName + '/' + boxId + '/' + item.id + '.json';
      return $http.put(url, item)
        .then(response => response.data);
    };
    this.remove = function (item, boxId) {
      var url = FirebaseConfig.getBaseUrl() + dataObjectName + '/' + boxId + '/' + item.id + '.json';
      return $http.delete(url);
    };
  })

  .service('ContactsService', function ($http, $q, FirebaseConfig) {
    var dataObjectName = 'users';
    var users;
    this.getContacts = function () {
      var url = FirebaseConfig.getBaseUrl() + dataObjectName + '.json';
      if (users) {
        return $q.resolve(users);
      }
      return $http
        .get(url)
        .then(res => {
          users = FirebaseConfig.normalizeToArray(res.data);
          return users;
        });

    };
    this.add = function (newItem) {
      var url = FirebaseConfig.getBaseUrl() + dataObjectName + '.json';
      return $http.post(url, newItem)
        .then(response => {
          newItem.id = response.data.name;
          return newItem;
        });
    };
    this.update = function (item) {
      var url = FirebaseConfig.getBaseUrl() + dataObjectName + '/' + item.id + '.json';
      return $http.put(url, item)
        .then(response => response.data);
    };
    this.remove = function (item) {
      var url = FirebaseConfig.getBaseUrl() + dataObjectName + '/' + item.id + '.json';
      return $http.delete(url);
    };
  })

  .service('ChatService', function ($http, FirebaseConfig) {
    var messages;
    var dataObjectName = 'chat';
    this.getMessages = function (userId) {
      var url = FirebaseConfig.getBaseUrl() + dataObjectName + '/' + userId + '.json';

      return $http
        .get(url)
        .then(res => {
          messages = FirebaseConfig.normalizeToArray(res.data);
          return messages;
        });

    };
    this.add = function (userId, newMessage) {
      var url = FirebaseConfig.getBaseUrl() + dataObjectName + '/' + userId + '.json';
      return $http.post(url, newMessage);
    };
  });