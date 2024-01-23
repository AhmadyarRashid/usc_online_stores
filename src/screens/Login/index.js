import React, {useState} from 'react';
import LoginPage from './LoginPage';
import OTPVerification from './OTPVerification';

const Login = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isRequestingOTP, setIsRequestingOTP] = useState(false);
  const [isVerifyingOTP, setIsVerifyingOTP] = useState(false);
  const [loading, setLoading] = useState();

  const [confirm, setConfirm] = useState(null);
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationError, setVerificationError] = useState(false);

  const onPressLoginWithPhone = async () => {
    setLoading(true);
    setIsRequestingOTP(true);

    const confirmation = 12345;
    setConfirm(confirmation);

    setIsRequestingOTP(false);
    setLoading(false);
  };

  const onPressConfirmCode = async () => {
    setIsVerifyingOTP(true);
    setIsVerifyingOTP(false);
  };

  const onInputPhoneNumber = value => {
    setPhoneNumber(value);
  };

  const onInputVerificationCode = value => {
    setVerificationError(false);
    setVerificationCode(value);
  };

  const onPressSkip = () => {
    navigation.navigate('main_app');
  };

  const onPressTryAnotherNumber = () => {
    setPhoneNumber('');
    setConfirm(null);
    setVerificationCode('');
    setVerificationError(false);
  };

  const onPressCancelOTPScreen = () => {
    setConfirm(null);
    setVerificationCode('');
    setVerificationError(false);
  };

  return !confirm ? (
    <LoginPage
      onInputPhoneNumber={onInputPhoneNumber}
      onPressLoginWithPhone={onPressLoginWithPhone}
      phoneNumber={phoneNumber}
      loading={isRequestingOTP}
      onPressSkip={onPressSkip}
      countryCode={'92'}
    />
  ) : (
    <OTPVerification
      verificationCode={verificationCode}
      onInputVerificationCode={onInputVerificationCode}
      onPressConfirmCode={onPressConfirmCode}
      error={verificationError}
      onPressTryAnotherNumber={onPressTryAnotherNumber}
      loading={isVerifyingOTP || loading}
      onPressBack={onPressCancelOTPScreen}
    />
  );
};

export default Login;
