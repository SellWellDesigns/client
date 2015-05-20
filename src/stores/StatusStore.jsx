var dispatcher = require('_/dispatcher/index.jsx'),
	EventEmitter = require('events').EventEmitter,
	assign = require('object-assign'),
  $q = require('q'),
  api = require('_/api')

var _feed = [];

var StatusStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit('change', _feed);
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
    var $d = $q.defer();

    api.get('/statuses').then(function(results){
      for(var i=0; i<results.length; i++){
        _feed.push(results[i]);
      }

      $d.resolve(_feed);
    });

    return $d.promise;
  },

  create: function(action) {
    var self = this,
      obj = this._getMessageObject(action);

    _feed.unshift(obj);

    api.post('/statuses', obj).then(function(upd){
      for(var key in upd){
        if(upd.hasOwnProperty(key)){
          obj[key] = upd[key];
        }
      }
      self.emitChange();
    })
  	
  	this.emitChange();
  },

  _getMessageObject: function(action){
    return {
      user_id: 1,
      content: action.content
    };
  }

});

StatusStore.dispatchToken = dispatcher.register(function(action) {

  switch(action.type) {

    case 'CREATE_STATUS':
      StatusStore.create(action);
      break;

    default:
      // noop
  }

});

module.exports = StatusStore;