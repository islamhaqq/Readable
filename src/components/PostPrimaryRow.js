import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import PostRank from './PostRank';
import PostUpvote from './PostUpvote';
import postPropType from '../utils/proptypes/postPropType';

const PostPrimaryRow = ({ post, rank, onUpvote }) => (
	<tr className="post-main-row">
		<PostRank rank={rank} />

		<PostUpvote post={post} onUpvote={onUpvote} />

		<td className="post-title">
			<Link to={`/post/${post.id}`}>{post.title}</Link>
		</td>
	</tr>
);

PostPrimaryRow.propTypes = {
	post: postPropType.isRequired,
	rank: PropTypes.number.isRequired,
	onUpvote: PropTypes.func.isRequired,
};

export default PostPrimaryRow;
