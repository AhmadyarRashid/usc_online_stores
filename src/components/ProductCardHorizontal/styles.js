import {StyleSheet} from 'react-native';
import {DEVICE} from '../../constants';
import {Components, Theme} from '../../styles/colors';
import {TextStyles} from '../../styles/text';

const IMAGEWIDTH = DEVICE.width / 3;

export const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: Components.Background.core,
    flexDirection: 'row',
    marginBottom: 10,
  },
  imageStyle: {
    width: IMAGEWIDTH,
    height: IMAGEWIDTH,
    borderRadius: 3,
    backgroundColor: Components.Background.tint75Percent,
    borderColor: Components.Border,
    borderWidth: StyleSheet.hairlineWidth,
  },
  titleStyle: {
    ...TextStyles.H1Regular,
  },
  sellingPriceTextStyle: {
    ...TextStyles.H2Regular,
    fontSize: 14,
  },
  originalPriceTextStyle: {
    ...TextStyles.H2Regular,
    fontSize: 14,
    color: Components.Text.H3,
    textDecorationLine: 'line-through',
  },
  highlightSellingPriceTextStyle: {
    ...TextStyles.H2Regular,
    fontSize: 14,
    color: Theme.PrimaryColor,
  },
});
