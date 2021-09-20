import Link from 'next/link';
import React from 'react';

const GetInTouch = () => {
  return (
    <div className='subscribe-area'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <h2>Interested To Work With Us</h2>
            <p>We would be happy to answer your questions &#8594;</p>
          </div>

          <div className='col-lg-6'>
            <div className='getintouch'>
              <Link href='/contact-us'>
                <button className='default-btn' type='submit'>
                  Get In Touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;