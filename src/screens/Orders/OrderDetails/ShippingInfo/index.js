import PropTypes from 'prop-types';
import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const {container, rowTextStyle, titleTextStyle} = styles;

const ShippingInfo = ({shipping}) => {
  const {name, city, phoneNumber, alternativePhoneNumber, address} =
    shipping || {};

  const contactNumber = `${phoneNumber} ${
    alternativePhoneNumber ? `/ ${alternativePhoneNumber}` : ''
  }`;

  return (
    <View style={container}>
      <Text style={titleTextStyle}>Shipping Info</Text>
      <Text style={rowTextStyle}>{name}</Text>
      <Text style={rowTextStyle}>{`${address}, ${city}`}</Text>
      <Text style={rowTextStyle}>{contactNumber}</Text>
    </View>
  );
};

ShippingInfo.propTypes = {
  shipping: PropTypes.object,
};

ShippingInfo.defaultProps = {
  shipping: {},
};

export default ShippingInfo;
