import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {setUserDataFromDb} from '../../../store/actions/user';

const useUserProfileDocFetch = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchDataFromServer() {
      setLoading(true);
      await fetchData();
      setLoading(false);
    }

    fetchDataFromServer();
  }, []);

  const fetchData = async () => {
    const user = {
      name: 'Edelmiro Janine',
      email: 'Edelmiro.Janine@hotmail.com',
    };

    try {
      dispatch(setUserDataFromDb(user));
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const onRetry = async () => {
    setLoading(true);
    await fetchData();
    setLoading(false);
  };

  return {loading, error, onRetry};
};

export default useUserProfileDocFetch;
