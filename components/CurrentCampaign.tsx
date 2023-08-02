import { FunctionComponent } from 'react';
import VideoPlayer from './VideoPlayer';

interface CampaignPromoProps {
  title: string;
  vimeoVideo: string;
}

// const props: CampaignPromoProps = {
//   title: "WARRIZ'S TRANSFORMATION STORY: RESILIENCE AND DRIVE",
//   vimeoVideo: 'https://player.vimeo.com/video/845253841?h=a6b17a0d07',
// };

const CampaignPromo: FunctionComponent<CampaignPromoProps> = ({
  title,
  vimeoVideo,
}) => {
  return (
    <section id='currentCampaign'>
      <br />
      <div className='flex flex-col items-center'>
        <h1 className='text-3xl uppercase text-center'>{title}</h1>
        <center>
          <VideoPlayer src={vimeoVideo} />
        </center>
      </div>
    </section>
  );
};

export default CampaignPromo;
