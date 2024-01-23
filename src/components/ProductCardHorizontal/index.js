import PropTypes from 'prop-types';
import React from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import {SYMBOL} from '../../constants';
import {styles} from './styles';

const {
  cardStyle,
  imageStyle,
  titleStyle,
  sellingPriceTextStyle,
  originalPriceTextStyle,
  highlightSellingPriceTextStyle,
} = styles;

const ProductCardHorizontal = ({productInfo, imageViewStyle, onPress}) => {
  const {title, images, marketPrice, sellingPrice} = productInfo || {};
  const {image_0: imageURL} = images || {};
  const showMP = marketPrice && sellingPrice !== marketPrice;

  return (
    <TouchableHighlight
      underlayColor="transparent"
      style={{flex: 1}}
      onPress={onPress}>
      <View style={cardStyle}>
        <Image
          resizeMode="cover"
          source={{uri: imageURL, cache: 'force-cache'}}
          style={[imageStyle, imageViewStyle]}
        />
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            flex: 1,
          }}>
          <Text numberOfLines={3} ellipsizeMode="tail" style={titleStyle}>
            {title}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={
                showMP ? highlightSellingPriceTextStyle : sellingPriceTextStyle
              }
              numberOfLines={1}>
              {`${SYMBOL.CURRENCY} ${sellingPrice}`}
            </Text>
            {showMP ? (
              <Text style={originalPriceTextStyle} numberOfLines={1}>
                {`  ${SYMBOL.CURRENCY}${marketPrice}`}
              </Text>
            ) : (
              <View />
            )}
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

ProductCardHorizontal.propTypes = {
  imageViewStyle: PropTypes.object,
  productInfo: PropTypes.object,
  onPress: PropTypes.func,
};

ProductCardHorizontal.defaultProps = {
  imageViewStyle: {},
  productInfo: {},
  onPress: () => {},
};

export default ProductCardHorizontal;
