import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Facilities = () => {
  return (
    <div className='second-facility-area pt-100 pb-70'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-sm-6'>
            <div className='second-facility-item'>
              <Image
                src='/data-management.png'
                width={60}
                height={60}
                alt='Image'
              />
              <h3>Data Management</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>

              <Link href='/'>
                <a className='read-more'>
                  Read More <i className='bx bx-plus'></i>
                </a>
              </Link>
            </div>
          </div>

          <div className='col-lg-4 col-sm-6'>
            <div className='second-facility-item'>
              <Image
                src='/preparation.png'
                width={60}
                height={60}
                alt='Image'
              />
              <h3>Data Preparation</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>

              <Link href='/'>
                <a className='read-more'>
                  Read More <i className='bx bx-plus'></i>
                </a>
              </Link>
            </div>
          </div>

          <div className='col-lg-4 col-sm-6 offset-sm-3 offset-lg-0'>
            <div className='second-facility-item'>
              <Image
                src='/data-visualization.png'
                width={60}
                height={60}
                alt='Image'
              />
              <h3>Data Visualisation</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>

              <Link href='/'>
                <a className='read-more'>
                  Read More <i className='bx bx-plus'></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
