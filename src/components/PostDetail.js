import React from 'react';
import PropTypes from 'prop-types';

import postPropType from '../utils/proptypes/postPropType';
import Post from './Post';

const PostDetail = ({ post, onUpvotePost }) => (
	<tr className="post-detail-container">
		<td>
			<table>
				<Post post={post} onUpvote={onUpvotePost} isRankDisplayed={false} />

				<tbody>
					<tr>
						<td>
							<p className="post-body">{post.body}</p>
							<span className="post-vote-score">{post.points}</span>
							<div className="comment-section">
								<h2 className="comment-section-header">Comments</h2>
								<ul className="comment-section-comment-list">
									<li className="comment">
										<h6 className="comment-author">Comment Author</h6>
									</li>
								</ul>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</td>
	</tr>
);

Post.propTypes = {
	post: postPropType,
	onUpvote: PropTypes.func.isRequired,
};

export default PostDetail;
