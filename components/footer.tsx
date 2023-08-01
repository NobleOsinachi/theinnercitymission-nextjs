import Image from "next/image";
import { FunctionComponent } from "react";



interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = () => {
    return (
        <Image src={"/images/footer.png"} alt={""} width="2000" height={100} />
    );
}

export default Footer;
