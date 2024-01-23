import {StyleSheet} from 'react-native';
import {Theme} from '../../../styles/colors';
import {TextStyles} from '../../../styles/text';

export const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
    padding: 10,
  },
  headerTextStyle: {
    ...TextStyles.H1SemiBold,
  },
  subHeaderTextStyle: {
    ...TextStyles.H1Regular,
  },
  highlightTextStyle: {
    ...TextStyles.H1Regular,
    color: Theme.SecondaryColor,
  },
  totalTextStyle: {
    ...TextStyles.H1SemiBold,
    color: Theme.PrimaryColor,
  },
});
