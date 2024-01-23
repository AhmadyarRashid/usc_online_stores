import {useIsFocused} from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import {Platform, StatusBar as RNStatusBar, View} from 'react-native';
import {Components} from '../../styles/colors';

const StatusBar = ({primaryTheme}) => {
  const isFocused = useIsFocused();

  if (Platform.OS === 'ios') {
    if (isFocused && primaryTheme) {
      return <RNStatusBar barStyle="light-content" />;
    }
  }

  if (isFocused) {
    return primaryTheme ? (
      <RNStatusBar barStyle="default" backgroundColor={Components.HOME_BG} />
    ) : (
      <RNStatusBar
        barStyle="dark-content"
        backgroundColor={Components.Background.core}
      />
    );
  }

  return <View />;
};

StatusBar.propTypes = {
  primaryTheme: PropTypes.bool,
};

StatusBar.defaultProps = {
  primaryTheme: false,
};

export default StatusBar;
