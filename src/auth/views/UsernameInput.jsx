var React = require('react'),
  ReactPropTypes = React.PropTypes

require('../sass/FloatLabel.scss')

var UsernameInput = React.createClass({

  propTypes: {
    className: ReactPropTypes.string,
    id: ReactPropTypes.string,
    placeholder: ReactPropTypes.string,
    onSave: ReactPropTypes.func.isRequired,
    value: ReactPropTypes.string
  },

  getInitialState: function() {
    return {
      value: this.props.value || ''
    };
  },

  componentDidMount: function() {
    this.getInitialState();
  },

  componentWillUnmount: function() {
    
  },

  render: function(){
    var val;

    val = this.state.value;

    return (
      <div className="FloatLabel">
    		<input
    			className="FloatLabel__input"
    			id={this.props.id}
    			placeholder={this.props.placeholder}
    			onChange={this._onChange}
    			onKeyDown={this._onKeyDown}
    			value={val}
    			autoFocus={true}
          name="username"
    			type="email" />
        <span className="FloatLabel__highlight"></span>
        <span className="FloatLabel__bar"></span>
        <label className="FloatLabel__label">Email</label>
      </div>
    );
  },

  _onChange: function(event) {
    var val = event.target.value;

    this.setState({
      value: val
    });

    this.props.onChange(event);
  }

});

module.exports = UsernameInput;