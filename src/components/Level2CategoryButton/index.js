import PropTypes from 'prop-types';
import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {styles} from './styles';

const {
  containerStyle,
  selectedContainerStyle,
  labelTextStyle,
  selectedLabelStyle,
} = styles;

const Level2CategoryButton = ({label, selected, onPress}) => {
  return (
    <TouchableHighlight underlayColor="transparent" onPress={onPress}>
      <View style={selected ? selectedContainerStyle : containerStyle}>
        <Text style={selected ? selectedLabelStyle : labelTextStyle}>
          {label}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

Level2CategoryButton.propTypes = {
  label: PropTypes.string,
  selected: PropTypes.bool,
  onPress: PropTypes.func,
};

Level2CategoryButton.defaultProps = {
  label: '',
  selected: false,
  onPress: () => {},
};

export default Level2CategoryButton;
