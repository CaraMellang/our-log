import styled from '@emotion/styled';
import { useStore } from '@/store';
import Image from 'next/image';
import { BsFillTriangleFill } from 'react-icons/all';
import { Menu } from '@components/ui/Menu';

export function AccountMenu() {
  const user = useStore((state) => state.user);
  return (
    <AccountMenuWrap>
      <UserAvatar>
        <Image src={'https://picsum.photos/236'} layout={'fill'} alt={'안뇽'} />
      </UserAvatar>
      <IconTriagleWrap>
        <BsFillTriangleFill color={'white'} />
      </IconTriagleWrap>
      <Menu />
    </AccountMenuWrap>
  );
}

const AccountMenuWrap = styled.div`
  position: relative;
  display: flex;
  gap: 16px;
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
`;

const IconTriagleWrap = styled.div`
  display: flex;
  align-items: center;
  svg {
    transform: rotate(180deg);
  }
`;
