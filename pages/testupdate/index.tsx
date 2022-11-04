import { useStore } from 'store';

export default function Testupdate() {
  const { user, hi } = useStore();
  console.log(user, hi);
  return (
    <div style={{ padding: '14px', color: '#d81919' }}>
      <div>리렌더링 되었을까???</div>
      <div>{user.username}</div>
    </div>
  );
}
