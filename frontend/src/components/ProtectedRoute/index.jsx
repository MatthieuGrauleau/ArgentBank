import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthToken } from '../../redux/selectors';

export default function ProtectedRoute({ children }) {
  const token = useSelector(selectAuthToken);
  const isAuthenticated = !!token;

  if (!isAuthenticated) {
    return (
      <Navigate
        to='/SignIn'
        replace
      />
    );
  }
  return children;
}
