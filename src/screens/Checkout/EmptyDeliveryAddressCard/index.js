import PropTypes from 'prop-types';
import React from 'react';
import {View} from 'react-native';
import {Button} from '../../../components';
import {styles} from './styles';

const {containerStyle} = styles;

const EmptyDeliveryAddressCard = ({onPress, title}) => {
  return (
    <View style={containerStyle}>
      <Button label={title} onPress={onPress} type="outline" />
    </View>
  );
};

EmptyDeliveryAddressCard.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
};

EmptyDeliveryAddressCard.defaultProps = {
  onPress: () => {},
  title: '',
};

export default EmptyDeliveryAddressCard;
