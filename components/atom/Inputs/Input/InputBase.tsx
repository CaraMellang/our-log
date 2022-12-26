'use client';
import styled from '@emotion/styled';
import React, { InputHTMLAttributes, useState } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  initialValue?: string;
}

export function InputBase({ initialValue, onChange, ...rest }: Props) {
  const [value, setValue] = useState(initialValue || '');
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onChange) onChange(e);
  };

  return (
    <InputWrap>
      <Input onChange={handleOnChange} {...rest} value={value} />
    </InputWrap>
  );
}

const InputWrap = styled.div`
  //background-color: white;
  width: 100%;
  margin: 12px 0;
`;

const Input = styled.input`
  width: 100%;
  color: white;
  background-color: #1e1e1e;
  padding: 12px;
  border-radius: 4px;
`;
