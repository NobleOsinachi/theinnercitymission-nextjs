import BlogFooter from "@/components/blogFooter";
import CallToAction from "@/components/callToAction";
import Carousel from "@/components/carousel";
import Footer from "@/components/footer";
import Navbar from "@/components/IcmNavbar";
import Statistics from "@/components/statistics";

export default function HomePage() {
    return (

        <div className="HomePage">


            {/* <Navbar /> */}

            <Carousel src={"/banner.png"} alt={"banner.png"} width={100} height={100} />

            <Statistics />

            <CallToAction />

            <BlogFooter />

            <Footer />

        </div>

    );
}



// import * as React from 'react'; import { Component } from 'react'; interface HomePageProps { } interface HomePageState { } class HomePage extends React.Component<HomePageProps, HomePageState> { state = { name: "" }; render() { return ( <h1>HomePage</h1> ); } } export default HomePage;
