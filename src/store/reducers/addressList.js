import {
  SET_ADDRESS_LIST,
  UPDATE_ADDRESS_ITEM,
  ADD_ADDRESS_ITEM,
  REMOVE_ADDRESS_ITEM,
  RESET_ALL,
} from '../actions/addressList';

const initialState = {
  addressList: null,
};

export default (state = initialState, action) => {
  const {addressList} = state || {};
  const {type, payload} = action;

  switch (type) {
    case SET_ADDRESS_LIST:
      return {
        ...state,
        addressList: payload,
      };

    case UPDATE_ADDRESS_ITEM:
      const {id} = payload || {};

      if (addressList && Array.isArray(addressList) && addressList.length > 0) {
        const updatedaddressList = addressList.map((addressItem) => {
          const {id: addressId} = addressItem || {};

          if (id === addressId) {
            return {...addressItem, ...payload};
          }

          return addressItem;
        });

        return {
          ...state,
          addressList: updatedaddressList,
        };
      }

      return {
        ...state,
      };

    case ADD_ADDRESS_ITEM:
      if (addressList && Array.isArray(addressList)) {
        let updatedList = [...addressList];
        updatedList.push(payload);

        return {
          ...state,
          addressList: updatedList,
        };
      } else {
        return {
          ...state,
          addressList: [payload],
        };
      }

    case REMOVE_ADDRESS_ITEM:
      const {id: addressId} = payload || {};

      if (addressList && Array.isArray(addressList) && addressList.length > 0) {
        const filteredAddressList = addressList.filter((addressItem) => {
          const {id} = addressItem || {};

          if (id !== addressId) {
            return addressItem;
          }
        });

        return {
          ...state,
          addressList: filteredAddressList,
        };
      }

      return {
        ...state,
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
