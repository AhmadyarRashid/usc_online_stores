import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import CartScreen from '../../screens/Cart';

const Stack = createStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="cart_tab"
        component={CartScreen}
        options={{headerShown: false, headerBackTitle: ''}}
      />
    </Stack.Navigator>
  );
};

export default CartNavigator;
