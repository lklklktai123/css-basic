import React from 'react';
import './MenuFooter.css';
const menuFooter = props => {
  return (
    <li>
      <a href="/#">{props.name}</a>
    </li>
  );
};
export default menuFooter;
