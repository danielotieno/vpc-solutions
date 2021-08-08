import React from 'react';

const TopNavbar = () => {
  return (
    <div className='top-header-area'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-8 col-md-9 col-sm-6'>
            <ul className='header-content-left'>
              <li>
                <i className='bx bx-time'></i>
                Mon-Fri 9am-5pm
              </li>
              <li>
                <a href='tel:+822456974'>
                  <i className='bx bx-phone-call'></i>
                  Call Us: +353 85 850 0314
                </a>
              </li>
              <li>
                <a href='mailto:david.maguire@vpc-solutions.com'>
                  <i className='bx bxs-paper-plane'></i>
                  Email: info@vpc-solutions.com
                </a>
              </li>
            </ul>
          </div>
          <div className='col-lg-4 col-md-3 col-sm-6'>
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
