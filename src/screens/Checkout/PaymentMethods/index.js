import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {PAYMENT_METHODS} from '../../../constants';
import {setPaymentMethod} from '../../../store/actions/cart';
import {Components, Theme} from '../../../styles/colors';
import {styles} from './styles';

const {
  containerStyle,
  headerTextStyle,
  buttonContainerstyle,
  buttonTextstyle,
  infoTextStyle,
} = styles;

const PaymentMethods = () => {
  const dispatch = useDispatch();
  const {paymentMethod, deliveryAddress, deliveryChargesInfo} = useSelector(
    state => state.cart,
  );

  const {city: selectedCity} = deliveryAddress || {};
  const {codCities} = deliveryChargesInfo || {};

  let supportsCOD = false;

  if (codCities && Array.isArray(codCities)) {
    codCities.forEach(cityItem => {
      const {name} = cityItem || {};

      if (name === selectedCity) {
        supportsCOD = true;
      }
    });
  }

  const onPressCOD = () => {
    dispatch(setPaymentMethod(PAYMENT_METHODS.COD));
  };

  const RenderCOD = () => {
    const isSelected = paymentMethod === PAYMENT_METHODS.COD;

    return (
      <TouchableOpacity onPress={onPressCOD}>
        <View
          style={
            isSelected
              ? [buttonContainerstyle, {borderColor: Theme.PrimaryColor}]
              : buttonContainerstyle
          }>
          <Text
            style={
              isSelected
                ? [buttonTextstyle, {color: Theme.PrimaryColor}]
                : buttonTextstyle
            }>
            Cash On Delivery
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const RenderCODInfo = () => {
    const {cashOnDelivery} = deliveryChargesInfo || {};
    const {message: CODMessage} = cashOnDelivery || {};

    return (
      <View style={{backgroundColor: Components.Background.core, padding: 10}}>
        <Text style={infoTextStyle}>{CODMessage}</Text>
      </View>
    );
  };

  return (
    <View style={containerStyle}>
      <Text style={headerTextStyle}>PAYMENT METHODS</Text>
      <View style={{flexDirection: 'row'}}>
        <RenderCOD />
      </View>
      <RenderCODInfo />
    </View>
  );
};

export default PaymentMethods;
