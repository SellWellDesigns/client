var dispatcher = require('_/dispatcher/index.jsx'),
	EventEmitter = require('events').EventEmitter,
	assign = require('object-assign')

var _users = [
  {
    id: 1,
    first_name: 'Conar',
    last_name: 'Welsh',
    email: 'conar@sellwell.io'
  }
];

var UserStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit('change');
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

  get: function(id) {
    // return _messages[id];
  },

  getAll: function() {
    return _users;
  },

  create: function(action) {
  	_users.unshift(this._getUserObject(action));
  	this.emitChange();
  },

  _getUserObject: function(action){
    return {
      user_id: 1,
      content: action.content
    };
  }

});

UserStore.dispatchToken = dispatcher.register(function(action) {

  switch(action.type) {

    case 'CREATE_USER':
      UserStore.create(action);
      break;

    default:
      // noop
  }

});

module.exports = UserStore;