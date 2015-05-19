'use strict'

var React = require('react')

require('../sass/searchbar.scss')

class SearchBar extends React.Component {
	render(){
		return (
			<div className="SearchBar">
				<input type="text" placeholder="Search..." />
			</div>
		)
	}
}

module.exports = SearchBar