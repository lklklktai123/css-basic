import React from 'react';
import './Meal.css';
const meal = props => {
  return (
    <li>
      <figure className="meal-photo">
        <img src={props.link} alt={props.alt} />
      </figure>
    </li>
  );
};
export default meal;
