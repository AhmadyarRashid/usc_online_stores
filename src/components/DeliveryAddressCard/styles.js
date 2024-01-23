import {StyleSheet} from 'react-native';
import {Components} from '../../styles/colors';
import {TextStyles} from '../../styles/text';

export const styles = StyleSheet.create({
  cardContainerStyle: {
    backgroundColor: Components.Background.core,
    padding: 10,
  },
  titleTextStyle: {
    ...TextStyles.H1SemiBold,
    marginVertical: 5,
  },
});
