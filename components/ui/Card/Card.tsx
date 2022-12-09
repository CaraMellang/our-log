import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  title: string;
  shortContent: string;
  author: string;
  date: string;
  commentCount: number;
  likeCount: number;
  imagePath?: string;
}

export function Card({ title, shortContent = '', author, date, commentCount = 0, likeCount, imagePath = '' }: Props) {
  return (
    <CardWrap href={'/post/@132123'}>
      <ImageWrap>
        <Image src={'https://picsum.photos/236'} layout={'fill'} alt={'LGTM'} />
      </ImageWrap>
      <MainWrap>
        <MainWrapTop>
          <Title>{title}</Title>
          <ShortContent>{shortContent}</ShortContent>
        </MainWrapTop>
        <MainWrapBottom>
          <Date>{date}</Date>
          <CommentCount>{commentCount}개의 댓글</CommentCount>
        </MainWrapBottom>
      </MainWrap>
      <SubWrap>
        <Author>Avatar{author}</Author>
        <LikeCount>Like: {likeCount}</LikeCount>
      </SubWrap>
    </CardWrap>
  );
}
//styled 선언을 계층형 depth로 정렬하자.(1차 뎁스의 div들 이런식)
const CardWrap = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 20rem;
  margin: 8px 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 2px 2px 5px 3px rgba(168, 168, 168, 0.2);
  cursor: pointer;
  background-color: #1e1e1e;
  color: #acacac;

  :hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.02, 1.02);
  }

  @media (max-width: 1056px) {
    width: calc(50% - 2rem);
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  //height: 160px;
  aspect-ratio: 16/9;
`;
const MainWrap = styled.div`
  padding: 12px 4px;
`;
const SubWrap = styled.div`
  padding: 12px 4px;
  border-top: 1px solid #aeaeae;
  display: flex;
  justify-content: space-between;
`;

const MainWrapTop = styled.div``;
const MainWrapBottom = styled.div`
  display: flex;
  justify-content: space-between;
  color: gray;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
`;
const Author = styled.div`
  font-weight: bold;
`;
const ShortContent = styled.div`
  height: 4rem;
  margin-top: 8px;
  margin-bottom: 8px;
`;
const Date = styled.div`
  height: 20px;
`;
const CommentCount = styled.div``;
const LikeCount = styled.div``;
