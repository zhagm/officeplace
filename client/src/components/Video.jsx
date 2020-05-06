import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";

const Video = ({
  onCapture,
  continuousMode = true,
  isCapturing = true,
  interval = 1000,
  videoConstraints,
}) => {
  const webcam = useRef();

  useEffect(() => {
    if (isCapturing) capture();
  }, [isCapturing]);

  const capture = () => {
    if (!webcam.current || !isCapturing) return;
    onCapture(webcam.current.getScreenshot());
    if (continuousMode) window.setTimeout(() => capture(), interval);
  };

  return (
    <Webcam
      audio={false}
      ref={webcam}
      screenshotFormat="image/jpeg"
      videoConstraints={videoConstraints}
    />
  );
};

export default Video;
