'use client';
import styled from '@emotion/styled';
import { EditorState } from '@codemirror/state';
import {
  crosshairCursor,
  drawSelection,
  dropCursor,
  EditorView,
  highlightActiveLine,
  highlightActiveLineGutter,
  highlightSpecialChars,
  keymap,
  lineNumbers,
  rectangularSelection,
} from '@codemirror/view';
import { javascript } from '@codemirror/lang-javascript';
import { defaultKeymap } from '@codemirror/commands';
// import { EditorView, keymap } from '@codemirror/view';
// import { defaultHighlightStyle } from '@codemirror/highlight';
// import { defaultKeymap } from '@codemirror/commands';
import { useEffect, useRef } from 'react';
import { highlight, highlightAll } from 'prismjs';
import { bracketMatching, defaultHighlightStyle, foldGutter, syntaxHighlighting } from '@codemirror/language';
import { oneDark, oneDarkHighlightStyle, oneDarkTheme } from '@codemirror/theme-one-dark';
import { autocompletion, closeBrackets } from '@codemirror/autocomplete';
import { highlightSelectionMatches } from '@codemirror/search';

export default function CodeMirror() {
  const elRef = useRef<HTMLDivElement>(null);
  console.log();
  useEffect(() => {
    const state = EditorState.create({
      doc: 'console.log("ㅋㅋㅋㅋㅋ");',
      extensions: [
        keymap.of(defaultKeymap),
        javascript(),
        lineNumbers(),
        highlightActiveLineGutter(),
        highlightSpecialChars(),
        foldGutter(),
        drawSelection(),
        dropCursor(),
        syntaxHighlighting(oneDarkHighlightStyle, { fallback: true }),
        oneDarkTheme,
        oneDark,
        bracketMatching(),
        closeBrackets(),
        autocompletion(),
        rectangularSelection(),
        crosshairCursor(),
        highlightActiveLine(),
        highlightSelectionMatches(),
      ],
    });

    const view = new EditorView({ state, parent: elRef.current as any });
    return () => view.destroy();
  }, []);
  return <CodeMirrorWrap ref={elRef}></CodeMirrorWrap>;
}

const CodeMirrorWrap = styled.div`
  .ㅎㅇ {
    color: black;
    width: 200px;
  }
`;
