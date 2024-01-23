import {StyleSheet} from 'react-native';
import {DEVICE} from '../../constants';
import {Components} from '../../styles/colors';
import {TextStyles} from '../../styles/text';

export const CARDWIDTH = DEVICE.width / 4;
export const PROMOTIONCARDHEIGHT = DEVICE.width * 0.6;

export const styles = StyleSheet.create({
  cardStyle: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  titleStyle: {
    ...TextStyles.H1SemiBold,
    fontSize: 16,
  },
  subTitleTextStyle: {
    ...TextStyles.H1SemiBold,
  },
  descriptionTextStyle: {
    ...TextStyles.H2Regular,
    marginVertical: 10,
    fontSize: 14,
  },
  cardContainerStyle: {
    marginBottom: 5,
    padding: 10,
    backgroundColor: Components.Background.core,
  },
});
