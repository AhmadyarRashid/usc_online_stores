export const SET_CART = 'SET_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const SET_DELIVERY_ADDRESS = 'SET_DELIVERY_ADDRESS';
export const SET_DELIVERY_ADDRESS_OPTIONS = 'SET_DELIVERY_ADDRESS_OPTIONS';
export const SET_DELIVERY_CHARGES_INFO = 'SET_DELIVERY_CHARGES_INFO';
export const SET_PAYMENT_METHOD = 'SET_PAYMENT_METHOD';
export const RESET_CART = 'RESET_CART';

/**
 * Used to store fetched products in cart
 */

export const setCart = payload => ({
  type: SET_CART,
  payload,
});

/**
 * Used to add new product in cart
 */
export const addToCart = payload => ({
  type: ADD_TO_CART,
  payload,
});

/**
 * Used to remove product from cart
 */
export const removeFromCart = payload => ({
  type: REMOVE_FROM_CART,
  payload,
});

/**
 *
 * Used to update existing product in cart
 */
export const updateCart = payload => ({
  type: UPDATE_CART,
  payload,
});

export const setDeliveryAddress = payload => ({
  type: SET_DELIVERY_ADDRESS,
  payload,
});

export const setDeliveryAddressOptions = payload => ({
  type: SET_DELIVERY_ADDRESS_OPTIONS,
  payload,
});

export const setDeliveryChargesInfo = payload => ({
  type: SET_DELIVERY_CHARGES_INFO,
  payload,
});

export const setPaymentMethod = payload => ({
  type: SET_PAYMENT_METHOD,
  payload,
});

export const resetCart = () => ({
  type: RESET_CART,
});
