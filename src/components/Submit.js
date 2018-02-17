import React from 'react';

const Submit = () => (
	<center>
		<table>
			<tbody>
				<tr>
					<td bgcolor="#ff6600">
						<table
							border="0"
							cellpadding="0"
							cellspacing="0"
							width="100%"
							style={{ padding: '2px' }}
						>
							<tbody>
								<tr>
									<td style={{ 'line-height': '12pt', height: '10px' }}>
										<span>
											<b>Submit</b>
										</span>
									</td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
			</tbody>
			<label>Title</label>
			<input type="text" />
		</table>
	</center>
);

export default Submit;
