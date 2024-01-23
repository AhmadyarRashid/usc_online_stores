import {StyleSheet} from 'react-native';
import {Components} from '../../../styles/colors';
import {TextStyles} from '../../../styles/text';

export const styles = StyleSheet.create({
  buttonContainerStyle: {
    padding: 15,
    backgroundColor: Components.Background.core,
    bottom: 0,
  },
  messageTextStyle: {
    ...TextStyles.H1SemiBold,
    color: Components.Text.Warning,
  },
});
