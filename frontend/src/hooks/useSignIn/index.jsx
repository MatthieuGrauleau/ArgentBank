import { useState } from 'react';
import { signInService } from '../../services';
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/slices/tokenSlice';

export function useSignIn() {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  async function manageSignIn(email, password) {
    try {
      const token = await signInService(email, password);

      if (token) {
        setError(null);
        dispatch(setToken({ token }));
      }
    } catch (error) {
      setError('Oups, il y a eu un problème');
    }
  }
  return { error, manageSignIn };
}
