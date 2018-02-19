import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import moment from 'moment';

import postPropType from '../utils/proptypes/postPropType';
import Post from '../components/Post';
import UpvoteButton from '../components/UpvoteButton';
import DownvoteButton from '../components/DownvoteButton';
import * as actionCreators from '../actions';

class PostDetail extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isEditDialogShowing: false,
			updatedPostBody: '',
		};
	}

	async componentDidMount() {
		const response = await this.props.fetchComments(this.props.post.id);
		const comments = response.payload.comments;

		this.setState({
			comments,
		});
	}

	handleUpdatedPostBodyChange = event => {
		this.setState({
			updatedPostBody: event.target.value,
		});
	};

	updateComment = commentToUpdate => {
		this.setState({
			isEditDialogShowing: false,
		});

		this.props.onEditCommentOnPost(commentToUpdate);
	};

	render() {
		const {
			post,
			onUpvotePost,
			onDownvotePost,
			onUpvoteComment,
			onDownvoteComment,
			onAddCommentToPost,
			onDeleteCommentFromPost,
		} = this.props;

		return (
			<tr className="post-detail-container">
				<td>
					<table>
						<Post
							post={post}
							onUpvote={onUpvotePost}
							onDownvote={onDownvotePost}
							isRankDisplayed={false}
							isVoteButtonDisplayed={true}
						/>

						<tbody>
							<tr>
								<td>
									<p className="post-body">{post.body}</p>

									<div>
										<textarea
											ref={htmlElement =>
												(this.htmlElementForCommentBodyInput = htmlElement)
											}
											rows="4"
											cols="50"
											placeholder="comment body..."
										/>
										<input
											ref={htmlElement =>
												(this.htmlElementForCommentAuthorInput = htmlElement)
											}
											placeholder="comment author..."
										/>
										<button
											onClick={() => {
												const commentData = {
													author: this.htmlElementForCommentAuthorInput.value,
													body: this.htmlElementForCommentBodyInput.value,
													parentId: post.id,
													id: uniqid(),
												};

												if (
													commentData.author &&
													commentData.body &&
													commentData.parentId &&
													commentData.id
												) {
													onAddCommentToPost(commentData);
													this.htmlElementForCommentAuthorInput.value = '';
													this.htmlElementForCommentBodyInput.value = '';
												}
											}}
											type="submit"
										>
											add comment
										</button>
									</div>

									<div className="comment-section">
										<h2 className="comment-section-header">Comments</h2>
										<ul className="comment-section-comment-list">
											{this.state.comments &&
												this.state.comments.map(comment => {
													const {
														id,
														author,
														body,
														voteScore,
														timestamp,
													} = comment;

													return (
														<li key={id} className="comment">
															<h6 className="comment-author">
																{`${voteScore} points by ${author} ${moment(
																	timestamp,
																)
																	.startOf('second')
																	.fromNow()}`}
																<span
																	onClick={async () => {
																		try {
																			await this.setState(previousState => ({
																				isEditDialogShowing: !previousState.isEditDialogShowing,
																				commentBeingEditted: id,
																				updatedPostBody: body,
																			}));
																		} catch (error) {
																			throw new Error(error);
																		}
																	}}
																	style={{ paddingLeft: '10px' }}
																>
																	✎
																</span>
																<span
																	onClick={() => {
																		onDeleteCommentFromPost({
																			id,
																			postId: post.id,
																		});
																	}}
																	style={{ paddingLeft: '10px' }}
																>
																	❌
																</span>
															</h6>

															{this.state.isEditDialogShowing &&
															this.state.commentBeingEditted === id ? (
																<div>
																	<textarea
																		onChange={this.handleUpdatedPostBodyChange}
																		value={this.state.updatedPostBody}
																		row="4"
																		col="50"
																	/>
																	<button
																		onClick={() => {
																			this.updateComment({
																				id,
																				body: this.state.updatedPostBody,
																			});
																		}}
																		type="submit"
																	>
																		Update Comment
																	</button>
																</div>
															) : (
																<p className="comment-author">{body}</p>
															)}

															<UpvoteButton
																thingToUpvote={comment}
																onUpvote={onUpvoteComment}
															/>
															<DownvoteButton
																thingToDownvote={comment}
																onDownvote={onDownvoteComment}
															/>
														</li>
													);
												})}
										</ul>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		);
	}
}

const mapStateToProps = currentState => ({});

const mapDispatchToProps = dispatch => ({
	fetchComments: postId => dispatch(actionCreators.fetchCommentsForPost(postId)),
});

Post.propTypes = {
	post: postPropType,
	onUpvotePost: PropTypes.func.isRequired,
	onDownvotePost: PropTypes.func.isRequired,
	onUpvoteComment: PropTypes.func.isRequired,
	onDownvoteComment: PropTypes.func.isRequired,
	onAddCommentToPost: PropTypes.func.isRequired,
	onDeleteCommentFromPost: PropTypes.func.isRequired,
	onEditCommentOnPost: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
