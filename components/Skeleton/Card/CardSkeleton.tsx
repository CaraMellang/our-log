import styled from '@emotion/styled';
import Image from 'next/image';

export function CardSkeleton() {
  return (
    <CardSkeletonWrap>
      <ImageWrap>{/*<Image src={'https://picsum.photos/236'} layout={'fill'} alt={'LGTM'} />*/}</ImageWrap>
      <MainWrap>
        <MainWrapTop>
          <Title></Title>
          <ShortContent></ShortContent>
        </MainWrapTop>
        <MainWrapBottom>
          <Date></Date>
          <CommentCount></CommentCount>
        </MainWrapBottom>
      </MainWrap>
      <SubWrap>
        <Author></Author>
        <LikeCount></LikeCount>
      </SubWrap>
    </CardSkeletonWrap>
  );
}

const CardSkeletonWrap = styled.div`
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
  background-color: #464646;
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
  width: 30%;
  height: 20px;
  background-color: #464646;
  border-radius: 4px;
`;
const Author = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: #464646;
`;
const ShortContent = styled.div`
  height: 4rem;
  background-color: #464646;
  border-radius: 4px;
  margin-top: 8px;
  margin-bottom: 8px;
`;
const Date = styled.div`
  width: 30%;
  height: 20px;
  background-color: #464646;
  border-radius: 4px;
`;
const CommentCount = styled.div`
  width: 40%;
  height: 20px;
  background-color: #464646;
  border-radius: 4px;
`;
const LikeCount = styled.div`
  width: 30%;
  height: 24px;
  background-color: #464646;
  border-radius: 4px;
`;
