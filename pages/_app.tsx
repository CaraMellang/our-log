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

export const getServerSideProps = () => {
  const zustandStore = useStore();
  return {
    props: { initialZustandState: { ...zustandStore } },
  };
};
