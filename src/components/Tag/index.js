import PropTypes from 'prop-types';
import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {styles} from './styles';

const {
  tagContainerStyle,
  selectedTagContainer,
  textStyle,
  selectedTextStyle,
} = styles;

const Tag = ({onPress, label, selected}) => (
  <TouchableHighlight underlayColor="transparent" onPress={onPress}>
    <View style={selected ? selectedTagContainer : tagContainerStyle}>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={selected ? selectedTextStyle : textStyle}>
        {label}
      </Text>
    </View>
  </TouchableHighlight>
);

Tag.propTypes = {
  onPress: PropTypes.func,
  label: PropTypes.string,
  selected: PropTypes.bool,
};

Tag.defaultProps = {
  onPress: () => {},
  label: 'tag',
  selected: false,
};

export default Tag;
