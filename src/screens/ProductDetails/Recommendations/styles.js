import {StyleSheet} from 'react-native';
import {DEVICE} from '../../../constants';
import {Components} from '../../../styles/colors';
import {TextStyles} from '../../../styles/text';

const CARDWIDTH = DEVICE.width / 2.8;
const CARDHEIGHT = CARDWIDTH * 1.4;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginBottom: 5,
    backgroundColor: Components.Background.core,
  },
  headerTextStyle: {
    ...TextStyles.H1SemiBold,
    marginBottom: 15,
  },
  productCardContainer: {
    height: CARDHEIGHT,
    width: CARDWIDTH,
  },
  productImageContainer: {
    height: CARDWIDTH,
    width: CARDWIDTH - StyleSheet.hairlineWidth * 2,
  },
});
