import * as React from 'react';
import ModalDialogContext from '../ModalDialog/ModalDialogContext';

export function withModalDialogContext(Component) {
  return function contextComponent(props) {
    return (
      <ModalDialogContext.Consumer>
        {context => <Component {...props} {...context} />}
      </ModalDialogContext.Consumer>
    );
  };
}
