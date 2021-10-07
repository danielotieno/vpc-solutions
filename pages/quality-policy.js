import SEO from '@bradgarropy/next-seo';
import GetInTouch from '../components/common/GetInTouch';
import IsoDetails from '../components/Iso';

export default function QualityPolicy() {
  return (
    <>
      <SEO
        title='Quality Policy Certification'
        description='We are a software development and consulting company that creates and transforms products and enterprises to drive growth.'
      />
      <IsoDetails />
      <GetInTouch />
    </>
  );
}
