'use client';
import styled from '@emotion/styled';
import React from 'react';

export type Props = {
  className?: string;
  children: React.ReactNode;
};

export function LayoutResponsive({ className, children }: Props) {
  return <Block className={className}>{children}</Block>;
}

const Block = styled.div`
  width: 1728px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1919px) {
    width: 1376px;
  }
  @media (max-width: 1440px) {
    width: 1024px;
  }
  @media (max-width: 1056px) {
    //width: calc(100% - 2rem);
    width: 726px;
  }
  @media (max-width: 767px) {
    width: calc(100% - 2rem);
  }
`;
