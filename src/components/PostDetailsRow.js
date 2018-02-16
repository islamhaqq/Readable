import React from 'react';

const PostDetailsRow = () => (
	<tr className="post-details-row">
		<td className="post-details-container">
			<span className="post-points">449 points</span>
			<a href="#" className="post-author">
				syedaman
			</a>
			<span className="post-timestamp">7 hours ago</span>
			|
			<a className="post-details-view-comments-link">218 comments</a>
		</td>
	</tr>
);

export default PostDetailsRow;
