import {StyleSheet} from 'react-native';
import {Components, Theme} from '../../../../styles/colors';
import {TextStyles} from '../../../../styles/text';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Components.Background.core,
    padding: 10,
    marginBottom: 5,
  },
  rowTextStyle: {
    ...TextStyles.H1Regular,
  },
  totalAmountTextStyle: {
    ...TextStyles.H1SemiBold,
  },
  highlightTextStyle: {
    ...TextStyles.H1Regular,
    color: Theme.SecondaryColor,
  },
});
