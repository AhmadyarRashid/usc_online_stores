import {StyleSheet} from 'react-native';
import {DEVICE} from '../../constants';
import {Components} from '../../styles/colors';
import {TextStyles} from '../../styles/text';

export const CARDWIDTH = DEVICE.width / 4;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Components.Background.core,
    borderRadius: 5,
    paddingHorizontal: 10,
    flex: 1,
  },
  inputTextStyle: {
    ...TextStyles.H1Regular,
    flex: 1,
    fontSize: 16,
    paddingBottom: 10,
  },
});
