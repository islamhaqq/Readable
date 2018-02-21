import React from 'react';
import PropTypes from 'prop-types';

import SubmitNavBar from './SubmitNavBar';
import TableSpacerRow from './TableSpacerRow';
import SubmitForm from './SubmitForm';

const Submit = ({ onSubmitNewPost, history, match, categories }) => {
	const { category } = match.params;

	return (
		<center>
			<table>
				<tbody>
					<SubmitNavBar />
					<TableSpacerRow height="10" />

					<SubmitForm
						onSubmitNewPost={onSubmitNewPost}
						categories={categories}
						currentCategory={category}
						history={history}
					/>
				</tbody>
			</table>
		</center>
	);
};

Submit.propTypes = {
	onSubmitNewPost: PropTypes.func.isRequired,
};

export default Submit;
