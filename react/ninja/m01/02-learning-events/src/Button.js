import React, { PropTypes } from 'react';

const Button = ({ children, handleClick }) => (
  <button onClick={handleClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.any,
  handleClick: PropTypes.func
};

export default Button;
