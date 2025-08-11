import React from 'react';

import Footer from '../Footer';
import Header from '../Header';
import { LayoutProps } from './Layout.types';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
