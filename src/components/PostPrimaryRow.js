import React from 'react';
import PropTypes from 'prop-types';

const PostPrimaryRow = ({ post }) => (
	<tr className="post-main-row">
		<td className="post-rank">
			<span>1.</span>
		</td>

		<td className="post-upvote-container">
			<span>^</span>
		</td>

		<td className="post-title">{post.title}</td>
	</tr>
);

PostPrimaryRow.proptypes = {
	post: PropTypes.object.required,
};

export default PostPrimaryRow;
