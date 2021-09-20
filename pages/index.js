import AboutUs from '../components/AboutUs';
import MainBanner from '../components/banner/MainBanner';
import GetInTouch from '../components/common/GetInTouch';
import Facilities from '../components/Facilities';
import OurApproach from '../components/OurApproach';
import OurServices from '../components/OurServices';
import QuoteSection from '../components/QuoteSection';

export default function Home() {
  return (
    <>
      <MainBanner />
      <Facilities />
      <AboutUs />
      <OurServices />
      <QuoteSection />
      <OurApproach />
      <GetInTouch />
    </>
  );
}
