import { Outlet } from 'react-router-dom';
import { Header, Nav, StyledLink, Title } from './Navigation.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';

export function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <Header>
        <Nav>
          <Title>Phonebook</Title>
          {isLoggedIn ? (
            <StyledLink to="/contacts">Contacts</StyledLink>
          ) : (
            <div>
              <StyledLink to="/register">Sign Up</StyledLink>
              <StyledLink to="/login">Log In</StyledLink>
            </div>
          )}
          <UserMenu />
        </Nav>
      </Header>
      <Outlet />
    </div>
  );
}
