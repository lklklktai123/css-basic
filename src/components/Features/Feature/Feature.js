import React from 'react';
import Icon from '../../UI/Icon/Icon';
const feature = props => {
  return (
    <div className="col span-1-of-4 box">
      <Icon fontSize={props.fontSize} color={props.color} type={props.type} />

      <h3>{props.title}</h3>

      <p>{props.content}</p>
    </div>
  );
};
export default feature;
