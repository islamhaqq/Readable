import React from 'react';

import SubmitNavBar from './SubmitNavBar';
import TableSpacerRow from './TableSpacerRow';

const Submit = () => (
	<center>
		<table>
			<tbody>
				<SubmitNavBar />
				<TableSpacerRow height="10" />
			</tbody>

			<tr>
				<td>
					<label>Title</label>
					<input type="text" />

					<label>Body</label>
					<textarea />
				</td>
			</tr>
		</table>
	</center>
);

export default Submit;
