import React from 'react';
import PropTypes from 'prop-types';

import postPropType from '../utils/proptypes/postPropType';

const PostUpvote = ({ post, onUpvote }) => (
	<span onClick={() => onUpvote(post.id)}>▲</span>
);

PostUpvote.propTypes = {
	post: postPropType.isRequired,
	onUpvote: PropTypes.func.isRequired,
};

export default PostUpvote;
