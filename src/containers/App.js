import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import ConfirmDelete from '../components/ConfirmDelete';
import EditPost from '../components/EditPost';
import Submit from '../components/Submit';
import NotFound from '../components/NotFound';
import * as actionCreators from '../actions';

class App extends Component {
	render() {
		return (
			<Switch>
				<Route
					path="/"
					render={props => (
						<Home
							posts={this.props.posts}
							allComments={this.props.allComments}
							onUpvotePost={this.props.upvotePost}
							onAddCommentToPost={this.props.addComment}
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
					render={props => (
						<ConfirmDelete
							{...props}
							post={this.props.posts[props.match.params.postId]}
							onDeletePost={this.props.deletePost}
						/>
					)}
					exact
				/>

				<Route
					path="/edit/:postId"
					render={props => (
						<EditPost
							{...props}
							post={this.props.posts[props.match.params.postId]}
							onEditPost={this.props.editPost}
						/>
					)}
					exact
				/>

				<Route path="*" component={NotFound} />
			</Switch>
		);
	}
}

const mapStateToProps = currentState => ({
	posts: currentState.posts.byId,
	allComments: currentState.comments.byId,
});

const mapDispatchToProps = dispatch => ({
	upvotePost: postId => dispatch(actionCreators.upvotePost(postId)),
	onSubmitNewPost: postDataToSubmit =>
		dispatch(actionCreators.createPost(postDataToSubmit)),
	deletePost: postId => dispatch(actionCreators.deletePost(postId)),
	editPost: postDataToSubmit =>
		dispatch(actionCreators.editPost(postDataToSubmit)),
	addComment: commentData => dispatch(actionCreators.addComment(commentData)),
});

App.propTypes = {
	posts: PropTypes.object.isRequired,
	allComments: PropTypes.object.isRequired,
	addComment: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
