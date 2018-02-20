import React from 'react';
import PropTypes from 'prop-types';

import SubmitNavBar from './SubmitNavBar';
import TableSpacerRow from './TableSpacerRow';
import SubmitForm from './SubmitForm';

const Submit = ({ onSubmitNewPost, history, match }) => {
	const { category } = match.params;

	return (
		<center>
			<table>
				<tbody>
					<SubmitNavBar category={category} />

					<TableSpacerRow height="10" />

					<SubmitForm
						onSubmitNewPost={newPostData =>
							onSubmitNewPost({ ...newPostData, category })
						}
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
