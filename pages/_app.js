import { NextSeo } from 'next-seo';
import { useEffect } from 'react';
import 'react-accessible-accordion/dist/fancy-example.css';
import Layout from '../components/navigation/Layout';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import '../public/css/animate.css';
import '../public/css/bootstrap.min.css';
import '../public/css/boxicons.min.css';
import '../public/css/flaticon.css';
import '../public/css/meanmenu.css';
import '../public/css/responsive.css';
import '../public/css/style.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('../public/css/bootstrap.bundle.min.js');
  }, []);

  return (
    <Layout>
      <NextSeo
        title='Value Proposition Consulting'
        description='We are a software development and consulting company that creates and transforms products and enterprises to drive growth.'
      />

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
