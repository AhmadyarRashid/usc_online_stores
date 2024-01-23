import React, {useState} from 'react';
import ModalDialogContext from './ModalDialogContext';

const ModalDialogProvider = props => {
  const [visible, setModalVisibility] = useState(false);
  const [dialogContent, setDialogContent] = useState({
    title: 'Sooopy!',
    message: 'Welcome to Sooopy App!',
    imageURI: null,
  });

  const showModalDialog = content => {
    const {title, message, imageURI} = content;

    setModalVisibility(true);
    setDialogContent({
      title,
      message,
      imageURI,
    });
  };

  const hideModalDialog = () => {
    setModalVisibility(false);
  };

  return (
    <ModalDialogContext.Provider
      value={{
        showModalDialog,
        hideModalDialog,
        modalDialogContent: {...dialogContent, ...{visible}},
      }}>
      {props.children}
    </ModalDialogContext.Provider>
  );
};

export default ModalDialogProvider;
