import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addAddressItem} from '../../store/actions/addressList';

const useAddUserAddress = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState();
  const [success, setSuccess] = useState();
  const [error, setError] = useState();

  const onCreateUserAddress = async data => {
    setLoading(true);

    try {
      dispatch(addAddressItem(data));

      setSuccess(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return {loading, success, error, onCreateUserAddress};
};

export default useAddUserAddress;
