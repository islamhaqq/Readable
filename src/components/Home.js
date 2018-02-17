import React from 'react';
import PropTypes from 'prop-types';

import NavBar from '../components/NavBar';
import TableSpacerRow from '../components/TableSpacerRow';
import Post from '../components/Post';

const Home = ({ posts }) => (
	<div>
		<table className="readable">
			<tbody className="readable-content">
				<NavBar />

				<TableSpacerRow height="10px" />
			</tbody>
		</table>

		<tr className="home-container">
			<td>
				<table className="home-content">
					{posts.map((post, rank) => <Post post={post} rank={rank + 1} />)}
				</table>
			</td>
		</tr>
	</div>
);

Home.propTypes = {
	posts: PropTypes.array.isRequired,
};

export default Home;
