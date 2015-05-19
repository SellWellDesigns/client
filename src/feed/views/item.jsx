'use strict'

var React = require('react'),
	Comment = require('./comment.jsx'),
	mentions = require('_/richtext/mentions')

require('../sass/item.scss')

class FeedItem extends React.Component {
	render(){
		var status = this.props.status,
			comments = status.comments || [],
			content = mentions.wrapMentions(status.content, '$1<a href="#">$2$3</a>');

		comments = comments.map(function(c){
			return <Comment comment={c} />;
		});

		return (
			<article className="FeedItem">
				<header>
					<strong>WHO</strong> did <strong>WHAT</strong> to <strong>WHO</strong>
					<div className="muted">{status.created_at || 'saving...'}</div>
				</header>
				<section dangerouslySetInnerHTML={{__html: content}}></section>
				<div className="FeedItem__actions">
					<a href="#">like</a>
					&nbsp;&middot;&nbsp;
					<a href="#">comment</a>
				</div>
				<footer>
					<div className="FeedItem__summary">
						17 people like this
					</div>
					{comments}
				</footer>
			</article>
		)
	}
}

module.exports = FeedItem