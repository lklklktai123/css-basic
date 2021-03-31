import React from 'react';
import './City.css';
// import CityFeature from './CityFeature/CityFeature';
const city = props => {
  return (
    <div className="col span-1-of-4 box">
      <img src={props.image} alt={props.alt} />
      <h3>{props.title}</h3>
      {props.children}
    </div>
  );
};
export default city;
//<CityFeature type={props.type} feature={props.feature} />
