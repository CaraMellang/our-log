'use client';
import { notFound, useRouter, usePathname, useSearchParams, redirect } from 'next/navigation';
//임포트를 비구조화로 안받고 그냥 변수로 받으면 터져버림 왜?????

export default function PostDetailPage() {
  console.log(useSearchParams().toString(), usePathname().toString(), useSearchParams());
  return <div>안녕하세요 여기는 페이지디테일입니다 네 감사합니다.</div>;
}
