import React from 'react';
import PropTypes from 'prop-types';
import Color from './../Color/Color';
import './ColorList.scss';

const ColorList = ({ colors = [], onRemoveColor = (f) => f }) => {
  return (
    <div className="color-list">
      {colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          onRemoveColor={() => onRemoveColor(color.id)}
        />
      ))}
    </div>
  );
};

ColorList.propTypes = {
  colors: PropTypes.array,
  onRemoveColor: PropTypes.func,
};

export default ColorList;
