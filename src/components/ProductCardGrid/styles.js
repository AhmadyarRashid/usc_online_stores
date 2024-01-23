import {StyleSheet} from 'react-native';
import {DEVICE} from '../../constants';
import {Components, Theme} from '../../styles/colors';
import {TextStyles} from '../../styles/text';

const CARDWIDTH = DEVICE.width / 2 - 24;
const CARDHEIGHT = CARDWIDTH * 1.4;

export const styles = StyleSheet.create({
  container: {
    height: CARDHEIGHT,
    width: CARDWIDTH,
    backgroundColor: Components.Background.core,
    marginBottom: 5,
    alignSelf: 'center',
  },
  imageContainer: {
    height: CARDWIDTH,
    width: CARDWIDTH - StyleSheet.hairlineWidth * 2,
    borderRadius: 3,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    borderRadius: 3,
    borderColor: Components.Border,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: Components.Background.tint75Percent,
  },
  titleTextStyle: {
    ...TextStyles.H1Regular,
    fontSize: 13,
  },
  sellingPriceTextStyle: {
    ...TextStyles.H2Regular,
    fontSize: 13,
  },
  originalPriceTextStyle: {
    ...TextStyles.H2Regular,
    fontSize: 13,
    color: Components.Text.H3,
    textDecorationLine: 'line-through',
  },
  highlightSellingPriceTextStyle: {
    ...TextStyles.H2Regular,
    fontSize: 13,
    color: Theme.PrimaryColor,
  },
});
