import "./VideoCard.css";
import { Link } from "react-router-dom";

const VideoCard = ({ video, name, description }) => {
  return (
    <article className="video-card card-surface" data-aos="zoom-in-up">
      <div className="video-card-media-wrap">
        <video
          className="video-card-media"
          src={video}
          controls
          preload="metadata"
          playsInline
        />
        
      </div>
      <div className="p-4">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default VideoCard;
