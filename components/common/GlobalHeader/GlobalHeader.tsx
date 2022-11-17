'use client';
import styled from '@emotion/styled';

export function GlobalHeader() {
  return <GlobalHeaderWrap>저는 헤더입니다.</GlobalHeaderWrap>;
}

const GlobalHeaderWrap = styled.header`
  background-color: #333333;
  color: white;
`;
