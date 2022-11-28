'use client';

import { useEffect, useLayoutEffect } from 'react';

type theme = 'dark' | 'light' | null;

export function InitialClientComponent() {
  //Question: 각 컴포넌트들이 분리되어있고 이 이니셜컴포넌트도 분할된 컴포넌트의 한 파트일 경우. 이곳에서 useLayoutEffect를 걸면 나머지 파트들도 렌더링을 멈추는가?
  //Question2: useEffect는 컴포넌트 렌더링 후 실행되는 훅. 그럼 간단한 태그 하나만 두면 각기 파트들이 렌더링된다는걸로 치면 아무런 태그거 없는 이 컴포넌트가 먼저 실행되는것 아닌가? useLayout이 아니지만 비슷하게 동작할것.
  //오류로 인해 임시로 useLayout => useEffect로 전환
  useEffect(() => {
    const getTheme = localStorage.getItem('theme') as theme;
    if (!getTheme) {
      localStorage.setItem('theme', 'light');
      document.body.dataset.theme = 'light';
      return;
    }
    //https://handhand.tistory.com/277
    //타입체킹 enum => union type으로 전환 고려
    if (getTheme !== 'dark' && getTheme !== 'light') return;
    document.body.dataset.theme = getTheme;
  }, []);
  return <div></div>;
}
