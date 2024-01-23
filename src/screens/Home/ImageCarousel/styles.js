import {Platform, StyleSheet} from 'react-native';
import {DEVICE} from '../../../constants';
import {Components} from '../../../styles/colors';

export const SLIDERWIDTH = DEVICE.width;
export const SLIDERHEIGHT = SLIDERWIDTH * 0.4;

export const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Components.Background.core,
  },
  cardStyle: {
    width: SLIDERWIDTH - 60,
    height: (SLIDERWIDTH - 60) * 0.6,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}),
    backgroundColor: Components.Background.core,
    borderRadius: 3,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
    borderRadius: 3,
  },
});
