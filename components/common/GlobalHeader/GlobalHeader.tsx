'use client';
import styled from '@emotion/styled';
import { LayoutResponsive } from '@layouts/layout';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { AccountMenu } from '@components/common/AccountMenu';
import { useScroll } from '@hooks/useScroll';
import { useStore } from '@/store';
import { useRouter } from 'next/navigation';

export function GlobalHeader({ isFixed = true }: { isFixed?: boolean }) {
  const router = useRouter();
  const [scrollY, isTrigger, detectScrollDirection] = useScroll(64);
  const user = useStore((state) => state.user);
  console.log(scrollY, isTrigger, detectScrollDirection);
  console.log(user, Object.keys(user));

  return (
    <GlobalHeaderBlock isTrigger={isTrigger} detectScrollDirection={detectScrollDirection} isFixed={isFixed}>
      <GlobalHeaderWrap>
        <div>
          <Link href={'/'}>이것은 로고입니다.{String(isFixed)}</Link>
        </div>
        <RightWrap>
          <IconSearchWrap href={'/search'}>
            <FaSearch />
          </IconSearchWrap>
          {user && Object.keys(user).length !== 0 ? (
            <AccountMenu />
          ) : (
            <div onClick={() => router.push(`/signin`)}>로그인이 필요합니다.</div>
          )}
        </RightWrap>
      </GlobalHeaderWrap>
    </GlobalHeaderBlock>
  );
}

const GlobalHeaderBlock = styled.header<{ isTrigger: boolean; detectScrollDirection: 1 | -1; isFixed: boolean }>`
  position: ${({ isTrigger, isFixed }) => (isFixed ? 'fixed' : 'static')};
  // opacity: ${({ isTrigger, isFixed }) => (isTrigger && !isFixed ? 0 : 1)};

  //position: sticky;
  //top: 0;

  background-color: #333333;
  color: white;
  height: 64px;
  width: 100%;
  z-index: 2;
  margin-top: ${({ detectScrollDirection }) => (detectScrollDirection === 1 ? '-80px' : '0')};
  transition: margin-top 0.2s ease-in-out;
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

const IconSearchWrap = styled(Link)`
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
