import { useState, useRef, CSSProperties } from "react";
import "./style.css";

const videos: string[] = [
  "https://download.samplelib.com/mp4/sample-5s.mp4",
  // "https://download.samplelib.com/mp4/sample-5s.mp4",
  "https://filesamples.com/samples/video/mp4/sample_960x540.mp4"
];

export const HeroVideo = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef(null);
  const [motion, setMotion] = useState<"slidein" | "slideout" | "playing">("slidein");


  const handleCanPlay = () => {
    setMotion("slidein");
  };

  const handleEnded = () => {
    setMotion("slideout");
    setTimeout(() => {
      setCurrentVideo((currentVideo + 1) % videos.length);
      videoRef.current.style.opacity = "0";
    }, 900);

  };
  return (
    <div
      className="video-container">
      <video
        className={motion}
        ref={videoRef}
        onCanPlay={handleCanPlay}
        onEnded={handleEnded}
        // controls
        autoPlay
        muted
        src={videos[currentVideo]}
      >
        
      </video>
      <div className={"fakeshadow " + motion} />
    </div>
  );
};
