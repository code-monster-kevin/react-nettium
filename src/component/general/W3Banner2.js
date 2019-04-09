import React from 'react';
import { connect } from 'react-redux';
import './w3.css';

class W3Banner2 extends React.Component {
  render() {
    return (
      <div className="w3-section w3-bottombar">
        <div className="w3-content w3-display-container">
          <img
            alt={this.props.bannerCaption}
            src={this.props.bannerImage}
            style={{ width: '100%' }}
          />
          <div className="w3-display-bottomleft w3-container w3-padding-16 w3-black">
            {this.props.bannerCaption}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    bannerImage: store.banner.bannerImage,
    bannerCaption: store.banner.bannerCaption
  };
};

export default connect(mapStateToProps)(W3Banner2);
