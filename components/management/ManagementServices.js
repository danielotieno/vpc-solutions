import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';

const ManagementServices = () => {
  return (
    <>
      <div className='row align-items-center pt-100'>
        <div className='col-lg-6'>
          <div className='faq-accordion'>
            <Accordion allowZeroExpanded preExpanded={['a']}>
              <AccordionItem uuid='a'>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>Data Governance</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    We offer comprehensive data governance services to support
                    your entire data journey — from capturing to storing to
                    analyzing it. We’ll lay down a data strategy and outline all
                    the necessary procedures for ensuring data security,
                    privacy, and quality and supervise their implementation
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid='b'>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>Data Quality Management</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    We will evaluate your data management processes and the
                    available data to ensure your decision-making is as reliable
                    as possible. We’ll check whether your data is complete,
                    valid, unique, accurate, and consistent and review your data
                    management flow for accountability and transparency
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid='c'>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>Master & Metadata Management</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    it is not only your business assets that we keep in focus
                    but also metadata. We design a master and metadata
                    management strategy, set up standards and data quality
                    metrics, and put down procedures for easy data access,
                    navigation, and sharing.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid='d'>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>Data Integration</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    We wll help you integrate data from multiple sources into a
                    single, cohesive data store. We will set up data cleansing,
                    ETL, and data transformation processes, so you can have
                    one-stop access to all of the essential data and enjoy
                    accurate and effective business intelligence
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid='e'>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>Data Migration</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Looking to increase your apps mobility and enable anytime,
                    anywhere access to your business data? We will recommend
                    trustworthy enterprise data platform vendors, migrate your
                    data infrastructure from an on-premises setting to the
                    cloud, and carry out post-migration testing to make sure no
                    record gets lost
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='faq-accordion'>
            <Accordion allowZeroExpanded preExpanded={['a']}>
              <AccordionItem uuid='a'>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>Enterprise Data Management & Storage</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    No matter whether you prefer to store your data on-premises
                    or in the cloud, we’ll help you create a flexible data
                    storage solution that scales with your business. We
                    implement data lakes, data warehouses, and end-to-end data
                    ecosystems, including AI-powered ones, so you can always
                    have structured and cleansed data at hand
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid='b'>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>Data Architecture Optimization</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    If you struggle with your data infrastructures performance
                    or costs, we will help you redesign your data ecosystem to
                    enable the seamless flow, management, and consumption of the
                    fast-growing volumes of structured and unstructured data
                    while optimizing instance usage and storage costs
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid='c'>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>Data Security</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    We will start with an audit to identify the current state of
                    your data security methods and policies. Then, we will
                    design a data security strategy, setting up all the
                    necessary processes, metrics, access rights, and technology
                    tools to protect your data from unauthorized use
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid='d'>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>Data Analytics</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    We harness the power of BI, ML, and AI technologies to
                    process data at speed and scale, allowing you to tap into
                    descriptive and predictive analytics and making sure
                    everyone in your organization makes data-driven business
                    decisions
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid='e'>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>Disaster Recovery</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    We will help you support critical business functions by
                    recovering your data infrastructure following any disruptive
                    events. We’ll set up policies, tools, and procedures to
                    quickly restore your data and services with minimal harm to
                    your business
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagementServices;
