import {StyleSheet} from 'react-native';
import {Components} from '../../../styles/colors';
import {TextStyles} from '../../../styles/text';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Components.Background.core,
    paddingHorizontal: 5,
    marginBottom: 5,
  },
  cardStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 0.85,
  },
  imageContainer: {
    width: '95%',
    aspectRatio: 1,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    borderRadius: 3,
    borderColor: Components.Border,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: Components.Background.tint75Percent,
  },
  labelTextStyle: {
    ...TextStyles.H2SemiBold,
    paddingHorizontal: 3,
    marginTop: 5,
  },
});
