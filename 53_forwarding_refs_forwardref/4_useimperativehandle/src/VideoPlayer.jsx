import React, { useRef, useImperativeHandle, forwardRef } from "react";

// A complex Custom Component wrapping a native video player
export const VideoPlayer = forwardRef((props, ref) => {
  const videoRef = useRef(null);

  // useImperativeHandle customizes exactly what the parent receives!
  // Instead of passing the raw <video> DOM node, we pass a custom Javascript Object!
  useImperativeHandle(ref, () => {
    // We return the custom object that the Parent's ref.current will point to
    return {
      play: () => {
        videoRef.current.play();
      },
      pause: () => {
        videoRef.current.pause();
      },
      reset: () => {
        videoRef.current.currentTime = 0;
        videoRef.current.pause();
      }
    };
  }, []); // Empty dependency array ensures this is created once

  return (
    <div style={{ padding: "10px", backgroundColor: "#333", borderRadius: "8px" }}>
      <video 
        ref={videoRef} 
        width="400" 
        src="https://www.w3schools.com/html/mov_bbb.mp4" 
      />
    </div>
  );
});
