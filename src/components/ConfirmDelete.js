import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import createBrowserHistory from 'history/createBrowserHistory';

import PostDetailsRow from './PostDetailsRow';
import TableSpacerRow from './TableSpacerRow';
import postPropType from '../utils/proptypes/postPropType';

const ConfirmDelete = ({ post, onDeletePost, match, history }) => (
	<center>
		<table>
			<tbody>
				<tr>
					<td bgcolor="#ff6600">
						<table
							border="0"
							cellPadding="0"
							cellSpacing="0"
							width="100%"
							style={{ padding: '2px' }}
						>
							<tbody>
								<tr>
									<td>
										<Link to="/">
											<b>Home</b>
										</Link>
									</td>
								</tr>
								<tr>
									<td style={{ lineHeight: '12pt', height: '10px' }}>
										<span>
											<b>Confirm</b>
										</span>
									</td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>

				<tr>
					<td>
						<table>
							<tbody>
								<tr>
									<td>Test Post</td>
								</tr>

								<tr>
									<td>
										<h3>Do you want this to be deleted?</h3>
										<button
											onClick={() => {
												onDeletePost(match.params.postId);
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
								{/* <PostDetailsRow post={post} /> */}
							</tbody>
						</table>
					</td>
				</tr>
			</tbody>
		</table>
	</center>
);

ConfirmDelete.propTypes = {
	post: postPropType,
};

export default ConfirmDelete;
