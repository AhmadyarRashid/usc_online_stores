import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {setCart} from '../../../store/actions/cart';
import {CartData} from '../../../utilities/CartData';

const useFetchCart = () => {
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
    const cartProductsArray = CartData;

    dispatch(setCart(cartProductsArray));
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

export default useFetchCart;
