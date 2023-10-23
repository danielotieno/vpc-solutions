import { NextSeo } from 'next-seo';
import FunBanner from '../components/common/FunBanner';
import GetInTouch from '../components/common/GetInTouch';
import PageBanner from '../components/common/PageBanner';
import InfoSection from '../components/management/InfoSection';
import ManagementSteps from '../components/management/ManagementSteps';

export default function DataManagement() {
  return (
    <>
      <NextSeo
        title='Data Management'
        description='We are a software development and consulting company that creates and transforms products and enterprises to drive growth.'
      />
      <PageBanner
        pageTitle='Data Management Services'
        homePageUrl='/'
        homePageText='Home'
        activePageText='Data Management'
        imgClass='management-bg'
      />
      <InfoSection />
      <FunBanner />
      <ManagementSteps />
      <GetInTouch />
    </>
  );
}
