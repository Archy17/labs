import React from 'react';

const style = {
  backgroundColor: '#ff0000',
  fontWeight: 'bold',
  padding: '20px 0'
};

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div style={ style }>
      Warning!
    </div>
  );
}

export default WarningBanner;
