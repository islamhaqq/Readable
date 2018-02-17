import React from 'react';
import PropTypes from 'prop-types';

import Post from '../components/Post';

const Home = ({ posts }) => (
	<tr className="home-container">
		<td>
			<table className="home-content">
				{posts.map((post, rank) => <Post post={post} rank={rank + 1} />)}
			</table>
		</td>
	</tr>
);

Home.propTypes = {
	posts: PropTypes.array.isRequired,
};

export default Home;
