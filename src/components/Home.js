import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import NavBar from '../components/NavBar';
import TableSpacerRow from '../components/TableSpacerRow';
import PostsBoard from '../components/PostsBoard';
import PostDetail from '../components/PostDetail';
import NotFound from '../components/NotFound';

const Home = ({
	posts,
	allComments,
	onUpvotePost,
	onAddCommentToPost,
	match,
}) => (
	<div>
		<table className="readable">
			<tbody className="readable-content">
				<NavBar />

				<TableSpacerRow height="10px" />

				<Switch>
					<Route
						path="/"
						exact
						render={() => (
							<PostsBoard
								posts={Object.keys(posts).map(key => posts[key])}
								onUpvotePost={onUpvotePost}
							/>
						)}
					/>

					<Route
						path="/post/:postId"
						render={props => {
							const { postId } = props.match.params;
							const post = posts[postId];

							return (
								<PostDetail
									post={post}
									comments={post.comments.map(
										commentId => allComments[commentId],
									)}
									onUpvotePost={onUpvotePost}
									onAddCommentToPost={onAddCommentToPost}
								/>
							);
						}}
					/>

					<Route path="*" component={NotFound} />
				</Switch>
			</tbody>
		</table>
	</div>
);

Home.propTypes = {
	posts: PropTypes.object.isRequired,
	allComments: PropTypes.object.isRequired,
	onUpvotePost: PropTypes.func.isRequired,
	onAddCommentToPost: PropTypes.func.isRequired,
};

export default Home;
