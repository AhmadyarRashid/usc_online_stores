import React from 'react';
import {Image, Modal, Text, View} from 'react-native';
import Button from '../Button';
import styles from './styles';

const {container, cardContainer, titleTextStyle, messageTextStyle} = styles;

const ModalDialog = ({visible, title, message, imageURI, onPressOk}) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      onRequestClose={null}
      transparent>
      {imageURI ? (
        <View style={container}>
          <View style={cardContainer}>
            <Image
              style={{width: '80%', height: '80%', alignSelf: 'center'}}
              source={imageURI}
            />
            <Button
              label="DONE"
              onPress={onPressOk}
              buttonStyle={{margin: 15}}
            />
          </View>
        </View>
      ) : (
        <View style={container}>
          <View style={cardContainer}>
            <Text style={titleTextStyle}>{title}</Text>
            <Text style={messageTextStyle}>{message}</Text>
            <Button
              label="DONE"
              onPress={onPressOk}
              buttonStyle={{margin: 15}}
            />
          </View>
        </View>
      )}
    </Modal>
  );
};

export default ModalDialog;
