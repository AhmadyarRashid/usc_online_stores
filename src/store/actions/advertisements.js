export const SET_ADVERTISEMENTS = 'SET_ADVERTISEMENTS';
export const RESET_ALL = 'RESET_ALL';

export const setAdvertisements = (payload) => ({
  type: SET_ADVERTISEMENTS,
  payload,
});

export const resetAdvertisements = () => ({
  type: RESET_ALL,
});
