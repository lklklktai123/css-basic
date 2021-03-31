import React from 'react';
import './Cities.css';
import images from '../../assets/exportImage';
import City from './City/City';
import CityFeature from './City/CityFeature/CityFeature';
const cities = () => {
  const city = [
    {
      title: 'Lisbon',
      image: images.lisbon,
      alt: 'lisbon',
      type: [
        { typeIcon: 'IoPersonSharp', feature: '1600+ happy eaters' },
        { typeIcon: 'IoStarSharp', feature: '60+ top chefs' },
        { typeIcon: 'IoLogoTwitter', feature: '@omnifood_lx', link: true },
      ],
    },
    {
      title: 'San Francisco',
      image: images.san_Francisco,
      alt: 'San Francisco',
      type: [
        { typeIcon: 'IoPersonSharp', feature: '3700+ happy eaters' },
        { typeIcon: 'IoStarSharp', feature: '60+ top chefs' },
        { typeIcon: 'IoLogoTwitter', feature: '@omnifood_sf', link: true },
      ],
    },
    {
      title: 'Berlin',
      image: images.berlin,
      alt: 'Berlin',
      type: [
        { typeIcon: 'IoPersonSharp', feature: '2300+ happy eaters' },
        { typeIcon: 'IoStarSharp', feature: '110+ top chefs' },
        { typeIcon: 'IoLogoTwitter', feature: '@omnifood_berlin', link: true },
      ],
    },
    {
      title: 'London',
      image: images.london,
      alt: 'London',
      type: [
        { typeIcon: 'IoPersonSharp', feature: '1200+ happy eaters' },
        { typeIcon: 'IoStarSharp', feature: '50+ top chefs' },
        { typeIcon: 'IoLogoTwitter', feature: '@omnifood_london', link: true },
      ],
    },
  ];
  return (
    <section className="section section-cities section--hidden" id="cities">
      <div className="row">
        <h2>We're currently in these cities</h2>
      </div>
      <div className="row">
        {city.map(city => (
          <City image={city.image} alt={city.alt} title={city.title}>
            {city.type.map(cityFeature => (
              <CityFeature
                type={cityFeature.typeIcon}
                feature={cityFeature.feature}
                link={cityFeature.link}
              />
            ))}
          </City>
        ))}
      </div>
    </section>
  );
};
export default cities;
