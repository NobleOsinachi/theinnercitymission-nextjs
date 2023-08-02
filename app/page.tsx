import BlogFooter from '@/components/BlogFooter';
import CallToAction from '@/components/CallToAction';
import Carousel from '@/components/Carousel';
import CampaignPromo from '@/components/CurrentCampaign';
import FeaturedCampaign from '@/components/FeaturedCampaign';
import Footer from '@/components/Footer';
import Statistics from '@/components/Statistics';
import VideoPlayer from '@/components/VideoPlayer';

export default function HomePage() {
  return (
    <div className='HomePage'>
      <Carousel
        src={'/images/banner.jpg'}
        alt={'banner.png'}
        width={100}
        height={100}
      />

      <Statistics />

      <FeaturedCampaign />

      <CampaignPromo
        title={"WARRIZ'S TRANSFORMATION STORY: RESILIENCE AND DRIVE"}
        vimeoVideo={'https://player.vimeo.com/video/845253841?h=a6b17a0d07'}
      />

      <CallToAction />

      <BlogFooter />

      <Footer />
    </div>
  );
}
