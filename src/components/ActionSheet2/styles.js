import {StyleSheet} from 'react-native';
import {Components} from '../../styles/colors';
import {TextStyles} from '../../styles/text';

export default StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    backgroundColor: Components.Background.core,
    maxHeight: '70%',
  },
  headerContainer: {
    backgroundColor: Components.Background.core,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderBottomColor: Components.Border,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  flatListContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: Components.Background.core,
  },
  titleTextStyle: {
    ...TextStyles.H1SemiBold,
    alignSelf: 'center',
    fontSize: 18,
  },
});
