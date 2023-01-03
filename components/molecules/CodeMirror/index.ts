import dynamic from 'next/dynamic';

export const CodeMirror = dynamic(() => import('./CodeMirror'), { ssr: false });
