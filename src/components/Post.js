import React from 'react';

import PostSpacerRow from './PostSpacerRow';

const Post = () => (
	<tbody className="post-container">
		<tr className="post-main-row">
			<td className="post-rank">
				<span>1.</span>
			</td>
			<td className="post-upvote-container">
				<span>^</span>
			</td>
			<td className="post-title">Let's talk about usernames</td>
		</tr>
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

		<PostSpacerRow />
	</tbody>
);

export default Post;
