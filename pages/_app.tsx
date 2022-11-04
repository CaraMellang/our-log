import '../styles/globals.css';
import '@styles/reset.scss';
import type { AppProps } from 'next/app';
import { createStore } from 'zustand';
import createContext from 'zustand/context';

const store = createStore();

const StoreContext = createContext();

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
