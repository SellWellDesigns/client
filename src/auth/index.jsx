'use strict'

var AuthStore = require('_/stores/AuthStore.jsx'),
	$ = require('jquery'),
	LoginActions = require('_/actions/LoginActions.jsx'),
	$q = require('q'),
    api = require('_/api')

class AuthService {

    constructor() {
        //@todo check local storage
        this.setToken(null);
    }

    setToken(token){
        this._token = token;
        
        $.ajaxSetup({
            beforeSend: function(jqXHR) {
                jqXHR.setRequestHeader("Authorization", "Bearer " + token);
            }
        });

        api.setToken(token);
    }

    getToken(){
        return this._token;
    }

    login(username, password) {
    	var self = this,
            $d = $q.defer();

        return api.post('/login', {
            email: username,
            password: password
        })
        .then(function(user){
            self.setToken(user.token);
            LoginActions.login(user);
            $d.resolve(user);
        });

    	return $d.promise;
    }

    check(){
    	return AuthStore.check()
    }

    logout(){
    	return AuthStore.logout()
    	//@todo clear local storage
    }

}

module.exports = new AuthService()