import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
	<tr className="navigation-bar-container">
		<td bgcolor="#008000">
			<table className="navigation-bar-content">
				<tbody>
					<tr>
						<td className="navigation-bar-main-links">
							<Link to="/">Readable</Link>
							<a>Non-Fiction</a>
							<a>Fiction</a>
							<Link to="/submit">Submit</Link>
						</td>
						<td className="navigation-bar-profile-actions">
							<a>Syed Aman</a>
							<a>logout</a>
						</td>
					</tr>
				</tbody>
			</table>
		</td>
	</tr>
);

export default NavBar;
