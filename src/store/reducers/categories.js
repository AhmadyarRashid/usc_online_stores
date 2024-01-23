import {
  SET_ALL_CATEGORIES,
  SET_SELECTED_LEVEL1_CATEGORY,
  SET_SELECTED_LEVEL2_CATEGORY,
  SET_SELECTED_LEVEL3_CATEGORY,
  RESET_ALL,
} from '../actions/categories';

const initialState = {
  categories: [],
  homeLevel1Categories: [],
  selectedLevel1Category: null,
  selectedLevel2Category: null,
  selectedLevel3Category: null,
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case SET_ALL_CATEGORIES:
      return {
        ...state,
        categories: payload,
        homeLevel1Categories:
          payload && Array.isArray(payload) && payload.slice(0, 10),
      };

    case SET_SELECTED_LEVEL1_CATEGORY:
      return {
        ...state,
        selectedLevel1Category: payload,
        selectedLevel2Category: null,
        selectedLevel3Category: null,
      };

    case SET_SELECTED_LEVEL2_CATEGORY:
      return {
        ...state,
        selectedLevel2Category: payload,
        selectedLevel3Category: null,
      };

    case SET_SELECTED_LEVEL3_CATEGORY:
      return {
        ...state,
        selectedLevel3Category: payload,
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
