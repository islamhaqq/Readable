import React from 'react';
import PropTypes from 'prop-types';

const UpvoteButton = ({ thingToUpvote, onUpvote }) => (
	<span onClick={() => onUpvote(thingToUpvote.id)}>▲</span>
);

UpvoteButton.propTypes = {
	thingToUpvote: PropTypes.object.isRequired,
	onUpvote: PropTypes.func.isRequired,
};

export default UpvoteButton;
