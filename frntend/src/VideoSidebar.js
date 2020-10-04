import React, { useState } from "react";
import "./VideoSidebar.css";
import FavouriteIcon from "@material-ui/icons/Favorite";
import FavouriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

const VideoSidebar = ({ likes, shares, messages }) => {
  const [liked, setliked] = useState(false);
  return (
    <div className="video__Sidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <FavouriteIcon fontSize="large" onClick={(e) => setliked(false)} />
        ) : (
          <FavouriteBorderIcon
            fontSize="large"
            onClick={(e) => setliked(true)}
          />
        )}

        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
};

export default VideoSidebar;
