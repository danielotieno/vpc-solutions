import Link from 'next/link';
import React from 'react';

const GetInTouch = () => {
  return (
    <div className='subscribe-area'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <h2>Interested To Work With Us</h2>
            <p>
              We would be happy to answer your questions{' '}
              <strong>&#8594;</strong>{' '}
            </p>
          </div>

          <div className='col-lg-6'>
            <div className='newsletter-form'>
              <Link href='/contact-us' passHref>
                <button className='default-btn'>Get In Touch</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
