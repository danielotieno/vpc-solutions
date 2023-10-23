import Link from 'next/link';
import React from 'react';

const GetInTouch = () => {
  return (
    <div className='subscribe-area'>
      <div className='container'>
        <div className='row align-items-center text-center'>
          <div className='col-lg-12'>
            <h2>Interested To Work With Us?</h2>
            <p>We would be happy to answer your questions </p>
            <Link href='/contact-us' passHref>
              <button className='default-btn'>Get In Touch</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
