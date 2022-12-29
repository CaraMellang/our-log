import styled from '@emotion/styled';
import { InputBase, ValidateInput } from '@components/atom/Inputs';
import { TextButton } from '@components/atom/Buttons';
import React from 'react';

const testObj = [
  {
    validation: /[0-9]/,
    defaultMessage: '최소 한글자 이상의 숫자가 필요합니다.',
    errorMessage: '최소 한글자 이상의 숫자가 필요합니다.',
    successMessage: '최소 한글자 이상의 숫자가 필요합니다.',
  },
  {
    validation: /[a-z]/,
    defaultMessage: 'a-z 문자 입력해주세요.',
    errorMessage: 'a-z 문자 입력해주세요.',
    successMessage: 'a-z 문자 입력해주세요.',
  },
  {
    validation: (value: string) => value.length > 8,
    defaultMessage: '8자리 이상 입력해주세요',
    errorMessage: '8자리 이상 입력해주세요',
    successMessage: '8자리 이상 입력해주세요',
  },
];

interface Props extends React.HTMLAttributes<HTMLFormElement> {
  onValidate?: (isValidate: boolean) => void;
}

export function SignUpFormInputs({ onValidate, onSubmit, onChange }: Props) {
  return (
    <SignUpFormInputsWrap onSubmit={onSubmit} onChange={onChange}>
      <SignUpFormTitle>오예</SignUpFormTitle>
      <InputBase id="email" placeholder="이메일을 입력해주세요." />
      <InputBase id="password" type="password" placeholder="패스워드를 입력해주세요." />
      <InputBase id="passwordConfirm" type="password" placeholder="패스워드확인을 입력해주세요." />
      <ValidateInput validate={testObj} onValidate={onValidate} placeholder={'테스트용입니다.'} />
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
