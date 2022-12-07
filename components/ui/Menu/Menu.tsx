import styled from '@emotion/styled';
import { MenuItem } from '@components/ui/Menu/MenuItem';

export function Menu() {
  return (
    <MenuWrap>
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </MenuWrap>
  );
}

const MenuWrap = styled.div`
  position: absolute;
  right: 0;
  top: 60px;
  z-index: 2;
  width: 12rem;
`;
