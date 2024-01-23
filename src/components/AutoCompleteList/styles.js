import {StyleSheet} from 'react-native';
import {Components} from '../../styles/colors';

export default StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    backgroundColor: Components.Background.core,
    flex: 1,
  },
  flatListContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: Components.Background.core,
  },
});
