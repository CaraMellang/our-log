'use client';

import React, { useLayoutEffect, useState } from 'react';
import { Editor, Viewer } from '@toast-ui/react-editor';
import styled from '@emotion/styled';
import { TuiPreviewer, TuiEditor } from '@components/ui/Markdown';
import { HookCallback } from '@toast-ui/editor/types/editor';
import { useTuiEditor } from '@hooks/useTuiEditor';

export default function PostWrite() {
  const [theme, setTheme] = useState('light');
  const [el, setEl] = useState<Element | string>();
  const editorRef = React.useRef<Editor>(null);
  const viewerRef = React.useRef<Viewer>(null);
  const [imgPaths, setImgPaths] = useState<{ seq: number; path: string }[]>();
  const [previewEl, handleAddImageBlobHook, onChangeEditorElement] = useTuiEditor({ ref: editorRef });
  console.log('날싱행postWitertaew');

  // const handleChange = (e: 'markdown' | 'wysiwyg') => {
  //   // const previewEl = editorRef.current?.getRootElement()?.querySelector('.toastui-editor-contents')?.outerHTML;
  //   // const previewEl = editorRef.current?.getInstance().getHTML() as string;
  //   const previewEl = editorRef.current?.getInstance().getEditorElements().mdPreview.outerHTML;
  //   setEl(previewEl);
  // };
  //
  // const HandleAddImageBlobHook = async (blob: Blob | File, cb: HookCallback) => {
  //   const blobFile: any = blob;
  //   const localImageUrl = URL.createObjectURL(blobFile);
  //
  //   const imgSeq = Math.round(Math.random() * 100000);
  //   cb(localImageUrl, blobFile.name + imgSeq);
  //   const imgArr = editorRef.current?.getRootElement().querySelectorAll('img') as NodeListOf<HTMLImageElement>;
  //   console.log('이미지들', imgArr, localImageUrl);
  //   const imgArrLength = imgArr.length;
  //   console.log(imgArrLength);
  //
  //   imgArr[imgArrLength - 1].setAttribute('src', localImageUrl);
  //   imgArr[imgArrLength - 1].setAttribute('id', String(imgSeq));
  //
  //   // if (!imgPaths) return setImgPaths([{ seq: imgSeq, path: localImageUrl }]);
  //   // //typescript 이것도 못거르누
  //   // setImgPaths((prev) => {
  //   //   if (!prev) return [{ seq: imgSeq, path: localImageUrl }];
  //   //   return [...prev, { seq: imgSeq, path: localImageUrl }];
  //   // });
  //   //목표 - 사진을 올리면 viewer이미지태그를 직접 조작해서 넣어줄거임. 동시에 얘는 멍청해서 바뀌면 src 어트리뷰트가 증발하니까 이곳에서 상태로 관리해서 하나하나 검증해서 넣어줄 것.
  //   // TUI 제발 일해라.
  //
  //   // (editorRef.current?.getRootElement().querySelectorAll('img') as NodeListOf<HTMLImageElement>)[
  //   //   imgArrLength - 1
  //   // ].setAttribute('src', localImageUrl);
  //
  //   const convertArr = Array.from(
  //     editorRef.current?.getRootElement().querySelectorAll('img') as NodeListOf<HTMLImageElement>,
  //   );
  //   convertArr.map((r) => console.dir(r.alt));
  //   setEl(editorRef.current?.getInstance().getEditorElements().mdPreview);
  // };

  useLayoutEffect(() => {
    const htmlTag = document.querySelector('html') as HTMLHtmlElement;
    const bodyTag = document.querySelector('body') as HTMLBodyElement;

    htmlTag.style.height = '100%';
    bodyTag.style.height = '100%';

    setTheme(localStorage.getItem('theme') || 'light');
  }, []);

  return (
    <PostWriteWrap>
      <EditorWrap>
        {typeof window !== 'undefined' ? (
          <TuiEditor
            ref={editorRef}
            onChange={onChangeEditorElement}
            initialValue=" "
            previewStyle={'vertical'}
            theme={theme}
            height="100%"
            hideModeSwitch={true}
            hooks={{
              addImageBlobHook: handleAddImageBlobHook,
            }}
          />
        ) : (
          ''
        )}
      </EditorWrap>
      <ViewerWrap>{<TuiPreviewer el={previewEl} />}</ViewerWrap>
    </PostWriteWrap>
  );
}

const PostWriteWrap = styled.div`
  display: flex;
  height: 80%;
  overflow: hidden;
`;
const EditorWrap = styled.div`
  width: 50%;
`;
const ViewerWrap = styled.div`
  width: 50%;
  padding: 3rem;
  overflow: scroll;
`;
