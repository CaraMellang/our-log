import styled from '@emotion/styled';
import NaverIcon from '/public/asset/image/btnG_icon_circle.png';
import IconGithub from '/public/asset/svg/icon-github.svg';
import IconGoogle from '/public/asset/svg/icon-google.svg';
import Image from 'next/image';

type providerType = 'github' | 'google' | 'naver';

interface Props {
  provider: providerType;
}

/**
 * color는 깃허브 외각을 칠하기 용
 * border는 구글 , 깃허브같은 아이콘이 외곽에 딱 붙지 않게하기용
 * */
const providerList = {
  github: { color: '#272e33', borderColor: `#fff`, icon: <IconGithub />, isBorder: true },
  google: { color: '#fff', borderColor: `#fff`, icon: <IconGoogle />, isBorder: true },
  naver: {
    color: '#03c75a',
    borderColor: `#03c75a`,
    icon: <Image src={NaverIcon} width={40} height={40} alt={'naver social login'} />,
    isBorder: false,
  },
};

export function SocialButton({ provider }: Props) {
  const info = providerList[provider];
  const { color, icon, borderColor, isBorder } = info;

  const redirectUrl = `https://${provider}.com`;

  return (
    <SocialButtonWrap>
      <IconWrap href={redirectUrl} color={color} isBorder={isBorder} borderColor={borderColor}>
        {icon}
      </IconWrap>
    </SocialButtonWrap>
  );
}

const SocialButtonWrap = styled.div``;

const IconWrap = styled.a<{ color: string; isBorder: boolean; borderColor: string }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: white;
  cursor: pointer;
  color: ${({ color }) => color};
  ${({ isBorder, borderColor }) => (isBorder ? `border: 4px solid ${borderColor}` : ``)}//
      //color: black;
  //border: 4px solid white;
  //> svg {
  //  width: 75%;
  //  height: 75%;
  //  fill: black;
  //}
`;
