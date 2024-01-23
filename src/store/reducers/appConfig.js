import {SET_APP_CONFIG, RESET_ALL} from '../actions/appConfig';

const initialState = {
  citiesVersion: null,
  categoriesVersion: null,
  topCategoriesVersion: null,
  advertisementsVersion: null,
  paymentInfo: null,
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case SET_APP_CONFIG:
      const {
        citiesVersion,
        categoriesVersion,
        topCategoriesVersion,
        advertisementsVersion,
        paymentInfo,
      } = payload || {};

      return {
        ...state,
        citiesVersion: citiesVersion,
        categoriesVersion: categoriesVersion,
        topCategoriesVersion: topCategoriesVersion,
        advertisementsVersion: advertisementsVersion,
        paymentInfo: paymentInfo,
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
