"use client";

import { useRouter } from "next/navigation";


const VideoPage = () => {
    const location = useRouter();
    // location.push("/about");

    return (
        <div>
            {JSON.stringify(location)}
        </div>
    );
};

export default VideoPage;
