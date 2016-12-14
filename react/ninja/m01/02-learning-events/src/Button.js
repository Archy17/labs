import React, { PropTypes } from 'react';

const Button = ({ children }) => (
  <button>{children}</button>
);

Button.propTypes = {
  children: PropTypes.object
};

export default Button;
