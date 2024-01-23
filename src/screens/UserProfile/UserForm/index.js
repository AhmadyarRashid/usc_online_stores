import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import useProfileDocUpdate from '../../../api/hooks/user/useProfileDocUpdate';
import {Button, TextInput} from '../../../components';

const UserForm = ({navigation}) => {
  const {userData} = useSelector(state => state.user);
  const {name: userName} = userData || {};
  const {loading, success, onUpdateUserDoc} = useProfileDocUpdate();
  const [name, setName] = useState(userName);

  const onChangeName = value => {
    setName(value);
  };

  const onPressSubmit = async () => {
    const trimmedUserName = name && name.trim();

    if (!trimmedUserName) {
      return;
    }
    const data = {
      name: trimmedUserName,
    };

    try {
      await onUpdateUserDoc(data);
    } catch (error) {}
  };

  const onPressDone = () => {
    navigation.goBack();
  };

  const RenderButton = () => {
    const trimmedUserName = name && name.trim();

    if (success) {
      return <Button label="Done" onPress={onPressDone} />;
    }

    return (
      <Button
        onPress={onPressSubmit}
        loading={loading}
        disabled={!trimmedUserName || loading}
      />
    );
  };

  return (
    <View>
      <TextInput
        placeholder="Enter full name"
        value={name}
        maxLength={100}
        onChangeText={onChangeName}
        editable={loading ? false : true}
      />
      <RenderButton />
    </View>
  );
};

UserForm.propTypes = {
  navigation: PropTypes.object,
};

export default UserForm;
