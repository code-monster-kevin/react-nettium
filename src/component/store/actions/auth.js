import * as actionTypes from './actionTypes';
import { postLogin, postLogout } from '../../../services/auth';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, refresh_token, expires_in, membercode, gaid) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    refresh_token: refresh_token,
    expires_in: expires_in,
    membercode: membercode,
    gaid: gaid
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
    token: null,
    refresh_token: null,
    expires_in: null,
    membercode: null,
    gaid: null
  };
};

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(authCheckState());
    }, expirationTime * 1000);
  };
};

export const auth = (login, password) => {
  return dispatch => {
    dispatch(authStart());
    postLogin(login, password)
      .then(response => {
        if (response.status === 200) {
          const newExpireDate = response.data.accessToken.expires_in - 300;
          const expireDate = new Date(new Date().getTime() + newExpireDate * 1000);

          localStorage.setItem('app.token', response.data.accessToken.access_token);
          localStorage.setItem('app.token.refresh', response.data.accessToken.refresh_token);
          localStorage.setItem('app.token.expires', expireDate);
          localStorage.setItem('app.membercode', login);
          localStorage.setItem('app.gaid', response.data.memberInfo.GAID);

          dispatch(
            authSuccess(
              response.data.accessToken.access_token,
              response.data.accessToken.refresh_token,
              response.data.accessToken.expires_in,
              login,
              response.data.memberInfo.GAID
            )
          );
          dispatch(checkAuthTimeout(response.data.accessToken.expires_in));
        } else {
          try {
            if (response.data.content) {
              var errorMsg = JSON.parse(response.data.content).error_details.Message;
              console.log(errorMsg);
            }
          } catch (error) {
            console.log(errorMsg);
          } finally {
            dispatch(authFail(null));
          }
        }
      })
      .catch(error => {
        dispatch(authFail(error));
      });
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('app.token');
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDateTime = new Date(localStorage.getItem('app.token.expires'));
      const refresh_token = localStorage.getItem('app.token.refresh');
      const membercode = localStorage.getItem('app.membercode');

      if (expirationDateTime > new Date()) {
        dispatch(authSuccess(token, refresh_token, expirationDateTime, membercode));
        dispatch(checkAuthTimeout((expirationDateTime.getTime() - new Date().getTime()) / 1000));
      } else {
        dispatch(logout());
      }
    }
  };
};
export const authInternalLogout = () => {
  return dispatch => {
    localStorage.removeItem('app.token');
    localStorage.removeItem('app.token.refresh');
    localStorage.removeItem('app.token.expires');
    localStorage.removeItem('app.membercode');

    dispatch(logout());
  };
};

export const authLogout = () => {
  return () => {
    postLogout().then(() => {
      localStorage.removeItem('app.token');
      localStorage.removeItem('app.token.refresh');
      localStorage.removeItem('app.token.expires');
      localStorage.removeItem('app.membercode');
    });
  };
};
