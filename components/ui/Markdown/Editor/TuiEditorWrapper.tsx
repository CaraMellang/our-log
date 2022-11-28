import { Editor, EditorProps } from '@toast-ui/react-editor';
import React from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
//컬러플러그인
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';

//코드 하이라이팅 플러그인
// import Prism from 'prismjs';
//prismjs로 사용하면 하나하나 따로 가져와야합니다.
// import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

//모든 코드하이라이팅을 가져옵니다.
import codeSyntaxHighlightAll from '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';

export interface TuiEditorWithForwardedProps extends EditorProps {
  forwardedRef?: React.ForwardedRef<Editor>;
  // forwardedRef?: React.MutableRefObject<Editor>;
}

const EditorWrapper = (props: TuiEditorWithForwardedProps) => (
  <Editor
    {...props}
    ref={props.forwardedRef}
    plugins={[colorSyntax, codeSyntaxHighlightAll]}
    // plugins={[colorSyntax, [codeSyntaxHighlightAll, { highlighter: Prism }]]}
  />
);

export default EditorWrapper;
