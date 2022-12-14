'use client';
import { useStore } from '@/store';
import { SIgnInForm } from '@components/organisms/Auth';

export function SignIn() {
  const { user, update } = useStore((state) => state);
  return (
    <div>
      <div>안녕ㅋㅋ 이버튼 눌러바</div>
      <button onClick={() => update('오매 유저가 생겨버렸당.')}>ㅋㅋ 버튼</button>
      <SIgnInForm />
    </div>
  );
}
