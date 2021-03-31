import React, { useEffect } from 'react';
import images from '../../assets/exportImage';
import './header.css';
import Button from '../../components/UI/Button/Button';
import Menus from '../../components/Menus/Menus';
import Sticky from '../../components/header/Sticky/Sticky';

const Header = () => {
  useEffect(() => {
    const sticky = document.querySelector('.sticky');
    const headerElement = document.querySelector('.header');
    const stickyNav = entries => {
      const [entry] = entries;
      if (!entry.isIntersecting) {
        sticky.classList.remove('sticky-hidden');
      } else {
        sticky.classList.add('sticky-hidden');
      }
    };
    const headerObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0.2,
    });
    headerObserver.observe(headerElement);
  }, []);

  return (
    <header className="header">
      <Sticky />
      <div className="row">
        <Menus />
        <img src={images.logo} alt="Omnifood" className="logo" />
      </div>
      <div className="hero-text-box">
        <h1>
          Goodbye junk food.
          <br /> Hello super healthy meals.
        </h1>
        <Button class="btn btn-full" link="/#">
          I’m hungry
        </Button>
        <Button class="btn btn-ghost" link="/#">
          Show me more
        </Button>
      </div>
    </header>
  );
};
export default Header;
