import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AutoCompleteList, StatusBar, TextInput} from '../../../components';
import {
  setAddress,
  setAlternativeNumber,
  setCity,
  setFullName,
} from '../../../store/actions/address';
import {Components} from '../../../styles/colors';
import SubmitButton from './SubmitButton';

const NewAddress = ({navigation}) => {
  const dispatch = useDispatch();
  const {fullName, alternativeNumber, city, address} = useSelector(
    state => state.address,
  );

  const phoneNumber = 123456789;

  const [isCityActionSheetVisible, setCityActionSheetvisibility] = useState(
    false,
  );

  const onChangeName = value => {
    dispatch(setFullName(value));
  };

  const onChangeAlternativePhoneNumber = value => {
    dispatch(setAlternativeNumber(value));
  };

  const onSelectCity = value => {
    dispatch(setCity(value));
    setCityActionSheetvisibility(false);
  };

  const onChangeAddress = value => {
    dispatch(setAddress(value));
  };

  const RenderCityTextInput = () => {
    const {name} = city || {};

    return (
      <TextInput
        title="City"
        value={name}
        editable={false}
        onPressSelectOption={() => setCityActionSheetvisibility(true)}
      />
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <SafeAreaView
        style={{flex: 1, backgroundColor: Components.Background.core}}>
        <StatusBar />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{backgroundColor: Components.Background.tint75Percent}}>
            <View
              style={{
                padding: 15,
                backgroundColor: Components.Background.core,
              }}>
              <TextInput
                onPress="omg"
                title="Full Name"
                placeholder="Full Name"
                value={fullName}
                maxLength={100}
                onChangeText={onChangeName}
              />
              <TextInput
                title="Registered Mobile Number"
                placeholder="Registered Mobile Number"
                value={`${phoneNumber}`}
                editable={false}
              />
              <TextInput
                title="Alternative Mobile Number (optional)"
                placeholder="Alternative Mobile Number"
                value={alternativeNumber}
                maxLength={10}
                keyboardType="phone-pad"
                onChangeText={onChangeAlternativePhoneNumber}
              />
              <RenderCityTextInput />
              <TextInput
                title="Address"
                placeholder="Address (House No, Building, Street, Area)"
                maxLength={500}
                value={address}
                onChangeText={onChangeAddress}
              />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>

        <SubmitButton navigation={navigation} />
        <AutoCompleteList
          title="Select City"
          data={Cities}
          visible={isCityActionSheetVisible}
          onPressButton={() => {
            setCityActionSheetvisibility(false);
          }}
          onPressCancel={() => {
            setCityActionSheetvisibility(false);
          }}
          onPress={onSelectCity}
          selectedItem={city}
          buttonLabel="DONE"
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

NewAddress.propTypes = {
  navigation: PropTypes.object,
};

export default NewAddress;

const Cities = [
  {id: 1, name: 'Somerton'},
  {id: 2, name: 'Swindon'},
  {id: 3, name: 'Rushden'},
  {id: 4, name: 'Rasen'},
  {id: 5, name: 'Jasper'},
  {id: 6, name: 'Brandon'},
  {id: 7, name: 'Bollington'},
  {id: 8, name: 'Ramsgate'},
  {id: 9, name: 'Rockville'},
];
