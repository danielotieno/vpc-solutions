import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../../public/img/logo.png';

const Footer = () => {
  return (
    <>
      <footer className='footer-top-area f-bg pt-100 pb-70'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-widget'>
                <Link href='/'>
                  <a>
                    <Image
                      src={Logo}
                      alt='VPC Solutions Logo'
                      width={120}
                      height={50}
                    />
                  </a>
                </Link>

                <p>
                  We provide a full scope of big data consulting and
                  implementation services, making your torrents of data usable
                  by everyone in your company. Our mission is to get you
                  insights quickly, and in a format that is easy to understand
                  regardless of skill sets.
                </p>

                <div className='social-area'>
                  <ul>
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
                        <i className='bx bxl-linkedin'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='single-widget'>
                <h3>Quick Links</h3>

                <ul>
                  <li>
                    <a href='#'>Data Management</a>
                  </li>
                  <li>
                    <a href='#'>Business Intelligence</a>
                  </li>
                  <li>
                    <a href='#'>EnterPrise Data Platform</a>
                  </li>
                  <li>
                    <Link href='/quality-policy'>
                      <a>Quality Policy</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='single-widget contact'>
                <h3>Get In Touch</h3>

                <ul>
                  <li>
                    <a href='mailto:info@vpc-solutions.com'>
                      <i className='bx bx-envelope'></i>
                      <span>Email:</span>
                      info@vpc-solutions.com
                    </a>
                  </li>

                  <li>
                    <i className='bx bx-location-plus'></i>
                    <span>Address:</span>
                    3rd floor 116 Dundas St Edinburgh EH3 5DQ, United Kingdom
                  </li>
                  <li>
                    <i className='bx bx-location-plus'></i>
                    <span>Address:</span>
                    Teach An Rua Kells Road Collon Co. Louth A92 P2N7 Ireland
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className='footer-bottom-area'>
        <div className='container'>
          <div className='copy-right'>
            <p>Copyright &copy; 2019 - Present, VPC Solutions</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
