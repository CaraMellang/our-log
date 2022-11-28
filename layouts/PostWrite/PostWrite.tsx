'use client';

import React, { useLayoutEffect, useState } from 'react';
import { Editor, Viewer } from '@toast-ui/react-editor';
import styled from '@emotion/styled';
import { CustomTuiViewer, TuiEditor } from '@components/ui/Markdown';

export function PostWrite() {
  const [theme, setTheme] = useState('light');
  const [el, setEl] = useState<string>();
  const editorRef = React.useRef<Editor>(null);
  const viewerRef = React.useRef<Viewer>(null);

  const handleChange = (e: 'markdown' | 'wysiwyg') => {
    // const previewEl = editorRef.current?.getRootElement()?.querySelector('.toastui-editor-contents')?.outerHTML;
    // const previewEl = editorRef.current?.getInstance().getHTML() as string;
    const previewEl = editorRef.current?.getInstance().getEditorElements().mdPreview.outerHTML;
    setEl(previewEl);
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
            onChange={handleChange}
            initialValue=" "
            previewStyle={'vertical'}
            theme={theme}
            height="100%"
            hideModeSwitch={true}
          />
        ) : (
          ''
        )}
      </EditorWrap>
      <ViewerWrap>{<CustomTuiViewer el={el} />}</ViewerWrap>
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
