'use client';
//없으면 서버컴포넌트로 간주 (ssr) , dynamic 대체인가? , 이거없으면 서버에서만 작동해서 html로 넘겨주는듯. 이거 안쓰면 react 기능사용불가

import React, { useState } from 'react';

const TestPage = () => {
  const [state, setState] = useState(1);
  return <div>테스트 라고 나가!!!!!!</div>;
};

export default TestPage;
