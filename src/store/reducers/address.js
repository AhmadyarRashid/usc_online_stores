import {
  SET_FULL_NAME,
  SET_ALTERNATIVE_NUMBER,
  SET_CITY,
  SET_LOCALITY,
  SET_ADDRESS,
  SET_AS_DEFAULT_ADDRESS,
  RESET_ALL,
} from '../actions/address';

const initialState = {
  fullName: null,
  alternativeNumber: null,
  city: null,
  locality: null,
  address: null,
  isDefault: false,
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case SET_FULL_NAME:
      return {
        ...state,
        fullName: payload,
      };

    case SET_ALTERNATIVE_NUMBER:
      return {
        ...state,
        alternativeNumber: payload,
      };

    case SET_CITY:
      return {
        ...state,
        city: payload,
      };

    case SET_LOCALITY:
      return {
        ...state,
        locality: payload,
      };

    case SET_ADDRESS:
      return {
        ...state,
        address: payload,
      };

    case SET_AS_DEFAULT_ADDRESS:
      return {
        ...state,
        isDefault: payload,
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
