import React, { Component } from 'react';

import Post from '../components/Post';

class Home extends Component {
	render() {
		return (
			<tr className="home-container">
				<td>
					<table className="home-content">
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
					</table>
				</td>
			</tr>
		);
	}
}

export default Home;
