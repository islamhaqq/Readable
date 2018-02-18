import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PostPrimaryRow = ({ post, rank, onUpvote }) => (
	<tr className="post-main-row">
		<td className="post-rank">
			<span>{`${rank}.`}</span>
		</td>

		<td className="post-upvote-container">
			<span onClick={() => onUpvote(post.id)}>^</span>
		</td>

		<td className="post-title">
			<Link to={`/post/${post.id}`}>{post.title}</Link>
		</td>
	</tr>
);

PostPrimaryRow.proptypes = {
	post: PropTypes.object.isRequired,
	rank: PropTypes.number.isRequired,
	onUpvote: PropTypes.func.isRequired,
};

export default PostPrimaryRow;
