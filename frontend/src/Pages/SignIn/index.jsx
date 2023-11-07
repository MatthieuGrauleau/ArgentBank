import FormContainer from '../../components/FormContainer';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import { useSignIn } from '../../hooks/useSignIn';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthToken } from '../../redux/selectors';
import { useEffect } from 'react';

export default function SignIn() {
  const { error, manageSignIn } = useSignIn();
  const navigate = useNavigate();
  const token = useSelector(selectAuthToken);

  async function submitForm(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    manageSignIn(email, password);
  }

  useEffect(() => {
    if (token) {
      navigate('/User');
    }
  }, [token, navigate]);

  return (
    <div className='main bg-dark'>
      <FormContainer
        title='Sign In'
        onSubmit={submitForm}
      >
        {error && <span>{error}</span>}
        <FormField
          className='input-wrapper'
          id='username'
          label='Email'
          type='text'
          name='email'
        />
        <FormField
          className='input-wrapper'
          id='password'
          label='Password'
          type='password'
          name='password'
        />
        <FormField
          className='input-remember'
          id='remember-me'
          label='Remember-me'
          type='checkbox'
        />
        <Button
          className='sign-in-button'
          name='Sign In'
          type='submit'
        />
      </FormContainer>
    </div>
  );
}
