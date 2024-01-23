import {StyleSheet} from 'react-native';
import {DEVICE} from '../../constants';
import {TextStyles} from '../../styles/text';

const CardWidth = DEVICE.width * 0.8;
const CardHeight = CardWidth;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(60, 60, 60, 0.5)',
  },
  cardContainer: {
    width: CardWidth,
    height: CardHeight,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: 15,
    borderRadius: 5,
  },
  titleTextStyle: {
    ...TextStyles.H1SemiBold,
    fontSize: 25,
    textAlign: 'center',
  },
  messageTextStyle: {
    ...TextStyles.H1SemiBold,
    textAlign: 'center',
  },
});
