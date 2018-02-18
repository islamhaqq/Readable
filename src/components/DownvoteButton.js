import React from 'react';
import PropTypes from 'prop-types';

const DownvoteButton = ({ thingToDownvote, onDownvote }) => (
	<span onClick={() => onDownvote(thingToDownvote.id)}>▼</span>
);

DownvoteButton.propTypes = {
	thingToDownvote: PropTypes.object.isRequired,
	onDownvote: PropTypes.func.isRequired,
};

export default DownvoteButton;
