import { NextSeo } from 'next-seo';
import { useEffect } from 'react';
import 'react-accessible-accordion/dist/fancy-example.css';
import Layout from '../components/navigation/Layout';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import '../public/styles/animate.css';
import '../public/styles/bootstrap.min.css';
import '../public/styles/boxicons.min.css';
import '../public/styles/flaticon.css';
import '../public/styles/meanmenu.css';
import '../public/styles/responsive.css';
import '../public/styles/style.css';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('../public/styles/bootstrap.bundle.min.js');
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
