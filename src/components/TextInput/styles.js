import {StyleSheet} from 'react-native';
import {Components} from '../../styles/colors';
import {TextStyles} from '../../styles/text';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  headerTextStyle: {
    ...TextStyles.H2SemiBold,
  },
  inputTextStyle: {
    ...TextStyles.H1Regular,
    marginVertical: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Components.Border,
  },
  optionSelectorTextStyle: {
    ...TextStyles.H1Regular,
    marginVertical: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Components.Border,
    flex: 1,
  },
});
