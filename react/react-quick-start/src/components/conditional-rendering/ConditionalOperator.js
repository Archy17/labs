import React from 'react';

function ConditionalOperator(props) {
  const person = props.name;

  return (
    <div>
      <h3>
        Hey, { person ? person : 'there' }!
      </h3>
    </div>
  );
}

export default ConditionalOperator;
