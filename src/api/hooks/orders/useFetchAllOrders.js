import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setOrderHistory} from '../../../store/actions/orderHistory';
import {OrdersData} from '../../../utilities/OrdersData';

const useFetchAllOrders = () => {
  const dispatch = useDispatch();
  const {orderHistory} = useSelector(state => state.orderHistory);

  const [loading, setLoading] = useState();
  const [refreshing, setRefreshing] = useState();
  const [paginating, setPaginating] = useState();
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

    /**
     * combine fectched data with orderHistory in redux for pagination
     */
    const orderHistoryArray = orderHistory || OrdersData;
    dispatch(setOrderHistory(orderHistoryArray));
  };

  const onEndReached = async () => {
    if (!paginating) {
      setPaginating(true);
      await fetchData();
      setPaginating(false);
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

  return {
    loading,
    paginating,
    refreshing,
    error,
    onRefresh,
    onRetry,
    onEndReached,
  };
};

export default useFetchAllOrders;
