import PropTypes from 'prop-types';
import React from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Button, StatusBar} from '../../../components';
import {styles} from './styles';

const {
  titleContainerStyle,
  titleTextStyle,
  inputContainerStyle,
  inputStyle,
  placeholderTextStyle,
  borderStyle,
} = styles;

const LoginPage = ({
  onPressLoginWithPhone,
  onInputPhoneNumber,
  phoneNumber,
  loading,
  onPressSkip,
  countryCode,
}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <View style={{flex: 1}}>
        <StatusBar />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={{flex: 1}}>
            <View style={titleContainerStyle}>
              <Image
                source={require('../../../../assets/images/login_phone.png')}
                style={{height: '80%', width: '80%'}}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                flex: 2,
                backgroundColor: 'white',
                padding: 25,
              }}>
              <View
                style={{
                  flexDirection: 'column',
                }}>
                <Text style={titleTextStyle}>Login With Phone Number</Text>
                <View style={inputContainerStyle}>
                  <Text style={placeholderTextStyle}>{`+${countryCode}`}</Text>
                  <View style={borderStyle} />
                  <TextInput
                    editable={loading ? false : true}
                    numberOfLines={1}
                    value={phoneNumber}
                    onChangeText={onInputPhoneNumber}
                    keyboardType="phone-pad"
                    placeholder="Enter phone number"
                    style={inputStyle}
                    maxLength={10}
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>

              <Button
                label="LOGIN"
                onPress={onPressLoginWithPhone}
                disabled={
                  (phoneNumber && phoneNumber.length === 10 ? false : true) ||
                  loading
                }
                loading={loading}
                containerStyle={{marginTop: 50}}
              />

              <Text
                onPress={onPressSkip}
                style={[
                  placeholderTextStyle,
                  {textDecorationLine: 'underline'},
                ]}>
                I will do it later
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </KeyboardAvoidingView>
  );
};

LoginPage.propTypes = {
  onPressLoginWithPhone: PropTypes.func,
  onInputPhoneNumber: PropTypes.func,
  onPressSkip: PropTypes.func,
  phoneNumber: PropTypes.string,
  loading: PropTypes.bool,
};

LoginPage.defaultProps = {
  onPressLoginWithPhone: () => {},
  onInputPhoneNumber: () => {},
  onPressSkip: () => {},
  phoneNumber: '',
  loading: false,
};

export default LoginPage;
