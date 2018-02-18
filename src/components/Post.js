import React from 'react';
import PropTypes from 'prop-types';

import postPropType from '../utils/proptypes/postPropType';
import PostPrimaryRow from './PostPrimaryRow';
import TableSpacerRow from './TableSpacerRow';
import PostDetailsRow from './PostDetailsRow';

const Post = ({
	post,
	rank,
	onUpvote,
	onDownvote,
	isRankDisplayed = false,
	isVoteButtonDisplayed = false,
}) => {
	const postPrimaryRowProps = {
		post,
		onUpvote,
		onDownvote,
		rank,
		isRankDisplayed,
		isVoteButtonDisplayed,
	};

	return (
		<tbody className="post-container">
			<PostPrimaryRow {...postPrimaryRowProps} />

			<PostDetailsRow post={post} />

			<TableSpacerRow height="20px" />
		</tbody>
	);
};

Post.propTypes = {
	post: postPropType.isRequired,
	rank: PropTypes.number,
	onUpvote: PropTypes.func,
	onDownvote: PropTypes.func,
	isRankDisplayed: PropTypes.bool.isRequired,
	isVoteButtonDisplayed: PropTypes.bool.isRequired,
};

export default Post;
