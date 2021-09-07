import Image from 'next/image';
import React from 'react';
import PageBanner from '../components/common/PageBanner';

const IsoDetails = () => {
  return (
    <>
      <PageBanner
        pageTitle='Quality Policy'
        homePageUrl='/'
        homePageText='Home'
        activePageText='ISO Certified'
        imgClass='iso-bg'
      />

      <div className='doctors-details-area ptb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='iso-sidebar'>
                <div className='iso-img'>
                  <Image
                    src='/img/iso-badge.png'
                    width={300}
                    height={200}
                    alt='ISO Badge'
                  />

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
                        <i class='bx bxl-linkedin-square'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-lg-8'>
              <div className='iso-detailss'>
                <div className='iso-history'>
                  <h2>ISO 9001:2015 Certified</h2>
                  <span>Quality Policy</span>

                  <p>
                    Value Proposition Consulting Ltd (the ‘Organisation’) aims
                    to provide defect-free products and services to its
                    customers on time and within budget.
                  </p>
                  <p>
                    The Organisation operates a Quality Management System that
                    has gained ISO 9001 : 2015 certification, including aspects
                    specific to its scope of certification.
                  </p>
                  <p>The management is committed to:</p>
                  <ul>
                    <li>Develop and improve the Quality Management System</li>
                    <li>
                      Continually improve the effectiveness of the Quality
                      Management System
                    </li>
                    <li>The enhancement of customer satisfaction.</li>
                  </ul>
                  <p>The management has a continuing commitment to:</p>
                  <ul>
                    <li>
                      Ensure that customer needs and expectations are determined
                      and fulfilled with the aim of achieving customer
                      satisfaction
                    </li>
                    <li>
                      Communicate throughout the Organisation the importance of
                      meeting customer needs and all relevant statutory and
                      regulatory requirements
                    </li>
                    <li>
                      Establish the Quality Policy and to set Quality Objectives
                      at relevant functions, levels and processes
                    </li>
                    <li>
                      Ensure that the Management Reviews set and review the
                      Quality Objectives, and report on the internal audit
                      results as a means of monitoring and measuring the
                      processes and the effectiveness of the Quality Management
                      System
                    </li>
                    <li>Ensure the availability of resources.</li>
                  </ul>
                  <p>
                    All personnel understand the requirements of this Quality
                    Policy and abide with the contents of the Quality Management
                    System.
                  </p>
                  <p>
                    The Organisation constantly monitors its quality performance
                    and implements improvements when appropriate.
                  </p>
                  <p>
                    This Quality Policy is regularly reviewed in order to ensure
                    its continuing suitability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IsoDetails;
