'use strict'

var React = require('react')

require('../sass/comment.scss')

class Comment extends React.Component {
	render(){
		var comment = this.props.comment;

		return (
			<article className="Comment">
				{comment.content}
				<div className="Comment__actions">
					<a href="#">like</a>
					&nbsp;&middot;&nbsp;
					<a href="#">comment</a>
				</div>
			</article>
		)
	}
}

module.exports = Comment