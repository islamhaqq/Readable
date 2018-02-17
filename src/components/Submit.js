import React from 'react';
import PropTypes from 'prop-types';

import SubmitNavBar from './SubmitNavBar';
import TableSpacerRow from './TableSpacerRow';
import SubmitForm from './SubmitForm';

const Submit = ({ onSubmitNewPost, history }) => (
	<center>
		<table>
			<tbody>
				<SubmitNavBar />
				<TableSpacerRow height="10" />

				<SubmitForm onSubmitNewPost={onSubmitNewPost} history={history} />
			</tbody>
		</table>
	</center>
);

Submit.propTypes = {
	onSubmitNewPost: PropTypes.func.isRequired,
};

export default Submit;
