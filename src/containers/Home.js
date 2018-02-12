import React, { Component } from 'react';

class Home extends Component {
	render() {
		return (
			<tr className="home-container">
				<td>
					<table className="home-content">
						<tbody>
							<tr className="post-title-row" />
							<tr className="post-details-row" />
							<tr className="post-spacer-row" />
						</tbody>
					</table>
				</td>
			</tr>
		);
	}
}

export default Home;
