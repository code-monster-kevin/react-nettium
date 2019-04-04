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
import '../general/w3.css';
/*
  React Component Based Design
  Moving the code into components
*/
class App2 extends Component {
  render() {
    return (
      <div className="w3-light-grey w3-content">
        <W3TopBar>
          <W3NavItem link="/" description="Home" />
          <W3NavItem link="/aboutus" description="About Us" />
          <W3NavItem link="/products" description="Products" />
          <W3NavItem link="/terms" description="Terms" />
        </W3TopBar>
        <W3Banner alt="top banner" image={bannerImg} />
        <div className="w3-row-padding">
          <W3CardItem
            image={mountainImg}
            alt="mountains"
            title="Lorem Ipsum"
            description="Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
          />
          <W3CardItem
            image={natureImg}
            alt="nature"
            title="Lorem Ipsum"
            description="Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
          />
          <W3CardItem
            image={lightsImg}
            alt="lights"
            title="Lorem Ipsum"
            description="Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
          />
        </div>
        <W3Footer description="ReactJS Training Demo" />
      </div>
    );
  }
}

export default App2;
