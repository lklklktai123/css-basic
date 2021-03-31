import React from 'react';
import CheckMark from './Plan/CheckMark/CheckMark';
import Plan from './Plan/Plan';
import './Plans.css';
const plans = () => {
  const plan = [
    {
      title: 'Premium',
      type: 'month',
      detail: 'That’s only 13.30$ per meal',
      price: 399,
      checkMark: [
        '1 meal every day',
        'Order 24/7',
        'Access to newest creations',
        'Free delivery',
      ],
    },
    {
      title: 'Pro',
      type: 'month',
      detail: 'That’s only 14.90$ per meal',
      price: 149,
      checkMark: [
        '1 meal 10 days/month',
        'Order 24/7',
        'Access to newest creations',
        'Free delivery',
      ],
    },
    {
      title: 'Starter',
      type: 'meal',
      detail: 'emty',
      price: '19$',
      checkMark: ['1 meal', 'Order from 8 am to 12 pm', '', 'Free delivery'],
    },
  ];
  return (
    <section className="section section-plans section--hidden" id="plans">
      <div className="row">
        <h2>Start eating healthy today</h2>
      </div>
      <div className="row">
        {plan.map((plan, index) => (
          <Plan
            key={index}
            title={plan.title}
            type={plan.type}
            detail={plan.detail}
            price={plan.price}
          >
            {plan.checkMark.map((checkMark, index) => (
              <CheckMark key={index} content={checkMark} />
            ))}
          </Plan>
        ))}
      </div>
    </section>
  );
};
export default plans;
