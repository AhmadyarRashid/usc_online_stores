import PropTypes from 'prop-types';
import React from 'react';
import {Alert} from 'react-native';
import useCancelOrder from '../../../../api/hooks/orders/useCancelOrder';
import {OrderInfoCard} from '../../../../components';

const RowItem = ({data, navigation}) => {
  const {id: orderId} = data || {};

  const {loading: loadingCancel, onCancelOrder} = useCancelOrder();

  const onConfirmCancel = () => {
    onCancelOrder(orderId);
  };

  const onPressCancelOrder = () => {
    Alert.alert(
      'Cancel Order',
      'Are you sure you want to cancel this order?',
      [
        {text: 'YES', onPress: onConfirmCancel},
        {text: 'NO', onPress: null},
      ],
      {cancelable: false},
    );
  };

  const onPressDetails = () => {
    navigation.navigate('order_details', {item: data});
  };

  const onPressTrackOrder = () => {
    navigation.navigate('settings_order_status', {
      orderId,
    });
  };

  return (
    <OrderInfoCard
      data={data}
      onPressDetails={onPressDetails}
      onPressCancelOrder={onPressCancelOrder}
      onPressTrackOrder={onPressTrackOrder}
      loadingCancel={loadingCancel}
    />
  );
};

RowItem.propTypes = {
  data: PropTypes.object,
};

RowItem.defaultProps = {
  data: {},
};

export default RowItem;
