import { Outlet } from 'react-router-dom';
import {
  Header,
  Nav,
  StyledLink,
  Title,
  Wrapper,
  StyledLinkContacts,
} from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { Suspense, lazy } from 'react';

const UserMenu = lazy(() => import('components/UserMenu/UserMenu'));

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <Header>
        <Nav>
          <Title>Phonebook</Title>
          {isLoggedIn ? (
            <Wrapper>
              <StyledLinkContacts to="/contacts">Contacts</StyledLinkContacts>
              <UserMenu />
            </Wrapper>
          ) : (
            <div>
              <StyledLink to="/register">Sign Up</StyledLink>
              <StyledLink to="/login">Log In</StyledLink>
            </div>
          )}
        </Nav>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
}
