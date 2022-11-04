import { useStore } from 'store';

export default function Testobserve() {
  const { update } = useStore();
  return (
    <>
      <div
        style={{ padding: '14px' }}
        onClick={() => {
          update('시아');
        }}
      >
        나 누르며ㅑㄴ 어케될까?? ㅎㅎ
      </div>
      <div style={{ padding: '14px' }}>얘는 테스트야</div>
    </>
  );
}
