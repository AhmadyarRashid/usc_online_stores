import {StyleSheet} from 'react-native';
import {Components, Theme} from '../../styles/colors';
import {TextStyles} from '../../styles/text';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    flex: 1,
  },
  nameTextStyle: {
    ...TextStyles.H1SemiBold,
    fontSize: 20,
    alignSelf: 'center',
    marginVertical: 20,
  },
  headerButtonTextStyle: {
    ...TextStyles.H1SemiBold,
    paddingHorizontal: 10,
    color: Theme.PrimaryColor,
  },
  avatarContainerStyle: {
    backgroundColor: Components.Background.tint75Percent,
    marginBottom: 20,
    alignSelf: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Components.Border,
  },
});
