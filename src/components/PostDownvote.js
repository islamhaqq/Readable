import React from 'react';
import PropTypes from 'prop-types';

import postPropType from '../utils/proptypes/postPropType';

const PostDownvote = ({ post, onDownvote }) => (
	<span onClick={() => onDownvote(post.id)}>▼</span>
);

PostDownvote.propTypes = {
	post: postPropType.isRequired,
	onDownvote: PropTypes.func.isRequired,
};

export default PostDownvote;
