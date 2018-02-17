import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Post from '../components/Post';

class Home extends Component {
	render() {
		return (
			<tr className="home-container">
				<td>
					<table className="home-content">
						{this.props.posts.map(post => <Post post={post} />)}
					</table>
				</td>
			</tr>
		);
	}
}

Home.propTypes = {
	posts: PropTypes.array.required,
};

export default Home;
