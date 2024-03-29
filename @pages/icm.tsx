import Link from "next/link";
import Navbar from "../components/IcmNavbar";
import Carousel from "@/components/Carousel";


interface IcmProps {

    data: any;
}


export default function Icm(props: IcmProps) {
    return (
        <>
            <Navbar />
            <Carousel
                src="/banner.png"
                alt="banner for carousel"
                width={100}
                height={100}

            />
            {/* {props} */}


        </>
    );
}


