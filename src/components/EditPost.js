import React from 'react';
import PropTypes from 'prop-types';

import PostNavBar from './PostNavBar';
import EditPostForm from './EditPostForm';
import Post from './Post';
import postPropType from '../utils/proptypes/postPropType';

const EditPost = ({ post, onEditPost, onUpvotePost, history }) => (
	<center>
		<table>
			<tbody>
				<PostNavBar title="Edit" />

				<Post
					post={post}
					isVoteButtonDisplayed={false}
					isRankDisplayed={false}
				/>

				<EditPostForm
					onEditPost={newPostData =>
						onEditPost({ ...newPostData, id: post.id })
					}
					history={history}
				/>
			</tbody>
		</table>
	</center>
);

EditPost.propTypes = {
	post: postPropType.isRequired,
	onEditPost: PropTypes.func.isRequired,
	onUpvotePost: PropTypes.func.isRequired,
};

export default EditPost;
