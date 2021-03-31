import React from 'react';
import './Step.css';
const step = props => {
  return (
    <div className="works-step">
      <div>{props.step}</div>
      <p>{props.content}</p>
    </div>
  );
};
export default step;
