import PropTypes from 'prop-types';
import React from 'react';
import {Text, View} from 'react-native';
import {SYMBOL} from '../../../constants';
import {styles} from './styles';

const {
  sellingPriceTextStyle,
  highlightSellingPriceTextStyle,
  originalPriceTextStyle,
  savingPriceTextStyle,
} = styles;

const Price = ({product, selectedVariant}) => {
  let MP = null;
  let SP = null;

  if (selectedVariant) {
    const {marketPrice, sellingPrice} = selectedVariant || {};
    MP = marketPrice;
    SP = sellingPrice;
  } else {
    const {marketPrice, sellingPrice} = product || {};
    MP = marketPrice;
    SP = sellingPrice;
  }

  const showMP = MP && SP && SP !== MP;

  const RenderSavingPrice = () => {
    if (MP && SP && !isNaN(MP) && !isNaN(SP) && SP < MP) {
      return (
        <Text style={savingPriceTextStyle} numberOfLines={1}>
          {`(You save ${SYMBOL.CURRENCY} ${MP - SP})`}
        </Text>
      );
    }

    return <View />;
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
      }}>
      <Text
        style={showMP ? highlightSellingPriceTextStyle : sellingPriceTextStyle}
        numberOfLines={2}>
        {`${SYMBOL.CURRENCY} ${SP}`}
      </Text>
      <Text style={originalPriceTextStyle} numberOfLines={2}>
        {showMP ? `  ${SYMBOL.CURRENCY}  ${MP}` : ''}
      </Text>
      <RenderSavingPrice />
    </View>
  );
};

Price.propTypes = {
  product: PropTypes.object,
  selectedVariant: PropTypes.object,
};

export default Price;
