import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';

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
            <div className='slider-item slider-item-bg-1'>
              <div className='d-table'>
                <div className='d-table-cell'>
                  <div className='container'>
                    <div className='row align-items-center'>
                      <div className='col-lg-9'>
                        <div className='slider-text one'>
                          <span className='top-title'>
                            Value Proposition Consulting
                          </span>
                          <h1>We architect intelligent IT strategies</h1>
                          <p>
                            We are a software development and consulting company
                            that creates and transforms products and enterprises
                            to drive growth.
                          </p>

                          <div className='slider-btn'>
                            <Link href='/contact-us'>
                              <a className='default-btn'>Get In Touch</a>
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

            <div className='slider-item slider-item-bg-2'>
              <div className='d-table'>
                <div className='d-table-cell'>
                  <div className='container'>
                    <div className='row align-items-center'>
                      <div className='col-lg-9'>
                        <div className='slider-text two'>
                          <span className='top-title'>
                            Value Proposition Consulting
                          </span>
                          <h1>Let Us Make Something Good Together</h1>
                          <p>
                            Using a tech-agnostic approach, we provide the right
                            blend of software and hardware solutions that let
                            you capture the full value of tech.
                          </p>

                          <div className='slider-btn'>
                            <Link href='/appointment'>
                              <a className='default-btn'>Get In Touch</a>
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

            <div className='slider-item slider-item-bg-3'>
              <div className='d-table'>
                <div className='d-table-cell'>
                  <div className='container'>
                    <div className='row align-items-center'>
                      <div className='col-lg-9'>
                        <div className='slider-text one'>
                          <span className='top-title'>
                            Value Proposition Consulting
                          </span>
                          <h1>You are unique. So we are</h1>
                          <p>
                            We think in terms of value, not technology. We deep
                            dive into your business to deliver innovations
                            tailored to your business needs.
                          </p>

                          <div className='slider-btn'>
                            <Link href='/appointment'>
                              <a className='default-btn'>Get In Touch</a>
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

            <div className='slider-item slider-item-bg-4'>
              <div className='d-table'>
                <div className='d-table-cell'>
                  <div className='container'>
                    <div className='row align-items-center'>
                      <div className='col-lg-9'>
                        <div className='slider-text two'>
                          <span className='top-title'>
                            Value Proposition Consulting
                          </span>
                          <h1>You are unique. So we are</h1>
                          <p>
                            We think in terms of value, not technology. We deep
                            dive into your business to deliver innovations
                            tailored to your business needs.
                          </p>

                          <div className='slider-btn'>
                            <Link href='/appointment'>
                              <a className='default-btn'>Get In Touch</a>
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
          </OwlCarousel>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default MainBanner;
