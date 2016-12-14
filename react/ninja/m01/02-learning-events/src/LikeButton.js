import React from 'react';

import Button from './Button';

function handleClick() {
  console.log('Like +1'); // eslint-disable-line no-console
}

const LikeButton = () => (
  <Button handleClick={handleClick}>
    Like
  </Button>
);

export default LikeButton;
