import * as actionTypes from './actionTypes';
import { getBalance } from '../../../services/balance';

export const getBalanceStart = () => {
  return {
    type: actionTypes.GETBALANCE_START
  };
};

export const getBalanceSuccess = balances => {
  return {
    type: actionTypes.GETBALANCE_SUCCESS,
    balances: balances
  };
};

export const getBalanceFail = error => {
  return {
    type: actionTypes.GETBALANCE_FAIL,
    error: error
  };
};

export const balances = token => {
  return dispatch => {
    dispatch(getBalanceStart());
    getBalance(token, '')
      .then(response => {
        if (response.status === 200) {
          dispatch(getBalanceSuccess(response.data));
        }
        if (response.status === 401) {
          dispatch(getBalanceFail(response.data));
        }
      })
      .catch(error => {
        dispatch(getBalanceFail(error));
      });
  };
};
