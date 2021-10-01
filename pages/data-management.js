import FunBanner from '../components/common/FunBanner';
import GetInTouch from '../components/common/GetInTouch';
import PageBanner from '../components/common/PageBanner';
import InfoSection from '../components/management/InfoSection';
import ManagementSteps from '../components/management/ManagementSteps';

export default function DataManagement() {
  return (
    <>
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
