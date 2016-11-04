import React from 'react';

function MultipleSelect(props) {
  return (
    <select multiple={ true }
            defaultValue={ props.options }
    >
      <option value="A">Apple</option>
      <option value="B">Banana</option>
      <option value="C">Cranberry</option>
    </select>
  );
}

export default MultipleSelect;
