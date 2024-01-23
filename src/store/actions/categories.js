export const SET_ALL_CATEGORIES = 'SET_ALL_CATEGORIES';
export const SET_SELECTED_LEVEL1_CATEGORY = 'SET_SELECTED_LEVEL1_CATEGORY';
export const SET_SELECTED_LEVEL2_CATEGORY = 'SET_SELECTED_LEVEL2_CATEGORY';
export const SET_SELECTED_LEVEL3_CATEGORY = 'SET_SELECTED_LEVEL3_CATEGORY';
export const RESET_ALL = 'RESET_ALL';

export const setAllCategories = (payload) => ({
  type: SET_ALL_CATEGORIES,
  payload,
});

export const setSelectedLevel1Category = (payload) => ({
  type: SET_SELECTED_LEVEL1_CATEGORY,
  payload,
});

export const setSelectedLevel2Category = (payload) => ({
  type: SET_SELECTED_LEVEL2_CATEGORY,
  payload,
});

export const setSelectedLevel3Category = (payload) => ({
  type: SET_SELECTED_LEVEL3_CATEGORY,
  payload,
});

export const resetCategories = () => ({
  type: RESET_ALL,
});
