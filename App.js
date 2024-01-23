import React from 'react';
import {LogBox} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import ComponentWrapper from './src/context/ComponentWrapper';
import ModalDialogProvider from './src/context/ModalDialog/ModalDialogProvider';
import AppNavigator from './src/navigations/AppNavigator';
import addressReducer from './src/store/reducers/address';
import addressListReducer from './src/store/reducers/addressList';
import advertisementsReducer from './src/store/reducers/advertisements';
import appConfigReducer from './src/store/reducers/appConfig';
import cartReducer from './src/store/reducers/cart';
import categoriesReducer from './src/store/reducers/categories';
import orderHistoryReducer from './src/store/reducers/orderHistory';
import userReducer from './src/store/reducers/user';

LogBox.ignoreLogs([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

const rootReducer = combineReducers({
  appConfig: appConfigReducer,
  categories: categoriesReducer,
  advertisements: advertisementsReducer,
  user: userReducer,
  cart: cartReducer,
  address: addressReducer,
  addressList: addressListReducer,
  orderHistory: orderHistoryReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <ModalDialogProvider>
      <Provider store={store}>
        <ComponentWrapper />
        <AppNavigator />
      </Provider>
    </ModalDialogProvider>
  );
};

export default App;
