import {StyleSheet} from 'react-native';

import {Components} from '../styles/colors';
import {Fonts} from '../styles/typography';

export const TextStyles = StyleSheet.create({
  H1SemiBold: {
    fontSize: 14,
    fontFamily: Fonts.Semibold,
    color: Components.Text.H1,
  },
  H1Regular: {
    fontSize: 14,
    fontFamily: Fonts.Regular,
    color: Components.Text.H1,
  },
  H2SemiBold: {
    fontSize: 12,
    fontFamily: Fonts.Semibold,
    color: Components.Text.H2,
  },
  H2Regular: {
    fontSize: 12,
    fontFamily: Fonts.Regular,
    color: Components.Text.H2,
  },
  H3SemiBold: {
    fontSize: 10,
    fontFamily: Fonts.Semibold,
    color: Components.Text.H3,
  },
  H3Regular: {
    fontSize: 10,
    fontFamily: Fonts.Regular,
    color: Components.Text.H3,
  },
});
