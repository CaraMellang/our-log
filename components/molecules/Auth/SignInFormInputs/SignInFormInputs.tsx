import { InputBase } from '@components/atom/Inputs';
import { TextButton } from '@components/atom/Buttons';
import styled from '@emotion/styled';
import React, { FormEvent } from 'react';

interface Props extends React.HTMLAttributes<HTMLFormElement> {}

export function SignInFormInputs({ onSubmit, onChange }: Props) {
  return (
    <SignInFormWrap onSubmit={onSubmit} onChange={onChange}>
      <SignInFormTitle>오예</SignInFormTitle>
      <InputBase id="email" placeholder="이메일을 입력해주세요." />
      <InputBase id="password" type="password" placeholder="패스워드를 입력해주세요." />
      <TextButton type="submit">로그인</TextButton>
    </SignInFormWrap>
  );
}

const SignInFormWrap = styled.form`
  //max-width: 480px;
  //background-color: #121212;
  //box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  //border-radius: 4px;
  //margin: auto;
  //padding: 24px;
`;

// const SignInFormBlock = styled.form``

const SignInFormTitle = styled.div`
  position: relative;
  font-weight: bold;
  font-size: 24px;
  width: fit-content;
  margin: auto;
  ::after {
    position: absolute;
    content: '';
    bottom: 0;
    left: -8px;
    opacity: 0.4;
    width: calc(100% + 18px);
    border-bottom: 8px solid blueviolet;
  }
`;
