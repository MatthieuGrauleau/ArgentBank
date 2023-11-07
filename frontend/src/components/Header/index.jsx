import { Link } from 'react-router-dom';
import ArgentBankLogo from '../../assets/img/argentBankLogo.webp';
import { useSelector, useDispatch } from 'react-redux';
import { removeToken } from '../../redux/slices/tokenSlice';
import { resetData } from '../../redux/slices/profileSlice';
import { selectAuthToken, selectUserData } from '../../redux/selectors';

export default function Header() {
  const token = useSelector(selectAuthToken);
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();

  return (
    <nav className='main-nav'>
      <Link
        to='./'
        className='main-nav_logo'
      >
        <img
          className='main-nav_logo--image'
          src={ArgentBankLogo}
          alt='Argent Bank Logo'
        />
        <h1 className='sr-only'>Argent Bank</h1>
      </Link>
      <div>
        {token ? (
          <div>
            <Link
              to='./User'
              className='main-nav_item'
            >
              <i className='fa fa-user-circle'></i> {userData.userName}
            </Link>
            <Link
              to='./SignIn'
              className='main-nav_item'
              onClick={() => {
                dispatch(removeToken({})), dispatch(resetData({}));
              }}
            >
              {' '}
              <i className='fa fa-sign-out'></i> Sign Out
            </Link>
          </div>
        ) : (
          <Link
            to='./SignIn'
            className='main-nav_item'
          >
            <i className='fa fa-user-circle'></i> Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}
