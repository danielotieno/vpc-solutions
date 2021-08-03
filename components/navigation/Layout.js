import React from 'react';
import GoTop from './GoTop';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <GoTop scrollStepInPx='100' delayInMs='10.50' />
    </>
  );
};

export default Layout;
