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

				<tr className="home-container">
					<td>
						<table className="home-content">
							{posts.map((post, index) => (
								<Post post={post} rank={index + 1} key={index} />
							))}
						</table>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
);

Home.propTypes = {
	posts: PropTypes.array.isRequired,
};

export default Home;
