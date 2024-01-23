export const SET_ADDRESS_LIST = 'SET_ADDRESS_LIST';
export const UPDATE_ADDRESS_ITEM = 'UPDATE_ADDRESS_ITEM';
export const ADD_ADDRESS_ITEM = 'ADD_ADDRESS_ITEM';
export const REMOVE_ADDRESS_ITEM = 'REMOVE_ADDRESS_ITEM';
export const RESET_ALL = 'RESET_ALL';

export const setAddressList = (payload) => ({
  type: SET_ADDRESS_LIST,
  payload,
});

export const updateAddressItem = (payload) => ({
  type: UPDATE_ADDRESS_ITEM,
  payload,
});

export const addAddressItem = (payload) => ({
  type: ADD_ADDRESS_ITEM,
  payload,
});

export const removeAddressItem = (payload) => ({
  type: REMOVE_ADDRESS_ITEM,
  payload,
});

export const resetAddressList = () => ({
  type: RESET_ALL,
});
