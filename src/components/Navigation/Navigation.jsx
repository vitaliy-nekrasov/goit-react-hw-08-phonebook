import { Outlet } from 'react-router-dom';
import { Header, Nav, StyledLink } from './Navigation.styled';

export function Navigation() {
  return (
    <div>
      <Header>
        <Nav>
          <StyledLink to="/contacts">Contacts</StyledLink>
          <StyledLink to="/register">Sign Up</StyledLink>
          <StyledLink to="/login">Log In</StyledLink>
        </Nav>
      </Header>
      <Outlet />
    </div>
  );
}
