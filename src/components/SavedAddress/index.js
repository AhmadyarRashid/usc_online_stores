import PropTypes from 'prop-types';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {TextStyles} from '../../styles/text';
import Divider from '../Divider';
import {styles} from './styles';

const {
  cardContainerStyle,
  buttonContainerStyle,
  rightButtonStyle,
  leftButtonStyle,
  buttonTextStyle,
  disabledButtonTextStyle,
} = styles;

const SavedAddress = ({
  data,
  onPressSetAsDefault,
  onPressRemove,
  editable,
  showChevronIcon,
  onPressChevronIcon,
}) => {
  const {
    isDefault,
    name,
    city,
    locality,
    address,
    alternativePhoneNumber,
    phoneNumber,
  } = data || {};

  return (
    <View style={{marginBottom: 5}}>
      {isDefault ? (
        <Text style={[TextStyles.H1SemiBold, {margin: 10}]}>
          DEFAULT ADDRESS
        </Text>
      ) : (
        <View />
      )}
      <View style={cardContainerStyle}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flex: 1}}>
            <Text numberOfLines={1} style={TextStyles.H1SemiBold}>
              {name}
            </Text>
            <View style={{marginTop: 5}}>
              <Text numberOfLines={1} style={TextStyles.H1Regular}>
                {locality ? `${city}, ${locality}` : city}
              </Text>
              <Text numberOfLines={3} style={TextStyles.H1Regular}>
                {address}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text style={TextStyles.H1Regular}>Mobile: </Text>
              <Text style={TextStyles.H1SemiBold}>
                {alternativePhoneNumber
                  ? `${phoneNumber}/ ${alternativePhoneNumber}`
                  : `${phoneNumber}`}
              </Text>
            </View>
          </View>
          {showChevronIcon ? (
            <Feather
              name="chevron-right"
              size={25}
              onPress={onPressChevronIcon}
            />
          ) : (
            <View />
          )}
        </View>

        {editable ? (
          <View>
            <View style={{marginBottom: 5, marginTop: 15}}>
              <Divider />
            </View>
            <View style={buttonContainerStyle}>
              <TouchableOpacity
                style={rightButtonStyle}
                onPress={onPressSetAsDefault}
                disabled={isDefault ? true : false}>
                <Text
                  style={[
                    TextStyles.H1SemiBold,
                    buttonTextStyle,
                    isDefault ? disabledButtonTextStyle : {},
                  ]}>
                  SET AS DEFAULT
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={leftButtonStyle} onPress={onPressRemove}>
                <Text style={[TextStyles.H1SemiBold, buttonTextStyle]}>
                  REMOVE
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View />
        )}
      </View>
    </View>
  );
};

SavedAddress.propTypes = {
  onPressSetAsDefault: PropTypes.func,
  onPressRemove: PropTypes.func,
  onPressChevronIcon: PropTypes.func,
  editable: PropTypes.bool,
  showChevronIcon: PropTypes.bool,
  data: PropTypes.object,
};

SavedAddress.defaultProps = {
  onPressSetAsDefault: () => {},
  onPressRemove: () => {},
  onPressChevronIcon: () => {},
  editable: false,
  showChevronIcon: false,
  data: {},
};

export default SavedAddress;
