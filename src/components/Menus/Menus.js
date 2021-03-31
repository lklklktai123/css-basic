import React from 'react';
import Menu from './Menu/Menu';
import './Menus.css';
const Menus = props => {
  const scrollToHandler = (e, section) => {
    e.preventDefault();

    const idSection = document.querySelector(e.target.getAttribute('href'));
    // idSection.getBoundingClientRect();
    // Scrolling
    // window.scrollTo({
    //   left: idSection.left + window.pageXOffset,
    //   top: idSection.top + window.pageYOffset,
    //   behavior: 'smooth',
    // });

    idSection.scrollIntoView({ behavior: 'smooth' });
  };
  const opacityMenuHandler = (e, opacity) => {
    e.target.parentElement.style.opacity = opacity;
  };
  return (
    <nav>
      <ul className="main-nav">
        <Menu
          link="#features"
          title="Food delivery"
          clicked={e => scrollToHandler(e)}
          hoverMouse={e => opacityMenuHandler(e, 1)}
          mouseOut={e => opacityMenuHandler(e, 0.5)}
        />
        <Menu
          link="#steps"
          title="How it works"
          section="steps"
          clicked={e => scrollToHandler(e)}
          hoverMouse={e => opacityMenuHandler(e, 1)}
          mouseOut={e => opacityMenuHandler(e, 0.5)}
        />
        <Menu
          link="#cities"
          title="Our cities"
          section="cities"
          clicked={e => scrollToHandler(e)}
          hoverMouse={e => opacityMenuHandler(e, 1)}
          mouseOut={e => opacityMenuHandler(e, 0.5)}
        />
        <Menu
          link="#contact"
          title="Sign up"
          section="contact"
          clicked={e => scrollToHandler(e)}
          hoverMouse={e => opacityMenuHandler(e, 1)}
          mouseOut={e => opacityMenuHandler(e, 0.5)}
        />
      </ul>
    </nav>
  );
};
export default Menus;
