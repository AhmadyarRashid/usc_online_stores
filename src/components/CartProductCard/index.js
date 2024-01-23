import PropTypes from 'prop-types';
import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {SYMBOL} from '../../constants';
import {Components} from '../../styles/colors';
import Divider from '../Divider';
import {styles} from './styles';

const {
  cardStyle,
  imageStyle,
  titleStyle,
  sellingPriceTextStyle,
  originalPriceTextStyle,
  quantityTextStyle,
  counterTextStyle,
  calculatedSellingPriceTextStyle,
} = styles;

const ProductCardHorizontal = ({item, imageViewStyle, onPress}) => {
  const {title, images, varient, marketPrice, sellingPrice, quantityCounter} =
    item || {};
  const {image_0} = images || {};
  const totalSP = sellingPrice * quantityCounter;

  return (
    <TouchableHighlight
      underlayColor="transparent"
      style={{flex: 1, backgroundColor: 'white'}}
      onPress={onPress}>
      <View style={{flexDirection: 'column'}}>
        <View style={cardStyle}>
          <Image
            resizeMode="cover"
            source={{uri: image_0, cache: 'force-cache'}}
            style={[imageStyle, imageViewStyle]}
          />
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              flex: 1,
            }}>
            <View>
              <Text numberOfLines={2} ellipsizeMode="tail" style={titleStyle}>
                {title}
              </Text>
              <Text style={quantityTextStyle}>{varient}</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{flex: 2, flexDirection: 'row', alignItems: 'center'}}>
                <Text style={sellingPriceTextStyle} numberOfLines={2}>
                  {`${SYMBOL.CURRENCY} ${sellingPrice}`}
                </Text>
                <Text style={originalPriceTextStyle} numberOfLines={2}>
                  {`${SYMBOL.CURRENCY} ${marketPrice}`}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flex: 1,
                  padding: 2,
                }}>
                <Feather
                  name="minus"
                  size={25}
                  color={Components.Text.H3}
                  style={{backgroundColor: '#f7f7f7'}}
                />
                <Text style={counterTextStyle}>{quantityCounter}</Text>
                <Feather
                  name="plus"
                  size={25}
                  color={Components.Text.H3}
                  style={{backgroundColor: '#f7f7f7'}}
                />
              </View>
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
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              flexDirection: 'row',
              borderRightColor: Components.Border,
              borderRightWidth: StyleSheet.hairlineWidth,
            }}>
            <Text
              style={[counterTextStyle, {marginHorizontal: 5, fontSize: 14}]}>
              REMOVE
            </Text>
          </View>
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

ProductCardHorizontal.propTypes = {
  imageViewStyle: PropTypes.object,
  onPress: PropTypes.func,
};

ProductCardHorizontal.defaultProps = {
  imageViewStyle: {},
  onPress: () => {},
};

export default ProductCardHorizontal;
