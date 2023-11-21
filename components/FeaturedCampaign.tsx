import { FunctionComponent } from 'react';
import CardDesign, { CardDesignProps, CardText } from './CardDesign';

interface FeaturedCampaignProps {}

const featuredCampaign: CardText[] = [
  {
    title: '#SP.A.C.E Campaign: Breaking Barriers, Coloring Dreams!',
    description:
      'SP.A.C.E is an impactful initiative dedicated to transforming the lives of indigent children through the power of education. Every child deserves the opportunity to learn and fulfill their God-given potential. Join us to make a lasting impact on the lives of indigent children by empowering them with education.',
    btnText: 'Donate',
    buttonUrl: '/donate',
    imageUrl: '/images/space.png',
    bgColour: 'bg-white',
    textColour: 'text-black',
  },
];

const FeaturedCampaign: FunctionComponent<FeaturedCampaignProps> = () => {
  return <CardDesign items={featuredCampaign} />;
};

export default FeaturedCampaign;
