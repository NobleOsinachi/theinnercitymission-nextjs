import Image from "next/image";

const IcmLogo = () => {
    return (
        <Image src={"/logo.png"} alt={"icm logo"} width={50} height={50} />
    );
};

export default IcmLogo;
