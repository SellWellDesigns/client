'use strict'

var React = require('react'),
	Feed = require('_/feed/views/index.jsx')

require('./sass/navlist.scss')

class Navlist extends React.Component {
	render(){
		return (
			<ul className="Navlist">
				<li>
					<a href="#">Feed</a>
				</li>
			</ul>
		)
	}
}

module.exports = Navlist