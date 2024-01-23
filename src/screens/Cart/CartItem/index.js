import PropTypes from 'prop-types';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Divider} from '../../../components';
import {SYMBOL} from '../../../constants';
import {Components} from '../../../styles/colors';
import {styles} from './styles';

const {
  cardStyle,
  imageStyle,
  titleStyle,
  sellingPriceTextStyle,
  originalPriceTextStyle,
  highlightSellingPriceTextStyle,
  counterTextStyle,
  removeButtonTextStyle,
  stockInfoTextStyle,
  calculatedSellingPriceTextStyle,
} = styles;

const CartItem = ({item, onPress}) => {
  const {
    title,
    images,
    marketPrice,
    sellingPrice,
    quantity: availableStock,
    quantityCounter,
  } = item || {};
  const {image_0} = images || {};
  const showMP = marketPrice && sellingPrice && sellingPrice !== marketPrice;
  const totalSP = sellingPrice * quantityCounter;

  const isOutOfStock = availableStock < 1;
  const limitedStock = quantityCounter >= availableStock;
  let stockMessage = '';
  let thumbnail = image_0;

  if (isOutOfStock) {
    stockMessage = 'OUT OF STOCK';
  } else if (limitedStock) {
    stockMessage = `LIMITED STOCK (${availableStock})`;
  }

  const onPressPlus = () => {};

  const onPressMinus = () => {};

  const onPressRemove = () => {};

  const RenderCounterButton = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderColor: Components.Border,
          borderWidth: 1,
          borderRadius: 5,
        }}>
        <View
          style={{
            borderRightColor: Components.Border,
            borderRightWidth: 1,
            padding: 5,
          }}>
          <Feather
            name="minus"
            size={20}
            color={Components.Text.H2}
            onPress={onPressMinus}
          />
        </View>

        <Text style={counterTextStyle}>{quantityCounter}</Text>

        <View
          style={{
            borderLeftColor: Components.Border,
            borderLeftWidth: 1,
            padding: 5,
          }}>
          <Feather
            name="plus"
            size={20}
            color={Components.Text.H2}
            onPress={onPressPlus}
          />
        </View>
      </View>
    );
  };

  return (
    <TouchableHighlight
      underlayColor="transparent"
      style={{flex: 1, backgroundColor: Components.Background.core}}
      onPress={onPress}>
      <View style={{flexDirection: 'column'}}>
        <View style={cardStyle}>
          <Image
            resizeMode="cover"
            source={{uri: thumbnail, cache: 'force-cache'}}
            style={imageStyle}
          />
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              flex: 1,
            }}>
            <Text numberOfLines={2} ellipsizeMode="tail" style={titleStyle}>
              {title}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: 40,
              }}>
              <View
                style={{flex: 2, flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={
                    showMP
                      ? highlightSellingPriceTextStyle
                      : sellingPriceTextStyle
                  }
                  numberOfLines={1}>
                  {`${SYMBOL.CURRENCY} ${sellingPrice}`}
                </Text>
                <Text style={originalPriceTextStyle} numberOfLines={1}>
                  {showMP ? `${SYMBOL.CURRENCY} ${marketPrice}` : ''}
                </Text>
              </View>
              <RenderCounterButton />
            </View>
          </View>
        </View>
        <View style={{marginHorizontal: 10}}>
          <Divider />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}>
          <TouchableOpacity
            underlayColor="transparent"
            style={{
              flex: 1,
              alignItems: 'center',
              flexDirection: 'row',
              borderRightColor: Components.Border,
              borderRightWidth: StyleSheet.hairlineWidth,
            }}
            onPress={onPressRemove}>
            <Text style={removeButtonTextStyle}>REMOVE</Text>
          </TouchableOpacity>
          <Text style={stockInfoTextStyle}>{stockMessage}</Text>
          <View style={{alignItems: 'center', flex: 2}}>
            <Text
              style={[
                calculatedSellingPriceTextStyle,
                {alignSelf: 'flex-end'},
              ]}>{`${SYMBOL.CURRENCY} ${totalSP}`}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
  onPress: PropTypes.func,
};

CartItem.defaultProps = {
  item: {},
  onPress: () => {},
};

export default CartItem;
