import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Home from '../components/Home';
import ConfirmDelete from '../components/ConfirmDelete';
import EditPost from '../components/EditPost';
import Submit from '../components/Submit';
import NotFound from '../components/NotFound';
import * as actionCreators from '../actions';

class App extends Component {
	render() {
		return (
			<div>
				<Route
					path="/"
					render={props => (
						<Home
							posts={this.props.posts}
							allComments={this.props.allComments}
							onUpvotePost={this.props.upvotePost}
							onDownvotePost={this.props.downvotePost}
							onUpvoteComment={this.props.upvoteComment}
							onDownvoteComment={this.props.downvoteComment}
							onAddCommentToPost={this.props.addComment}
							onDeleteCommentFromPost={this.props.deleteComment}
							onEditCommentOnPost={this.props.editComment}
							{...props}
						/>
					)}
				/>

				<Route
					path="/submit"
					exact
					render={props => (
						<Submit {...props} onSubmitNewPost={this.props.onSubmitNewPost} />
					)}
				/>

				<Route
					path="/confirm-delete/:postId"
					render={props => {
						const post = this.props.posts[props.match.params.postId];

						if (!post) return <NotFound />;

						return (
							<ConfirmDelete
								{...props}
								post={post}
								onDeletePost={this.props.deletePost}
							/>
						);
					}}
					exact
				/>

				<Route
					path="/edit/:postId"
					render={props => {
						const post = this.props.posts[props.match.params.postId];

						if (!post) return <NotFound />;

						return (
							<EditPost
								{...props}
								post={this.props.posts[props.match.params.postId]}
								onEditPost={this.props.editPost}
							/>
						);
					}}
					exact
				/>
			</div>
		);
	}
}

const mapStateToProps = currentState => ({
	posts: currentState.posts.byId,
	allComments: currentState.comments.byId,
});

const mapDispatchToProps = dispatch => ({
	onSubmitNewPost: postDataToSubmit =>
		dispatch(actionCreators.createPost(postDataToSubmit)),
	deletePost: postId => dispatch(actionCreators.deletePost(postId)),
	editPost: postDataToSubmit =>
		dispatch(actionCreators.editPost(postDataToSubmit)),
	addComment: commentData => dispatch(actionCreators.addComment(commentData)),
	upvotePost: postId => dispatch(actionCreators.upvotePost(postId)),
	downvotePost: postId => dispatch(actionCreators.downvotePost(postId)),
	upvoteComment: commentId => dispatch(actionCreators.upvoteComment(commentId)),
	downvoteComment: commentId =>
		dispatch(actionCreators.downvoteComment(commentId)),
	deleteComment: commentToDelete =>
		dispatch(actionCreators.deleteComment(commentToDelete)),
	editComment: commentToEdit =>
		dispatch(actionCreators.editComment(commentToEdit)),
});

App.propTypes = {
	posts: PropTypes.object.isRequired,
	allComments: PropTypes.object.isRequired,
	addComment: PropTypes.func.isRequired,
	deleteComment: PropTypes.func.isRequired,
	downvotePost: PropTypes.func.isRequired,
	upvoteComment: PropTypes.func.isRequired,
	downvoteComment: PropTypes.func.isRequired,
	editComment: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
