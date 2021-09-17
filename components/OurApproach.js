import Image from 'next/image';
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';

const OurApproach = () => {
  return (
    <div className='faq-area bg-2 ptb-100'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our data ecosystem development approach</h2>
          <p>
            Our big data architects and engineers use the best available
            technologies and our road-tested approach that saves months of data
            transformation efforts to deliver data value for your business
            rapidly.
          </p>
        </div>

        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <div className='faq-img'>
              <Image
                src='/img/data-integration.jpg'
                width={640}
                height={426}
                alt='Our Approach'
              />
            </div>
          </div>

          <div className='col-lg-6'>
            <div className='faq-accordion'>
              <Accordion allowZeroExpanded preExpanded={['a']}>
                <AccordionItem uuid='a'>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>1. Starting small</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      We first identify business problems facing your
                      stakeholders and prioritize use cases to start small and
                      with a limited number of datasets.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid='b'>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>2. Building a scale-ready MPV</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      We then build an MVP integrating the data components
                      required for each use case and collect user feedback for
                      adjustments to the blueprint architecture
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid='c'>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>3. Improving your data ecosystem iteratively</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      We continue adding the required data capabilities to your
                      data ecosystem, keeping processes simple to scale and
                      expand horizontally for other use cases
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
