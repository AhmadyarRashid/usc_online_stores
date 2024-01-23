import PropTypes from 'prop-types';
import React from 'react';
import {Text, View} from 'react-native';
import {ORDER_TRACKING_STATUS_CODE, SYMBOL} from '../../constants';
import Button from '../Button';
import Divider from '../Divider';
import Tag from '../Tag';
import {styles} from './styles';

const {
  containerStyle,
  rowStyle,
  headerTextStyle,
  subHeaderTextStyle,
  statusTextStyle,
} = styles;

const OrderInfoCard = ({
  data,
  onPressDetails,
  onPressTrackOrder,
  onPressCancelOrder,
  loadingCancel,
}) => {
  const {createdAt, orderNumber, shipping, orderStatusCode, billing} =
    data || {};
  const {name, city, address, phoneNumber, alternativePhoneNumber} =
    shipping || {};
  const {netTotal} = billing || {};

  /**
   * timestamp need to be converted into string before saving it into redux
   * as redux will not save it as date object
   * so createdAt and estimatedDeliveryDate has been converted into string before saving into redux
   */

  let createdAtStringValue = '';
  let statusTitle = '';
  let disableCancelButton = true;
  let hideBothButtons = false;

  if (typeof createdAt === 'string') {
    createdAtStringValue = createdAt;
  }

  switch (orderStatusCode) {
    case ORDER_TRACKING_STATUS_CODE.ORDER_RECEIVED:
      statusTitle = 'ORDER PLACED';
      disableCancelButton = false;
      break;

    case ORDER_TRACKING_STATUS_CODE.ORDER_READY_FOR_DISPATCH:
      statusTitle = 'READY FOR DISPATCH';
      disableCancelButton = false;
      break;

    case ORDER_TRACKING_STATUS_CODE.ORDER_DISPATCHED:
      statusTitle = 'DISPATCHED';
      break;

    case ORDER_TRACKING_STATUS_CODE.ORDER_DELIVERED:
      statusTitle = 'DELIVERED';
      hideBothButtons = true;
      break;

    case ORDER_TRACKING_STATUS_CODE.ORDER_CANCELLED_BY_MERCHANT:
      statusTitle = 'DECLINED';
      hideBothButtons = true;
      break;

    case ORDER_TRACKING_STATUS_CODE.ORDER_CANCELLED_BY_USER:
      statusTitle = 'CANCELLED';
      hideBothButtons = true;
      break;

    default:
      break;
  }

  return (
    <View style={containerStyle}>
      <View style={rowStyle}>
        <Text style={headerTextStyle}>{`#${orderNumber}`}</Text>
        <Tag label="Details" onPress={onPressDetails} />
      </View>
      <View style={[rowStyle, {marginTop: 10}]}>
        <Text style={subHeaderTextStyle}>Order Placed</Text>
        <Text style={subHeaderTextStyle}>{createdAtStringValue}</Text>
      </View>
      <View style={[rowStyle, {marginTop: 5, marginBottom: 15}]}>
        <Text style={subHeaderTextStyle}>Total</Text>
        <Text
          style={subHeaderTextStyle}>{`${SYMBOL.CURRENCY} ${netTotal}`}</Text>
      </View>
      <Divider />

      <View style={[rowStyle, {marginTop: 15}]}>
        <Text style={subHeaderTextStyle}>Status</Text>
        <Text style={statusTextStyle}>{statusTitle}</Text>
      </View>

      <View style={[rowStyle, {marginTop: 15}]}>
        <Text style={subHeaderTextStyle}>{name}</Text>
      </View>
      <View style={{marginTop: 5}}>
        <Text style={subHeaderTextStyle}>{`${address}, ${city}`}</Text>
      </View>
      <Text style={subHeaderTextStyle}>
        {alternativePhoneNumber
          ? `${phoneNumber}/ ${alternativePhoneNumber}`
          : `${phoneNumber}`}
      </Text>
      {hideBothButtons ? (
        <View />
      ) : (
        <View style={[rowStyle, {marginTop: 15}]}>
          <Button
            disabled={disableCancelButton || loadingCancel}
            label="CANCEL"
            containerStyle={{flex: 1, marginRight: 10}}
            onPress={onPressCancelOrder}
            loading={loadingCancel}
          />
          <Button
            label="TRACK"
            containerStyle={{flex: 1, marginLeft: 10}}
            onPress={onPressTrackOrder}
          />
        </View>
      )}
    </View>
  );
};

OrderInfoCard.propTypes = {
  data: PropTypes.object,
  onPressDetails: PropTypes.func,
  onPressTrackOrder: PropTypes.func,
  onPressCancelOrder: PropTypes.func,
  loadingCancel: PropTypes.bool,
};

OrderInfoCard.defaultProps = {
  data: {},
  onPressDetails: () => {},
  onPressTrackOrder: () => {},
  onPressCancelOrder: () => {},
  loadingCancel: false,
};

export default OrderInfoCard;
