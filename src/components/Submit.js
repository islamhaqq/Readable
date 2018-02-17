import React from 'react';

import TableSpacerRow from './TableSpacerRow';

const Submit = () => (
	<center>
		<table>
			<tbody>
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

				<TableSpacerRow height="10" />
			</tbody>

			<tr>
				<td>
					<label>Title</label>
					<input type="text" />
				</td>
			</tr>
		</table>
	</center>
);

export default Submit;
