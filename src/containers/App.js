import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Home from '../components/Home';
import ConfirmDelete from '../components/ConfirmDelete';
import Submit from '../components/Submit';
import { upvotePost, createPost, deletePost } from '../actions';

class App extends Component {
	render() {
		return (
			<div>
				<Route
					path="/"
					render={props => (
						<Home
							posts={this.props.posts}
							onUpvotePost={this.props.onUpvotePost}
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
							postId={props.match.params.postId}
							onDeletePost={this.props.deletePost}
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
});

const mapDispatchToProps = dispatch => ({
	onUpvotePost: postId => {
		dispatch(upvotePost(postId));
	},
	onSubmitNewPost: postDataToSubmit => {
		dispatch(createPost(postDataToSubmit));
	},
	deletePost: postId => {
		dispatch(deletePost(postId));
	},
});

App.propTypes = {
	posts: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
