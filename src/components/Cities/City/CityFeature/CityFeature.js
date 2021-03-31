import React from 'react';
import Icon from '../../../UI/Icon/Icon';
import './CityFeature.css';

const cityFeature = props => {
  let feature = props.link ? <a href="/#">{props.feature}</a> : props.feature;
  return (
    <div className="city-features">
      <Icon color="#e67e22" class="icon-small" type={props.type} />
      {feature}
    </div>
  );
};
export default cityFeature;
