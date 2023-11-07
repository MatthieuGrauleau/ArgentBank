import Button from '../../components/Button';
import Account from '../../components/Account';
import accountInformation from '../../data/accountInformation';
import FormContainer from '../../components/FormContainer';
import FormField from '../../components/FormField';
import { useUserData } from '../../hooks/useUserData';
import { useChangeUserName } from '../../hooks/useChangeUserName';
import { useState } from 'react';
import { selectAuthToken } from '../../redux/selectors';
import { useSelector } from 'react-redux';

export default function User() {
  const { userData } = useUserData();
  const { error, updateUserName } = useChangeUserName();
  const [isEdit, setIsEdit] = useState(false);

  const token = useSelector(selectAuthToken);

  async function submitFormEditName(event) {
    event.preventDefault();
    const userName = event.target.userName.value;

    updateUserName(userName, token);
  }

  function showFormChangeUserName() {
    if (isEdit) {
      const currentUserName = userData.userName;

      return (
        <FormContainer
          onSubmit={submitFormEditName}
          title='Edit Name'
        >
          {error && <span>{error}</span>}
          <FormField
            className='input-wrapper'
            id='username'
            label='Username'
            type='text'
            name='userName'
            defaultValue={currentUserName}
          />
          <Button
            className='edit-button'
            type='submit'
            name='Save'
          />{' '}
          <Button
            className='edit-button'
            type='button'
            name='Cancel'
            onClick={() => setIsEdit(false)}
          />
        </FormContainer>
      );
    } else {
      return null;
    }
  }

  return (
    <div className='main bg-dark'>
      <div className='header'>
        <h1>
          Welcome back
          <br />
          {userData.firstName} {userData.lastName} !
        </h1>
        {!isEdit && (
          <Button
            className='edit-button'
            name='Edit Name'
            onClick={() => setIsEdit(true)}
          />
        )}
        {showFormChangeUserName()}
      </div>
      <h2 className='sr-only'>Accounts</h2>
      {accountInformation.map((info, index) => (
        <Account
          key={index}
          title={info.title}
          amount={info.amount}
          description={info.description}
        >
          <Button
            className={'transaction-button'}
            name={'View transactions'}
          />
        </Account>
      ))}
    </div>
  );
}
