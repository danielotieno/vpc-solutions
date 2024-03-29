import React from 'react';
import Footer from './Footer';
import GoTop from './GoTop';
import Navbar from './Navbar';
import NavSocial from './NavSocial';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <GoTop scrollStepInPx='100' delayInMs='10.50' />
      <NavSocial scrollStepInPx='100' delayInMs='10.50' />
      <Footer />
    </>
  );
};

export default Layout;
