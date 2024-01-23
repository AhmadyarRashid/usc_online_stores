import {StyleSheet} from 'react-native';
import {Components, Theme} from '../../styles/colors';
import {TextStyles} from '../../styles/text';

export const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: Components.Background.core,
    padding: 10,
  },
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTextStyle: {
    ...TextStyles.H1SemiBold,
  },
  subHeaderTextStyle: {
    ...TextStyles.H1Regular,
  },
  statusTextStyle: {
    ...TextStyles.H1SemiBold,
    color: Theme.PrimaryColor,
  },
});
