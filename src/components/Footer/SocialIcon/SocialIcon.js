import React from 'react';
import Icon from '../../UI/Icon/Icon';
const socialIcon = props => {
  return (
    <li>
      <a href="/#">
        <Icon class={props.class} type={props.type} />
      </a>
    </li>
  );
};
export default socialIcon;
