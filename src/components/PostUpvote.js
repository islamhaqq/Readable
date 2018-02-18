import React from 'react';
import PropTypes from 'prop-types';

import postPropType from '../utils/proptypes/postPropType';

const PostUpvote = ({ post, onUpvote }) => (
	<td className="post-upvote-container">
		<span onClick={() => onUpvote(post.id)}>▲</span>
	</td>
);

PostUpvote.propTypes = {
	post: postPropType.isRequired,
	onUpvote: PropTypes.func.isRequired,
};

export default PostUpvote;
