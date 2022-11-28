import React from 'react';
export function ManageUI({ children }: { children: React.ReactNode }) {
  return <div style={{ height: '100%' }}>매니저입니다{children}</div>;
}
