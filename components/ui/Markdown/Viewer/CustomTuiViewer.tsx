import '@toast-ui/editor/dist/toastui-editor.css';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import styled from '@emotion/styled';

interface CustomTuiViewerProps {
  el?: string | Element;
}

/**
 * 상태변화될때마다 마크다운에 변화가 반영되는 커스텀 컴포넌트입니다.
 * @Param { el?: string | Element }
 */
const CustomTuiViewer = ({ el }: CustomTuiViewerProps) => {
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

export { CustomTuiViewer };

const CustomTuiViewerWrap = styled.div`
  .toastui-editor-contents .toastui-editor-md-preview-highlight::after {
    background-color: unset;
  }
`;
