import React from 'react';
import './Menu.css';
const menu = props => {
  return (
    <li>
      <a
        href={props.link}
        onClick={props.clicked}
        onMouseOver={props.hoverMouse}
        onMouseOut={props.mouseOut}
      >
        {props.title}
      </a>
    </li>
  );
};
export default menu;
//Food delivery
