import {StyleSheet} from 'react-native';
import {Components} from '../../styles/colors';
import {TextStyles} from '../../styles/text';

export const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 3,
    borderColor: Components.Border,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: Components.Background.tint75Percent,
    minWidth: 70,
  },
  selectedContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    marginLeft: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 3,
    borderColor: Components.Border,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: Components.Border,
    minWidth: 70,
  },
  labelTextStyle: {
    ...TextStyles.H2SemiBold,
    marginHorizontal: 3,
  },
  selectedLabelStyle: {
    ...TextStyles.H2SemiBold,
    color: Components.Text.H2,
    marginHorizontal: 3,
  },
});
