import PropTypes from 'prop-types';
import React from 'react';
import {ImageBackground, Text, TouchableHighlight, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SYMBOL} from '../../constants';
import {Components} from '../../styles/colors';
import {styles} from './styles';

const {
  container,
  imageContainer,
  imageStyle,
  titleTextStyle,
  sellingPriceTextStyle,
  originalPriceTextStyle,
  highlightSellingPriceTextStyle,
} = styles;

const ProductCardGrid = ({
  productInfo,
  onPress,
  containerStyle,
  imageContainerStyle,
}) => {
  const {title, marketPrice, sellingPrice, images, variants} =
    productInfo || {};
  const {image_0: imageURL} = images || {};
  const showMP = marketPrice && sellingPrice && sellingPrice !== marketPrice;
  const variantsCount = variants && Array.isArray(variants) && variants.length;

  return (
    <View style={[container, containerStyle]}>
      <TouchableHighlight
        underlayColor="transparent"
        onPress={onPress}
        style={[imageContainer, imageContainerStyle]}>
        <ImageBackground
          style={imageStyle}
          imageStyle={{borderRadius: 3, resizeMode: 'cover'}}
          source={{
            uri: imageURL,
            cache: 'force-cache',
          }}>
          {variantsCount ? (
            <View
              style={{
                borderRadius: 15,
                width: 30,
                height: 30,
                backgroundColor: 'rgba(60, 60, 60, 0.7)',
                bottom: 10,
                right: 10,
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MaterialCommunityIcons
                name="palette-swatch-outline"
                size={18}
                color={Components.Background.core}
                style={{}}
              />
            </View>
          ) : (
            <View />
          )}
        </ImageBackground>
      </TouchableHighlight>
      <View
        style={{
          flex: 1,
          paddingTop: 5,
        }}>
        <Text numberOfLines={2} ellipsizeMode="tail" style={titleTextStyle}>
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
  );
};

ProductCardGrid.propTypes = {
  productInfo: PropTypes.object,
  onPress: PropTypes.func,
  containerStyle: PropTypes.object,
  imageContainerStyle: PropTypes.object,
};

ProductCardGrid.defaultProps = {
  productInfo: {},
  onPress: () => {},
  containerStyle: {},
  imageContainerStyle: {},
};

export default ProductCardGrid;
