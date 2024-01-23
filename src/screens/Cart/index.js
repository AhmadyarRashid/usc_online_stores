import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {ActivityIndicator, StatusBar} from '../../components';
import {Components} from '../../styles/colors';
import {CartData} from '../../utilities/CartData';
import CartItem from './CartItem';
import CartPriceDetails from './CartPriceDetails';
import CheckoutButton from './CheckoutButton';
import EmptyCart from './EmptyCart';
import {setCart} from '../../store/actions/cart';

const Cart = ({navigation}) => {
  const dispatch = useDispatch();
  const {cart} = useSelector(state => state.cart);
  const [loading, setLoading] = useState();

  useEffect(() => {
    async function fetchDataFromServer() {
      setLoading(true);
      await new Promise(r => setTimeout(r, 2000));
      dispatch(setCart(CartData));
      setLoading(false);
    }

    fetchDataFromServer();
  }, []);

  const keyExtractor = (item, index) => index.toString();

  const renderProductCard = ({item}) => {
    return (
      <View style={{marginBottom: 5, borderRadius: 5}}>
        <CartItem item={item} />
      </View>
    );
  };

  const PriceDetails = () => {
    return <CartPriceDetails cart={cart} />;
  };

  const RenderEmptyCart = () => (
    <View style={{flex: 1}}>
      <EmptyCart />
    </View>
  );

  return loading ? (
    <ActivityIndicator />
  ) : (
    <SafeAreaView
      style={{flex: 1, backgroundColor: Components.Background.core}}>
      <StatusBar />
      <View style={{flex: 1, backgroundColor: Components.Background.core}}>
        <FlatList
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor: Components.Background.tint75Percent,
          }}
          showsVerticalScrollIndicator={false}
          data={cart || []}
          renderItem={renderProductCard}
          keyExtractor={keyExtractor}
          ListFooterComponent={PriceDetails}
          ListEmptyComponent={RenderEmptyCart}
        />
        <CheckoutButton navigation={navigation} cart={cart} />
      </View>
    </SafeAreaView>
  );
};

export default Cart;
