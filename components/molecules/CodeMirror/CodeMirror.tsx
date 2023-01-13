'use client';
import styled from '@emotion/styled';
import { EditorSelection, EditorState } from '@codemirror/state';
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
  Tooltip,
  showTooltip,
} from '@codemirror/view';
import { javascript } from '@codemirror/lang-javascript';
import { defaultKeymap } from '@codemirror/commands';
// import { EditorView, keymap } from '@codemirror/view';
// import { defaultHighlightStyle } from '@codemirror/highlight';
// import { defaultKeymap } from '@codemirror/commands';
import { useEffect, useRef } from 'react';
import { highlight, highlightAll } from 'prismjs';
import { bracketMatching, foldGutter, syntaxHighlighting } from '@codemirror/language';
import { oneDark, oneDarkHighlightStyle, oneDarkTheme } from '@codemirror/theme-one-dark';
import { autocompletion, closeBrackets } from '@codemirror/autocomplete';
import { gotoLine, highlightSelectionMatches } from '@codemirror/search';
// import {styleTags} from "@codemirror/highlight";

export default function CodeMirror() {
  const elRef = useRef<HTMLDivElement>(null);
  console.log();
  useEffect(() => {
    //태그정의
    const state = EditorState.create({
      doc: 'console.log("ㅋㅋㅋㅋㅋ");\nconst aa = 1;\n fucntion(){return "쓰레기라이브러리";}\nconst c = "sdsdasdsadasdasddasdasd";\n\n',
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
        EditorView.updateListener.of((e) => {
          console.log('나가', e.state);
        }),
      ],
    });

    const view = new EditorView({ state, parent: elRef.current as HTMLDivElement });
    view?.dispatch({ selection: EditorSelection.create([EditorSelection.range(4, 6)]) });
    // view.dispatch({ selection: EditorSelection.create([EditorSelection.range(1, 12)]) });
    // JSON.parse();
    // view?.dispatch({
    //   selection: { anchor: 4, head: 12 },
    // });
    view.focus();
    return () => view.destroy();
  }, []);
  return <CodeMirrorWrap ref={elRef}></CodeMirrorWrap>;
}

const CodeMirrorWrap = styled.div`
  margin-top: 200px;
  .ㅎㅇ {
    color: black;
    width: 200px;
  }
`;
