'use client';
import dynamic from 'next/dynamic';
import React from 'react';
import { Editor, EditorProps } from '@toast-ui/react-editor';
import styled from '@emotion/styled';

interface EditorPropsWithHandlers extends EditorProps {
  onChange?(value: string): void;
  forwardedRef?: React.ForwardedRef<Editor>;
}

const EditorWrapper = dynamic<EditorPropsWithHandlers>(() => import('./TuiEditorWrapper'), { ssr: false });

export const TuiEditor = React.forwardRef<Editor | undefined, EditorPropsWithHandlers>((props, ref) => (
  <EditorStyle>
    <EditorWrapper {...props} forwardedRef={ref as React.ForwardedRef<Editor>} />
  </EditorStyle>
));
TuiEditor.displayName = 'TuiEditor';

const EditorStyle = styled.div`
  width: 100%;
  height: 100%;
  .toastui-editor-main .toastui-editor-md-vertical-style .toastui-editor {
    width: 100%;
  }
  .toastui-editor-main .toastui-editor-md-vertical-style .toastui-editor-md-splitter {
    display: none;
  }
  .toastui-editor-md-preview {
    display: none;
  }
`;
