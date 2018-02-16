import React from 'react';
import PropTypes from 'prop-types';

const TableSpacerRow = ({ height }) => (
	<tr style={{ height: height }} className="post-spacer-row" />
);

TableSpacerRow.propTypes = {
	height: PropTypes.string.isRequired,
};

export default TableSpacerRow;
