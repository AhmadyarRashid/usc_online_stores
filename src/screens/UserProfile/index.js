import React, {useLayoutEffect, useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Avatar} from 'react-native-elements';
import {Divider} from '../../components';
import RowItem from '../../screens/Settings/RowItem';
import {styles} from './styles';
import UserForm from './UserForm';

const appLogo = require('../../../assets/images/logo/logo.png');

const {nameTextStyle, headerButtonTextStyle, avatarContainerStyle} = styles;

const UserProfile = ({navigation, route}) => {
  const {enableEdit} = route.params || {};
  const [editable, setEditable] = useState(enableEdit);

  const userData = {
    name: 'Bradford Abdiel',
    phoneNumber: '1234567890',
  };

  const {name, phoneNumber} = userData || {};

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            setEditable(!editable);
          }}>
          <Text style={headerButtonTextStyle}>
            {editable ? 'CANCEL' : 'EDIT'}
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, editable]);

  const onPressSignOut = () => {
    navigation.navigate('Settings');
  };

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: 'white',
          padding: 25,
        }}>
        <Avatar
          containerStyle={avatarContainerStyle}
          source={appLogo}
          size="xlarge"
          rounded
          activeOpacity={0.7}
        />
        {editable ? (
          <UserForm navigation={navigation} />
        ) : (
          <Text style={nameTextStyle} numberOfLines={1}>
            {name}
          </Text>
        )}
      </View>
      {editable ? (
        <View />
      ) : (
        <View>
          <RowItem
            iconName="call"
            label={phoneNumber}
            showChevronIcon={false}
          />
          <Divider />
          <RowItem
            iconName="log-out"
            label="Signout"
            onPress={onPressSignOut}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default UserProfile;
