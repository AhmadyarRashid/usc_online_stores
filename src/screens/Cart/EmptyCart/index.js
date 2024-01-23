import React from 'react';
import {Image, SafeAreaView, Text} from 'react-native';
import {styles} from './styles';

const {titleTextStyle, subTitleTextStyle} = styles;

const BuyOnlineImage = require('../../../../assets/images/online_cart.png');

const EmptyCart = () => {
  const RenderEmptyCart = () => {
    return (
      <Image
        source={BuyOnlineImage}
        style={{height: '60%', width: '80%', alignSelf: 'center'}}
        resizeMode="contain"
      />
    );
  };

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
      <RenderEmptyCart />
      <Text style={titleTextStyle}>Your Cart is Empty</Text>
      <Text style={subTitleTextStyle}>
        Looks like you haven't added anything to your cart yet
      </Text>
    </SafeAreaView>
  );
};

export default EmptyCart;
