import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/common';

const initialState = {
  token: localStorage.getItem('app.token'),
  refresh_token: localStorage.getItem('app.token.refresh'),
  expires_in: localStorage.getItem('app.token.expires'),
  membercode: localStorage.getItem('app.membercode'),
  error: null,
  gaid: localStorage.getItem('app.gaid'),
  loading: false
};

const authStart = state => {
  return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    refresh_token: action.refresh_token,
    membercode: action.membercode,
    expires_in: action.expires_in,
    error: null,
    loading: false,
    gaid: action.gaid
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const authLogout = (state, action) => {
  return updateObject(state, {
    token: null,
    refresh_token: null,
    expires_in: null,
    membercode: null,
    error: null,
    loading: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
};

export default reducer;
