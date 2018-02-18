import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Home from '../components/Home';
import ConfirmDelete from '../components/ConfirmDelete';
import EditPost from '../components/EditPost';
import Submit from '../components/Submit';
import { upvotePost, createPost, deletePost, editPost } from '../actions';

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
			</div>
		);
	}
}

const mapStateToProps = currentState => ({
	posts: currentState.posts.byId,
	allComments: currentState.comments.byId,
});

const mapDispatchToProps = dispatch => ({
	upvotePost: postId => dispatch(upvotePost(postId)),
	onSubmitNewPost: postDataToSubmit => dispatch(createPost(postDataToSubmit)),
	deletePost: postId => dispatch(deletePost(postId)),
	editPost: postDataToSubmit => dispatch(editPost(postDataToSubmit)),
});

App.propTypes = {
	posts: PropTypes.object.isRequired,
	allComments: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
