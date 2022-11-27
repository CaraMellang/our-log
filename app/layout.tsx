import { Children } from 'react';
import { ManageUI } from '@components/ui/ManageUI';
import { GlobalHeader } from '@components/common/GlobalHeader';
import '@styles/reset.scss';
import { InitialClientComponent } from '@components/ui/InitialClientComponent';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html>
      <head></head>
      <body>
        <GlobalHeader />
        <ManageUI>{children}</ManageUI>
        <InitialClientComponent />
      </body>
    </html>
  );
};

export default Layout;
