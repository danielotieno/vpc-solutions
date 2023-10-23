import { NextSeo } from 'next-seo';
import BiSection from '../components/bi/BiSection';
import DataViSection from '../components/bi/DataViSection';
import VisualizationApproach from '../components/bi/VisualizationApproach';
import VisualizationService from '../components/bi/VisualizationService';
import GetInTouch from '../components/common/GetInTouch';
import PageBanner from '../components/common/PageBanner';

export default function BusinessIntelligence() {
  return (
    <>
      <NextSeo
        title='Business Intelligence'
        description='We are a software development and consulting company that creates and transforms products and enterprises to drive growth.'
      />
      <PageBanner
        pageTitle='Business Intelligence Services'
        homePageUrl='/'
        homePageText='Home'
        activePageText='Business Intelligence'
        imgClass='bi-bg'
      />
      <BiSection />
      <DataViSection />
      <VisualizationService />
      <VisualizationApproach />
      <GetInTouch />
    </>
  );
}
