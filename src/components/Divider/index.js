import React from 'react';
import {StyleSheet, View} from 'react-native';

const Divider = () => (
  <View
    style={{
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
      height: StyleSheet.hairlineWidth,
      backgroundColor: '#D8D9D9',
    }}
  />
);

export default Divider;
