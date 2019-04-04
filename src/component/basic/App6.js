import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import W3Footer from '../general/W3Footer';
import TopBar from '../pages/TopBar';
import AppRoutes from './AppRoutes';
import '../general/w3.css';

/*
  Reorganize all components
  Adding routing with AppRoutes
*/

class App6 extends Component {
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
        <BrowserRouter>
          <AppRoutes
            bannerImage={activeBanner}
            bannerCaption={activeCaption}
            selectedIndex={selectedIndex}
            updateBanner={this.updateBanner}
          />
        </BrowserRouter>
        <W3Footer description="ReactJS Training Demo" />
      </div>
    );
  }
}

export default App6;
