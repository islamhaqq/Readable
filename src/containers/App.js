import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Home from '../components/Home';
import Submit from '../components/Submit';

class App extends Component {
	render() {
		return (
			<div>
				<Route
					path="/"
					exact
					render={() => <Home posts={this.props.posts} />}
				/>

				<Route path="/submit" exact component={Submit} />
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
