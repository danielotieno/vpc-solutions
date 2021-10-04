import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';
import Fade from 'react-reveal/Fade';
import SectionHeading from './common/SectionHeading';

const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  loop: true,
  nav: false,
  autoplay: true,
  autoplayHoverPause: true,
  mouseDrag: true,
  margin: 30,
  center: true,
  dots: true,
  smartSpeed: 1500,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
};

const OurServices = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <div className='our-work-area ptb-100'>
      <div className='container'>
        <Fade top>
          <SectionHeading
            sectionTitle='Data consulting and development services to power your business'
            sectionText=' A big data consulting and development company with more than a
            decade of experience, we know how to make your big data smart.
            Unlock new revenue streams, faster time to market, and competitive
            differentiation by letting your business, not IT, know how to
            discover and interpret data from sources as disparate as internal
            systems.'
          />
        </Fade>

        {display ? (
          <OwlCarousel
            className='work-wrap owl-carousel owl-theme'
            {...options}>
            <div className='single-work'>
              <Image
                src='/img/data-management.png'
                width={570}
                height={400}
                alt='Data Management'
              />

              <h3 className='work-title'>Data Management</h3>

              <div className='work-content-wrap'>
                <div className='work-content'>
                  <h3>Data Management</h3>
                  <p>
                    Our data management consulting expertise spans metadata
                    management, data governance, data storage in data lakes and
                    warehouses, and beyond. You get seamless data, optimized
                    storage costs, and regulatory compliance.
                  </p>
                </div>
              </div>
            </div>

            <div className='single-work'>
              <Image
                src='/img/data-integration.jpg'
                width={570}
                height={400}
                alt='Data Integration'
              />

              <h3 className='work-title'>Data Integration</h3>

              <div className='work-content-wrap'>
                <div className='work-content'>
                  <h3>Data Integration</h3>
                  <p>
                    Join your data sources with batch or stream processing in a
                    single location for billing, payroll, fraud detection,
                    sentiment analysis, and more. Our data integration
                    developers make the process easy using ETL tools and custom
                    APIs.
                  </p>
                </div>
              </div>
            </div>

            <div className='single-work'>
              <Image
                src='/img/data-security.jpg'
                width={570}
                height={400}
                alt='Data Security'
              />

              <h3 className='work-title'>Data Security</h3>

              <div className='work-content-wrap'>
                <div className='work-content'>
                  <h3>Data Security</h3>
                  <p>
                    Take your business data protection to a new level with our
                    expertise in cloud platforms, data encryption, and masking.
                    Our DevSecOps experts can also help you adopt security as
                    code to anticipate breaches and save costs on resource
                    management.
                  </p>
                </div>
              </div>
            </div>

            <div className='single-work'>
              <Image
                src='/img/data-visualization.png'
                width={570}
                height={400}
                alt='Data Visualisation'
              />

              <h3 className='work-title'>Data Visualisation</h3>

              <div className='work-content-wrap'>
                <div className='work-content'>
                  <h3>Data Visualisation</h3>
                  <p>
                    We build visualizations that tell stories in a simple way,
                    enabling informed decision-making and solid ad-hoc data
                    analysis. Take your next big step forward with AR/VR or
                    voice assistants that will deliver convenient access to all
                    of your data
                  </p>
                </div>
              </div>
            </div>
          </OwlCarousel>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default OurServices;
