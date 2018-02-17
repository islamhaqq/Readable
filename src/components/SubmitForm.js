import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

const SubmitForm = ({ onSubmitNewPost }) => (
	<tr>
		<td>
			<label>Author</label>
			<input
				ref={htmlElement => (this.htmlElementForAuthorInput = htmlElement)}
				type="text"
			/>

			<label>Title</label>
			<input
				ref={htmlElement => (this.htmlElementForTitleInput = htmlElement)}
				type="text"
			/>

			<label>Body</label>
			<textarea
				ref={htmlElement => (this.htmlElementForBodyInput = htmlElement)}
			/>

			<button
				type="submit"
				onClick={() => {
					const newPostData = {
						title: this.htmlElementForTitleInput.value,
						author: this.htmlElementForAuthorInput.value,
						body: this.htmlElementForBodyInput.value,
					};

					onSubmitNewPost(newPostData);
				}}
			>
				Submit
			</button>
		</td>
	</tr>
);

SubmitForm.propTypes = {
	onSubmitNewPost: PropTypes.func.isRequired,
};

export default SubmitForm;
