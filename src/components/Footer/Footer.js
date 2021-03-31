import React from 'react';
import './Footer.css';
import FooterContent from './FooterContent/FooterContent';
import MenuFooter from './MenuFooter/MenuFooter';
import SocialIcon from './SocialIcon/SocialIcon';
const footer = () => {
  const data = {
    menu: ['About us', 'Blog', 'Press', 'iOS App', 'Android App'],
    content:
      'Also include links to facebook, twitter, google+ and Instagram accounts.',
    socialIcon: [
      { type: 'IoLogoFacebook', class: 'ion-social-facebook' },
      { type: 'IoLogoTwitter', class: 'ion-social-twitter' },
      { type: 'IoLogoGoogle', class: 'ion-social-googleplus' },
      { type: 'IoLogoInstagram', class: 'ion-social-instagram' },
    ],
  };
  return (
    <footer>
      <div className="row">
        <div className="col span-1-of-2">
          <ul className="footer-nav">
            {data.menu.map((data, index) => (
              <MenuFooter key={index} name={data} />
            ))}
          </ul>
        </div>
        <div className="col span-1-of-2">
          <ul className="social-links">
            {data.socialIcon.map((icon, index) => (
              <SocialIcon type={icon.type} class={icon.class} key={index} />
            ))}
          </ul>
        </div>
      </div>
      <div className="row">
        <FooterContent content={data.content} />
      </div>
    </footer>
  );
};
export default footer;
