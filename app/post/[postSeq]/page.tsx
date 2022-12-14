'use client';
import styled from '@emotion/styled';
import { notFound, useRouter, usePathname, useSearchParams, redirect } from 'next/navigation';
import { TuiEditor } from '@components/ui/Markdown';
import { useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
//임포트를 비구조화로 안받고 그냥 변수로 받으면 터져버림 왜?????

export default function PostPage() {
  const postSeq = Number(usePathname()?.split('/').reverse()[0]);
  const EditorRef = useRef<Editor>();
  console.log(useSearchParams().toString(), postSeq, useSearchParams().toString());

  const clcick = () => {
    console.log(EditorRef.current?.getInstance());
  };
  return (
    <div>
      <div onClick={clcick}>레프트bar</div>
      <div>
        <div>메인</div>
        <div>작성자 정보</div>
        <div>이전포스트 다음포스트</div>
        <div>코멘트</div>
        <div>관심포스트</div>
        {/*  13.0.5 버전에서 dynamic을 써도 self is not defined 오류. dynamic import에 뭔가 문제가 있는듯함.*/}
        {typeof window !== 'undefined' ? <TuiEditor ref={EditorRef} /> : ''}
      </div>
      <div>라이트bar</div>
    </div>
  );
}

const PostHead = styled.div``;
const PostContent = styled.div``;
const UserProfile = styled.div``;
const LinkedPostList = styled.div``;
const UserComment = styled.div``;
