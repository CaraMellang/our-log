'use client';
import styled from '@emotion/styled';
import React from 'react';

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  value?: string;
}

export function InputBase({ value, onChange, ...rest }: Props) {
  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
  };

  return (
    <InputWrap>
      <Input placeholder="검색어를 입력하세요" onChange={handleOnChange} {...rest} value={value} />
    </InputWrap>
  );
}

const InputWrap = styled.div`
  //background-color: white;
  width: 100%;
  padding: 8px;
`;

const Input = styled.input`
  width: 100%;
  color: white;
`;
