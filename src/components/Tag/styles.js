import {StyleSheet} from 'react-native';
import {Components, Theme} from '../../styles/colors';
import {TextStyles} from '../../styles/text';

export const styles = StyleSheet.create({
  tagContainerStyle: {
    borderRadius: 23,
    marginVertical: 5,
    marginRight: 10,
    borderWidth: 1,
    borderColor: Components.Border,
    alignSelf: 'flex-start',
  },
  selectedTagContainer: {
    borderRadius: 23,
    marginVertical: 5,
    marginRight: 10,
    borderWidth: 1,
    borderColor: Theme.SecondaryColor,
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(58, 167, 109, 0.2)',
  },
  textStyle: {
    ...TextStyles.H2Regular,
    paddingVertical: 8,
    paddingHorizontal: 15,
    textAlign: 'center',
  },
  selectedTextStyle: {
    ...TextStyles.H2Regular,
    color: Theme.SecondaryColor,
    paddingVertical: 8,
    paddingHorizontal: 15,
    textAlign: 'center',
  },
});
