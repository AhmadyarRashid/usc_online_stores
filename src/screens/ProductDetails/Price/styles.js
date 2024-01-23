import {StyleSheet} from 'react-native';
import {Components, Theme} from '../../../styles/colors';
import {TextStyles} from '../../../styles/text';

export const styles = StyleSheet.create({
  sellingPriceTextStyle: {
    ...TextStyles.H1Regular,
    fontSize: 16,
  },
  highlightSellingPriceTextStyle: {
    ...TextStyles.H1Regular,
    color: Theme.PrimaryColor,
    fontSize: 16,
  },
  originalPriceTextStyle: {
    ...TextStyles.H1Regular,
    marginHorizontal: 5,
    color: Components.Text.H2,
    textDecorationLine: 'line-through',
  },
  savingPriceTextStyle: {
    ...TextStyles.H1Regular,
    color: Theme.SecondaryColor,
    marginLeft: 5,
  },
});
