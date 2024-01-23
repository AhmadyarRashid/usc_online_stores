import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import AddressScreen from '../../screens/Address';
import NewAddressScreen from '../../screens/Address/NewAddress';
import BannerDetails from '../../screens/BannerDetails';
import CheckoutScreen from '../../screens/Checkout';
import LoginScreen from '../../screens/Login';
import OTPVerificationScreen from '../../screens/Login/OTPVerification';
import Orders from '../../screens/Orders/AllOrders';
import OrderDetails from '../../screens/Orders/OrderDetails';
import OrderStatusScreen from '../../screens/Orders/OrderStatus';
import ProductDetails from '../../screens/ProductDetails';
import ProductList from '../../screens/ProductList';
import Search from '../../screens/Search';
import UserProfileScreen from '../../screens/UserProfile';
import {TextStyles} from '../../styles/text';
import HomeNavigator from '../HomeNavigator';
import {navigationRef} from '../RootNavigation';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="main_app"
          component={HomeNavigator}
          options={{headerShown: false, headerBackTitle: ''}}
        />

        <Stack.Screen
          name="product_details"
          component={ProductDetails}
          options={{
            title: 'Product Details',
            headerBackTitle: '',
            headerTitleStyle: styles.titleTextStyle,
          }}
        />

        <Stack.Screen
          name="product_details_recommendations"
          component={ProductDetails}
          options={{
            title: 'Product Details',
            headerBackTitle: '',
            headerTitleStyle: styles.titleTextStyle,
          }}
        />

        <Stack.Screen
          name="search"
          component={Search}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="checkout"
          component={CheckoutScreen}
          options={{
            title: 'Checkout',
            headerBackTitle: '',
            headerTitleStyle: styles.titleTextStyle,
          }}
        />

        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{headerShown: false, headerBackTitle: ''}}
        />

        <Stack.Screen
          name="otp_verification"
          component={OTPVerificationScreen}
          options={{headerShown: false, headerBackTitle: ''}}
        />

        <Stack.Screen
          name="orders"
          component={Orders}
          options={{
            title: 'Your Orders',
            headerBackTitle: '',
            headerTitleStyle: styles.titleTextStyle,
          }}
        />

        <Stack.Screen
          name="product_list_promotions"
          component={ProductList}
          options={{
            title: 'Products',
            headerBackTitle: '',
            headerTitleStyle: styles.titleTextStyle,
          }}
        />

        <Stack.Screen
          name="product_list_sub_categories"
          component={ProductList}
          options={{
            title: 'Products',
            headerBackTitle: '',
            headerTitleStyle: styles.titleTextStyle,
          }}
        />

        <Stack.Screen
          name="settings_address"
          component={AddressScreen}
          options={{
            title: 'Saved Address',
            headerBackTitle: '',
            headerTitleStyle: styles.titleTextStyle,
          }}
        />

        <Stack.Screen
          name="settings_new_address"
          component={NewAddressScreen}
          options={{
            title: 'Add New Address',
            headerBackTitle: '',
            headerTitleStyle: styles.titleTextStyle,
          }}
        />

        <Stack.Screen
          name="settings_user_profile"
          component={UserProfileScreen}
          options={{
            title: 'Profile',
            headerBackTitle: '',
            headerTitleStyle: styles.titleTextStyle,
          }}
        />

        <Stack.Screen
          name="settings_order_status"
          component={OrderStatusScreen}
          options={{
            title: 'Order Status',
            headerBackTitle: '',
            headerTitleStyle: styles.titleTextStyle,
          }}
        />

        <Stack.Screen
          name="order_details"
          component={OrderDetails}
          options={{
            title: 'Order Details',
            headerBackTitle: '',
            headerTitleStyle: styles.titleTextStyle,
          }}
        />

        <Stack.Screen
          name="banner_details"
          component={BannerDetails}
          options={{
            title: 'Products',
            headerBackTitle: '',
            headerTitleStyle: styles.titleTextStyle,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  titleTextStyle: {
    ...TextStyles.H1SemiBold,
    fontSize: 16,
  },
});
