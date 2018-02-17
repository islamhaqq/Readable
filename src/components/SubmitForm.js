import React from 'react';
import PropTypes from 'prop-types';

const SubmitForm = () => (
	<tr>
		<td>
			<label>Author</label>
			<input type="text" />

			<label>Title</label>
			<input type="text" />

			<label>Body</label>
			<textarea />
		</td>
	</tr>
);

SubmitForm.propTypes = {
	onSubmitNewPost: PropTypes.func.isRequired,
};

export default SubmitForm;
