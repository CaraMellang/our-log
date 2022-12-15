import styled from '@emotion/styled';
import { SignInSocialButtonGroup, SignUpFormInputs } from '@components/molecules/Auth';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useStore } from '@/store';
import { regexEmail } from '@/utils/regex';
import { SignUp } from '@common/api/auth';
import { YN } from '@common/constant';

export function SignUpForm() {
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
    const passwordConfirm = (formTarget.elements.namedItem('passwordConfirm') as HTMLFormElement).value;
    const username = (formTarget.elements.namedItem('username') as HTMLFormElement).value;

    console.log(email, password, passwordConfirm);
    if (password !== passwordConfirm) return setError(true);
    if (!regexEmail.test(email)) return setError(true);

    const info = {
      email,
      password,
      username,
      smsYn: YN.YES,
    };

    try {
      const { data } = await SignUp(info);
      console.log(data);
      return;
    } catch (e) {
      console.dir(e);
      return;
    }

    await router.push('/');
    update(email);
  };
  return (
    <SignUpFormWrap>
      <SignUpFormInputs onSubmit={handleSubmit} onChange={handleChange} />
      <div style={{ padding: '8px', color: 'gray' }}>
        {error && <span style={{ color: 'red' }}>이메일 또는 비밀번호가 잘못되었습니다.</span>}
      </div>
      <SocialLoginDivider>
        <span>간편 회원가입</span>
      </SocialLoginDivider>
      <SignInSocialButtonGroup />
    </SignUpFormWrap>
  );
}

const SignUpFormWrap = styled.div`
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
