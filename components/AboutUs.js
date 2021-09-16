import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AboutUs = () => {
  return (
    <div className='about-area pb-130'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <div className='about-img'>
              <Image
                src='/img/about/about-img.png'
                width={570}
                height={604}
                alt='Data Analytics'
              />

              <div className='shape-1'>
                <Image
                  src='/img/about/about-shape-1.png'
                  width={570}
                  height={605}
                  alt='Shape One'
                />
              </div>

              <div className='shape-2'>
                <Image
                  src='/img/about/about-shape-2.png'
                  width={289}
                  height={610}
                  alt='Shape Two'
                />
              </div>

              <div className='shape-3'>
                <Image
                  src='/img/about/about-shape-3.png'
                  width={185}
                  height={185}
                  alt='Shape Three'
                />
              </div>
            </div>
          </div>

          <div className='col-lg-6'>
            <div className='about-content'>
              <span className='top-title'>About Us</span>
              <h2>
                We are trusted The Best for Information technology consultancy
                activities.
              </h2>
              <p>
                We provide a full scope of big data consulting and
                implementation services, making your torrents of data usable by
                everyone in your company. Our mission is to get you insights
                quickly, and in a format that is easy to understand regardless
                of skill sets. From data management strategies to custom
                self-service BI platforms catering to your unique industry
                needs, we want to arm you with the best possible big data
                solution.
              </p>

              <ul>
                <li>
                  <i className='flaticon-tick'></i>
                  Data Management
                </li>
                <li>
                  <i className='flaticon-tick'></i>
                  Data Preparation
                </li>
                <li>
                  <i className='flaticon-tick'></i>
                  Data Warehouse Automation
                </li>

                <li>
                  <i className='flaticon-tick'></i>
                  Data Visualization
                </li>
              </ul>

              <Link href='/about-us'>
                <a className='default-btn'>About Us</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
