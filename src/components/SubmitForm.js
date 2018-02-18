import React from 'react';
import PropTypes from 'prop-types';

const SubmitForm = ({ onSubmitNewPost, history }) => (
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
				placeholder="post body"
				rows="4"
				cols="50"
			/>

			<button
				type="submit"
				onClick={() => {
					const newPostData = {
						title: this.htmlElementForTitleInput.value,
						author: this.htmlElementForAuthorInput.value,
						body: this.htmlElementForBodyInput.value,
					};

					if (newPostData.title && newPostData.author && newPostData.body) {
						onSubmitNewPost(newPostData);
						history.push('/');
					}
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
