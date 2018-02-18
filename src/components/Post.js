import React from 'react';
import PropTypes from 'prop-types';

import postPropType from '../utils/proptypes/postPropType';
import PostPrimaryRow from './PostPrimaryRow';
import TableSpacerRow from './TableSpacerRow';
import PostDetailsRow from './PostDetailsRow';

const Post = ({ post, rank, onUpvote, isRankDisplayed }) => (
	<tbody className="post-container">
		{isRankDisplayed ? (
			<PostPrimaryRow
				post={post}
				onUpvote={onUpvote}
				rank={rank}
				isRankDisplayed={isRankDisplayed}
			/>
		) : (
			<PostPrimaryRow
				post={post}
				onUpvote={onUpvote}
				isRankDisplayed={isRankDisplayed}
			/>
		)}

		<PostDetailsRow post={post} />

		<TableSpacerRow height="20px" />
	</tbody>
);

Post.propTypes = {
	post: postPropType.isRequired,
	rank: PropTypes.number,
	onUpvote: PropTypes.func.isRequired,
	isRankDisplayed: PropTypes.bool.isRequired,
};

export default Post;
