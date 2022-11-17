'use client';
//없으면 서버컴포넌트로 간주 (ssr) , dynamic 대체인가? , 이거없으면 서버에서만 작동해서 html로 넘겨주는듯. 이거 안쓰면 react 기능사용불가
import styled from '@emotion/styled';

import React, { useState } from 'react';

export default function TestPage() {
  const [state, setState] = useState(1);
  return <Test>테스트 라고 나가!!!!!!</Test>;
}

const Test = styled.div`
  color: red;
`;
