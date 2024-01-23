import PropTypes from 'prop-types';
import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {Avatar} from 'react-native-elements';
import {styles} from './styles';

const {titleTextStyle, subTitleTextStyle, containerstyle, avatarStyle} = styles;
const appLogo = require('../../../../assets/images/logo/logo.png');

const Header = ({onPress, loggedIn, user}) => {
  const {profileImageURL, name, email} = user || {};

  return (
    <TouchableHighlight underlayColor="transparent" onPress={onPress}>
      <View style={containerstyle}>
        <Avatar
          rounded
          size="large"
          source={
            profileImageURL
              ? {
                  uri: profileImageURL,
                  cache: 'force-cache',
                }
              : appLogo
          }
          containerStyle={avatarStyle}
        />
        {loggedIn ? (
          <View>
            <Text style={titleTextStyle}>{name || 'ezmart'}</Text>
            <Text numberOfLines={2} style={subTitleTextStyle}>
              {email}
            </Text>
          </View>
        ) : (
          <Text style={titleTextStyle}>Login</Text>
        )}
      </View>
    </TouchableHighlight>
  );
};

Header.propTypes = {
  onPress: PropTypes.func,
  user: PropTypes.object,
  loggedIn: PropTypes.bool,
};

Header.defaultProps = {
  onPress: () => {},
  user: {},
  loggedIn: false,
};

export default Header;
