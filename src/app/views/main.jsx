'use strict'

var React = require('react'),
	Feed = require('_/feed/views/index.jsx'),
	Richtext = require('_/richtext/index.jsx')

class Main extends React.Component {
	render(){
		return (
			<section>
				<Richtext />
				<Feed />
			</section>
		)
	}
}

module.exports = Main