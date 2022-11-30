import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const User = styled.p`
  margin-right: ${p => p.theme.space[3]};
  font-size: 20px;
  font-style: italic;
`;
export const Button = styled.button`
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
    background: ${p => p.theme.colors.red};
  }
`;
