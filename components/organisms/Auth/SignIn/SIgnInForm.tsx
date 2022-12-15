import styled from '@emotion/styled';
import { InputBase } from '@components/atom/Inputs';
import { TextButton } from '@components/atom/Buttons';
import { SignInSocialButtonGroup, SignInFormInputs } from '@components/molecules/Auth';
import React from 'react';
import { useStore } from '@/store';
import { useRouter } from 'next/navigation';
import { regexEmail } from '@/utils/regex';
import Link from 'next/link';
import { SignIn } from '@common/api/auth';

export function SIgnInForm() {
  const router = useRouter();
  const update = useStore((state) => state.update);
  const [error, setError] = React.useState(false);

  const handleChange = () => {
    setError(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formTarget = e.target as HTMLFormElement;
    const email = (formTarget.elements.namedItem('email') as HTMLFormElement).value;
    const password = (formTarget.elements.namedItem('password') as HTMLFormElement).value;
    console.log(email, password);
    if (!regexEmail.test(email)) {
      setError(true);
      return;
    }

    const info = {
      email,
      password,
    };

    try {
      const data = await SignIn(info);
      console.log(data);
      return;
    } catch (e) {
      console.log(e);
      return;
    }

    await router.push('/');
    update(email);
  };

  return (
    <SignInFormWrap>
      <SignInFormInputs onSubmit={handleSubmit} onChange={handleChange} />
      <div style={{ padding: '8px', color: 'gray' }}>
        <div>{error && <span style={{ color: 'red' }}>이메일 또는 비밀번호가 잘못되었습니다.</span>}</div>
        회원이 아니신가요?{' '}
        <Link style={{ color: 'blueviolet', cursor: 'pointer' }} href={`/signup`}>
          회원가입하기
        </Link>
      </div>
      <SocialLoginDivider>
        <span>소셜로그인</span>
      </SocialLoginDivider>
      <SignInSocialButtonGroup />
    </SignInFormWrap>
  );
}

const SignInFormWrap = styled.div`
  max-width: 480px;
  background-color: #121212;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  border-radius: 12px;
  margin: auto;
  padding: 24px;
`;

const SocialLoginDivider = styled.div`
  position: relative;
  margin: auto;

  text-align: center;
  span {
    position: relative;
    padding: 0 12px;
    background-color: #121212;
    z-index: 20;
  }

  :before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    border-bottom: 1px solid #747474;
  }
`;
