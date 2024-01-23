import {StyleSheet} from 'react-native';
import {TextStyles} from '../../../styles/text';

export const styles = StyleSheet.create({
  titleTextStyle: {
    ...TextStyles.H1SemiBold,
    fontSize: 20,
  },
  subTitleTextStyle: {
    ...TextStyles.H1Regular,
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 50,
    marginTop: 10,
  },
});
