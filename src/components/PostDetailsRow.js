import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Link } from 'react-router-dom';

const PostDetailsRow = ({ post }) => (
	<tr className="post-details-row">
		<td colSpan="2" />

		<td className="post-details-container">
			<span className="post-voteScore">{`${post.voteScore} points by `}</span>
			<a className="post-author">{post.author}</a>
			<span className="post-timestamp">
				{` ${moment(post.timestamp)
					.startOf('second')
					.fromNow()} `}
			</span>
			|
			<a className="post-details-view-comments-link">
				{` ${post.commentCount} ${
					post.commentCount === 1 ? 'comment' : 'comments'
				}`}
			</a>
			|
			<Link to={`/edit/${post.id}`}>edit</Link>
			|
			<Link to={`/confirm-delete/${post.id}`}>delete</Link>
		</td>
	</tr>
);

PostDetailsRow.propTypes = {
	post: PropTypes.object.isRequired,
};

export default PostDetailsRow;
