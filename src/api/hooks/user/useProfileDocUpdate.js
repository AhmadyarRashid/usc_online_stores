import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {setUserDataFromDb} from '../../../store/actions/user';

const useProfileDocUpdate = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState();
  const [success, setSuccess] = useState();

  const onUpdateUserDoc = async data => {
    setLoading(true);

    try {
      dispatch(setUserDataFromDb(data));
      setSuccess(true);
    } catch (error) {
      setLoading(false);
      throw error;
    }

    setLoading(false);
  };

  return {loading, success, onUpdateUserDoc};
};

export default useProfileDocUpdate;
