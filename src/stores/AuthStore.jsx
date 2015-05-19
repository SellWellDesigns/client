var dispatcher = require('_/dispatcher/index.jsx'),
	EventEmitter = require('events').EventEmitter,
	assign = require('object-assign')

var _user = null

var AuthStore = assign({}, EventEmitter.prototype, {

  emitChange: function(user) {
    this.emit('change', user);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  },

  user: function() {
    return _user;
  },

  id: function(){
    return _user ? _user.id : null;
  },

  login: function(user){
    _user = user;
    this.emitChange(user);
    return this;
  },

  logout: function(){
    _user = null;
    this.emitChange();
    return this;
  },

  check: function(){
    return !! _user;
  }

});

AuthStore.dispatchToken = dispatcher.register(function(action) {

  switch(action.type) {

    case 'LOGIN_USER':
      AuthStore.login(action.user);
      break;

    case 'LOGOUT_USER':
      AuthStore.logout();
      break;

    default:
      // noop
  }

});

module.exports = AuthStore;