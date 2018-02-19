import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import NavBar from '../components/NavBar';
import TableSpacerRow from './TableSpacerRow';
import PostsBoard from './PostsBoard';
import PostDetail from '../containers/PostDetail';
import NotFound from '../components/NotFound';

const Home = ({
	posts,
	allComments,
	onUpvotePost,
	onDownvotePost,
	onUpvoteComment,
	onDownvoteComment,
	onAddCommentToPost,
	onDeleteCommentFromPost,
	onEditCommentOnPost,
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
								onUpvoteComment={onUpvoteComment}
								onDownvoteComment={onDownvoteComment}
								onAddCommentToPost={onAddCommentToPost}
								onDeleteCommentFromPost={onDeleteCommentFromPost}
								onEditCommentOnPost={onEditCommentOnPost}
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
	onUpvoteComment: PropTypes.func.isRequired,
	onDownvoteComment: PropTypes.func.isRequired,
	onAddCommentToPost: PropTypes.func.isRequired,
	onDeleteCommentFromPost: PropTypes.func.isRequired,
	onEditCommentOnPost: PropTypes.func.isRequired,
};

export default Home;
