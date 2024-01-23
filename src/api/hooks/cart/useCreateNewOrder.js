import {useContext, useState} from 'react';
import {useDispatch} from 'react-redux';
import ModalDialogContext from '../../../context/ModalDialog/ModalDialogContext';
import {resetCart} from '../../../store/actions/cart';

const useCreateNewOrder = navigation => {
  const dispatch = useDispatch();
  const {showModalDialog} = useContext(ModalDialogContext);

  const [loading, setLoading] = useState();

  const onCreateNewOrder = async () => {
    setLoading(true);

    navigation.goBack();
    showModalDialog({
      title: 'ezmart',
      message: 'Your order has been placed successfully.',
      imageURI: require('../../../../assets/images/successful_purchase.png'),
    });

    dispatch(resetCart());

    setLoading(false);
  };

  return {loading, onCreateNewOrder};
};

export default useCreateNewOrder;
