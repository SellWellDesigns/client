'use strict'

var React = require('react'),
	Header = require('./header.jsx'),
	Main = require('./main.jsx')

require("../sass/content.scss")

class Content extends React.Component {
	render(){
		return (
			<section className="Content">
				<Header />
				<Main />
			</section>
		)
	}
}

module.exports = Content