import {createContext} from 'react';

const ModalDialogContext = createContext({
  modalDialogContent: {
    visible: false,
    title: 'ezmart',
    message: '',
    imageURI: null,
  },
  showModalDialog: () => {},
  hideModalDialog: () => {},
});

export default ModalDialogContext;
