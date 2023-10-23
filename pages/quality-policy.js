import { NextSeo } from 'next-seo';
import GetInTouch from '../components/common/GetInTouch';
import IsoDetails from '../components/Iso';

export default function QualityPolicy() {
  return (
    <>
      <NextSeo
        title='Quality Policy Certification'
        description='We are a software development and consulting company that creates and transforms products and enterprises to drive growth.'
      />
      <IsoDetails />
      <GetInTouch />
    </>
  );
}
