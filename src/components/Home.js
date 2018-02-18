import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import NavBar from '../components/NavBar';
import TableSpacerRow from '../components/TableSpacerRow';
import PostsBoard from '../components/PostsBoard';
import PostDetail from '../components/PostDetail';
import NotFound from '../components/NotFound';

const Home = ({
	posts,
	allComments,
	onUpvotePost,
	onDownvotePost,
	onAddCommentToPost,
	match,
}) => (
	<div>
		<table className="readable">
			<tbody className="readable-content">
				<NavBar />

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
					path="/post/:postId"
					render={props => {
						const { postId } = props.match.params;
						const post = posts[postId];

						if (!post) return <NotFound />;

						return (
							<PostDetail
								post={post}
								comments={post.comments.map(
									commentId => allComments[commentId],
								)}
								onUpvotePost={onUpvotePost}
								onDownvotePost={onDownvotePost}
								onAddCommentToPost={onAddCommentToPost}
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
	allComments: PropTypes.object.isRequired,
	onUpvotePost: PropTypes.func.isRequired,
	onDownvotePost: PropTypes.func.isRequired,
	onAddCommentToPost: PropTypes.func.isRequired,
};

export default Home;
