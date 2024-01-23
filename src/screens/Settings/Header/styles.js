import {StyleSheet} from 'react-native';
import {Components} from '../../../styles/colors';
import {TextStyles} from '../../../styles/text';

export const styles = StyleSheet.create({
  containerstyle: {
    backgroundColor: Components.Background.core,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleTextStyle: {
    ...TextStyles.H1Regular,
    fontSize: 18,
    marginHorizontal: 10,
  },
  subTitleTextStyle: {
    ...TextStyles.H2Regular,
    fontSize: 14,
    marginHorizontal: 10,
  },
  avatarStyle: {
    backgroundColor: Components.Background.tint75Percent,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Components.Border,
  },
});
