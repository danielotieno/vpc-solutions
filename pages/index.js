import AboutUs from '../components/AboutUs';
import MainBanner from '../components/banner/MainBanner';
import Facilities from '../components/Facilities';
import QuoteSection from '../components/QuoteSection';

export default function Home() {
  return (
    <>
      <MainBanner />
      <Facilities />
      <AboutUs />
      <QuoteSection />
    </>
  );
}
