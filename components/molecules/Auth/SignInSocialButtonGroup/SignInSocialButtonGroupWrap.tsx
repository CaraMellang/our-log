import styled from '@emotion/styled';
import { FaGithub, FaFacebook, FaGoogle } from 'react-icons/fa';
import Image from 'next/image';
import NaverIcon from '/public/asset/image/btnG_icon_circle.png';
import IconGithub from '/public/asset/svg/icon-github.svg';
import IconGoogle from '/public/asset/svg/icon-google.svg';
import { SocialButton } from '@components/atom/SocialButton';

const providerList: { type: 'github' | 'google' | 'naver' }[] = [
  { type: 'github' },
  { type: 'google' },
  { type: 'naver' },
];

export function SignInSocialButtonGroup() {
  return (
    <SignInSocialButtonGroupWrap>
      {providerList.map((r) => (
        <SocialButton key={r.type} provider={r.type} />
      ))}
    </SignInSocialButtonGroupWrap>
  );
}

const SignInSocialButtonGroupWrap = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 32px 24px;
`;
