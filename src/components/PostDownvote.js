import React from 'react';
import PropTypes from 'prop-types';

import postPropType from '../utils/proptypes/postPropType';

const PostDownvote = ({ post, downVote }) => (
	<td className="post-upvote-container">
		<span onClick={() => downVote(post.id)}>▼</span>
	</td>
);

PostDownvote.propTypes = {
	post: postPropType.isRequired,
	downVote: PropTypes.func.isRequired,
};

export default PostDownvote;
