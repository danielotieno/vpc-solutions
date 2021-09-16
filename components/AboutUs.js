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
                Digital transformation may feel like an incredible challenge
                that brings risks and uncertainties. And it actually is. We
                believe in starting smart and simple to translate complexity
                into an easily digestible roadmap for change. We help you pivot
                to new technology step-by-step while getting most out of your
                legacy systems.
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
