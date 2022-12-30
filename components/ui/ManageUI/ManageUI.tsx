'use client';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export function ManageUI({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ height: '100%' }}>
      <div>{children}</div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton={false}
        theme="dark"
        style={{ width: '400px' }}
      />
    </div>
  );
}
