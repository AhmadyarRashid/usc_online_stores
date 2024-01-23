import PropTypes from 'prop-types';
import React from 'react';
import {useSelector} from 'react-redux';
import useAddUserAddress from '../../../../api/hooks/useAddUserAddress';
import {Button} from '../../../../components';

const SubmitButton = ({navigation}) => {
  const {fullName, alternativeNumber, city, address} = useSelector(
    state => state.address,
  );
  const {loading, success, onCreateUserAddress} = useAddUserAddress();

  const onPressSubmit = async () => {
    const phoneNumber = 123456890;
    const {name: cityName} = city || {};

    const userAddressData = {
      name: fullName,
      phoneNumber: phoneNumber,
      alternativePhoneNumber: alternativeNumber,
      city: cityName,
      address: address,
    };

    await onCreateUserAddress(userAddressData);
  };

  const RenderSubmitButton = () => {
    return (
      <Button
        containerStyle={{marginHorizontal: 30, marginVertical: 15}}
        onPress={onPressSubmit}
        loading={loading}
      />
    );
  };

  const onPressDone = () => {
    navigation.goBack();
  };

  return success ? (
    <Button
      containerStyle={{marginHorizontal: 30, marginVertical: 15}}
      onPress={onPressDone}
      label={'DONE'}
    />
  ) : (
    <RenderSubmitButton />
  );
};

SubmitButton.propTypes = {
  navigation: PropTypes.object,
};

export default SubmitButton;
