import {StyleSheet} from 'react-native';
import {Components} from '../../../styles/colors';
import {TextStyles} from '../../../styles/text';

export const styles = StyleSheet.create({
  containerStyle: {
    marginVertical: 5,
    backgroundColor: Components.Background.core,
  },
  headerTextStyle: {
    ...TextStyles.H1SemiBold,
    padding: 10,
  },
  buttonContainerstyle: {
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Components.Border,
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonTextstyle: {
    ...TextStyles.H3SemiBold,
    fontSize: 13,
    marginHorizontal: 10,
  },
  infoTextStyle: {
    ...TextStyles.H1Regular,
    color: Components.Text.H2,
  },
});
