import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import './w3.css';

class W3BalancePanel extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.token !== prevProps.token) {
      this.props.getBalances(this.props.token);
    }
  }

  render() {
    return (
      <div className="w3-panel w3-red">
        {this.props.token &&
          this.props.balances &&
          this.props.balances.map(item => (
            <p key={item.name}>
              {item.name} : {item.balance}
            </p>
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    balances: state.balance.balances
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBalances: token => dispatch(actions.balances(token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(W3BalancePanel);
