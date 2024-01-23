import PropTypes from 'prop-types';
import React from 'react';
import {
  Text,
  TextInput as RNTextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Components} from '../../styles/colors';
import {styles} from './styles';

const {
  container,
  headerTextStyle,
  inputTextStyle,
  optionSelectorTextStyle,
} = styles;

const TextInput = ({
  title,
  placeholder,
  value,
  onPressSelectOption,
  keyboardType,
  onChangeText,
  editable,
  containerStyle,
  maxLength,
}) => (
  <View style={[container, containerStyle]}>
    {title ? <Text style={headerTextStyle}>{title}</Text> : <View />}
    {onPressSelectOption ? (
      <TouchableOpacity
        onPress={onPressSelectOption}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {placeholder ? (
          <Text style={[optionSelectorTextStyle, {color: Components.Text.H3}]}>
            {placeholder}
          </Text>
        ) : (
          <Text style={optionSelectorTextStyle}>{value}</Text>
        )}
      </TouchableOpacity>
    ) : (
      <RNTextInput
        editable={editable}
        numberOfLines={1}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType || 'default'}
        placeholder={placeholder}
        style={inputTextStyle}
        maxLength={maxLength}
        underlineColorAndroid="transparent"
        placeholderTextColor={Components.Text.H3}
        autoCorrect={false}
        clearButtonMode="while-editing"
      />
    )}
  </View>
);

TextInput.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  keyboardType: PropTypes.string,
  maxLength: PropTypes.number,
  editable: PropTypes.bool,
  onPressSelectOption: PropTypes.func,
  onChangeText: PropTypes.func,
  containerStyle: PropTypes.object,
};

TextInput.defaultProps = {
  title: '',
  placeholder: '',
  value: '',
  keyboardType: 'default',
  maxLength: 100,
  editable: true,
  onPressSelectOption: null,
  onChangeText: () => {},
  containerStyle: {},
};

export default TextInput;
