import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

const Video = ({url,channel,description,song,likes,shares,messages}) => {

    const [playing, setPlayig] = useState(false);
    const videoRef = useRef(null);

    const handleVideos = () => {
        if (playing) {
            videoRef.current.play();
            setPlayig(false)
        }
        else {
            videoRef.current.pause();
            setPlayig(true);
        }
    }


    return (
        <div className='video'>
            <video
                className='video__player'
                loop
                ref={videoRef}
                onClick={handleVideos}
                src={url}
            >
            </video>
            <VideoFooter channel={channel}
                description={description}
                song={song}
            />
            <VideoSidebar
                likes={likes}
                messages={messages}
                shares={shares}
            />
        </div>
    )
}

export default Video