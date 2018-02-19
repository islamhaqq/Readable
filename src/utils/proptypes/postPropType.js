import PropTypes from 'prop-types';

const postPropType = PropTypes.shape({
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	points: PropTypes.number.isRequired,
	isDeleted: PropTypes.bool.isRequired,
	timestamp: PropTypes.number.isRequired,
	comments: PropTypes.array.isRequired,
});

export default postPropType;
