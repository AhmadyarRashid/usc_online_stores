export const SET_FIREBASE_AUTH_USER_OBJ = 'SET_FIREBASE_AUTH_USER_OBJ';
export const SET_USER_DATA_FROM_DB = 'SET_USER_DATA_FROM_DB';
export const ON_SIGNOUT = 'ON_SIGNOUT';

export const setFirebaseAuthUserObj = payload => ({
  type: SET_FIREBASE_AUTH_USER_OBJ,
  payload,
});

export const setUserDataFromDb = payload => ({
  type: SET_USER_DATA_FROM_DB,
  payload,
});

export const clearUserData = () => ({
  type: ON_SIGNOUT,
});
