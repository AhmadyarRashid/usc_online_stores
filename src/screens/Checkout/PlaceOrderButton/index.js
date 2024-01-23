import PropTypes from 'prop-types';
import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import useCreateNewOrder from '../../../api/hooks/cart/useCreateNewOrder';
import {Button} from '../../../components';
import {styles} from './styles';

const {buttonContainerStyle, messageTextStyle} = styles;

const PlaceOrderButton = ({navigation}) => {
  const {
    cart,
    deliveryAddress,
    paymentMethod,
    deliveryChargesInfo,
  } = useSelector(state => state.cart);
  const {loading, onCreateNewOrder} = useCreateNewOrder(navigation);

  const {serviceable, notServiceableMessage} = deliveryChargesInfo || {};

  const onPressButton = () => {
    onCreateNewOrder();
  };

  const RenderButton = () => {
    const isValid =
      cart &&
      Array.isArray(cart) &&
      cart.length > 0 &&
      deliveryAddress &&
      paymentMethod &&
      !loading;

    return (
      <View style={buttonContainerStyle}>
        <Button
          label="PLACE ORDER"
          disabled={isValid ? false : true}
          loading={loading}
          onPress={onPressButton}
        />
      </View>
    );
  };

  const RenderNotServiceableMessage = () => {
    return (
      <View style={buttonContainerStyle}>
        <Text style={messageTextStyle}>{notServiceableMessage}</Text>
      </View>
    );
  };

  return serviceable ? <RenderButton /> : <RenderNotServiceableMessage />;
};

PlaceOrderButton.propTypes = {
  navigation: PropTypes.object,
};

export default PlaceOrderButton;
