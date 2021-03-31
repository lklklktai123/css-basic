import React from 'react';
import Button from '../../UI/Button/Button';
import './Plan.css';
const plan = props => {
  const classes = props.title === 'Premium' ? 'btn btn-full' : 'btn btn-ghost';
  return (
    <div className="col span-1-of-3">
      <div className="plan-box js--wp-4">
        <div>
          <h3>{props.title}</h3>
          <p className="plan-price">
            ${props.price} <span>/ {props.type}</span>
          </p>
          <p className="plan-price-meal">
            <span>{props.detail}</span>
          </p>
        </div>
        <div>
          <ul>{props.children}</ul>
        </div>
        <div>
          <Button link="/#" class={classes}>
            Sign up now
          </Button>
        </div>
      </div>
    </div>
  );
};
export default plan;
