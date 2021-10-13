import Image from 'next/image';
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { biSteps } from '../constants/biSteps';

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
            <div className='faq-accordion'>
              <Accordion allowZeroExpanded>
                {biSteps.map((item, index) => {
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
