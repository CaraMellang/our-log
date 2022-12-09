'use client';

import styled from '@emotion/styled';
import { SearchInput } from '@components/molecules/SearchInput';
import React from 'react';

export function Search() {
  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    console.log(value);
  };

  return (
    <SearchWrap>
      <SearchInputWrap>
        <SearchInput onChange={handleOnChange} />
      </SearchInputWrap>
      <div>여기에 포스트 리스트를 쫘라락</div>
    </SearchWrap>
  );
}

const SearchWrap = styled.div``;

const SearchInputWrap = styled.div`
  width: 50%;
  margin: 24px auto;
`;
