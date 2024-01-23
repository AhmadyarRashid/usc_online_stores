import {StyleSheet} from 'react-native';
import {DEVICE} from '../../../constants';
import {Components, Theme} from '../../../styles/colors';
import {TextStyles} from '../../../styles/text';

const IMAGEWIDTH = DEVICE.width / 4;

export const styles = StyleSheet.create({
  cardStyle: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: Components.Background.core,
  },
  imageStyle: {
    width: IMAGEWIDTH,
    height: IMAGEWIDTH,
    borderRadius: 3,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Components.Border,
    backgroundColor: Components.Background.tint75Percent,
  },
  titleStyle: {
    ...TextStyles.H1Regular,
  },
  sellingPriceTextStyle: {
    ...TextStyles.H2Regular,
    fontSize: 16,
  },
  highlightSellingPriceTextStyle: {
    ...TextStyles.H2Regular,
    fontSize: 16,
    color: Theme.PrimaryColor,
  },
  originalPriceTextStyle: {
    ...TextStyles.H2Regular,
    fontSize: 16,
    textDecorationLine: 'line-through',
    paddingHorizontal: 10,
  },
  counterTextStyle: {
    ...TextStyles.H1Regular,
    width: 30,
    textAlign: 'center',
  },
  removeButtonTextStyle: {
    ...TextStyles.H2SemiBold,
  },
  stockInfoTextStyle: {
    ...TextStyles.H3Regular,
    marginLeft: 20,
    color: Components.Text.Warning,
  },
  calculatedSellingPriceTextStyle: {
    ...TextStyles.H1Regular,
  },
});
