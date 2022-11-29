import dynamic from 'next/dynamic';

const PostWrite = dynamic(() => import('./PostWrite'), { ssr: false });
export { PostWrite };
