import {StyleSheet} from 'react-native';
import {Theme} from '../../../styles/colors';
import {TextStyles} from '../../../styles/text';

export const styles = StyleSheet.create({
  amountTextStyle: {
    ...TextStyles.H1SemiBold,
  },
  checkoutButtonStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: Theme.PrimaryColor,
    bottom: 0,
    marginTop: 5,
  },
});
