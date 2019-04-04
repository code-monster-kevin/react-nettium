import React, { Component } from 'react';
import W3Footer from '../general/W3Footer';
import Home from '../pages/Home';
import TopBar from '../pages/TopBar';
import '../general/w3.css';
/*
  Reorganize all components
  to prepare for Routing
*/

class App5 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: null,
      activeBanner: null,
      activeCaption: null
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
        <TopBar />
        <Home
          bannerImage={activeBanner}
          bannerCaption={activeCaption}
          selectedIndex={selectedIndex}
          updateBanner={this.updateBanner}
        />
        <W3Footer description="ReactJS Training Demo" />
      </div>
    );
  }
}

export default App5;
