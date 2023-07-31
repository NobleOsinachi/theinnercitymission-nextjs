import BlogFooter from "@/components/blogFooter";
import CallToAction from "@/components/callToAction";
import Carousel from "@/components/carousel";
import Footer from "@/components/footer";
import Statistics from "@/components/statistics";

export default function HomePage() {
  return (

    <div className="HomePage">

      <Carousel src={"/banner.png"} alt={"banner.png"} width={100} height={100} />

      <Statistics />

      <CallToAction />

      <BlogFooter />

      <Footer />

      </div>

  );
}
