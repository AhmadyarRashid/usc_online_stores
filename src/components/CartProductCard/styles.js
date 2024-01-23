import {StyleSheet} from 'react-native';
import {DEVICE} from '../../constants';
import {Components} from '../../styles/colors';
import {Fonts} from '../../styles/typography';

const IMAGEWIDTH = DEVICE.width / 4;

export const styles = StyleSheet.create({
  cardStyle: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  imageStyle: {
    width: IMAGEWIDTH,
    height: IMAGEWIDTH,
    borderRadius: 5,
    backgroundColor: Components.Background.tint75Percent,
  },
  titleStyle: {
    fontSize: 16,
    fontFamily: Fonts.SourceSansProSemibold,
    color: Components.Text.H1,
  },
  quantityTextStyle: {
    fontSize: 14,
    fontFamily: Fonts.SourceSansProRegular,
    color: Components.Text.H2,
  },
  sellingPriceTextStyle: {
    fontSize: 16,
    fontFamily: Fonts.SourceSansProSemibold,
    color: Components.Text.Price,
  },
  originalPriceTextStyle: {
    fontSize: 14,
    fontFamily: Fonts.SourceSansProRegular,
    color: Components.Text.H3,
    textDecorationLine: 'line-through',
    paddingHorizontal: 5,
  },
  counterTextStyle: {
    fontSize: 16,
    padding: 5,
    fontFamily: Fonts.SourceSansProRegular,
    color: Components.Text.H2,
  },
  calculatedSellingPriceTextStyle: {
    fontSize: 16,
    fontFamily: Fonts.SourceSansProSemibold,
    color: Components.Text.H1,
  },
});
