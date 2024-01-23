import {StyleSheet} from 'react-native';
import {Components} from '../../styles/colors';
import {TextStyles} from '../../styles/text';

export const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: Components.Background.core,
    paddingBottom: 10,
  },
  titleTextStyle: {
    ...TextStyles.H1Regular,
    marginVertical: 5,
  },
  timeTextStyle: {
    ...TextStyles.H2Regular,
    color: Components.Text.H3,
  },
});
