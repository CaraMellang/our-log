'use client';

import React, { useState } from 'react';
import { Editor, Viewer } from '@toast-ui/react-editor';
import styled from '@emotion/styled';
import { CustomTuiViewer, TuiEditor, TuiViewer } from '@components/ui/Markdown';

export function PostWrite() {
  const [el, setEl] = useState<string>();
  const editorRef = React.useRef<Editor>(null);
  const viewerRef = React.useRef<Viewer>(null);

  const handleChange = (e: any) => {
    console.log('에디터', editorRef.current);
    console.dir(viewerRef.current);
    const previewEl = editorRef.current?.getRootElement()?.querySelector('.toastui-editor-contents')?.outerHTML;
    // const previewEl = editorRef.current?.getInstance().getHTML();
    setEl(previewEl);
  };

  return (
    <PostWriteWrap>
      <div>나랑 글써볼래</div>
      {typeof window !== 'undefined' ? (
        <TuiEditor ref={editorRef} previewStyle="vertical" onChange={handleChange} initialValue=" " />
      ) : (
        ''
      )}
      {<CustomTuiViewer el={el} />}
    </PostWriteWrap>
  );
}

const PostWriteWrap = styled.div``;
