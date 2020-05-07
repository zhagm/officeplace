import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";

const Video = ({
  onCapture,
  continuousMode = true,
  isCapturing,
  interval = 1000,
  videoConstraints,
}) => {
  const webcam = useRef();
  let captureInterval;

  useEffect(() => {
    if (isCapturing) {
      capture();
      if (captureInterval) clearInterval(captureInterval);
      captureInterval = window.setInterval(() => capture(), interval);
    }
    return () => clearInterval(captureInterval);
  }, [isCapturing]);

  const capture = () => {
    if (webcam.current && isCapturing)
      return onCapture(webcam.current.getScreenshot());
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