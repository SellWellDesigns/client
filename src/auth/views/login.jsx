'use strict'

var React = require('react'),
	Auth = require('../index.jsx'),
	UsernameInput = require('./UsernameInput.jsx'),
	PasswordInput = require('./PasswordInput.jsx')

require('../sass/login.scss')

class Login extends React.Component {

	constructor() {
		this.state = {
			username: '',
			password: ''
		}
	}

	login(e) {
		e.preventDefault();

		Auth.login(this.state.username, this.state.password)
	}

	render(){
		return (
			<section className="Login">
				<form>
					<fieldset>
						<h1>Login</h1>

						<UsernameInput onChange={this._onChange.bind(this)} />
						<PasswordInput onChange={this._onChange.bind(this)} />
						
						<button type="submit"
							onClick={this.login.bind(this)}>
							Submit
						</button>
					</fieldset>
				</form>
			</section>
		)
	}

	_onChange(event) {
		var s = this.state || {};

		s[event.target.name] = event.target.value;

		this.setState(s);
	}
}

module.exports = Login