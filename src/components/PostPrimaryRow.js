import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import PostRank from './PostRank';
import PostUpvote from './PostUpvote';
import postPropType from '../utils/proptypes/postPropType';

const PostPrimaryRow = ({
	post,
	rank,
	onUpvote,
	isRankDisplayed,
	isVoteButtonDisplayed,
}) => (
	<tr className="post-main-row">
		{isRankDisplayed ? <PostRank rank={rank} /> : null}

		{isVoteButtonDisplayed ? (
			<PostUpvote post={post} onUpvote={onUpvote} />
		) : null}

		<td className="post-title">
			<Link to={`/post/${post.id}`}>{post.title}</Link>
		</td>
	</tr>
);

PostPrimaryRow.propTypes = {
	post: postPropType.isRequired,
	rank: PropTypes.number,
	onUpvote: PropTypes.func.isRequired,
	isRankDisplayed: PropTypes.bool.isRequired,
	isVoteButtonDisplayed: PropTypes.bool.isRequired,
};

export default PostPrimaryRow;
