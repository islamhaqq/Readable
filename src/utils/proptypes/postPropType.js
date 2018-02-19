import PropTypes from 'prop-types';

const postPropType = PropTypes.shape({
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	voteScore: PropTypes.number.isRequired,
	deleted: PropTypes.bool.isRequired,
	timestamp: PropTypes.number.isRequired,
	commentCount: PropTypes.number.isRequired,
});

export default postPropType;
