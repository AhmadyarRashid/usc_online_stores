import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {setDeliveryChargesInfo} from '../../../store/actions/cart';

const useFetchDeliveryCharges = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState();
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
    const data = {
      bankTransfer: {
        bankName: 'BNG Bank',
        accountName: 'ezmart',
        accountNumber: '7375637657327824',
        message:
          'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.',
      },
      cashOnDelivery: {
        message: 'Cash on delivery available between 10 AM - 5 PM.',
      },
      serviceable: true,
      courierCharge: 100,
    };

    try {
      dispatch(setDeliveryChargesInfo(data));
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const onRetry = async () => {
    setError(false);
    setLoading(true);
    await fetchData();
    setLoading(false);
  };

  return {loading, error, onRetry};
};

export default useFetchDeliveryCharges;
