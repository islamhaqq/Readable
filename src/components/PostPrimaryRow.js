import React from 'react';
import PropTypes from 'prop-types';

const PostPrimaryRow = ({ post, rank }) => (
	<tr className="post-main-row">
		<td className="post-rank">
			<span>{`${rank}.`}</span>
		</td>

		<td className="post-upvote-container">
			<span>^</span>
		</td>

		<td className="post-title">{post.title}</td>
	</tr>
);

PostPrimaryRow.proptypes = {
	post: PropTypes.object.isRequired,
	rank: PropTypes.number.isRequired,
};

export default PostPrimaryRow;
