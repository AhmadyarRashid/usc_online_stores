import {
  SET_ORDER_HISTORY,
  UPDATE_ACTIVE_ORDER_ITEM_STATUS,
  RESET_ORDER_HISTORY,
} from '../actions/orderHistory';

const initialState = {
  orderHistory: null,
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  const {orderHistory} = state || {};

  switch (type) {
    case SET_ORDER_HISTORY:
      return {
        ...state,
        orderHistory: payload,
      };

    case UPDATE_ACTIVE_ORDER_ITEM_STATUS:
      const {id: orderId, orderStatusCode} = payload || {};

      let updatedOrders = [];

      if (
        orderHistory &&
        Array.isArray(orderHistory) &&
        orderHistory.length > 0
      ) {
        updatedOrders = orderHistory.map(orderItem => {
          const {id} = orderItem || {};

          if (id === orderId) {
            return {
              ...orderItem,
              id: id,
              orderStatusCode: orderStatusCode,
            };
          }

          return orderItem;
        });
      }

      return {
        ...state,
        orderHistory: updatedOrders,
      };

    case RESET_ORDER_HISTORY:
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
};
