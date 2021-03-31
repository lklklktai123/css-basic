import React from 'react';
import Feature from './Feature/Feature';
import './Features.css';
const features = () => {
  const contentFeature = [
    {
      title: 'Up to 365 days/year',
      content:
        'Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that is your style',
      typeIcon: 'IoInfiniteOutline',
    },
    {
      title: 'Ready in 20 minutes',
      content:
        'You are only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you are 100% happy.',
      typeIcon: 'IoStopwatchOutline',
    },
    {
      title: '100% organic',
      content:
        'All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!',
      typeIcon: 'IoNutritionOutline',
    },
    {
      title: 'Order anything',
      content:
        'We dont limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It is up to you!',
      typeIcon: 'IoCartOutline',
    },
  ];
  return (
    <section className="section section-features section--hidden" id="features">
      <div className="row">
        <h2>Get food fast - not fast food.</h2>
        <p className="long-coppy">
          Hello, we’re Omnifood, your new premium food delivery service. We know
          you’re always busy. No time for cooking. So let us take care of that,
          we’re really good at it, we promise!
        </p>
      </div>
      <div className="row">
        {contentFeature.map(feature => (
          <Feature
            type={feature.typeIcon}
            color="#e67e22"
            fontSize="250%"
            title={feature.title}
            content={feature.content}
          />
        ))}
        {/* <div className="col span-1-of-4 box">
          <IoInfiniteOutline fontSize="250%" color="#e67e22" />

          <h3>Up to 365 days/year</h3>

          <p>
            Never cook again! We really mean that. Our subscription plans
            include up to 365 days/year coverage. You can also choose to order
            more flexibly if that's your style.
          </p>
        </div>
        <div className="col span-1-of-4 box">
          <IoStopwatchOutline fontSize="250%" color="#e67e22" />

          <h3>Ready in 20 minutes</h3>

          <p>
            You're only twenty minutes away from your delicious and super
            healthy meals delivered right to your home. We work with the best
            chefs in each town to ensure that you're 100% happy.
          </p>
        </div>
        <div className="col span-1-of-4 box">
          <IoNutritionOutline fontSize="250%" color="#e67e22" />

          <h3>100% organic</h3>
          <p>
            All our vegetables are fresh, organic and local. Animals are raised
            without added hormones or antibiotics. Good for your health, the
            environment, and it also tastes better!
          </p>
        </div>
        <div className="col span-1-of-4 box">
          <IoCartOutline fontSize="250%" color="#e67e22" />
          <h3>Order anything</h3>
          <p>
            We don't limit your creativity, which means you can order whatever
            you feel like. You can also choose from our menu containing over 100
            delicious meals. It's up to you!
          </p>
        </div> */}
      </div>
    </section>
  );
};
export default features;
