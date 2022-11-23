'use client';
import hi, { notFound, useRouter, usePathname, useSearchParams, redirect } from 'next/navigation';

export default function PostDetailPage() {
  console.log(useSearchParams().toString(), usePathname().toString(), useSearchParams());
  return <div>안녕하세요 여기는 페이지디테일입니다 네 감사합니다.</div>;
}
