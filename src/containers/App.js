import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Home from '../components/Home';
import NavBar from '../components/NavBar';
import TableSpacerRow from '../components/TableSpacerRow';

class App extends Component {
	render() {
		return (
			<div>
				<table className="readable">
					<tbody className="readable-content">
						<NavBar />

						<TableSpacerRow height="10px" />
					</tbody>
				</table>

				<Route
					path="/"
					exact
					render={() => <Home posts={this.props.posts} />}
				/>

				<Route path="/submit" />
			</div>
		);
	}
}

const mapStateToProps = currentState => {
	const postsByIdObject = currentState.posts.posts.byId;

	return {
		posts: Object.keys(postsByIdObject).map(key => postsByIdObject[key]),
	};
};

App.propTypes = {
	posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
