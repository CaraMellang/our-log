import { Children } from 'react';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html>
      <head></head>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
