import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {OrderDetailsProductCard, StatusBar} from '../../../components';
import {Components} from '../../../styles/colors';
import BillingInfo from './BillingInfo';
import ShippingInfo from './ShippingInfo';

const OrderDetails = ({route}) => {
  const {item} = route.params || {};
  const {
    products,
    shipping,
    payment,
    billing,
    paymentStatusCode,
    orderStatusCode,
  } = item || {};

  const keyExtractor = (item, index) => index.toString();

  const renderProductCard = ({item}) => {
    return (
      <View style={{marginBottom: 5}}>
        <OrderDetailsProductCard productInfo={item} />
      </View>
    );
  };

  const RenderHeader = () => {
    return (
      <View>
        <BillingInfo
          payment={payment}
          billing={billing}
          paymentStatusCode={paymentStatusCode}
          orderStatusCode={orderStatusCode}
        />
        <ShippingInfo shipping={shipping} />
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: Components.Background.core}}>
      <StatusBar />
      <View
        style={{
          backgroundColor: Components.Background.tint75Percent,
          flex: 1,
        }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={products || []}
          renderItem={renderProductCard}
          keyExtractor={keyExtractor}
          ListHeaderComponent={RenderHeader}
        />
      </View>
    </SafeAreaView>
  );
};

export default OrderDetails;
