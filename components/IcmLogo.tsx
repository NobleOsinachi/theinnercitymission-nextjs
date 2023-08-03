import Image from "next/image";

const IcmLogo = () => {
    return (
        <Image src={"/images/logo.png"} alt={"icm logo"} width={100} height={100} />
    );
};

export default IcmLogo;
