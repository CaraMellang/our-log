'use client';
import styled from '@emotion/styled';
import { LayoutResponsive } from '@layouts/layout';
import { BsFillTriangleFill, FaSearch } from 'react-icons/all';
import Image from 'next/image';
import Link from 'next/link';
import { AccountMenu } from '@components/common/AccountMenu';

export function GlobalHeader() {
  return (
    <GlobalHeaderBlock>
      <GlobalHeaderWrap>
        <div>
          <Link href={'/'}>이것은 로고입니다.</Link>
        </div>
        <RightWrap>
          <IconSearchWrap>
            <FaSearch />
          </IconSearchWrap>
          <AccountMenu />
        </RightWrap>
      </GlobalHeaderWrap>
    </GlobalHeaderBlock>
  );
}

const GlobalHeaderBlock = styled.header`
  background-color: #333333;
  color: white;
  height: 64px;
  width: 100%;
`;

const GlobalHeaderWrap = styled(LayoutResponsive)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RightWrap = styled.div`
  display: flex;
  gap: 12px;
`;

const IconSearchWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;

  :hover {
    background-color: #6d6d6d;
  }
`;
