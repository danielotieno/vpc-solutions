import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';
import { bannerData } from '../constants/Banner/bannerData';

const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  items: 1,
  loop: true,
  nav: false,
  mouseDrag: true,
  dots: true,
  autoplay: true,
  autoplayHoverPause: true,
};

const MainBanner = () => {
  // Slider
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <>
      <div className='hero-slider-area'>
        {display ? (
          <OwlCarousel
            className='hero-slider-wrap owl-carousel owl-theme'
            {...options}>
            {bannerData.map((item, index) => {
              return (
                <div key={index} className={`slider-item ${item.imgLink}`}>
                  <div className='d-table'>
                    <div className='d-table-cell'>
                      <div className='container'>
                        <div className='row align-items-center'>
                          <div className='col-lg-9'>
                            <div className='slider-text one'>
                              <span className='top-title'>
                                Value Proposition Consulting
                              </span>
                              <h1>{item.title}</h1>
                              <p>{item.description}</p>

                              <div className='slider-btn'>
                                <Link
                                  className='default-btn'
                                  href='/contact-us'>
                                  Get In Touch
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-3'></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </OwlCarousel>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default MainBanner;
