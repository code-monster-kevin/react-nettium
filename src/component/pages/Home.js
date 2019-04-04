import React from 'react';
import W3Banner from '../general/W3Banner';
import W3CardItem from '../general/W3CardItem';
import W3Content from '../general/W3Content';
import mountainImg from '../../assets/mountains.jpg';
import natureImg from '../../assets/nature.jpg';
import lightsImg from '../../assets/lights.jpg';

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

const Home = props => {
  var selectedIndex = props.selectedIndex ? props.selectedIndex : cardItems[0].id;
  var bannerImage = props.bannerImage ? props.bannerImage : cardItems[0].image;
  var bannerCaption = props.bannerCaption ? props.bannerCaption : cardItems[0].alt;

  return (
    <div>
      <W3Banner alt="top banner" image={bannerImage} caption={bannerCaption} />
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
            updateBanner={props.updateBanner}
          />
        ))}
      </W3Content>
    </div>
  );
};

export default Home;
