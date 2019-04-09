import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/common';

const initialState = {
  balances: null,
  error: null,
  loading: false
};

const getBalanceStart = state => {
  return updateObject(state, { error: null, loading: true });
};

const getBalanceSuccess = (state, action) => {
  return updateObject(state, {
    balances: action.balances,
    error: null,
    loading: false
  });
};

const getBalanceFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETBALANCE_START:
      return getBalanceStart(state);
    case actionTypes.GETBALANCE_SUCCESS:
      return getBalanceSuccess(state, action);
    case actionTypes.GETBALANCE_FAIL:
      return getBalanceFail(state, action);
    default:
      return state;
  }
};

export default reducer;
