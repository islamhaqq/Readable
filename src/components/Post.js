import React from 'react';

import PostPrimaryRow from './PostPrimaryRow';
import TableSpacerRow from './TableSpacerRow';
import PostDetailsRow from './PostDetailsRow';

const Post = ({ post }) => (
	<tbody className="post-container">
		<PostPrimaryRow />

		<PostDetailsRow />

		<TableSpacerRow height="20px" />
	</tbody>
);

export default Post;
