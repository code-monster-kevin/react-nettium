import React, { Component } from 'react';
import W3TopBar from '../general/W3TopBar';
import W3NavItem from '../general/W3NavItem';
import W3Banner from '../general/W3Banner';
import W3CardItem from '../general/W3CardItem';
import W3Footer from '../general/W3Footer';
import W3Content from '../general/W3Content';
import mountainImg from '../../assets/mountains.jpg';
import natureImg from '../../assets/nature.jpg';
import lightsImg from '../../assets/lights.jpg';
import '../general/w3.css';
/*
  React Component Based Design
  state and functions
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
    id: 1,
    image: mountainImg,
    alt: 'Mount Everest',
    title: 'Mount Everest',
    description:
      "Mount Everest also known as Sagarmatha is Earth's highest mountain above sea level, at the height of 8,848m. In 1865, Everest was given its official English name by the Royal Geographical Society."
  },
  {
    id: 2,
    image: natureImg,
    alt: 'Matang Mangrove',
    title: 'Matang Mangrove',
    description:
      'The Matang Mangrove Forest Reserve is Peninsular Malaysia’s largest surviving spread of mangrove forest, most of which has been extensively cleared for development'
  },
  {
    id: 3,
    image: lightsImg,
    alt: 'Aurora Boralis',
    title: 'Aurora Boralis',
    description:
      'Canada is an aurora viewing paradise, thanks to its northern latitude and low light pollution; elsewhere in the country, Wood Buffalo and Jasper National Park are popular viewing spots'
  }
];

class App4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: cardItems[0].id,
      activeBanner: cardItems[0].image,
      activeCaption: cardItems[0].alt
    };
  }

  updateBanner = (index, image, caption) => {
    this.setState({
      selectedIndex: index,
      activeBanner: image,
      activeCaption: caption
    });
  };

  render() {
    const { selectedIndex, activeBanner, activeCaption } = this.state;

    return (
      <div className="w3-light-grey w3-content">
        <W3TopBar>
          {menuItems.map((item, index) => (
            <W3NavItem key={index} link={item.link} description={item.description} />
          ))}
        </W3TopBar>
        <W3Banner alt="top banner" image={activeBanner} caption={activeCaption} />
        <W3Content>
          {cardItems.map(item => (
            <W3CardItem
              key={item.id}
              id={item.id}
              isSelected={item.id === selectedIndex}
              image={item.image}
              alt={item.alt}
              title={item.title}
              description={item.description}
              updateBanner={this.updateBanner}
            />
          ))}
        </W3Content>
        <W3Footer description="ReactJS Training Demo" />
      </div>
    );
  }
}

export default App4;
