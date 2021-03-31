import React from 'react';
import './Button.css';
const button = props => (
  <a className={props.class} href={props.link} onClick={props.clicked}>
    {props.children}
  </a>
);
export default button;
