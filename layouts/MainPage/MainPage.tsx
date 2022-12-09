'use client';
import styled from '@emotion/styled';
import { Card } from '@components/ui/Card';
import { LayoutResponsive } from '@layouts/layout';
import { HomeTab } from '@components/home';
import { CardSkeleton } from '@components/Skeleton';
import { useEffect, useState } from 'react';

const dummydata = [
  { seq: 1, title: '타asdasd', shortContent: 'asd코', author: '오', date: '2일전', commentCount: 32, likeCount: 431 },
  { seq: 2, title: '이asda', shortContent: '멘sdsad', author: '서', date: '23일전', commentCount: 356, likeCount: 431 },
  { seq: 3, title: '이ddd', shortContent: '멘aasd', author: '서', date: '25일전', commentCount: 356, likeCount: 4761 },
  { seq: 4, title: '이ad', shortContent: '멘aadada', author: '서', date: '43일전', commentCount: 356, likeCount: 473 },
  { seq: 5, title: '이dad', shortContent: '멘sadasd', author: '서', date: '23일전', commentCount: 356, likeCount: 473 },
  { seq: 6, title: '이aada', shortContent: '멘asdsd', author: '서', date: '23일전', commentCount: 326, likeCount: 431 },
  { seq: 7, title: '이dad', shortContent: '멘asdas', author: '서', date: '23일전', commentCount: 356, likeCount: 471 },
  { seq: 8, title: '이da', shortContent: '멘dasd', author: '서', date: '23일전', commentCount: 156, likeCount: 461 },
  { seq: 9, title: '타asdasd', shortContent: '코', author: '오', date: '2일전', commentCount: 32, likeCount: 431 },
  { seq: 10, title: '이asda', shortContent: '멘sdad', author: '서', date: '23일전', commentCount: 356, likeCount: 643 },
  { seq: 11, title: '이ddd', shortContent: '멘d', author: '서', date: '253일전', commentCount: 356, likeCount: 731 },
  { seq: 12, title: '이ad', shortContent: '멘aada', author: '서', date: '43일전', commentCount: 356, likeCount: 431 },
  { seq: 13, title: '이dad', shortContent: 'dasd', author: '서', date: '43일전', commentCount: 356, likeCount: 431 },
  { seq: 14, title: '이aada', shortContent: '멘dsd', author: '서', date: '43일전', commentCount: 356, likeCount: 41 },
  { seq: 15, title: '이dad', shortContent: 'das', author: '서', date: '25일전', commentCount: 356, likeCount: 431 },
  { seq: 16, title: '이da', shortContent: '멘dasd', author: '서', date: '23일전', commentCount: 326, likeCount: 471 },
  { seq: 17, title: '이dad', shortContent: '멘dasd', author: '서', date: '43일전', commentCount: 356, likeCount: 431 },
  { seq: 18, title: '이aada', shortContent: 'sdsd', author: '서', date: '23일전', commentCount: 356, likeCount: 431 },
  { seq: 19, title: '이dad', shortContent: '멘aas', author: '서', date: '43일전', commentCount: 326, likeCount: 471 },
  { seq: 20, title: '이da', shortContent: '멘dsd', author: '서', date: '23일전', commentCount: 316, likeCount: 431 },
];

export function MainPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <LayoutResponsive>
      <HomeTab />
      <PostsWrap>
        {loading
          ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item) => <CardSkeleton />)
          : dummydata.map((item) => <Card {...item} />)}
      </PostsWrap>
    </LayoutResponsive>
  );
}

const MainPageWrap = styled.div``;
const PostsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
