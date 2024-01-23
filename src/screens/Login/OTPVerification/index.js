import React from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Button} from '../../../components';
import {styles} from './styles';

const {
  titleContainerStyle,
  titleTextStyle,
  inputContainerStyle,
  inputStyle,
} = styles;

const OTPVerification = ({
  verificationCode,
  onInputVerificationCode,
  onPressConfirmCode,
  error,
  loading,
  onPressBack,
}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <View style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={{flex: 1}}>
            <View style={titleContainerStyle}>
              <Image
                source={require('../../../../assets/images/otp_verification.png')}
                style={{height: '80%', width: '80%'}}
                resizeMode="contain"
              />
              <TouchableHighlight
                underlayColor="transparent"
                onPress={onPressBack}
                style={{position: 'absolute', top: 40, left: 10}}>
                <AntDesign
                  size={35}
                  name="leftcircle"
                  color=" rgba(0, 0, 0, 0.6)"
                />
              </TouchableHighlight>
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
                <Text
                  style={[
                    error ? [titleTextStyle, {color: 'red'}] : titleTextStyle,
                  ]}>
                  {error ? `Verification Failed!` : 'OTP Verification'}
                </Text>
                <View
                  style={
                    error
                      ? [inputContainerStyle, {borderColor: 'red'}]
                      : inputContainerStyle
                  }>
                  <TextInput
                    editable={loading ? false : true}
                    value={verificationCode}
                    onChangeText={onInputVerificationCode}
                    keyboardType="phone-pad"
                    placeholder="Enter OTP"
                    style={inputStyle}
                    maxLength={6}
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>

              <Button
                label="VERIFY"
                onPress={onPressConfirmCode}
                disabled={
                  (verificationCode && verificationCode.length >= 6
                    ? false
                    : true) || loading
                }
                loading={loading}
                containerStyle={{marginTop: 30}}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </KeyboardAvoidingView>
  );
};

export default OTPVerification;
