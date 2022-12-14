'use client';

import React, { useLayoutEffect, useState } from 'react';
import { Editor, Viewer } from '@toast-ui/react-editor';
import styled from '@emotion/styled';
import { TuiPreviewer, TuiEditor } from '@components/ui/Markdown';
import { HookCallback } from '@toast-ui/editor/types/editor';
import { PromiseCbProps, useTuiEditor } from '@hooks/useTuiEditor';
import { v4 as uuid } from 'uuid';

export default function PostWrite() {
  const [theme, setTheme] = useState('light');
  const [el, setEl] = useState<Element | string>();
  const editorRef = React.useRef<Editor>(null);
  const viewerRef = React.useRef<Viewer>(null);
  const [imgPaths, setImgPaths] = useState<{ seq: number; path: string }[]>();

  const callbackReplaceSrc = async ({ localImageUrl, imgAltName, cb }: PromiseCbProps) => {
    try {
      console.log('콜백실행');
    } catch (e: any) {}
  };

  // const [previewEl, handleAddImageBlobHook, onChangeEditorElement] = useTuiEditor({
  //   ref: editorRef,
  //   callbackReplaceSrc,
  // });

  const onChangeTest = () => {
    console.log(editorRef.current?.getInstance());
    const getHTML = editorRef.current?.getInstance().getHTML();
    setEl(getHTML);
  };

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
            // onChange={onChangeEditorElement}
            onChange={onChangeTest}
            initialValue=" "
            previewStyle={'vertical'}
            theme={theme}
            height="100%"
            hideModeSwitch={true}
            // hooks={{
            //   addImageBlobHook: handleAddImageBlobHook,
            // }}
            hooks={{
              addImageBlobHook: async (blob, cb) => {
                const blobFile = blob as { name: string } & (Blob | File);
                const url = URL.createObjectURL(blobFile);
                const randomSeq = Math.round(Math.random() * 100000);
                const first = blobFile.name.split('.')[0] + randomSeq;
                const second = blobFile.name.split('.')[1];
                // const fileName = first + '.' + second;
                const fileName = uuid() + '.' + second;
                cb(url, fileName);

                setTimeout(() => {
                  const getImage = editorRef.current?.getRootElement().querySelector(`img[alt="${fileName}"]`);
                  const getImageAltName = editorRef.current
                    ?.getRootElement()
                    .querySelectorAll(
                      `.toastui-editor-md-link.toastui-editor-md-link-desc.toastui-editor-md-marked-text`,
                    );
                  const getImageUrl = editorRef.current
                    ?.getRootElement()
                    .querySelectorAll(
                      `.toastui-editor-md-link.toastui-editor-md-link-url.toastui-editor-md-marked-text`,
                    );
                  console.log('ㅎㅇㅎㅇ 이거 찾았음?', getImage, getImageAltName);
                  setTimeout(() => {
                    if (getImage && getImageAltName) {
                      console.log('되긴하냐', getImage, getImageAltName);
                      getImage.setAttribute('src', 'https://picsum.photos/236');
                      Array.from(getImageAltName).filter((r, idx) => {
                        console.log('몇번째 인덱스?', idx);
                        if (r.innerHTML !== fileName) return false;
                        if (getImageUrl) getImageUrl[idx].innerHTML = 'https://picsum.photos/236';
                        return true;
                      });
                    }
                  }, 500);
                }, 1000);
              },
            }}
          />
        ) : (
          ''
        )}
      </EditorWrap>
      {/*<ViewerWrap>{<TuiPreviewer el={previewEl} />}</ViewerWrap>*/}
      <ViewerWrap>{<TuiPreviewer el={el} />}</ViewerWrap>
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
