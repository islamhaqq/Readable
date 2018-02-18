import React from 'react';
import PropTypes from 'prop-types';

import postPropType from '../utils/proptypes/postPropType';
import Post from './Post';

const PostDetail = ({ post, comments, onUpvotePost }) => (
	<tr className="post-detail-container">
		<td>
			<table>
				<Post
					post={post}
					onUpvote={onUpvotePost}
					isRankDisplayed={false}
					isVoteButtonDisplayed={true}
				/>

				<tbody>
					<tr>
						<td>
							<p className="post-body">{post.body}</p>
							<div className="comment-section">
								<h2 className="comment-section-header">Comments</h2>
								<ul className="comment-section-comment-list">
									{comments.map(({ id, author, body, points, timestamp }) => (
										<li key={id} className="comment">
											<h6 className="comment-author">{author}</h6>
										</li>
									))}
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
	comments: PropTypes.array.isRequired,
};

export default PostDetail;
