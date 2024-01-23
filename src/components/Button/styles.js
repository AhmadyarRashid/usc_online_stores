import {StyleSheet} from 'react-native';
import {Components} from '../../styles/colors';

export const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 5,
    backgroundColor: Components.Button,
  },
  buttonStyleOutline: {
    borderRadius: 5,
    borderColor: Components.Text.H2,
  },
  buttonTextStyle: {
    color: Components.Text.Light,
    marginVertical: 5,
  },
  buttonTextStyleDark: {
    color: Components.Text.H2,
    marginVertical: 5,
  },
});
