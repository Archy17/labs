import React, { PropTypes } from 'react';

const Square = ({ color }) => (
  <div style={{
    backgroundColor: color,
    width: '100px',
    height: '100px'
  }} />
);

Square.propTypes = {
  color: PropTypes.string.isRequired
};

export default Square;
