import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import PostRank from './PostRank';
import UpvoteButton from './UpvoteButton';
import DownvoteButton from './DownvoteButton';
import postPropType from '../utils/proptypes/postPropType';

const PostPrimaryRow = ({
	post,
	rank,
	onUpvote,
	onDownvote,
	isRankDisplayed = false,
	isVoteButtonDisplayed = false,
}) => (
	<tr className="post-main-row">
		{isRankDisplayed ? <PostRank rank={rank} /> : null}

		{isVoteButtonDisplayed ? (
			<td className="post-vote-container">
				<UpvoteButton thingToUpvote={post} onUpvote={onUpvote} />
				<DownvoteButton thingToDownvote={post} onDownvote={onDownvote} />
			</td>
		) : null}

		<td className="post-title">
			<Link to={`${post.category}/${post.id}`}>{post.title}</Link>
		</td>
	</tr>
);

PostPrimaryRow.propTypes = {
	post: postPropType.isRequired,
	rank: PropTypes.number,
	onUpvote: PropTypes.func,
	onDownvote: PropTypes.func,
	isRankDisplayed: PropTypes.bool.isRequired,
	isVoteButtonDisplayed: PropTypes.bool.isRequired,
};

export default PostPrimaryRow;
