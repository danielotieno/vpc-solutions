import Link from 'next/link';
import React from 'react';

const TopNavbar = () => {
  return (
    <div className='top-header-area'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-8 col-md-9 col-sm-6'>
            <ul className='header-content-left'>
              <li>
                <Link href='/'>
                  <a>
                    <i className='bx bxs-badge-check'></i>
                    ISO 9001 : 2015
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-lg-4 col-md-3 col-sm-6 d-none d-md-block'>
            <ul className='header-content-right'>
              <li>
                <a href='#' target='_blank'>
                  <i className='bx bxl-facebook'></i>
                </a>
              </li>
              <li>
                <a href='#' target='_blank'>
                  <i className='bx bxl-twitter'></i>
                </a>
              </li>

              <li>
                <a href='#' target='_blank'>
                  <i className='bx bxl-instagram'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
