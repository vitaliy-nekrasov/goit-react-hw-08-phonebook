import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: ${p => p.theme.borders.fat};
  border-radius: ${p => p.theme.space[3]};
  margin-bottom: ${p => p.theme.space[4]};
  width: ${p => p.theme.space[9]};
  padding: ${p => p.theme.space[3]};
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: ${p => p.theme.fontSizes.m};
`;
export const Input = styled.input`
  width: ${p => p.theme.space[8]};
  margin-bottom: ${p => p.theme.space[3]};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.space[5]};
  padding: ${p => p.theme.space[2]} ${p => p.theme.space[3]};
  font-size: ${p => p.theme.fontSizes.s};
`;
export const Button = styled.button`
  text-decoration: none;
  display: inline-block;
  width: ${p => p.theme.space[7]};
  height: 40px;
  line-height: ${p => p.theme.space[4]};
  border: ${p => p.theme.borders.fat};
  border-radius: ${p => p.theme.space[5]};
  font-size: 11px;
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
`;
