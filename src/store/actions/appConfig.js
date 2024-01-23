export const SET_APP_CONFIG = 'SET_APP_CONFIG';
export const RESET_ALL = 'RESET_ALL';

export const setAppConfig = (payload) => ({
  type: SET_APP_CONFIG,
  payload,
});

export const resetAppConfig = () => ({
  type: RESET_ALL,
});
