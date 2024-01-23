import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {updateActiveOrderStatus} from '../../../store/actions/orderHistory';

const useFetchOrderStatus = orderId => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [orderStatusCode, setOrderStatusCode] = useState();

  useEffect(() => {
    async function fetchDataFromServer() {
      setLoading(true);
      await fetchData();
      setLoading(false);
    }

    fetchDataFromServer();
  }, []);

  const fetchData = async () => {
    await new Promise(r => setTimeout(r, 2000));

    try {
      const fetchedStatusCode = 2;
      setOrderStatusCode(2);

      dispatch(
        updateActiveOrderStatus({
          id: orderId,
          orderStatusCode: fetchedStatusCode,
        }),
      );
    } catch (error) {
      setError(error);
    }
  };

  const onRetry = async () => {
    setError(false);
    setLoading(true);
    await fetchData();
    setLoading(false);
  };

  return {orderStatusCode, loading, error, onRetry};
};

export default useFetchOrderStatus;
