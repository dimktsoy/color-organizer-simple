import React from 'react';
import PropTypes from 'prop-types';
import iconRemove from './color-icon-remove.svg';
import './Color.scss';

class Color extends React.Component {
  componentWillMount() {
    console.log('componentWillMount');
    this.style = {
      backgroundColor: '#f1f1f1',
    };
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
    this.style = { backgroundColor: null };
  }

  render() {
    const { color, title, onRemoveColor = (f) => f } = this.props;

    return (
      <div className="color" style={this.style}>
        <h3 className="color__title">{title}</h3>
        <div
          className="color__preview"
          style={{ backgroundColor: color }}
        ></div>
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
  onRemoveColor: PropTypes.func,
};

export default Color;
