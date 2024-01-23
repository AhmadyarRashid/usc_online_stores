import PropTypes from 'prop-types';
import React from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import {styles} from './styles';

const {
  containerStyle,
  labelTextStyle,
  selectedLabelTextStyle,
  avatarStyle,
  outlineStyle,
} = styles;

const PrimaryCategoryButton = ({
  label,
  onPress,
  imageUrl,
  showLabel,
  selected,
}) => {
  return (
    <TouchableHighlight
      underlayColor="transparent"
      style={containerStyle}
      onPress={onPress}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          margin: 5,
        }}>
        <View
          style={
            selected
              ? outlineStyle
              : [outlineStyle, {borderColor: 'transparent'}]
          }>
          <Image
            resizeMode="cover"
            source={{uri: imageUrl || null, cache: 'force-cache'}}
            style={avatarStyle}
          />
        </View>
        {showLabel ? (
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={selected ? selectedLabelTextStyle : labelTextStyle}>
            {label}
          </Text>
        ) : (
          <View />
        )}
      </View>
    </TouchableHighlight>
  );
};

PrimaryCategoryButton.propTypes = {
  selected: PropTypes.bool,
  showLabel: PropTypes.bool,
  onPress: PropTypes.func,
  imageUrl: PropTypes.string,
  label: PropTypes.string,
};

PrimaryCategoryButton.defaultProps = {
  selected: false,
  showLabel: true,
  onPress: () => {},
  imageUrl: null,
  label: '',
};

export default PrimaryCategoryButton;
