'use client';

import styled from '@emotion/styled';
import { IconButton } from '@components/ui/Buttons';
import { InputBase } from '@components/ui/Inputs';
import React, { useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  value?: string;
  buttonPos?: 'right' | 'left';
  style?: React.HTMLAttributes<HTMLDivElement>['style'];
}

export function SearchInput({ value, onChange, buttonPos = 'right', style }: Props) {
  const [focus, setFocus] = useState(false);

  const onKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      console.log('엔터클릭');
      handleSubmit();
    }
  };

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
  };

  const handleSubmit = () => {
    console.log('submit!');
  };

  return (
    <SearchInputWrap focus={focus} style={style}>
      {buttonPos === 'left' && <IconButton icon={<FaSearch onClick={handleSubmit} />} />}
      <InputBase
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onKeyPress={onKeyPress}
        onChange={handleOnChange}
      />
      {buttonPos === 'right' && <IconButton icon={<FaSearch onClick={handleSubmit} />} />}
    </SearchInputWrap>
  );
}

const SearchInputWrap = styled.div<{ focus: boolean }>`
  display: flex;
  border-radius: 4px;
  padding: 8px;
  border: 1px solid ${({ focus }) => (focus ? '#dadada' : '#717171')};
  transition: border 0.2s ease-in-out;
`;
