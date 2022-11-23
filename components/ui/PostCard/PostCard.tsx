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

export function PostCard({
  title,
  shortContent = '',
  author,
  date,
  commentCount = 0,
  likeCount,
  imagePath = '',
}: Props) {
  return (
    <PostCardWrap href={'/post/21312'}>
      <Image src={'https://picsum.photos/236'} width={320} height={160} alt={'LGTM'} />
      <PostMainWrap>
        <PostMainWrapTop>
          <PostTitle>{title}</PostTitle>
          <PostShortContent>{shortContent}</PostShortContent>
        </PostMainWrapTop>
        <PostMainWrapBottom>
          <PostDate>{date}</PostDate>
          <PostCommentCount>{commentCount}개의 댓글</PostCommentCount>
        </PostMainWrapBottom>
      </PostMainWrap>
      <PostSubWrap>
        <PostAuthor>Avatar{author}</PostAuthor>
        <PostLikeCount>Like: {likeCount}</PostLikeCount>
      </PostSubWrap>
    </PostCardWrap>
  );
}
//styled 선언을 계층형 depth로 정렬하자.(1차 뎁스의 div들 이런식)
const PostCardWrap = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 320px;
  background-color: white;
  margin: 8px 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 2px 2px 5px 3px rgba(168, 168, 168, 0.2);
  cursor: pointer;

  :hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.02, 1.02);
  }
`;
const PostMainWrap = styled.div`
  padding: 12px 4px;
`;
const PostSubWrap = styled.div`
  padding: 12px 4px;
  border-top: 1px solid #aeaeae;
  display: flex;
  justify-content: space-between;
`;

const PostMainWrapTop = styled.div``;
const PostMainWrapBottom = styled.div`
  display: flex;
  justify-content: space-between;
  color: gray;
`;

const PostTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
`;
const PostAuthor = styled.div`
  font-weight: bold;
`;
const PostShortContent = styled.div``;
const PostDate = styled.div``;
const PostCommentCount = styled.div``;
const PostLikeCount = styled.div``;
