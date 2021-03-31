import React from 'react';
import './CheckMark.css';
import Icon from '../../../UI/Icon/Icon';
const checkMark = props => {
  const icon = props.content ? (
    <Icon class="icon-small" color="#e67e22" type="IoCheckmark" />
  ) : (
    <Icon class="icon-small" color="#e67e22" type="IoCloseOutline" />
  );
  return (
    <li>
      {icon}
      {props.content}
    </li>
  );
};
export default checkMark;
