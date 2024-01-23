import PropTypes from 'prop-types';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Components, Theme} from '../../styles/colors';
import {TextStyles} from '../../styles/text';

const CheckBoxLabel = ({title, onPress, checked, disabled}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={disabled ? () => {} : onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
      }}>
      <Ionicons
        name={checked ? 'ios-checkbox' : 'ios-square-outline'}
        color={checked ? Theme.SecondaryColor : Components.Text.H1}
        size={20}
        style={{
          paddingRight: 15,
          paddingVertical: 10,
        }}
      />
      <Text style={TextStyles.H1Regular} numberOfLines={1}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

CheckBoxLabel.propTypes = {
  title: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
};

CheckBoxLabel.defaultProps = {
  title: 'SUBMIT',
  checked: false,
  disabled: false,
  onPress: () => {},
};

export default CheckBoxLabel;
