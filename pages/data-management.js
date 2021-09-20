import GetInTouch from '../components/common/GetInTouch';
import PageBanner from '../components/common/PageBanner';
import InfoSection from '../components/management/InfoSection';

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
      <GetInTouch />
    </>
  );
}
