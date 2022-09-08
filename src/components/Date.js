import React from 'react'
import PropTypes from 'prop-types';

const Date = ({ color, text, fontSize }) => {
  return (
    <small style={{ color, fontSize }}>{text}</small>
  )
}

Date.defaultProps = {
  color: '#000',
  text: 'July 30, 2022',
  fontSize: '12px',
};

Date.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Date;