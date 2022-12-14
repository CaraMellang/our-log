import React from 'react';
import styled from '@emotion/styled';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  type: 'submit' | 'reset' | 'button';
}

export function TextButton({ children, ...rest }: Props) {
  return (
    <ButtonWrap>
      <Button {...rest}>{children}</Button>
    </ButtonWrap>
  );
}

const ButtonWrap = styled.div`
  padding: 8px;
`;

const Button = styled.button`
  width: 100%;
  color: white;
  background-color: blueviolet;
  border-radius: 4px;
  padding: 8px 12px;
`;
