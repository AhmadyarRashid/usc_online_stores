import {
  SET_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART,
  SET_DELIVERY_ADDRESS,
  SET_DELIVERY_ADDRESS_OPTIONS,
  SET_DELIVERY_CHARGES_INFO,
  SET_PAYMENT_METHOD,
  RESET_CART,
} from '../actions/cart';

const initialState = {
  cart: null,
  deliveryAddress: null,
  paymentMethod: null,
  billingInfo: null,

  deliveryAddressOptions: null,
  deliveryChargesInfo: null,

  deliveryTime: null,
  currentDate: null,
  weeklyDeliveryTimeSlots: null,
};

const calculateSubTotalBilling = cartData => {
  if (cartData && Array.isArray(cartData) && cartData.length > 0) {
    let cartTotal = 0;
    let cartDiscount = 0;
    let subTotal = 0;
    let deliveryCharge = 0;
    let netTotal = 0;
    let cartItemsCount = 0;

    cartData.forEach(cartItem => {
      cartItemsCount = cartData.length;

      const {marketPrice, sellingPrice, quantityCounter} = cartItem || {};

      cartTotal = cartTotal + marketPrice * quantityCounter;
      cartDiscount =
        cartDiscount + (marketPrice - sellingPrice) * quantityCounter;
    });

    subTotal = cartTotal - cartDiscount;
    netTotal = subTotal + deliveryCharge;

    return {
      cartTotal,
      cartDiscount,
      subTotal,
      deliveryCharge,
      netTotal,
      cartItemsCount,
    };
  }

  return null;
};

const calculatNetTotalBilling = ({
  billingInfo,
  deliveryChargesInfo,
  selectedCity,
}) => {
  const {subTotal} = billingInfo || {};
  const {courierCharge} = deliveryChargesInfo || {};

  let netTotalBilling = {
    ...billingInfo,
    deliveryCharge: courierCharge,
    netTotal: subTotal + courierCharge,
  };

  return netTotalBilling;
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  const {cart} = state || {};
  const {id: listingId} = payload || {};

  switch (type) {
    case SET_CART:
      const bill1 = calculateSubTotalBilling(payload);

      return {
        ...state,
        cart: payload,
        billingInfo: bill1,
      };

    case ADD_TO_CART:
      let updatedCartOnAdd = [];

      if (cart && Array.isArray(cart) && cart.length > 0) {
        updatedCartOnAdd = [...cart];
        updatedCartOnAdd.push(payload);
      } else {
        updatedCartOnAdd.push(payload);
      }

      const bill2 = calculateSubTotalBilling(updatedCartOnAdd);

      return {
        ...state,
        cart: updatedCartOnAdd,
        billingInfo: bill2,
      };

    case REMOVE_FROM_CART:
      let updatedCartOnRemove = [];

      if (cart && Array.isArray(cart) && cart.length > 0) {
        updatedCartOnRemove = [...cart];

        updatedCartOnRemove = updatedCartOnRemove.filter(item => {
          const {id} = item || {};

          if (listingId !== id) {
            return item;
          }
        });
      }

      const bill3 = calculateSubTotalBilling(updatedCartOnRemove);

      return {
        ...state,
        cart: updatedCartOnRemove,
        billingInfo: bill3,
      };

    case UPDATE_CART:
      let updatedCartOnUpdate = [];

      if (cart && Array.isArray(cart) && cart.length > 0) {
        updatedCartOnUpdate = [...cart];

        updatedCartOnUpdate = updatedCartOnUpdate.map(item => {
          const {id} = item || {};

          if (listingId === id) {
            return payload;
          }

          return item;
        });
      }

      const bill4 = calculateSubTotalBilling(updatedCartOnUpdate);

      return {
        ...state,
        cart: updatedCartOnUpdate,
        billingInfo: bill4,
      };

    case SET_DELIVERY_ADDRESS_OPTIONS:
      return {
        ...state,
        deliveryAddressOptions: payload,
      };

    case SET_DELIVERY_CHARGES_INFO:
      return {
        ...state,
        deliveryChargesInfo: payload,
      };

    case SET_DELIVERY_ADDRESS:
      const {billingInfo, deliveryChargesInfo} = state || {};
      const {city} = payload || {};

      const netTotalBilling = calculatNetTotalBilling({
        billingInfo,
        deliveryChargesInfo,
        selectedCity: city,
      });

      return {
        ...state,
        deliveryAddress: payload,
        billingInfo: netTotalBilling,
      };

    case SET_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: payload,
      };

    case RESET_CART:
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
};
