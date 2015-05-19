'use strict'

var React = require('react'),
	FeedItem = require('./item.jsx'),
	StatusStore = require('_/stores/StatusStore.jsx')

var Feed = React.createClass({

	getInitialState: function() {
		return {
			feed: []
		};
	},

	componentDidMount: function() {
		var self = this;

		StatusStore.addChangeListener(this._onChange)

		StatusStore.getAll().then(function(feed){
			self.setState({
				feed: feed
			});
		});

		require('jquery').post('http://api.dev/auth/login', {
			'email': 'conar@sellwell.io',
			'password': 'password'
		}, function(results){
			console.log(results);
		});
	},

	componentWillUnmount: function() {

	},

	render: function(){
		var feed = this.state.feed.map(function(item){
			return <FeedItem status={item} />
		});

		return (
			<section>
				{feed}
			</section>
		)
	},

	_onChange: function(feed) {
		this.setState({
			feed: feed
		});
	}
});

module.exports = Feed