import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import { dataServices } from '../constants/dataServices';

const ManagementServices = () => {
  return (
    <>
      <div className='row align-items-center pt-100'>
        {dataServices.map((index, item) => {
          return (
            <div key={index} className='col-lg-6'>
              <div className='faq-accordion'>
                <Accordion allowZeroExpanded>
                  <AccordionItem uuid={item.uuid}>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>{item.title}</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>{item.description}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ManagementServices;
