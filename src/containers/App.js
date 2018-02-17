import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Home from '../components/Home';
import Submit from '../components/Submit';
import { upvotePost, createPost } from '../actions';

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

				<Route path="/submit" exact component={Submit} />
			</div>
		);
	}
}

const mapStateToProps = currentState => {
	const postsByIdObject = currentState.posts.posts.byId;

	return {
		posts: Object.keys(postsByIdObject).map(key => postsByIdObject[key]),
	};
};

const mapDispatchToProps = dispatch => ({
	onUpvotePost: postId => {
		dispatch(upvotePost(postId));
	},
});

App.propTypes = {
	posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
