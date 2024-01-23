import {
  SET_FIREBASE_AUTH_USER_OBJ,
  SET_USER_DATA_FROM_DB,
  ON_SIGNOUT,
} from '../actions/user';

const initialState = {
  firebaseAuthUserObj: null,
  userData: null,
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case SET_FIREBASE_AUTH_USER_OBJ:
      return {
        ...state,
        firebaseAuthUserObj: payload,
      };

    case SET_USER_DATA_FROM_DB:
      return {
        ...state,
        userData: payload,
      };

    case ON_SIGNOUT:
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
};
