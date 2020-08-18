import React from 'react';
import PropTypes from 'prop-types';
import './ColorList.scss';

const ColorList = ({ colors = [], onRemoveColor = (f) => f }) => {
  return (
    <div className="color-list">
      {colors.map((color) => (
        <div key={color.id}>
          <h2>{color.title}</h2>{' '}
          <button onClick={() => onRemoveColor(color.id)}>remove</button>
        </div>
      ))}
    </div>
  );
};

ColorList.propTypes = {
  colors: PropTypes.array,
  onRemoveColor: PropTypes.func,
};

export default ColorList;
