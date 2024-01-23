import {StyleSheet} from 'react-native';
import {Colors, Components} from '../../../styles/colors';
import {Fonts} from '../../../styles/typography';

export const styles = StyleSheet.create({
  titleContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flex: 2,
  },
  titleTextStyle: {
    fontSize: 18,
    fontFamily: Fonts.SourceSansProSemibold,
    color: Components.Text.H1,
    alignSelf: 'center',
    marginBottom: 15,
  },
  inputContainerStyle: {
    backgroundColor: Colors.White.tint50Percent,
    borderRadius: 5,
    borderColor: Components.Border,
    borderWidth: 1,
    flexDirection: 'row',
  },
  inputStyle: {
    flex: 1,
    padding: 15,
    fontSize: 18,
    fontFamily: Fonts.SourceSansProRegular,
    color: Components.Text.H1,
  },
  placeholderTextStyle: {
    fontFamily: Fonts.SourceSansProRegular,
    alignSelf: 'center',
    padding: 15,
    fontSize: 18,
    color: Components.Text.H3,
  },
  borderStyle: {
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: Components.Border,
    width: StyleSheet.hairlineWidth,
    marginVertical: 10,
  },
});
