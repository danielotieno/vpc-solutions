import Image from 'next/image';
import React from 'react';
import ManagementServices from './ManagementServices';

const InfoSection = () => {
  return (
    <div className='about-area-three pb-100'>
      <div className='container pt-100'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <div className='about-content'>
              <h2>
                Empowering businesses with future-proof data management
                solutions.
              </h2>
              <p>
                A data management company with 3+ years of experience providing
                business data management and data consulting services, VPC can
                help you turn petabytes of siloed information into a data
                ecosystem.
              </p>

              <p>
                We value flexibility regarding our data management service
                scope. So, no matter if you need to build a data infrastructure
                from the ground up, migrate your data to the cloud, or reveal
                security and compliance holes in your data structures, we are up
                for it all!
              </p>
            </div>
          </div>

          <div className='col-lg-6'>
            <div>
              <Image
                src='/img/dm.jpg'
                width={1920}
                height={1280}
                alt='Data Management'
              />
            </div>
          </div>
        </div>
        <ManagementServices />
      </div>
    </div>
  );
};

export default InfoSection;
