import React, { Component } from 'react';
import bannerImg from '../../assets/img_nature_wide.jpg';
import mountainImg from '../../assets/mountains.jpg';
import natureImg from '../../assets/nature.jpg';
import lightsImg from '../../assets/lights.jpg';
import W3TopBar from '../general/W3TopBar';
import W3NavItem from '../general/W3NavItem';
import W3Banner from '../general/W3Banner';
import W3CardItem from '../general/W3CardItem';
import W3Footer from '../general/W3Footer';
import W3Content from '../general/W3Content';
import '../general/w3.css';
/*
  React Component Based Design
  Moving properties into arrays
*/
const menuItems = [
  {
    link: '/',
    description: 'Home'
  },
  {
    link: '/aboutus',
    description: 'About Us'
  },
  {
    link: '/shop',
    description: 'Shop'
  },
  {
    link: '/terms',
    description: 'Terms'
  }
];

const cardItems = [
  {
    image: mountainImg,
    alt: 'Mount Everest',
    title: 'Mount Everest',
    description:
      "Mount Everest also known as Sagarmatha is Earth's highest mountain above sea level, at the height of 8,848m. In 1865, Everest was given its official English name by the Royal Geographical Society."
  },
  {
    image: natureImg,
    alt: 'Matang Mangrove',
    title: 'Matang Mangrove',
    description:
      'The Matang Mangrove Forest Reserve is Peninsular Malaysia’s largest surviving spread of mangrove forest, most of which has been extensively cleared for development'
  },
  {
    image: lightsImg,
    alt: 'Aurora Boralis',
    title: 'Aurora Boralis',
    description:
      'Canada is an aurora viewing paradise, thanks to its northern latitude and low light pollution; elsewhere in the country, Wood Buffalo and Jasper National Park are popular viewing spots'
  }
];

class App3 extends Component {
  render() {
    return (
      <div className="w3-light-grey w3-content">
        <W3TopBar>
          {menuItems.map((item, index) => (
            <W3NavItem key={index} link={item.link} description={item.description} />
          ))}
        </W3TopBar>
        <W3Banner alt="top banner" image={bannerImg} />
        <W3Content>
          {cardItems.map((item, index) => (
            <W3CardItem
              key={index}
              image={item.image}
              alt={item.alt}
              title={item.title}
              description={item.description}
            />
          ))}
        </W3Content>
        <W3Footer description="ReactJS Training Demo" />
      </div>
    );
  }
}

export default App3;
