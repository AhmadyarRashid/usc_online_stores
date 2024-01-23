import {StyleSheet} from 'react-native';
import {Components} from '../../../styles/colors';
import {TextStyles} from '../../../styles/text';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Components.Background.core,
    justifyContent: 'space-between',
  },
  titleTextStyle: {
    ...TextStyles.H1SemiBold,
    fontSize: 18,
  },
});
