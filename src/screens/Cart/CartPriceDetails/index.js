import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Divider} from '../../../components';
import {SYMBOL} from '../../../constants';
import {styles} from './styles';

const {
  containerStyle,
  headerTextStyle,
  subHeaderTextStyle,
  highlightTextStyle,
  totalTextStyle,
} = styles;

const CartPriceDetails = () => {
  const {billingInfo} = useSelector(state => state.cart);
  const {cartTotal, cartDiscount, subTotal, cartItemsCount} = billingInfo || {};

  return cartItemsCount > 0 ? (
    <View style={containerStyle}>
      <Text style={headerTextStyle}>
        {`PRICE DETAILS (${cartItemsCount} Items)`}
      </Text>
      <View style={{marginVertical: 10}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={subHeaderTextStyle}>Cart Total</Text>
          <Text
            style={
              subHeaderTextStyle
            }>{`${SYMBOL.CURRENCY} ${cartTotal}`}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 5,
          }}>
          <Text style={subHeaderTextStyle}>Cart Discount</Text>
          <Text
            style={
              highlightTextStyle
            }>{`- ${SYMBOL.CURRENCY} ${cartDiscount}`}</Text>
        </View>
      </View>

      <Divider />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: 10,
        }}>
        <Text style={headerTextStyle}>Total Amount</Text>
        <Text style={totalTextStyle}>{`${SYMBOL.CURRENCY} ${subTotal}`}</Text>
      </View>
      {cartDiscount > 0 ? (
        <Text
          style={
            highlightTextStyle
          }>{`* You Save ${SYMBOL.CURRENCY} ${cartDiscount}`}</Text>
      ) : (
        <View />
      )}
    </View>
  ) : (
    <View />
  );
};

export default CartPriceDetails;
