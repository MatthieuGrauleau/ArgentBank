import { fetchApi } from '../utils/fetchApi';

export async function signInService(email, password) {
  const responseData = await fetchApi(
    '/login',
    'POST',
    { email, password },
    null,
    false
  );
  const token = responseData.body.token;
  return token;
}

export async function profileService(token) {
  const userData = await fetchApi('/profile', 'POST', {}, token, true);
  return userData.body;
}

export async function changeUserNameService(userName, token) {
  const newUserData = await fetchApi(
    '/profile',
    'PUT',
    { userName },
    token,
    true
  );
  return newUserData.body.userName;
}
