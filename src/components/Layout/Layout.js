import React, { useEffect, useState } from 'react';
import './Layout.css';
import './queries.css';
import Header from '../header/header';
import Features from '../Features/Features';
import Meals from '../Meals/Meals';
import Steps from '../Steps/Steps';
import Cities from '../Cities/Cities';
import Testimonials from '../Testimonials/Testimonials';
import Plans from '../Plans/Plans';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
const Layout = props => {
  useEffect(() => {
    const allSections = document.querySelectorAll('.section');
    const revealSection = function (entries, observer) {
      const [entry] = entries;
      if (!entry.isIntersecting) return;
      entry.target.classList.remove('section--hidden');
      observer.unobserve(entry.target);
    };
    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });
    allSections.forEach(function (section) {
      sectionObserver.observe(section);
      // section.classList.add('section--hidden');
    });
  }, []);

  // useEffect(() => {
  //   window.onscroll = () => {
  //     const section = document.querySelector('#features');
  //     const sticky = document.querySelector('.sticky');
  //     setSectionOffset(section.getBoundingClientRect().top);
  //     setOffset(window.pageYOffset);
  //     console.log(offset, sectionOffset);
  //     if (offset > sectionOffset) {
  //       sticky.style.display = 'block';
  //       console.log('aaaaaaaaa');
  //       console.log(sticky);
  //     } else {
  //       sticky.style.display = 'none';
  //       //   console.log('bbbbbbbbbbb');
  //       //   console.log(sticky);
  //     }
  //   };
  // }, [offset, sectionOffset]);

  return (
    <React.Fragment>
      <Header />
      <Features />
      <Meals />
      <Steps />
      <Cities />
      <Testimonials />
      <Plans />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};
export default Layout;
