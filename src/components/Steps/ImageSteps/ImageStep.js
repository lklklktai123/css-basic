import React from 'react';
import images from '../../../assets/exportImage';
import './ImageStep.css';
const imageStep = () => {
  return (
    <div className="col span-1-of-2 steps-box">
      <img
        className="app-screen"
        src={images.iphone}
        alt="Omnifood app on Iphone"
      />
    </div>
  );
};
export default imageStep;
