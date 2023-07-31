import BlogFooter from "@/components/BlogFooter";
import CallToAction from "@/components/CallToAction";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Navbar from "@/components/IcmNavbar";
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



// import * as React from 'react'; import { Component } from 'react'; interface HomePageProps { } interface HomePageState { } class HomePage extends React.Component<HomePageProps, HomePageState> { state = { name: "" }; render() { return ( <h1>HomePage</h1> ); } } export default HomePage;
