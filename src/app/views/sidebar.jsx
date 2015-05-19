'use strict'

var React = require('react'),
	NavList = require('_/navlist/index.jsx')

require("../sass/sidebar.scss")

class Sidebar extends React.Component {
	render(){
		return (
			<aside className="Sidebar">
				<header className="AppBar">
					<a href="#">Brand</a>
				</header>
				<section>
					<NavList />
				</section>
			</aside>
		)
	}
}

module.exports = Sidebar