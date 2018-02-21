import React from 'react';
import { Link } from 'react-router-dom';

const SubmitNavBar = () => (
	<tr>
		<td bgcolor="#ff6600">
			<table
				border="0"
				cellPadding="0"
				cellSpacing="0"
				width="100%"
				style={{ padding: '2px' }}
			>
				<tbody>
					<tr>
						<td>
							<Link to="/">
								<b>Home</b>
							</Link>
						</td>
					</tr>
					<tr>
						<td style={{ lineHeight: '12pt', height: '10px' }}>
							<span>
								<b>Submit</b>
							</span>
						</td>
					</tr>
				</tbody>
			</table>
		</td>
	</tr>
);

export default SubmitNavBar;
