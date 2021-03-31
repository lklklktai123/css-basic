import React from 'react';
import ImageStep from './ImageSteps/ImageStep';
import Step from './Step/Step';
import './Steps.css';
import images from '../../assets/exportImage';

const steps = () => {
  const contentSteps = [
    {
      step: 1,
      content:
        'Choose the subscription plan that best fits your needs and sign up today',
    },
    {
      step: 2,
      content:
        'Order your delicious meal using our mobile app or website. Or you can even call us!',
    },
    {
      step: 3,
      content:
        'Enjoy your meal after less than 20 minutes. See you the next time!',
    },
  ];
  return (
    <section className="section section-steps section--hidden" id="steps">
      <div className="row">
        <h2>How it works - Simple as 1, 2, 3</h2>
      </div>
      <div className="row">
        <ImageStep />
        <div className="col span-1-of-2 steps-box">
          {contentSteps.map(step => (
            <Step step={step.step} content={step.content} />
          ))}
          <a href="/#" className="btn-app">
            <img src={images.dowloadApp} alt="App Store Button" />
          </a>
          <a href="/#" className="btn-app">
            <img src={images.dowloadAppAndroid} alt="App Store Button" />
          </a>
        </div>
      </div>
    </section>
  );
};
export default steps;
