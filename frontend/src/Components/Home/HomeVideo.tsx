import React from 'react';
import ReactPlayer from "react-player";
import homeVideo from "../../Assets/Videos/home.mp4";

const HomeVideo = () => {
    const endedVideo = () => {
        // const video = document.querySelector("#video");
        // video?.classList.add("hidden");
    }
    const playVideo = () => {
        const nav = document.querySelector("#nav");
        // nav?.classList.add("bg-white");
    }

    return (
        <div className="home">
            <div className="home__video" id="video">
                <ReactPlayer
                    url={homeVideo}
                    playing={true}
                    muted={true}
                    // loop={true}
                    width="100%"
                    height="100%"
                    style={{position: "absolute", top: 0, left: 0}}
                    controls={true}
                    onEnded={endedVideo}
                    onPlay={playVideo}
                />
            </div>
        </div>
    );
};

export default HomeVideo;