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
					exact
					render={() => (
						<Home
							posts={this.props.posts}
							onUpvotePost={this.props.onUpvotePost}
						/>
					)}
				/>

				<Route
					path="/submit"
					exact
					render={() => <Submit onSubmitNewPost={this.props.onSubmitNewPost} />}
				/>

				<Route
					path="/confirm-delete/:postId"
					render={props => (
						<ConfirmDelete {...props} onDeletePost={this.props.deletePost} />
					)}
					exact
				/>
			</div>
		);
	}
}

const mapStateToProps = currentState => {
	const postsByIdObject = currentState.posts.byId;

	return {
		posts: Object.keys(postsByIdObject).map(key => postsByIdObject[key]),
	};
};

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
	posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
