import { Children } from 'react';
import { ManageUI } from '@components/ui/ManageUI';
import { GlobalHeader } from '@components/common/GlobalHeader';
import '@styles/reset.scss';
import { InitialClientComponent } from '@components/ui/InitialClientComponent';
import '@styles/globals.css';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <GlobalHeader />
        <ManageUI>{children}</ManageUI>
        <InitialClientComponent />
      </body>
    </html>
  );
};

export default Layout;
