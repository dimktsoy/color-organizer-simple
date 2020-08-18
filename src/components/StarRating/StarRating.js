import React from 'react';
import PropTypes from 'prop-types';
import Star from './../Star/Star';
import './StarRating.scss';

const StarRating = ({ rating = 0, totalStars = 5, onRate = (f) => f }) => {
  return (
    <div className="star-rating">
      <div className="star-rating__list">
        {[...Array(totalStars)].map((star, index) => (
          <Star
            key={index}
            selected={index < rating}
            onClick={() => onRate(index + 1)}
          />
        ))}
      </div>
      <p className="star-rating__stat">
        {rating} из {totalStars}
      </p>
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number,
  totalStars: PropTypes.number,
  onRate: PropTypes.func,
};

export default StarRating;
