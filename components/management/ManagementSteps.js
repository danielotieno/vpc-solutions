import Image from 'next/image';
import React from 'react';
import Fade from 'react-reveal/Fade';

const ManagementSteps = () => {
  return (
    <div className='faq-area bg-2 ptb-100'>
      <div className='container'>
        <div className='section-title'>
          <h2>
            Unleash the transformative power of data with end-to-end data
            management services
          </h2>
          <p>
            We start with analyzing your data, data sources, business goals, and
            available infrastructure components to create the best-fit data
            management solution. Even though we tailor our data management
            services to better suit a company’s needs, the essential flow stays
            alike.
          </p>
        </div>

        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <div className='faq-img'>
              <Image
                src='/img/data-man-steps.png'
                width={640}
                height={427}
                alt='Our Approach'
              />
            </div>
          </div>

          <div className='col-lg-6'>
            <ul>
              <p>
                <Fade left>
                  <a
                    className='default-btn w-100'
                    data-bs-toggle='collapse'
                    href='#collapseExample1'
                    role='button'
                    aria-expanded='false'
                    aria-controls='collapseExample1'>
                    1. Ingestion
                  </a>
                </Fade>

                <div className='collapse pt-10' id='collapseExample1'>
                  <div className='card card-body bg-light border'>
                    Collecting internal and external data from available
                    databases, file repositories, streaming APIs, and other
                    sources.
                  </div>
                </div>
              </p>

              <p>
                <Fade right>
                  <a
                    className='default-btn w-100'
                    data-bs-toggle='collapse'
                    href='#collapseExample2'
                    role='button'
                    aria-expanded='false'
                    aria-controls='collapseExample2'>
                    2. Structuring
                  </a>
                </Fade>

                <div className='collapse pt-10' id='collapseExample2'>
                  <div className='card card-body bg-light border'>
                    Administering, versioning, cleansing, standardizing,
                    correcting, and validating the integrated data.
                  </div>
                </div>
              </p>

              <p>
                <Fade top>
                  <a
                    className='default-btn w-100'
                    data-bs-toggle='collapse'
                    href='#collapseExample4'
                    role='button'
                    aria-expanded='false'
                    aria-controls='collapseExample4'>
                    3. Contextualization and enrichment
                  </a>
                </Fade>

                <div className='collapse pt-10' id='collapseExample4'>
                  <div className='card card-body bg-light border'>
                    Identifying and removing duplicates and, if needed, bringing
                    in more data sources to restore missing information.
                  </div>
                </div>
              </p>
              <p>
                <Fade bottom>
                  <a
                    className='default-btn w-100'
                    data-bs-toggle='collapse'
                    href='#collapseExample5'
                    role='button'
                    aria-expanded='false'
                    aria-controls='collapseExample5'>
                    4. Warehousing
                  </a>
                </Fade>

                <div className='collapse pt-10' id='collapseExample5'>
                  <div className='card card-body bg-light border'>
                    Having your data stored in a secure environment with easy
                    querying, fast retrieval, and prompt response times.
                  </div>
                </div>
              </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementSteps;
