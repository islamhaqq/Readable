import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ categories }) => (
	<tr className="navigation-bar-container">
		<td bgcolor="#008000">
			<table className="navigation-bar-content">
				<tbody>
					<tr>
						<td className="navigation-bar-main-links">
							<Link to="/">Readable</Link>
							{categories.map(category => (
								<Link to={`/${category.path}`} style={{ paddingLeft: '10px' }}>
									{category.name}
								</Link>
							))}
							<Link to="/submit" style={{ paddingLeft: '10px' }}>
								Submit
							</Link>
						</td>
					</tr>
				</tbody>
			</table>
		</td>
	</tr>
);

export default NavBar;
