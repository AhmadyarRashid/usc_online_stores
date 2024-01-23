import {StyleSheet} from 'react-native';
import {Components} from '../../styles/colors';
import {TextStyles} from '../../styles/text';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Components.Background.core,
    flex: 1,
  },
  headerContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Components.Background.core,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Components.Border,
  },
  headerTextStyle: {
    ...TextStyles.H1Regular,
    fontSize: 20,
    marginLeft: 5,
  },
});
