import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Theme} from '../../styles/colors';

const PaginationActivityIndicator = () => (
  <ActivityIndicator size="small" color={Theme.PrimaryColor} />
);

export default PaginationActivityIndicator;
