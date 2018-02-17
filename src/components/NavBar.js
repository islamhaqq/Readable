import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
	<tr className="navigation-bar-container">
		<td bgcolor="#008000">
			<table className="navigation-bar-content">
				<tbody>
					<tr>
						<td className="navigation-bar-main-links">
							<a href="#">Readable</a>
							<a href="#">Non-Fiction</a>
							<a href="#">Fiction</a>
							<Link to="/submit">Submit</Link>
						</td>
						<td className="navigation-bar-profile-actions">
							<a href="#">Syed Aman</a>
							<a href="#">logout</a>
						</td>
					</tr>
				</tbody>
			</table>
		</td>
	</tr>
);

export default NavBar;
