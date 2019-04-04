import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/common';

const initialState = {
  selectedIndex: null,
  bannerImage: null,
  bannerCaption: null
};

const setBanner = (state, action) => {
  return updateObject(state, {
    selectedIndex: action.selectedIndex,
    bannerImage: action.bannerImage,
    bannerCaption: action.bannerCaption
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_BANNER_INDEX:
      return setBanner(state, action);
    default:
      return state;
  }
};

export default reducer;
