'use client';
import dynamic from 'next/dynamic';
import React from 'react';
import { Editor, EditorProps } from '@toast-ui/react-editor';

interface EditorPropsWithHandlers extends EditorProps {
  onChange?(value: string): void;
  forwardedRef?: React.ForwardedRef<Editor>;
}

const EditorWrapper = dynamic<EditorPropsWithHandlers>(() => import('./TuiEditorWrapper'), { ssr: false });

export const TuiEditor = React.forwardRef<Editor | undefined, EditorPropsWithHandlers>((props, ref) => (
  <EditorWrapper {...props} forwardedRef={ref as React.ForwardedRef<Editor>} />
));
TuiEditor.displayName = 'TuiEditor';
