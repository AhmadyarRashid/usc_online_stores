import PropTypes from 'prop-types';
import React from 'react';
import {Button as RNEButton} from 'react-native-elements';
import {Theme} from '../../styles/colors';
import {TextStyles} from '../../styles/text';
import {styles} from './styles';

const {
  buttonStyle,
  buttonStyleOutline,
  buttonTextStyle,
  buttonTextStyleDark,
} = styles;

const Button = ({
  label,
  disabled,
  loading,
  onPress,
  containerStyle,
  type,
  color,
}) => {
  return (
    <RNEButton
      type={type}
      disabled={disabled}
      onPress={onPress}
      title={label}
      titleStyle={
        type === 'outline'
          ? [TextStyles.H1SemiBold, buttonTextStyleDark]
          : [TextStyles.H1SemiBold, buttonTextStyle]
      }
      buttonStyle={
        type === 'outline'
          ? buttonStyleOutline
          : color
          ? [buttonStyle, {backgroundColor: color}]
          : buttonStyle
      }
      containerStyle={containerStyle}
      loading={loading}
      loadingStyle={{marginVertical: 7}}
      loadingProps={{color: Theme.PrimaryColor}}
    />
  );
};

Button.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onPress: PropTypes.func,
  containerStyle: PropTypes.object,
  type: PropTypes.string,
};

Button.defaultProps = {
  label: 'SUBMIT',
  color: Theme.PrimaryColor,
  disabled: false,
  loading: false,
  onPress: () => {},
  containerStyle: {},
  type: 'solid',
};

export default Button;
