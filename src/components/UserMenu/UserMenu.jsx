import { Wrapper, User, Button } from './UserMenu.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectEmail, selectIsLoggedIn } from 'redux/selectors';
import authOperations from 'redux/auth/authOperations';

export function UserMenu() {
  const email = useSelector(selectEmail);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  return (
    isLoggedIn && (
      <Wrapper>
        <User>{email}</User>
        <Button onClick={() => dispatch(authOperations.logOut())}>
          Log Out
        </Button>
      </Wrapper>
    )
  );
}
