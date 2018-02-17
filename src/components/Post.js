import React from 'react';
import PropTypes from 'prop-types';

import PostPrimaryRow from './PostPrimaryRow';
import TableSpacerRow from './TableSpacerRow';
import PostDetailsRow from './PostDetailsRow';

const Post = ({ post }) => (
	<tbody className="post-container">
		<PostPrimaryRow post={post} />

		<PostDetailsRow post={post} />

		<TableSpacerRow height="20px" />
	</tbody>
);

Post.proptypes = {
	post: PropTypes.array.isRequired,
};

export default Post;
