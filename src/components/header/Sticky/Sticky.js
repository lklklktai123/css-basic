import React from 'react';
import './sticky.css';
import images from '../../../assets/exportImage';
import Menu from '../../../components/Menus/Menu/Menu';
const sticky = () => {
  return (
    <nav className="sticky sticky-hidden">
      <div className="row"></div>
      <img src={images.logoSticky} alt="logo" className="sticky-logo" />
      <ul className="sticky-nav">
        <Menu
          link="#features"
          title="Food delivery"
          //   clicked={e => scrollToHandler(e)}
          //   hoverMouse={e => opacityMenuHandler(e, 1)}
          //   mouseOut={e => opacityMenuHandler(e, 0.5)}
        />
        <Menu
          link="#steps"
          title="How it works"
          //   section="steps"
          //   clicked={e => scrollToHandler(e)}
          //   hoverMouse={e => opacityMenuHandler(e, 1)}
          //   mouseOut={e => opacityMenuHandler(e, 0.5)}
        />
        <Menu
          link="#cities"
          title="Our cities"
          //   section="cities"
          //   clicked={e => scrollToHandler(e)}
          //   hoverMouse={e => opacityMenuHandler(e, 1)}
          //   mouseOut={e => opacityMenuHandler(e, 0.5)}
        />
        <Menu
          link="#contact"
          title="Sign up"
          //   section="contact"
          //   clicked={e => scrollToHandler(e)}
          //   hoverMouse={e => opacityMenuHandler(e, 1)}
          //   mouseOut={e => opacityMenuHandler(e, 0.5)}
        />
      </ul>
    </nav>
  );
};
export default sticky;
