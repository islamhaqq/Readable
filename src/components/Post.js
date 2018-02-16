import React from 'react';

import PostSpacerRow from './PostSpacerRow';
import PostDetailsRow from './PostDetailsRow';

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

		<PostDetailsRow />

		<PostSpacerRow />
	</tbody>
);

export default Post;
