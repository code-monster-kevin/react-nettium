import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import './w3.css';

class W3CardItem2 extends React.Component {
  render() {
    return (
      <div className="w3-third w3-container w3-margin-bottom">
        <img
          src={this.props.image}
          alt={this.props.alt}
          style={{ width: '100%' }}
          className="w3-hover-opacity"
        />
        <div className={this.props.isSelected ? 'w3-container w3-grey' : 'w3-container w3-white'}>
          <p>
            <b>{this.props.title}</b>
          </p>
          <p>{this.props.description}</p>
          {this.props.updateBanner && (
            <p>
              <button
                className="w3-button w3-white w3-border"
                onClick={() =>
                  this.props.updateBanner(this.props.id, this.props.image, this.props.alt)
                }
              >
                Open
              </button>
            </p>
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateBanner: (index, image, caption) => dispatch(actions.updateBanner(index, image, caption))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(W3CardItem2);
