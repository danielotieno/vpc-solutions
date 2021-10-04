import Image from 'next/image';
import React from 'react';

const VisualizationApproach = () => {
  return (
    <div className='faq-area bg-2 ptb-100'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our approach to data visualization services</h2>
          <p>
            Using a road-tested methodology, our data visualization consultants
            have helped many happy clients, both established Fortune 500
            enterprises and startups, create visualizations that really work.
          </p>
        </div>

        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <ul>
              <p>
                <a
                  className='default-btn w-100'
                  data-bs-toggle='collapse'
                  href='#collapseExample1'
                  role='button'
                  aria-expanded='false'
                  aria-controls='collapseExample1'>
                  1. Discover
                </a>
                <div className='collapse pt-10' id='collapseExample1'>
                  <div className='card card-body bg-light border'>
                    Identify user needs and data requirements, including what
                    data should be represented, its dimensions, how datasets
                    will relate to each other, and the level of interaction
                  </div>
                </div>
              </p>

              <p>
                <a
                  className='default-btn w-100'
                  data-bs-toggle='collapse'
                  href='#collapseExample2'
                  role='button'
                  aria-expanded='false'
                  aria-controls='collapseExample2'>
                  2. Clean
                </a>
                <div className='collapse pt-10' id='collapseExample2'>
                  <div className='card card-body bg-light border'>
                    Bring data in shape by restructuring dirty data, collating
                    multiple datasets, and applying any data governance,
                    security, or privacy requirements needed
                  </div>
                </div>
              </p>

              <p>
                <a
                  className='default-btn w-100'
                  data-bs-toggle='collapse'
                  href='#collapseExample4'
                  role='button'
                  aria-expanded='false'
                  aria-controls='collapseExample4'>
                  3. Design
                </a>
                <div className='collapse pt-10' id='collapseExample4'>
                  <div className='card card-body bg-light border'>
                    Create different design solutions meeting the needs of the
                    target user groups, play around with chart types to choose
                    the best, and select the right visualization tools
                  </div>
                </div>
              </p>
              <p>
                <a
                  className='default-btn w-100'
                  data-bs-toggle='collapse'
                  href='#collapseExample5'
                  role='button'
                  aria-expanded='false'
                  aria-controls='collapseExample5'>
                  4. Deliver
                </a>
                <div className='collapse pt-10' id='collapseExample5'>
                  <div className='card card-body bg-light border'>
                    Build the dashboard and self-service reporting tools in the
                    scope, gather user feedback, test for bugs, and iterate to
                    polish the visuals
                  </div>
                </div>
              </p>
            </ul>
          </div>

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
        </div>
      </div>
    </div>
  );
};

export default VisualizationApproach;
