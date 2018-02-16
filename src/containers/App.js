import React, { Component } from 'react';

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
						<Home />
					</tbody>
				</table>
			</div>
		);
	}
}

export default App;
