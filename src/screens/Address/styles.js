import {StyleSheet} from 'react-native';
import {Theme} from '../../styles/colors';
import {TextStyles} from '../../styles/text';

export const styles = StyleSheet.create({
  buttonTextStyle: {
    color: Theme.PrimaryColor,
  },
  titleTextStyle: {
    ...TextStyles.H1SemiBold,
    fontSize: 25,
  },
  subTitleTextStyle: {
    ...TextStyles.H3Regular,
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 50,
    marginTop: 10,
  },
});
