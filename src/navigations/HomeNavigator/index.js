import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Icon, withBadge} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import useAppInitialization from '../../api/hooks/useAppInitialization';
import {ActivityIndicator, Button} from '../../components';
import CartNavigator from '../../navigations/CartNavigator';
import Categories from '../../screens/Categories';
import HomeScreen from '../../screens/Home';
import SettingsScreen from '../../screens/Settings';
import Studio from '../../screens/Studio';
import {Components} from '../../styles/colors';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  const {cart} = useSelector(state => state.cart);
  const [loading, error, onRetry] = useAppInitialization();

  let cartItemsCount = null;

  if (cart && Array.isArray(cart) && cart.length > 0) {
    cartItemsCount = cart.length;
  }

  const BadgedIcon = withBadge(cartItemsCount)(Icon);

  return loading ? (
    <ActivityIndicator />
  ) : error ? (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button label="RETRY" onPress={onRetry} />
    </SafeAreaView>
  ) : (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Components.Icon,
        inactiveTintColor: Components.Text.H2,
        showLabel: false,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          const {name} = route;
          let iconName = null;

          switch (name) {
            case 'Home':
              if (focused) {
                iconName = 'home-sharp';
              } else {
                iconName = 'home-outline';
              }

              break;

            case 'Categories':
              if (focused) {
                iconName = 'grid';
              } else {
                iconName = 'grid-outline';
              }
              break;

            case 'Cart':
              if (focused) {
                iconName = 'cart';
              } else {
                iconName = 'cart-outline';
              }
              break;

            case 'Studio':
              if (focused) {
                iconName = 'md-albums';
              } else {
                iconName = 'md-albums-outline';
              }
              break;

            case 'Settings':
              if (focused) {
                iconName = 'person';
              } else {
                iconName = 'person-outline';
              }
              break;

            default:
              break;
          }

          if (name === 'Cart') {
            if (cart && cart.length > 0) {
              return (
                <BadgedIcon
                  type="ionicon"
                  name={iconName}
                  color={color}
                  size={26}
                />
              );
            }

            return <Ionicons name={iconName} size={26} color={color} />;
          } else {
            return <Ionicons name={iconName} size={23} color={color} />;
          }
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Cart" component={CartNavigator} />
      <Tab.Screen name="Studio" component={Studio} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
