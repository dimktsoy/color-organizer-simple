import React from 'react';
import PropTypes from 'prop-types';
import './Star.scss';

const Star = ({ selected = false, onClick = (f) => f }) => (
  <div
    className={selected ? 'star star--selected' : 'star'}
    onClick={onClick}
  />
);

Star.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Star;
