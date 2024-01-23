import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {ORDER_TRACKING_STATUS_CODE} from '../../../constants';
import {updateActiveOrderStatus} from '../../../store/actions/orderHistory';

const useCancelOrder = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState();
  const [success, setSuccess] = useState();

  const onCancelOrder = async orderId => {
    setLoading(true);

    try {
      dispatch(
        updateActiveOrderStatus({
          id: orderId,
          orderStatusCode: ORDER_TRACKING_STATUS_CODE.ORDER_CANCELLED_BY_USER,
        }),
      );

      setSuccess(true);
    } catch (error) {
      setLoading(false);
    }

    setLoading(false);
  };

  return {loading, success, onCancelOrder};
};

export default useCancelOrder;
