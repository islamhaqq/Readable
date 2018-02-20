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
	async componentDidMount() {
		await this.props.fetchAllPosts();
		await this.props.fetchAllCategories();
	}

	render() {
		return (
			<div>
				<Route
					path="/"
					exact
					render={props => (
						<Home
							posts={this.props.posts}
							categories={this.props.categories}
							onUpvotePost={this.props.upvotePost}
							onDownvotePost={this.props.downvotePost}
							{...props}
						/>
					)}
				/>

				<Route
					path="/:category"
					exact
					render={props => {
						const { category } = props.match.params;

						return (
							<Home
								posts={Object.keys(this.props.posts)
									.filter(
										postId => this.props.posts[postId].category === category,
									)
									.reduce(
										(posts, postId) => ({
											...posts,
											[postId]: this.props.posts[postId],
										}),
										{},
									)}
								categories={this.props.categories}
								onUpvotePost={this.props.upvotePost}
								onDownvotePost={this.props.downvotePost}
								{...props}
							/>
						);
					}}
				/>

				<Route
					path="/submit"
					exact
					render={props => (
						<Submit {...props} onSubmitNewPost={this.props.onSubmitNewPost} />
					)}
				/>

				<Route
					path="/:category/submit"
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
	categories: currentState.categories,
});

const mapDispatchToProps = dispatch => ({
	fetchAllPosts: () => dispatch(actionCreators.fetchAllPosts()),
	fetchAllCategories: () => dispatch(actionCreators.fetchAllCategories()),
	onSubmitNewPost: postDataToSubmit =>
		dispatch(actionCreators.createPost(postDataToSubmit)),
	deletePost: postId => dispatch(actionCreators.deletePost(postId)),
	editPost: postDataToSubmit =>
		dispatch(actionCreators.editPost(postDataToSubmit)),
	upvotePost: postId => dispatch(actionCreators.upvotePost(postId)),
	downvotePost: postId => dispatch(actionCreators.downvotePost(postId)),
});

App.propTypes = {
	posts: PropTypes.object.isRequired,
	downvotePost: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
