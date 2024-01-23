export const SET_FULL_NAME = 'SET_FULL_NAME';
export const SET_ALTERNATIVE_NUMBER = 'SET_ALTERNATIVE_NUMBER';
export const SET_CITY = 'SET_CITY';
export const SET_LOCALITY = 'SET_LOCALITY';
export const SET_ADDRESS = 'SET_ADDRESS';
export const SET_AS_DEFAULT_ADDRESS = 'SET_AS_DEFAULT_ADDRESS';
export const RESET_ALL = 'RESET_ALL';

export const setFullName = (payload) => ({
  type: SET_FULL_NAME,
  payload,
});

export const setAlternativeNumber = (payload) => ({
  type: SET_ALTERNATIVE_NUMBER,
  payload,
});

export const setCity = (payload) => ({
  type: SET_CITY,
  payload,
});

export const setLocality = (payload) => ({
  type: SET_LOCALITY,
  payload,
});

export const setAddress = (payload) => ({
  type: SET_ADDRESS,
  payload,
});

export const setAsDefaultAddress = (payload) => ({
  type: SET_AS_DEFAULT_ADDRESS,
  payload,
});

export const resetAll = () => ({
  type: RESET_ALL,
});
