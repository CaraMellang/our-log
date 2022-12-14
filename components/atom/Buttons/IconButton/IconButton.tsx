import React from 'react';
import styled from '@emotion/styled';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
}

export function IconButton({ icon, ...rest }: Props) {
  return (
    <IconButtonWrap {...rest}>
      <Button>{icon}</Button>
    </IconButtonWrap>
  );
}

const IconButtonWrap = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  position: relative;
  height: fit-content;
  color: white;
  width: 20px;
  ::after {
    display: block;
    content: '';
    padding-bottom: 100%;
  }
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
