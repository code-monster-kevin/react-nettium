import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
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

class Home2 extends React.Component {
  render() {
    var selectedIndex = this.props.selectedIndex ? this.props.selectedIndex : cardItems[0].id;
    var selectedImage = this.props.bannerImage ? this.props.bannerImage : cardItems[0].image;
    var selectedCaption = this.props.bannerCaption ? this.props.bannerCaption : cardItems[0].alt;

    return (
      <div>
        <W3Banner alt="top banner" image={selectedImage} caption={selectedCaption} />
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
              updateBanner={this.props.updateBanner}
            />
          ))}
        </W3Content>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    selectedIndex: store.banner.selectedIndex,
    bannerImage: store.banner.bannerImage,
    bannerCaption: store.banner.bannerCaption
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateBanner: (index, image, caption) => dispatch(actions.updateBanner(index, image, caption))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home2);
