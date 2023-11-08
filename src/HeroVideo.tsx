import  { useState, useRef } from "react";
import "./style.css";

const videos: string[] = [
  "https://download.samplelib.com/mp4/sample-5s.mp4",
  "https://filesamples.com/samples/video/mp4/sample_960x540.mp4"
];

export const HeroVideo = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef(null);

  const handleCanPlay = () => {
    videoRef.current.style.animationName = "slidein";
    videoRef.current.style.animationDuration = "2s";
    videoRef.current.style.animationFillMode = "forward";
  };

  const handleEnded = () => {

    videoRef.current.style.animationName = "slideout";
    videoRef.current.style.animationDuration = "2s";
    videoRef.current.style.animationFillMode = "forward"
    setTimeout(() => {
      setCurrentVideo((currentVideo + 1) % videos.length);
      videoRef.current.style.animationName = "none";
      videoRef.current.style.animationDuration = "0s";
      videoRef.current.style.animationFillMode = "none";
    }, 2000); 
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        onCanPlay={handleCanPlay}
        onEnded={handleEnded}
        // controls
        autoPlay
        muted
        src={videos[currentVideo]}
      >
        
      </video>
    </div>
  );
};
