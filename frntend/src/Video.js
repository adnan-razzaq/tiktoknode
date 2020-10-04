import React, { useRef, useState, useEffect } from "react";
import "./Video.css";
import video from "./Snaptik_6862643512362536198_yz.mp4";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import axios from "./axios";

const Video = () => {
  const [playing, setplaying] = useState(false);
  const [videos, setvideos] = useState([]);
  const videoref = useRef(null);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/v2/posts");
      setvideos(response.data);
    };
    getData();
  }, []);
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
      {videos.map(
        ({ url, channel, description, songs, likes, messages, shares }) => (
          <>
            <video
              src={video}
              onClick={handleVideo}
              ref={videoref}
              loop
              className="video__player"
            ></video>
            <VideoFooter
              channel={channel}
              description={description}
              song={songs}
            />
            <VideoSidebar likes={likes} shares={shares} messages={messages} />
          </>
        )
      )}
    </div>
  );
};

export default Video;
