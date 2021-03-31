import React from 'react';
import images from '../../assets/exportImage';
import Meal from './Meal/Meal';
import './Meals.css';
const meals = () => {
  const mealsPhoto = [
    { link: images.meals1, alt: 'Korean bibimbap with egg and vegetables' },
    { link: images.meals2, alt: 'Simple italian pizza with cherry tomatoes' },
    { link: images.meals3, alt: 'Chicken breast steak with vegetables' },
    { link: images.meals4, alt: 'Autumn pumpkin soup' },
    { link: images.meals5, alt: 'Paleo beef steak with vegetables' },
    { link: images.meals6, alt: 'Healthy baguette with egg and vegetables' },
    { link: images.meals7, alt: 'Burger with cheddar and bacon' },
    { link: images.meals8, alt: 'Granola with cherries and strawberries' },
  ];
  return (
    <section className="section section-meals section--hidden">
      <ul className="meals-showcase clearfix">
        {mealsPhoto.map(meal => (
          <Meal link={meal.link} alt={meal.alt} />
        ))}
      </ul>
    </section>
  );
};
export default meals;
