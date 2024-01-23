import PropTypes from 'prop-types';
import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import Button from '../Button';

const ConnectionErrorImage = require('../../../assets/images/illustration_network_error.png');

const ConnectionError = ({onPress, hideButton}) => {
  const RenderIllustration = () => {
    return (
      <Image
        source={ConnectionErrorImage}
        style={{height: '60%', width: '80%', alignSelf: 'center'}}
        resizeMode="contain"
      />
    );
  };

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#FFFFFF', alignItems: 'center'}}>
      <RenderIllustration />
      {!hideButton ? (
        <Button
          label="TRY AGAIN"
          type="outline"
          containerStyle={{width: '40%'}}
          onPress={onPress}
        />
      ) : (
        <View />
      )}
    </SafeAreaView>
  );
};

ConnectionError.propTypes = {
  onPress: PropTypes.func,
  hideButton: PropTypes.bool,
};

ConnectionError.defaultProps = {
  onPress: () => {},
  hideButton: false,
};

export default ConnectionError;
