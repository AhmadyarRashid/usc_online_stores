import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Divider} from '../../../../components';
import {SYMBOL} from '../../../../constants';
import {Components, Theme} from '../../../../styles/colors';
import {styles} from './styles';

const {
  container,
  rowTextStyle,
  totalAmountTextStyle,
  highlightTextStyle,
} = styles;

const BillingInfo = ({payment, billing}) => {
  const {method} = payment || {};
  const {
    cartTotal,
    cartDiscount,
    subTotal,
    deliveryCharge,
    netTotal,
    cartItemsCount,
  } = billing || {};

  const RowItem = ({title, value, isDiscount}) => {
    const displayValue = isDiscount
      ? `- ${SYMBOL.CURRENCY} ${value}`
      : `${SYMBOL.CURRENCY} ${value}`;

    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 5,
        }}>
        <Text style={rowTextStyle}>{title}</Text>
        <Text style={isDiscount ? highlightTextStyle : rowTextStyle}>
          {displayValue}
        </Text>
      </View>
    );
  };

  return (
    <View style={container}>
      <View style={{marginBottom: 5}}>
        <Text
          style={
            totalAmountTextStyle
          }>{`PRICE DETAILS (${cartItemsCount} Items)`}</Text>
      </View>
      <RowItem title="Cart Total" value={cartTotal} />
      <RowItem title="Cart Discount" value={cartDiscount} isDiscount />
      <RowItem title="Sub Total" value={subTotal} />
      <RowItem title="Delivery Charge" value={deliveryCharge} />

      <View style={{marginVertical: 5}}>
        <Divider />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 5,
        }}>
        <Text style={totalAmountTextStyle}>Total</Text>
        <Text
          style={totalAmountTextStyle}>{`${SYMBOL.CURRENCY} ${netTotal}`}</Text>
      </View>

      {cartDiscount > 0 ? (
        <Text
          style={
            highlightTextStyle
          }>{`* You Saved ${SYMBOL.CURRENCY} ${cartDiscount}`}</Text>
      ) : (
        <View />
      )}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
          padding: 10,
          borderRadius: 5,
          borderColor: Components.Border,
          borderWidth: StyleSheet.hairlineWidth,
          backgroundColor: Components.Background.tint75Percent,
        }}>
        <Text style={[rowTextStyle, {color: Theme.PrimaryColor}]}>
          Payment Method
        </Text>
        <Text
          style={[
            rowTextStyle,
            {color: Theme.PrimaryColor},
          ]}>{`${method}`}</Text>
      </View>
    </View>
  );
};

BillingInfo.propTypes = {
  payment: PropTypes.object,
  billing: PropTypes.object,
  paymentStatusCode: PropTypes.number,
  orderStatusCode: PropTypes.number,
};

BillingInfo.defaultProps = {
  payment: {},
  billing: {},
};

export default BillingInfo;
