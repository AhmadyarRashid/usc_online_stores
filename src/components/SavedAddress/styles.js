import {StyleSheet} from 'react-native';
import {Components, Theme} from '../../styles/colors';

export const styles = StyleSheet.create({
  cardContainerStyle: {
    backgroundColor: Components.Background.core,
    padding: 10,
  },
  buttonContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightButtonStyle: {
    flex: 1,
    alignItems: 'center',
    borderRightColor: Components.Border,
    borderRightWidth: StyleSheet.hairlineWidth,
    paddingVertical: 10,
  },
  leftButtonStyle: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  buttonTextStyle: {
    color: Theme.PrimaryColor,
  },
  disabledButtonTextStyle: {
    color: Components.Text.H3,
  },
});
