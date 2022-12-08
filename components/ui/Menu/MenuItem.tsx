import styled from '@emotion/styled';
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type Props = {
  name: string;
  href: string;
  onClick?: () => void;
};

export function MenuItem({ name, href, onClick }: Props) {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!onClick) return;
    e.preventDefault();
    window.alert('실행여부');
    onClick();
    router.push(href);
  };

  return (
    <MenuItemWrap>
      <MenuItemInner href={href} onClick={handleClick}>
        {name}
      </MenuItemInner>{' '}
    </MenuItemWrap>
  );
}

const MenuItemWrap = styled.div`
  background-color: #333333;
  cursor: pointer;

  :hover {
    background-color: #515151;
  }
`;
const MenuItemInner = styled(Link)`
  display: block;
  padding: 12px;
`;
