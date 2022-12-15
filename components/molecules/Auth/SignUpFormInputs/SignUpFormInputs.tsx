import styled from '@emotion/styled';
import { InputBase } from '@components/atom/Inputs';
import { TextButton } from '@components/atom/Buttons';
import React from 'react';

interface Props extends React.HTMLAttributes<HTMLFormElement> {}
export function SignUpFormInputs({ onSubmit, onChange }: Props) {
  return (
    <SignUpFormInputsWrap onSubmit={onSubmit} onChange={onChange}>
      <SignUpFormTitle>오예</SignUpFormTitle>
      <InputBase id="email" placeholder="이메일을 입력해주세요." />
      <InputBase id="password" type="password" placeholder="패스워드를 입력해주세요." />
      <InputBase id="passwordConfirm" type="password" placeholder="패스워드확인을 입력해주세요." />
      <InputBase id="username" placeholder="닉네임을 입력해주세요." />
      <TextButton type="submit">회원가입</TextButton>
    </SignUpFormInputsWrap>
  );
}

const SignUpFormInputsWrap = styled.form``;

const SignUpFormTitle = styled.div`
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
