import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: ${p => p.theme.borders.fat};
  margin-bottom: 20px;
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  padding: ${p => p.theme.space[3]} ${p => p.theme.space[4]};
  line-height: ${p => p.theme.space[5]};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.space[5]};
  font-size: ${p => p.theme.space[4]};
  text-transform: uppercase;
  text-align: center;
  letter-spacing: ${p => p.theme.space[2]};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  color: ${p => p.theme.colors.black};
  background: ${p => p.theme.colors.white};
  transition: 0.3s;
  cursor: pointer;

  &:hover,
  &:focus {
    background: ${p => p.theme.colors.green};
  }

  &.active {
    background: ${p => p.theme.colors.green};
  }
`;
