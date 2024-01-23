import {StyleSheet} from 'react-native';
import {Components, Theme} from '../../styles/colors';
import {TextStyles} from '../../styles/text';

export const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: Components.Background.core,
    padding: 10,
    borderRadius: 5,
  },
  titleTextStyle: {
    ...TextStyles.H1Regular,
    marginBottom: 5,
  },
  rowTitleTextStyle: {
    ...TextStyles.H1Regular,
    marginTop: 5,
  },
  rowValueTextStyle: {
    ...TextStyles.H1Regular,
    marginTop: 5,
  },
  highlightRowTextStyle: {
    ...TextStyles.H2SemiBold,
    marginTop: 5,
    fontSize: 16,
    color: Components.Text.Price,
  },
  modifiedOrderInfoTextStyle: {
    ...TextStyles.H2SemiBold,
    color: Theme.SecondaryColor,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    borderRadius: 3,
    borderColor: Components.Border,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: Components.Background.tint75Percent,
  },
});
