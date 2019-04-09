import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import './w3.css';

class W3Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  updateUserName = event => {
    this.setState({ username: event.target.value });
  };

  updatePassword = event => {
    this.setState({ password: event.target.value });
  };

  handleLogin = e => {
    e.preventDefault();

    this.props.login(this.state.username, this.state.password);
  };

  render() {
    return (
      <div className="w3-container w3-row">
        {this.props.membercode ? (
          <div>
            <div className="w3-col s8">{this.props.membercode}</div>
            <div className="w3-col-s1">
              <button className="w3-button w3-blue" onClick={() => this.props.logout()}>
                Logout
              </button>
            </div>
          </div>
        ) : (
          <form>
            <div className="w3-col s4">
              <input
                className="w3-input"
                type="text"
                placeholder="User Name"
                name="username"
                onChange={this.updateUserName}
              />
            </div>
            <div className="w3-col s4">
              <input
                className="w3-input"
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.updatePassword}
              />
            </div>
            <div className="w3-col-s1">
              {this.props.loading ? (
                <div>Loading...</div>
              ) : (
                <button className="w3-button w3-blue" onClick={this.handleLogin}>
                  Login
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    apptoken: state.auth.token,
    membercode: state.auth.membercode,
    authError: state.auth.error,
    loading: state.auth.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (login, password) => dispatch(actions.auth(login, password)),
    logout: () => dispatch(actions.authInternalLogout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(W3Login);
