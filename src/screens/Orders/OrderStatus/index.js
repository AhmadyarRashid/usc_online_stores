import React from 'react';
import {Linking, SafeAreaView, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useFetchOrderStatus from '../../../api/hooks/orders/useFetchOrderStatus';
import {ActivityIndicator, Button, StatusBar} from '../../../components';
import {ORDER_TRACKING_STATUS_CODE} from '../../../constants';
import {Components, Theme} from '../../../styles/colors';
import {styles} from './styles';

const {container, titleTextStyle} = styles;

const {
  ORDER_RECEIVED,
  ORDER_READY_FOR_DISPATCH,
  ORDER_DISPATCHED,
  ORDER_DELIVERED,
} = ORDER_TRACKING_STATUS_CODE || {};

const OrderStatus = ({route}) => {
  const {orderId} = route.params || {};
  const {orderStatusCode, loading, error} = useFetchOrderStatus(orderId);

  const phone = '123456789';

  let orderReceivedChecked = false;
  let orderReadyForDispatchChecked = false;
  let orderDispatchedChecked = false;
  let orderDeliveredChecked = false;

  switch (orderStatusCode) {
    case ORDER_RECEIVED:
      orderReceivedChecked = true;
      break;

    case ORDER_READY_FOR_DISPATCH:
      orderReceivedChecked = true;
      orderReadyForDispatchChecked = true;
      break;

    case ORDER_DISPATCHED:
      orderReceivedChecked = true;
      orderReadyForDispatchChecked = true;
      orderDispatchedChecked = true;
      break;

    case ORDER_DELIVERED:
      orderReceivedChecked = true;
      orderReadyForDispatchChecked = true;
      orderDispatchedChecked = true;
      orderDeliveredChecked = true;
      break;

    default:
      break;
  }

  const onPressCall = () => {
    if (phone) {
      Linking.canOpenURL(`tel:${phone}`)
        .then(supported => {
          if (supported) {
            Linking.openURL(`tel:${phone}`);
          }
        })
        .catch(e => {});
    }
  };

  const RenderItem = ({title, checked, eventId}) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={{alignItems: 'center'}}>
          {checked ? (
            <Ionicons
              name="checkmark-circle"
              size={25}
              color={Theme.SecondaryColor}
            />
          ) : (
            <Ionicons
              name="ellipse-outline"
              size={25}
              color={Components.Text.H3}
            />
          )}
          {eventId === ORDER_DELIVERED ? (
            <View />
          ) : (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'stretch',
                backgroundColor: Components.Text.H3,
                width: 2,
                height: 70,
              }}
            />
          )}
        </View>
        <View style={{marginLeft: 15}}>
          <Text style={titleTextStyle}>{title}</Text>
        </View>
      </View>
    );
  };

  return loading ? (
    <ActivityIndicator />
  ) : (
    <SafeAreaView style={container}>
      <StatusBar />
      {error ? (
        <View />
      ) : (
        <View style={{padding: 15}}>
          <RenderItem title="Order Placed" checked={orderReceivedChecked} />
          <RenderItem
            title="Ready For Dispatch"
            checked={orderReadyForDispatchChecked}
          />
          <RenderItem title="Dispatched" checked={orderDispatchedChecked} />
          <RenderItem
            title="Delivered"
            checked={orderDeliveredChecked}
            eventId={ORDER_DELIVERED}
          />
        </View>
      )}
      <Button
        label="CALL FOR ENQUIRY"
        containerStyle={{margin: 25}}
        onPress={onPressCall}
      />
    </SafeAreaView>
  );
};

export default OrderStatus;
