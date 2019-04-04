import React, { Component } from 'react';
import bannerImg from '../../assets/img_nature_wide.jpg';
import mountainImg from '../../assets/mountains.jpg';
import natureImg from '../../assets/nature.jpg';
import lightsImg from '../../assets/lights.jpg';
import '../general/w3.css';
/*
  Rendering the full html code in React
*/
class App1 extends Component {
  render() {
    return (
      <div className="w3-light-grey w3-content">
        <div className="w3-bar w3-black">
          <a href="/" className="w3-bar-item w3-button">
            Home
          </a>
          <a href="/page1" className="w3-bar-item w3-button">
            Link 1
          </a>
          <a href="/page2" className="w3-bar-item w3-button">
            Link 2
          </a>
          <a href="/page3" className="w3-bar-item w3-button">
            Link 3
          </a>
        </div>
        <div className="w3-section w3-bottombar">
          <div className="w3-content w3-display-container">
            <img alt="banner" src={bannerImg} style={{ width: '100%' }} />
          </div>
        </div>
        <div className="w3-row-padding">
          <div className="w3-third w3-container w3-margin-bottom">
            <img
              src={mountainImg}
              alt="Norway"
              style={{ width: '100%' }}
              className="w3-hover-opacity"
            />
            <div className="w3-container w3-white">
              <p>
                <b>Lorem Ipsum</b>
              </p>
              <p>
                Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus
                vitae, ultricies congue gravida diam non fringilla.
              </p>
            </div>
          </div>
          <div className="w3-third w3-container w3-margin-bottom">
            <img
              src={natureImg}
              alt="Norway"
              style={{ width: '100%' }}
              className="w3-hover-opacity"
            />
            <div className="w3-container w3-white">
              <p>
                <b>Lorem Ipsum</b>
              </p>
              <p>
                Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus
                vitae, ultricies congue gravida diam non fringilla.
              </p>
            </div>
          </div>
          <div className="w3-third w3-container">
            <img
              src={lightsImg}
              alt="Norway"
              style={{ width: '100%' }}
              className="w3-hover-opacity"
            />
            <div className="w3-container w3-white">
              <p>
                <b>Lorem Ipsum</b>
              </p>
              <p>
                Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus
                vitae, ultricies congue gravida diam non fringilla.
              </p>
            </div>
          </div>
        </div>
        <div className="w3-black w3-center w3-padding-24">ReactJS Training Demo</div>
      </div>
    );
  }
}

export default App1;
