import PropTypes from 'prop-types';
import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {TextStyles} from '../../styles/text';
import {styles} from './styles';

const {cardContainerStyle, titleTextStyle} = styles;

const DeliveryAddressCard = ({data, showChevronIcon, onPress}) => {
  const {name, city, locality, address, alternativePhoneNumber, phoneNumber} =
    data || {};

  return (
    <TouchableHighlight underlayColor="transparent" onPress={onPress}>
      <View style={cardContainerStyle}>
        <Text style={titleTextStyle}>DELIVERY ADDRESS</Text>
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
            <Feather name="chevron-right" size={25} />
          ) : (
            <View />
          )}
        </View>
      </View>
    </TouchableHighlight>
  );
};

DeliveryAddressCard.propTypes = {
  showChevronIcon: PropTypes.bool,
  data: PropTypes.object,
  onPress: PropTypes.func,
};

DeliveryAddressCard.defaultProps = {
  showChevronIcon: false,
  data: {},
  onPress: () => {},
};

export default DeliveryAddressCard;
