import React from 'react';
import './Testimonials.css';
import images from '../../assets/exportImage';
import Testimonial from './Testimonial/Testimonial';
const testimonials = () => {
  const testimonial = [
    {
      content:
        'Omnifood is just awesome! I just launched a startup which leaves mewith no time for cooking, so Omnifood is a life-saver. Now that Igot used to it, I couldnt live without my daily meals!',
      image: images.customer1,
      name: 'Alberto Duncan',
    },
    {
      content:
        'Inexpensive, healthy and great-tasting meals, delivered right to myhome. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. Me and my family are so in love!',
      image: images.customer2,
      name: 'Joana Silva',
    },
    {
      content:
        'I was looking for a quick and easy food delivery service in SanFranciso. I tried a lot of them and ended up with Omnifood. Bestfood delivery service in the Bay Area. Keep up the great work!',
      image: images.customer3,
      name: 'Milton Chapman',
    },
  ];
  return (
    <section className="section section-testimonials section--hidden">
      <div className="row">
        <h2>Our customers can't live without us</h2>
      </div>
      <div className="row">
        {testimonial.map((testimonial, index) => (
          <Testimonial
            key={index}
            image={testimonial.image}
            name={testimonial.name}
            content={testimonial.content}
          />
        ))}
      </div>
    </section>
  );
};
export default testimonials;
