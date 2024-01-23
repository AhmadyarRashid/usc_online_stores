import React, {useContext} from 'react';
import {View} from 'react-native';
import ModalDialog from '../../components/ModalDialog';
import ModalDialogContext from '../ModalDialog/ModalDialogContext';

const ComponentWrapper = () => {
  const {modalDialogContent, hideModalDialog} = useContext(ModalDialogContext);

  const {visible, title, message, imageURI} = modalDialogContent || {};

  return (
    <View>
      <ModalDialog
        visible={visible}
        onPressOk={hideModalDialog}
        title={title}
        message={message}
        imageURI={imageURI}
      />
    </View>
  );
};

export default ComponentWrapper;
