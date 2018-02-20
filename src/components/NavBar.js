import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ categories, currentCategory }) => (
	<tr className="navigation-bar-container">
		<td bgcolor="#008000">
			<table className="navigation-bar-content">
				<tbody>
					<tr>
						<td className="navigation-bar-main-links">
							<Link to="/">Readable</Link>
							{categories.map((category, index) => (
								<Link
									to={`/${category.path}`}
									key={index}
									style={{ paddingLeft: '10px' }}
								>
									{category.name}
								</Link>
							))}
							{currentCategory ? (
								<Link
									to={`${currentCategory}/submit`}
									style={{ paddingLeft: '10px' }}
								>
									Submit
								</Link>
							) : null}
						</td>
					</tr>
				</tbody>
			</table>
		</td>
	</tr>
);

export default NavBar;
