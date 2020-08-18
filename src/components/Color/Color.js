import React from 'react';
import PropTypes from 'prop-types';
import iconRemove from './color-icon-remove.svg';
import StarRating from './../StarRating/StarRating';
import './Color.scss';

class Color extends React.Component {
  // UNSAFE_componentWillMount
  componentWillMount() {
    const { id } = this.props;
    console.log('componentWillMount color id', id);
    this.style = {
      backgroundColor: '#f1f1f1',
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { rating, id } = this.props;
    console.log('shouldComponentUpdate color id', id);
    return rating !== nextProps.rating;
  }

  // UNSAFE_componentWillUpdate
  componentWillUpdate(nextProps, nextState) {
    const { id } = this.props;
    console.log('componentWillUpdate color id', id);
    this.style = { backgroundColor: null };
  }

  componentDidUpdate(prevProps, prevState) {
    const { id } = this.props;
    console.log('componentDidUpdate color id', id);
  }

  render() {
    const {
      color,
      title,
      rating = 0,
      onRate = (f) => f,
      onRemoveColor = (f) => f,
    } = this.props;

    return (
      <div className="color" style={this.style}>
        <h3 className="color__title">{title}</h3>
        <div
          className="color__preview"
          style={{ backgroundColor: color }}
        ></div>
        <div className="color__rating">
          <StarRating rating={rating} onRate={onRate} />
        </div>
        <button className="color__button-remove" onClick={onRemoveColor}>
          <img src={iconRemove} alt="удалить" width="30" height="30" />
        </button>
      </div>
    );
  }
}

Color.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  onRate: PropTypes.func,
  onRemoveColor: PropTypes.func,
};

export default Color;
