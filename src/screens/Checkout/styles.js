import {StyleSheet} from 'react-native';
import {Components} from '../../styles/colors';

export const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Components.Background.core,
  },
  contentcontainerStyle: {
    backgroundColor: Components.Background.tint75Percent,
  },
});
