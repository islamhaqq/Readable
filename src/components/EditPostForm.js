import React from 'react';
import PropTypes from 'prop-types';

const EditPostForm = ({ onEditPost, history }) => (
	<tr>
		<td>
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
						body: this.htmlElementForBodyInput.value,
					};

					if (newPostData.title && newPostData.body) {
						onEditPost(newPostData);
						history.push('/');
					}
				}}
			>
				Update
			</button>
		</td>
	</tr>
);

EditPostForm.propTypes = {
	onEditPost: PropTypes.func.isRequired,
};

export default EditPostForm;
