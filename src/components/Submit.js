import React from 'react';
import PropTypes from 'prop-types';

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

Submit.propTypes = {
	onSubmitNewPost: PropTypes.func.isRequired,
};

export default Submit;
