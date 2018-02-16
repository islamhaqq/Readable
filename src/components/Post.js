import React from 'react';

import PostPrimaryRow from './PostPrimaryRow';
import PostSpacerRow from './PostSpacerRow';
import PostDetailsRow from './PostDetailsRow';

const Post = () => (
	<tbody className="post-container">
		<PostPrimaryRow />

		<PostDetailsRow />

		<PostSpacerRow />
	</tbody>
);

export default Post;
