import React, { useRef, useState } from "react";
import "./Video.css";
import video from "./Snaptik_6862643512362536198_yz.mp4";

const Video = () => {
  const [playing, setplaying] = useState(false);
  const videoref = useRef(null);
  const handleVideo = () => {
    //if video is playing stop it
    if (playing) {
      setplaying(false);
      videoref.current.pause();
    }
    //if video is not playing stop it
    else {
      setplaying(true);
      videoref.current.play();
    }
  };
  return (
    <div className="video">
      <video
        onClick={handleVideo}
        ref={videoref}
        src={video}
        loop
        className="video__player"
      ></video>
    </div>
  );
};

export default Video;
