var dispatcher = require('_/dispatcher/index.jsx'),
	StatusStore = require('_/stores/StatusStore.jsx')

module.exports = {

	create: function(content){
		dispatcher.dispatch({
			type: 'CREATE_STATUS',
			content: content
		});
	}

};