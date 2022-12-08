import styled from '@emotion/styled';
import { MenuItem } from '@components/ui/Menu/MenuItem';
import { useEffect, useRef, useState } from 'react';

type Props = {
  open: boolean;
  menuItems?: { name: string; href: string; onClick?: () => void }[];
};

export function Menu({ open, menuItems }: Props) {
  const [isDisplay, setIsDisplay] = useState(false);
  useEffect(() => {
    if (open) {
      setIsDisplay(true);
    }
    if (!open) {
      setTimeout(() => {
        setIsDisplay(false);
      }, 1000);
    }
  }, [open]);

  return (
    <MenuWrap open={open} isDisplay={isDisplay} onClick={(e) => e.stopPropagation()}>
      {menuItems && menuItems.map((r, idx) => <MenuItem key={idx} name={r.name} href={r.href} onClick={r.onClick} />)}
    </MenuWrap>
  );
}

const MenuWrap = styled.div<{ open: boolean; isDisplay: boolean }>`
  position: absolute;
  right: 0;
  display: ${({ isDisplay, open }) => (isDisplay || open ? 'display' : 'none')};
  // top: ${({ open }) => (open ? '60px' : '-60px')};
  opacity: ${({ open }) => (open ? 1 : 0)};
  top: 60px;
  z-index: 2;
  width: 12rem;
  border-radius: 4px;
  overflow: hidden;
  transition: top 0.1s ease-in-out, opacity 0.1s ease-in-out;
`;
