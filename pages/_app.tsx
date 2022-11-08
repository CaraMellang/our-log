import '../styles/globals.css';
import '@styles/reset.scss';
import type { AppProps } from 'next/app';
import { createStore } from 'zustand';
import createContext from 'zustand/context';
import { useStore } from 'store';

export default function App({ Component, pageProps }: AppProps) {
  const store = useStore();

  return <Component {...pageProps} />;
}

// export function getIni

export const getServerSideProps = () => {
  const zustandStore = useStore();
  return {
    props: { initialZustandState: { ...zustandStore } },
  };
};

/**
 * 복잡하게 생각할거 없어. 서버랑 클라랑 스토어를 각기 생산하지만. 서버에서 fetch로 내 백앤드에 접근해서 데이터를 가져와서 적용해
 * 그런다음 getData1 , getData2 .... 해서 props로 데이터를 내려 그런다음 위에있는 App에서 초기화를 진행하면
 * 서버도 페이지를 만들면서 초기화하고 클라도 백에서 가져온 것으로 setState하기 때문에 서버, 클라랑 무결성이 유지되지
 * 그냥 하면 됨. 사실 이걸 하는 이유는 ssr로 정적페이지를 미리 렌더링해서 보내줄려는거임. (seo?)
 * getServerSideProps , getStaticProps 이런 문법은 12까지만 유효하니 참고(이 프로젝트는 13, const propsData = use(getDate()) 이런식으로 써야함.  )
 */
