import React from 'react';
import PropTypes from 'prop-types';
import Color from './../Color/Color';
import './ColorList.scss';

const ColorList = ({
  colors = [],
  onRate = (f) => f,
  onRemoveColor = (f) => f,
}) => {
  return (
    <div className="color-list">
      {colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          onRemoveColor={() => onRemoveColor(color.id)}
          onRate={(rating) => onRate(color.id, rating)}
        />
      ))}
    </div>
  );
};

ColorList.propTypes = {
  colors: PropTypes.array,
  onRemoveColor: PropTypes.func,
  onRate: PropTypes.func,
};

export default ColorList;
