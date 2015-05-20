var dispatcher = require('_/dispatcher/index.jsx')

module.exports = {

  login: function(user){
    dispatcher.dispatch({
      type: 'LOGIN_USER',
      user: user
    });
  },

  logout: function(user){
    dispatcher.dispatch({
      type: 'LOGOUT_USER'
    });
  },

};