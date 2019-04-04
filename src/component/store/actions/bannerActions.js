import * as actionTypes from './actionTypes';

export const updateBanner = (index, image, caption) => {
  return {
    type: actionTypes.SET_BANNER_INDEX,
    selectedIndex: index,
    bannerImage: image,
    bannerCaption: caption
  };
};
