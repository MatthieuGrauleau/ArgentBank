import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { profileService } from '../../services';
import { userProfile } from '../../redux/slices/profileSlice';
import { selectAuthToken, selectUserData } from '../../redux/selectors';

export function useUserData() {
  const userData = useSelector(selectUserData);
  const token = useSelector(selectAuthToken);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const recoverUserData = await profileService(token);
        dispatch(userProfile(recoverUserData));
      } catch (error) {
        alert("Une erreur s'est produite. Veuillez réessayer plus tard.");
      }
    }
    fetchData();
  }, []);

  return { userData };
}
