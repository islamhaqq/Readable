import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import NavBar from '../components/NavBar';
import TableSpacerRow from './TableSpacerRow';
import PostsBoard from './PostsBoard';
import PostDetail from '../containers/PostDetail';
import NotFound from '../components/NotFound';

const Home = ({ posts, onUpvotePost, onDownvotePost, match, categories }) => (
	<div>
		<table className="readable">
			<tbody className="readable-content">
				<NavBar categories={categories} />

				<TableSpacerRow height="10px" />

				<Route
					path="/"
					exact
					render={() => (
						<PostsBoard
							posts={Object.keys(posts).map(key => posts[key])}
							onUpvotePost={onUpvotePost}
							onDownvotePost={onDownvotePost}
						/>
					)}
				/>

				<Route
					path="/:category"
					exact
					render={({ match }) => {
						const { category } = match.params;

						return (
							<PostsBoard
								posts={Object.keys(posts)
									.map(key => posts[key])
									.filter(post => post.category === category)}
								onUpvotePost={onUpvotePost}
								onDownvotePost={onDownvotePost}
							/>
						);
					}}
				/>

				<Route
					path="/post/:postId"
					render={props => {
						const { postId } = props.match.params;
						const post = posts[postId];

						if (!post) return <NotFound />;

						return (
							<PostDetail
								post={post}
								onUpvotePost={onUpvotePost}
								onDownvotePost={onDownvotePost}
							/>
						);
					}}
				/>
			</tbody>
		</table>
	</div>
);

Home.propTypes = {
	posts: PropTypes.object.isRequired,
	onUpvotePost: PropTypes.func.isRequired,
	onDownvotePost: PropTypes.func.isRequired,
};

export default Home;
