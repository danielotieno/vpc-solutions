import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { dataServices } from '../constants/dataServices';
import { dataServicesTwo } from '../constants/dataServiceTwo';
const ManagementServices = () => {
  return (
    <>
      <div className='row align-items-center pt-100'>
        <div className='col-lg-6'>
          <div className='faq-accordion'>
            <Accordion allowZeroExpanded>
              {dataServices.map((item, index) => {
                return (
                  <AccordionItem key={index} uuid={item.uuid}>
                    <AccordionItemHeading>
                      <AccordionItemButton>
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
          <div className='faq-accordion'>
            <Accordion allowZeroExpanded>
              {dataServicesTwo.map((item, index) => {
                return (
                  <AccordionItem key={index} uuid={item.uuid}>
                    <AccordionItemHeading>
                      <AccordionItemButton>
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
    </>
  );
};

export default ManagementServices;
