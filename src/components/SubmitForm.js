import React from 'react';
import PropTypes from 'prop-types';

const SubmitForm = ({ onSubmitNewPost }) => (
	<tr>
		<td>
			<label>Author</label>
			<input type="text" />

			<label>Title</label>
			<input type="text" />

			<label>Body</label>
			<textarea />

			<button type="submit" onClick={() => onSubmitNewPost()}>
				Submit
			</button>
		</td>
	</tr>
);

SubmitForm.propTypes = {
	onSubmitNewPost: PropTypes.func.isRequired,
};

export default SubmitForm;
