import styled from '@emotion/styled';
import { useStore } from '@/store';
import Image from 'next/image';
import { BsFillTriangleFill } from 'react-icons/bs';
import { Menu } from '@components/ui/Menu';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const menuItems = [
  {
    name: '내 정보',
    href: '/setting',
    onClick: () => {
      window.alert('미들웨어라고 해야하나?');
    },
  },
  {
    name: '안녕',
    href: '/post/343',
  },
  {
    name: '쓰러가자',
    href: '/post/write',
  },
];

export function AccountMenu() {
  const pathname = usePathname();
  const user = useStore((state) => state.user);
  const [open, setOpen] = useState(false);

  const handleOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setOpen((prev) => !prev);
    console.log('ㅎㅇ');
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname?.toString()]);

  useEffect(() => {
    window.addEventListener('click', handleClose);
    return () => {
      window.removeEventListener('click', handleClose);
    };
  }, []);

  return (
    <AccountMenuWrap onClick={handleOpen}>
      <UserAvatar>
        <Image src={'https://picsum.photos/236'} layout={'fill'} alt={'안뇽'} />
      </UserAvatar>
      <IconTriagleWrap>
        <BsFillTriangleFill color={'white'} />
      </IconTriagleWrap>
      <Menu open={open} menuItems={menuItems} />
    </AccountMenuWrap>
  );
}

const AccountMenuWrap = styled.div`
  position: relative;
  display: flex;
  gap: 16px;
  cursor: pointer;
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
