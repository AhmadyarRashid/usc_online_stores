import PropTypes from 'prop-types';
import React from 'react';
import {FlatList, Modal, SafeAreaView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, DeliveryAddressCard} from '../../../components';
import {
  setDeliveryAddress,
  setPaymentMethod,
} from '../../../store/actions/cart';
import {styles} from './styles';

const {modalViewContainerstyle, buttonContainerStyle} = styles;

const DeliveryAddressSelector = ({visible, onCancel}) => {
  const dispatch = useDispatch();
  const {deliveryAddressOptions} = useSelector(state => state.cart);

  const onSelectDeliveryAddress = value => {
    dispatch(setDeliveryAddress(value));
    dispatch(setPaymentMethod(null));
    onCancel();
  };

  const keyExtractor = (item, index) => index.toString();

  const renderRowItem = ({item}) => {
    return (
      <View style={{marginHorizontal: 10, marginTop: 5}}>
        <DeliveryAddressCard
          data={item}
          onPress={() => {
            onSelectDeliveryAddress(item);
          }}
        />
      </View>
    );
  };

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={null}>
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          style={modalViewContainerstyle}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}
          data={deliveryAddressOptions}
          renderItem={renderRowItem}
          removeClippedSubviews={false}
          keyExtractor={keyExtractor}
        />

        <View style={buttonContainerStyle}>
          <Button label="CANCEL" onPress={onCancel} />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

DeliveryAddressSelector.propTypes = {
  visible: PropTypes.bool,
  onCancel: PropTypes.func,
};

DeliveryAddressSelector.defaultProps = {
  visible: false,
  onCancel: () => {},
};

export default DeliveryAddressSelector;
