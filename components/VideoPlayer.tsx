import { FunctionComponent } from "react";

interface VideoPlayerProps {
  src: string;
  width?: string;
  height?: string;
}

const VideoPlayer: FunctionComponent<VideoPlayerProps> = (props) => {
  return (
    <div
      className='column container px-20 modal-card-body iframe-container'
      style={{
        width: '100%',
        height: '100%',
        paddingTop: '56.25% !important',
        paddingBottom: '0 !important',
      }}
    >
      {/* Iframe Player */}
      <iframe
        data-width={props?.width}
        data-height={props?.height}
        frameBorder='0'
        allow='autoplay; fullscreen'
        allowFullScreen
        data-src='https://live.internetmultimediaonline.org/gdopembed1'
        className='lazyload'
        src={
          props.src || 'https://live.internetmultimediaonline.org/gdopembed1'
        }
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
