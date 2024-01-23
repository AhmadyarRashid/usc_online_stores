export const SET_ORDER_HISTORY = 'SET_ORDER_HISTORY';
export const UPDATE_ACTIVE_ORDER_ITEM_STATUS =
  'UPDATE_ACTIVE_ORDER_ITEM_STATUS';
export const RESET_ORDER_HISTORY = 'RESET_ORDER_HISTORY';

export const setOrderHistory = (payload) => ({
  type: SET_ORDER_HISTORY,
  payload,
});

export const updateActiveOrderStatus = (payload) => ({
  type: UPDATE_ACTIVE_ORDER_ITEM_STATUS,
  payload,
});

export const resetOrderHistory = () => ({
  type: RESET_ORDER_HISTORY,
});
