import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {setAdvertisements} from '../../store/actions/advertisements';
import {setAllCategories} from '../../store/actions/categories';
import {BannersData} from '../../utilities/BannersData';
import {AllCategories} from '../../utilities/CategoriesData';

const useAppInitialization = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchDataFromServer() {
      setLoading(true);
      await fetchAppConfigData();
      setLoading(false);
    }
    fetchDataFromServer();
  }, []);

  const fetchAppConfigData = async () => {
    try {
      await new Promise(r => setTimeout(r, 2000));
      dispatch(setAllCategories(AllCategories));
      dispatch(setAdvertisements(BannersData));
    } catch (error) {
      setError(error);
    }
  };

  const onRetry = async () => {
    setLoading(true);
    await fetchAppConfigData();
    setLoading(false);
  };

  return [loading, error, onRetry];
};

export default useAppInitialization;
