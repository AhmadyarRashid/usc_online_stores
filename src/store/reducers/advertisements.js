import {SET_ADVERTISEMENTS, RESET_ALL} from '../actions/advertisements';

const initialState = {
  advertisements: null,
  homeBannerAdvertisements: null,
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case SET_ADVERTISEMENTS:
      /**
       * Ads Placement Ids
       * 1. Home Banner
       */

      let homeBannerAdvertisements = [];

      if (payload && Array.isArray(payload) && payload.length > 0) {
        payload.forEach(item => {
          const {placementId} = item || {};

          switch (placementId) {
            case 1:
              homeBannerAdvertisements.push(item);
              break;

            default:
              break;
          }
        });
      }

      return {
        ...state,
        advertisements: payload,
        homeBannerAdvertisements: homeBannerAdvertisements,
      };

    case RESET_ALL:
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
};
