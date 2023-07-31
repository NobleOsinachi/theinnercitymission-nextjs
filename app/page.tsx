import BlogFooter from "@/components/BlogFooter";
import CallToAction from "@/components/CallToAction";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Statistics from "@/components/Statistics";

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
