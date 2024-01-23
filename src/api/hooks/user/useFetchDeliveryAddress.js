import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {setDeliveryAddressOptions} from '../../../store/actions/cart';
import {DeliveryAddressData} from '../../../utilities/DeliveryAddressData';

const useFetchDeliveryAddress = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(false);

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
      const deliveryAddressOptions = DeliveryAddressData;

      dispatch(setDeliveryAddressOptions(deliveryAddressOptions));
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  };

  const onRetry = async () => {
    setError(false);
    setLoading(true);
    await fetchData();
    setLoading(false);
  };

  return {loading, refreshing, error, onRefresh, onRetry};
};

export default useFetchDeliveryAddress;
