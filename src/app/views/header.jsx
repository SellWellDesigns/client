'use strict'

var React = require('react'),
	SearchBar = require('./searchBar.jsx'),
	AuthStore = require('_/stores/AuthStore.jsx')

require('../sass/appbar.scss')

class Header extends React.Component {

	constructor() {
		this.state = {
			user: AuthStore.user()
		};
	}

	componentDidMount() {
		AuthStore.addChangeListener(this._onChange)
	}

	render(){
		return (
			<header className="AppBar">
			<SearchBar />
				<a href="#" className="float-right">{this.state.user.email}</a>
			</header>
		)
	}

	_onChange(user){
		this.setState({
			user: user
		});
	}
}

module.exports = Header