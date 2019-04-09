import React from 'react';
import { connect } from 'react-redux';
import W3Banner2 from '../general/W3Banner2';
import W3CardItem2 from '../general/W3CardItem2';
import W3Content from '../general/W3Content';
import W3Balance from '../general/W3Balance';
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

class Home2 extends React.Component {
  render() {
    return (
      <div>
        <W3Balance />
        <W3Banner2 />
        <W3Content>
          {cardItems.map(item => (
            <W3CardItem2
              key={item.id}
              id={item.id}
              image={item.image}
              alt={item.alt}
              title={item.title}
              description={item.description}
              isSelected={item.id === this.props.selectedIndex}
            />
          ))}
        </W3Content>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    selectedIndex: store.banner.selectedIndex
  };
};

export default connect(mapStateToProps)(Home2);
