import PropTypes from 'prop-types';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {SYMBOL} from '../../constants';
import {styles} from './styles';

const {
  imageStyle,
  containerStyle,
  titleTextStyle,
  rowTitleTextStyle,
  rowValueTextStyle,
  highlightRowTextStyle,
  modifiedOrderInfoTextStyle,
} = styles;

const OrderDetailsProductCard = ({productInfo}) => {
  const {title, images, sellingPrice, quantity, modified} = productInfo || {};
  const {image_0} = images || {};

  let thumbnailURL = image_0;

  const RenderRow = ({title, value, highlight}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={rowTitleTextStyle}>{title}</Text>
        <Text style={highlight ? highlightRowTextStyle : rowValueTextStyle}>
          {value}
        </Text>
      </View>
    );
  };

  const RenderThumbnail = () => (
    <View
      style={{
        flex: 1,
        aspectRatio: 1,
      }}>
      <Image
        resizeMode="cover"
        source={{
          uri: thumbnailURL,
          cache: 'force-cache',
        }}
        style={imageStyle}
      />
    </View>
  );

  const RenderModifiedInfo = () => {
    if (modified) {
      return <Text style={modifiedOrderInfoTextStyle}>* Modified</Text>;
    }

    return <View />;
  };

  return (
    <View style={containerStyle}>
      <Text numberOfLines={2} ellipsizeMode="tail" style={titleTextStyle}>
        {title}
      </Text>
      <View style={{flexDirection: 'row', marginVertical: 10}}>
        <RenderThumbnail />
        <View style={{flexDirection: 'column', marginLeft: 10, flex: 1.5}}>
          <RenderRow title="Quantity:" value={`${quantity}`} />
          {sellingPrice ? (
            <RenderRow
              title="Selling Price:"
              value={`${SYMBOL.CURRENCY} ${sellingPrice}`}
            />
          ) : (
            <View />
          )}
        </View>
      </View>
      <RenderModifiedInfo />
    </View>
  );
};

OrderDetailsProductCard.propTypes = {
  productInfo: PropTypes.object,
};

OrderDetailsProductCard.defaultProps = {
  productInfo: {},
};

export default OrderDetailsProductCard;
