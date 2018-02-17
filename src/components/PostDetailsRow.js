import React from 'react';
import PropTypes from 'prop-types';

const PostDetailsRow = ({ post }) => (
	<tr className="post-details-row">
		<td colSpan="2" />

		<td className="post-details-container">
			<span className="post-points">{`${post.points} points`}</span>
			<a href="#" className="post-author">
				syedaman
			</a>
			<span className="post-timestamp">7 hours ago</span>
			|
			<a className="post-details-view-comments-link">218 comments</a>
		</td>
	</tr>
);

PostDetailsRow.propTypes = {
	post: PropTypes.object.isRequired,
};

export default PostDetailsRow;
