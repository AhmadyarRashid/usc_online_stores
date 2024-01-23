import PropTypes from 'prop-types';
import React, {useContext} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {useSelector} from 'react-redux';
import {SYMBOL} from '../../../constants';
import ModalDialogContext from '../../../context/ModalDialog/ModalDialogContext';
import {styles} from './styles';

const {amountTextStyle, checkoutButtonStyle} = styles;

const CheckoutButton = ({navigation}) => {
  const {showModalDialog} = useContext(ModalDialogContext);
  const {cart, billingInfo} = useSelector(state => state.cart);
  const {subTotal, cartItemsCount} = billingInfo || {};

  let isCartValid = true;

  if (cart && Array.isArray(cart)) {
    cart.forEach(cartItem => {
      const {quantity: availableStock, quantityCounter} = cartItem || {};
      if (quantityCounter > availableStock) {
        isCartValid = false;
      }
    });
  }

  const onPressCheckoutButton = () => {
    if (subTotal > 500) {
      if (!isCartValid) {
        showModalDialog({
          title: 'ezmart',
          message:
            'Please review your cart items. Some of the items might be running low or out of stock.',
        });
      } else {
        navigation.navigate('checkout');
      }
    } else {
      showModalDialog({
        title: 'ezmart',
        message:
          'Please add more items to your cart. Miminum order value should be more than NRS. 500',
      });
    }
  };

  return cartItemsCount > 0 ? (
    <TouchableHighlight
      style={checkoutButtonStyle}
      onPress={onPressCheckoutButton}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 2,
            backgroundColor: 'white',
            justifyContent: 'center',
            paddingHorizontal: 10,
            paddingVertical: 20,
          }}>
          <Text style={amountTextStyle}>
            {`Total (${cartItemsCount} items): ${SYMBOL.CURRENCY} ${subTotal}`}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 20,
          }}>
          <Text style={[amountTextStyle, {color: 'white'}]}>CHECKOUT</Text>
        </View>
      </View>
    </TouchableHighlight>
  ) : (
    <View />
  );
};

CheckoutButton.propTypes = {
  navigation: PropTypes.object,
};

export default CheckoutButton;
