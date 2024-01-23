import {StyleSheet} from 'react-native';
import {DEVICE} from '../../constants';
import {Components} from '../../styles/colors';
import {TextStyles} from '../../styles/text';

const AVATARWIDTH = DEVICE.width / 6.5;
const OUTLINEWIDTH = AVATARWIDTH + 7;

export const styles = StyleSheet.create({
  containerStyle: {
    width: DEVICE.width / 5,
  },
  labelTextStyle: {
    ...TextStyles.H2SemiBold,
    textAlign: 'center',
  },
  selectedLabelTextStyle: {
    ...TextStyles.H2SemiBold,
    color: Components.Text.H2,
    textAlign: 'center',
  },
  avatarStyle: {
    width: AVATARWIDTH,
    height: AVATARWIDTH,
    borderRadius: AVATARWIDTH / 2,
    backgroundColor: Components.Background.tint75Percent,
  },
  outlineStyle: {
    width: OUTLINEWIDTH,
    height: OUTLINEWIDTH,
    borderRadius: OUTLINEWIDTH / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Components.Text.H3,
    borderWidth: 1,
  },
});
