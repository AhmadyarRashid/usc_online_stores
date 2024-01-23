import {StyleSheet} from 'react-native';
import {Components} from '../../../../styles/colors';
import {TextStyles} from '../../../../styles/text';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Components.Background.core,
    padding: 10,
    marginBottom: 5,
  },
  rowTextStyle: {
    ...TextStyles.H1Regular,
    marginTop: 5,
  },
  titleTextStyle: {
    ...TextStyles.H1SemiBold,
  },
});
