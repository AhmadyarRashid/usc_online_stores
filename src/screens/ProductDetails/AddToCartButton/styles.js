import {StyleSheet} from 'react-native';
import {Components} from '../../../styles/colors';

export const styles = StyleSheet.create({
  addToCartButtonStyle: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: Components.Background.core,
    alignItems: 'center',
    borderTopColor: Components.Border,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
});
