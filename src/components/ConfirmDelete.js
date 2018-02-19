import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import PostDetailsRow from './PostDetailsRow';
import PostNavBar from './PostNavBar';
import postPropType from '../utils/proptypes/postPropType';

const ConfirmDelete = ({ post, onDeletePost, match, history }) => (
	<center>
		<table>
			<tbody>
				<PostNavBar title="Confirm" />

				<tr>
					<td>
						<table>
							<tbody>
								<tr>
									<td>{post.title}</td>
								</tr>

								<PostDetailsRow post={post} />

								<tr>
									<td>
										<h3>Do you want this to be deleted?</h3>
										<button
											onClick={() => {
												onDeletePost({
													id: match.params.postId,
													comments: post.comments,
												});
												history.push('/');
											}}
											type="submit"
										>
											Yes
										</button>

										<Link to="/">
											<button type="submit">No</button>
										</Link>
									</td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
			</tbody>
		</table>
	</center>
);

ConfirmDelete.propTypes = {
	post: postPropType.isRequired,
	onDeletePost: PropTypes.func.isRequired,
	match: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
};

export default ConfirmDelete;
