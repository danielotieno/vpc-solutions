import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import BgBanner from '../../public/banner-img.png';
import BgImage from '../../public/home-four-shape-1.png';

const MainBanner = () => {
  return (
    <div className='main-banner-area-four'>
      <div className='d-table'>
        <div className='d-table-cell'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-7'>
                <div className='banner-text'>
                  <ScrollAnimation
                    animateIn='fadeInUp'
                    delay={50}
                    animateOnce={true}>
                    <span>Value Proposition Consulting</span>
                  </ScrollAnimation>

                  <ScrollAnimation
                    animateIn='fadeInUp'
                    delay={50}
                    animateOnce={true}>
                    <h1>
                      {' '}
                      We architect intelligent IT strategies and solutions
                    </h1>
                  </ScrollAnimation>

                  <ScrollAnimation
                    animateIn='fadeInUp'
                    delay={50}
                    animateOnce={true}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua gravida. Risus commodo aliqua gravida Risus
                      commodo.
                    </p>
                  </ScrollAnimation>

                  <ScrollAnimation
                    animateIn='fadeInUp'
                    delay={50}
                    animateOnce={true}>
                    <div className='banner-btn'>
                      <Link href='/' passHref>
                        <a className='default-btn'>Get Started</a>
                      </Link>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>

              <div className='col-lg-5 pr-0'>
                <div className='banner-img-wrap'>
                  <div className='shape'>
                    <Image
                      src={BgBanner}
                      width={450}
                      height={550}
                      alt='Analytics'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='shape'>
        <Image src={BgImage} width={1040} height={653} alt='Image' />
      </div>
    </div>
  );
};

export default MainBanner;
