import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { changeUserNameService } from '../../services';
import { editUserName } from '../../redux/slices/profileSlice';

export function useChangeUserName() {
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  async function updateUserName(userName, token) {
    try {
      if (!userName) {
        setError("Le champ du nom d'utilisateur ne peut pas être vide.");
        return;
      }
      const newUserName = await changeUserNameService(userName, token);

      if (newUserName) {
        setError(null);
        dispatch(editUserName(newUserName));
      }
    } catch (error) {
      alert("Une erreur s'est produite. Veuillez réessayer plus tard.");
    }
  }
  return { error, updateUserName };
}
