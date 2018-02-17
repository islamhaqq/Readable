import React from 'react';
import PropTypes from 'prop-types';

import PostPrimaryRow from './PostPrimaryRow';
import TableSpacerRow from './TableSpacerRow';
import PostDetailsRow from './PostDetailsRow';

const Post = ({ post, rank, onUpvote }) => (
	<tbody className="post-container">
		<PostPrimaryRow post={post} onUpvote={onUpvote} rank={rank} />

		<PostDetailsRow post={post} />

		<TableSpacerRow height="20px" />
	</tbody>
);

Post.proptypes = {
	post: PropTypes.array.isRequired,
	rank: PropTypes.number.isRequired,
	onUpvote: PropTypes.func.isRequired,
};

export default Post;
