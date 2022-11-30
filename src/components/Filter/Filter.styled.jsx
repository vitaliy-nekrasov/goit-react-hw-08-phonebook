import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: ${p => p.theme.fontSizes.m};
  margin-left: ${p => p.theme.space[3]};
  margin-bottom: ${p => p.theme.space[3]};
`;
export const Input = styled.input`
  width: ${p => p.theme.space[8]};
  margin-bottom: ${p => p.theme.space[3]};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.space[5]};
  padding: ${p => p.theme.space[2]} ${p => p.theme.space[3]};
  font-size: ${p => p.theme.fontSizes.s};
  margin-top: ${p => p.theme.space[2]};
`;
