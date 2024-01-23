import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import useFetchDeliveryCharges from '../../api/hooks/checkout/useFetchDeliveryCharges';
import useFetchDeliveryAddress from '../../api/hooks/user/useFetchDeliveryAddress';
import {
  ActivityIndicator,
  DeliveryAddressCard,
  StatusBar,
} from '../../components';
import {setDeliveryAddress} from '../../store/actions/cart';
import CheckoutPriceDetails from './CheckoutPriceDetails';
import DeliveryAddressSelector from './DeliveryAddressSelector';
import EmptyDeliveryAddressCard from './EmptyDeliveryAddressCard';
import PaymentMethods from './PaymentMethods';
import PlaceOrderButton from './PlaceOrderButton';
import {styles} from './styles';

const {containerStyle, contentcontainerStyle} = styles;

const Checkout = ({navigation}) => {
  const dispatch = useDispatch();
  const {cart, deliveryAddress, deliveryAddressOptions} = useSelector(
    state => state.cart,
  );

  const {loading, error} = useFetchDeliveryAddress();
  const {
    loading: loadingDeliveryCharges,
    error: deliveryChargesError,
  } = useFetchDeliveryCharges();

  useEffect(() => {
    dispatch(setDeliveryAddress());
  }, []);

  const [
    isDeliveryAddressSelectorVisible,
    showDeliveryAddressSelector,
  ] = useState(false);

  const changeStateForDeliveryAddressSelectorModalView = () => {
    showDeliveryAddressSelector(!isDeliveryAddressSelectorVisible);
  };

  const onPressAddNewAddress = () => {
    navigation.navigate('settings_new_address');
  };

  const RenderDeliveryAddressCard = () => {
    const optionsCount =
      deliveryAddressOptions &&
      Array.isArray(deliveryAddressOptions) &&
      deliveryAddressOptions.length;

    if (optionsCount > 0 && !deliveryAddress) {
      return (
        <EmptyDeliveryAddressCard
          onPress={changeStateForDeliveryAddressSelectorModalView}
          title="SELECT DELIVERY ADDRESS"
        />
      );
    }

    if (optionsCount > 0 && deliveryAddress) {
      return (
        <DeliveryAddressCard
          showChevronIcon
          data={deliveryAddress}
          onPress={changeStateForDeliveryAddressSelectorModalView}
        />
      );
    }

    return (
      <EmptyDeliveryAddressCard
        onPress={onPressAddNewAddress}
        title="ADD NEW DELIVERY ADDRESS"
      />
    );
  };

  return loading || loadingDeliveryCharges ? (
    <ActivityIndicator />
  ) : error || deliveryChargesError ? (
    <View />
  ) : (
    <SafeAreaView style={containerStyle}>
      <StatusBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={contentcontainerStyle}>
        <View style={{marginBottom: 5}}>
          <RenderDeliveryAddressCard />
        </View>
        <CheckoutPriceDetails cart={cart} />
        <PaymentMethods />
      </ScrollView>
      <PlaceOrderButton navigation={navigation} />
      <DeliveryAddressSelector
        visible={isDeliveryAddressSelectorVisible}
        onCancel={changeStateForDeliveryAddressSelectorModalView}
      />
    </SafeAreaView>
  );
};

export default Checkout;
