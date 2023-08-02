import { ActionType } from "@/utils/types";
import { FunctionComponent } from "react";
import CardDesign, { CardDesignProps, CardText } from "./CardDesign";

interface CallToActionProps {

}

const threeAlternatingSections: CardText[] =
  [
    {
      title: "Fundraise With Us",
      description:
        "By becoming a fundraiser, you have the power to make a direct impact on the lives of indigent children. Your dedicated efforts will pave the way for enhanced access to quality education, enabling indigent children to break free from the vicious cycle of poverty. Remember Every Child is Your Child.",
      btnText: "Learn More",
      buttonUrl: "/fundraise",
      imageUrl:
        "/images/fundraise.jpg",
    },
    {
      title: "Volunteer With Us",
      description:
        "Join the Humanitarian Volunteer Network (HVN) to make a tangible impact on the lives of indigent children and families in need. Through our Sponsor a Child's Education(SP.A.C.E) initiative, you can help provide quality education to indigent children.",
      btnText: "Learn More",
      buttonUrl: "/volunteer",
      imageUrl:
        "/images/volunteer.jpg",
    },
    {
      title: "Praying for the Needy",
      description: `When we pray together, we establish God's plans and purpose in the lives of the vulnerable and downtrodden! Speak up for those who can not speak for themselves...
        Proverbs 31:8-9 [NIV] Every Thursday, 8pm GMT+ 1`,
      btnText: "Join Now",
      buttonUrl: "/prayer",
      imageUrl:
        "/images/prayer.jpg",
    }];

const CallToAction: FunctionComponent<CallToActionProps> = (

) => {
  return (
    <CardDesign items={threeAlternatingSections} />
  );
};

export default CallToAction;
