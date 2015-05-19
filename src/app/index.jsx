'use strict'

var React = require('react'),
	Sidebar = require('./views/sidebar.jsx'),
	MainContent = require('./views/content.jsx'),
	Login = require('_/auth/views/login.jsx'),
	Auth = require('_/auth/index.jsx'),
	AuthStore = require('_/stores/AuthStore.jsx')

require("./sass/app.scss")

class App extends React.Component {

	constructor(){
		AuthStore.addChangeListener(this._onChange.bind(this))
	}

	render(){
		var app
		
		if(Auth.check()){
			app = (
				<div className="wrapper">
					<Sidebar />
					<MainContent />
				</div>
			)
		}
		else {
			app = (
				<div className="wrapper">
					<Login />
				</div>
			)
		}

		return app
	}

	_onChange(user){
		this.setState({
			user: user
		});
	}
}

module.exports = App;