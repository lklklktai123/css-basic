import React from 'react';
const label = props => {
  return (
    <div className="col span-1-of-3">
      <label>{props.label}</label>
    </div>
  );
};
export default label;
