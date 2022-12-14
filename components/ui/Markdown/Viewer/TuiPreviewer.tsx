import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import styled from '@emotion/styled';
import React, { MutableRefObject, useState } from 'react';
import { Editor, EditorProps } from '@toast-ui/react-editor';

interface CustomTuiViewerProps {
  el?: Element | string | null;
}

/**
 * 상태변화될때마다 마크다운에 변화가 반영되는 커스텀 컴포넌트입니다.
 * element값을 넘겨주세요
 */
const TuiPreviewer = ({ el }: CustomTuiViewerProps) => {
  if (!el) return <div></div>;
  if (el instanceof Element)
    return (
      <CustomTuiViewerWrap>
        <div dangerouslySetInnerHTML={{ __html: el.outerHTML }} />
      </CustomTuiViewerWrap>
    );
  return (
    <CustomTuiViewerWrap>
      <div dangerouslySetInnerHTML={{ __html: el }} />
    </CustomTuiViewerWrap>
  );
};

const CustomTuiViewerWrap = styled.div`
  font-weight: bold;
  //.toastui-editor-contents .toastui-editor-md-preview-highlight::after {
  //  background-color: unset;
  //}
  //
  //.toastui-editor-contents table {
  //  margin: 14px auto;
  //}
  //.toastui-editor-contents img {
  //  display: block;
  //  margin: 12px auto;
  //}
  ////인용문
  //.toastui-editor-contents blockquote {
  //  background-color: #f8f9fa;
  //  border-left: 4px solid #20c997;
  //  p {
  //    color: black;
  //  }
  //}
  .toastui-editor-contents .toastui-editor-md-preview-highlight::after {
    background-color: unset;
  }
  table {
    margin: 14px auto;
  }
  img {
    display: block;
    max-width: 100%;
    margin: 12px auto;
  }
  //인용문
  blockquote {
    background-color: #f8f9fa;
    border-left: 4px solid #20c997;
    p {
      color: black;
    }
  }
`;

export { TuiPreviewer };

// const CustomTuiViewer = React.forwardRef<Editor, CustomTuiViewerProps>((props, ref) => {
//   const editorRef = ref as MutableRefObject<Editor>;
//   const getMarkdownHtml = editorRef.current?.getInstance().getEditorElements().mdPreview.outerHTML;
//   const [htmlValue, setHtmlValue] = useState('');
//
//   return (
//       <CustomTuiViewerWrap className="toastui-editor-contents">
//         <div dangerouslySetInnerHTML={{ __html: htmlValue }} />
//       </CustomTuiViewerWrap>
//   );
// });
