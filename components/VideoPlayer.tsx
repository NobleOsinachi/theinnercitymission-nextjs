import { FunctionComponent } from "react";

interface VideoPlayerProps {
    src: string
}

const VideoPlayer: FunctionComponent<VideoPlayerProps> = (props) => {
    return (

        <div className="column">
            <div className="modal-card-body iframe-container" data-style="padding-top: 56.25% !important; padding-bottom: 0 !important;">

                {/*  Iframe Player */}
                <iframe width="640" height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen data-src="https://live.internetmultimediaonline.org/gdopembed1" className="lazyload" src={props.src}></iframe>
            </div>
        </div>
    );
}

export default VideoPlayer;
