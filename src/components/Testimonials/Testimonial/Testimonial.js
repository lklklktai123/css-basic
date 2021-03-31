import React from 'react';
import './Testimonial.css';
const testimonial = props => {
  return (
    <div className="col span-1-of-3">
      <blockquote>
        {props.content}
        <cite>
          <img src={props.image} alt="" /> {props.name}
        </cite>
      </blockquote>
    </div>
  );
};
export default testimonial;
