import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubmitForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			chosenCategory: props.currentCategory,
		};
	}

	handleChangeCategory = event => {
		this.setState({
			chosenCategory: event.target.value,
		});
	};

	render() {
		const {
			onSubmitNewPost,
			history,
			categories,
			currentCategory,
		} = this.props;

		return (
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

					<label>Category</label>
					<select
						value={this.state.chosenCategory}
						onChange={this.handleChangeCategory}
					>
						{categories.map(category => (
							<option value={category.name}>{category.name}</option>
						))}
					</select>

					<button
						type="submit"
						onClick={() => {
							const newPostData = {
								title: this.htmlElementForTitleInput.value,
								author: this.htmlElementForAuthorInput.value,
								body: this.htmlElementForBodyInput.value,
								category: this.state.chosenCategory,
							};

							if (
								newPostData.title &&
								newPostData.author &&
								newPostData.body &&
								newPostData.category
							) {
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
	}
}

SubmitForm.propTypes = {
	onSubmitNewPost: PropTypes.func.isRequired,
};

export default SubmitForm;
