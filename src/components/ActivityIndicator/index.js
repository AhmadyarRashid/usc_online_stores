import React from 'react';
import {
  SafeAreaView,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';
import StatusBar from '../StatusBar';
import {Theme} from '../../styles/colors';

const ActivityIndicator = () => (
  <SafeAreaView
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
    }}>
    <StatusBar />
    <RNActivityIndicator size="large" color={Theme.PrimaryColor} />
  </SafeAreaView>
);

export default ActivityIndicator;
