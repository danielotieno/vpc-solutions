import Image from 'next/image';
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { managementSteps } from '../constants/managementSteps';

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
            <div className='faq-accordion'>
              <Accordion allowZeroExpanded>
                {managementSteps.map((item, index) => {
                  return (
                    <AccordionItem key={index} uuid={item.uuid}>
                      <AccordionItemHeading>
                        <AccordionItemButton className='management-faq-btn'>
                          <span>{item.title}</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>{item.description}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementSteps;
