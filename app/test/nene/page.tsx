import { NeneTest } from 'components/NeneTest/NeneTest';

export default function nenePagedd() {
  return (
    <div>
      <div>이건 댐?</div>
      <NeneTest />
      {/* Nextjs는 위 태그를 넣으면 클라이언트 전용기능을 사용하고있는것을 모름. ㅇ그래서 commentes에 클라전용기능 사용하는 구성요소를 래핑해야함. */}
      {/* import export 하는 수고로움이 생겼는데 왜 저렇게 해야 작동하는지는 모름.;; */}
    </div>
  );
}
