import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import PostRank from './PostRank';
import PostUpvote from './PostUpvote';
import PostDownvote from './PostDownvote';
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
				<PostUpvote post={post} onUpvote={onUpvote} />
				<PostDownvote post={post} onDownvote={onDownvote} />
			</td>
		) : null}

		<td className="post-title">
			<Link to={`/post/${post.id}`}>{post.title}</Link>
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
