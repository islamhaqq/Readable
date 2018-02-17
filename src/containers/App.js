import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NavBar from '../components/NavBar';
import Home from './Home';
import TableSpacerRow from '../components/TableSpacerRow';

class App extends Component {
	render() {
		return (
			<div>
				<table className="readable">
					<tbody className="readable-content">
						<NavBar />

						<TableSpacerRow height="10px" />

						<Home posts={this.props.posts} />
					</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = currentState => ({
	posts: Object.entries(currentState.posts.posts.byId),
});

App.propTypes = {
	posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
