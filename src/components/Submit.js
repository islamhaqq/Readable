import React from 'react';

import SubmitNavBar from './SubmitNavBar';
import TableSpacerRow from './TableSpacerRow';
import SubmitForm from './SubmitForm';

const Submit = () => (
	<center>
		<table>
			<tbody>
				<SubmitNavBar />
				<TableSpacerRow height="10" />
			</tbody>

			<SubmitForm />
		</table>
	</center>
);

export default Submit;
