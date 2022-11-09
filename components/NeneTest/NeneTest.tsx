'use client';
import { useState } from 'react';

export function NeneTest() {
  const [state, setState] = useState('네네치킨');
  return (
    <div>
      <div onClick={() => setState('치킨은 몸에 좋다')}>네네테스트입니다.</div>
      <div>{state}</div>
    </div>
  );
}
