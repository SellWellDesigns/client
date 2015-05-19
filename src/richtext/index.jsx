'use strict'

var React = require('react'),
	ReactPropTypes = React.PropTypes,
	StatusActions = require('_/actions/StatusActions.jsx'),
	mentions = require('./mentions')

var ENTER_KEY_CODE = 13

require('./sass/richtext.scss')

var Richtext = React.createClass({

	propTypes: {
		className: ReactPropTypes.string,
		id: ReactPropTypes.string,
		placeholder: ReactPropTypes.string,
		onSave: ReactPropTypes.func.isRequired,
		value: ReactPropTypes.string
	},

	getInitialState: function() {
		return {
			value: this.props.value || '',
			mentions: [],
			formatted: '',
			links: [],
			images: [],
			videos: []
		};
	},

	componentDidMount: function() {
		this.getInitialState();
	},

	componentWillUnmount: function() {

	},

	render: function() {
		var val, formatted;

		val = this.state.value;
		formatted = this.state.formatted;

		return (
			<div className="Richtext">
				<div className="Richtext__wrap">
					<div className="Richtext__input --highlight"
						dangerouslySetInnerHTML={{__html: formatted}}>
					</div>
					<textarea
						className="Richtext__input"
						id={this.props.id}
						placeholder={this.props.placeholder}
						onChange={this._onChange}
						onKeyDown={this._onKeyDown}
						value={val}
						autoFocus={true}
						rows="6">
					</textarea>
				</div>
				<div className="Richtext__actions">
					<a href="#">picture</a>
					<a href="#">video</a>
					<a href="#"
						className="float-right"
						onClick={this._save}>submit</a>
				</div>
			</div>
		)
	},

	_save: function(){
		var content = this.state.value.trim();
		
		if (content) {
			StatusActions.create(content, this.props.threadID);
		}
		
		this.setState(this.getInitialState());
	},

	_onChange: function(event) {
		var val, m, formatted, possibles, caret, word

		val = event.target.value
		formatted = mentions.wrapMentions(val)
		caret = mentions.getCaretPosition(event.target)
		word = /\S+$/.exec(val.slice(0, caret.end))
		possibles = this._findPossibles(word)

		this.setState({
			value: val,
			formatted: formatted,
			possibles: possibles
		});
	},

	_onKeyDown: function(e){
		if (e.keyCode === ENTER_KEY_CODE) {
			e.preventDefault();

			this._save();
		}
	},

	_findMentions: function(val){
		return mentions.findMentions(val);
	},

	_findPossibles: function(word){
		return mentions.findPossibles(word);
	}

}); 

module.exports = Richtext