import React from 'react';
import PropTypes from 'prop-types';

const Day = ({ color, text, fontSize, fontWeight  }) => {
  return (
    <h4 style={{ color, fontSize, fontWeight }}>{text}</h4>
  )
}

Day.defaultProps = {
  color: '#000', 
  text: 'Day 2',
  fontSize: '20px',
  fontWeight: '500',
};

Day.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Day;