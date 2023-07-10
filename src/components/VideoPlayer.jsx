import React from 'react';

const VideoPlayer = () => {
  return (
    <iframe
      width="550"
      height="315"
      src="https://www.youtube.com/embed/_uiFgc8WCXY"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className=' flex self-center rounded-tl-[20px] md:w-[550px] w-[320px] md:h-[315px] h-[195px] rounded-br-[20px]'
    ></iframe>
  );
};

export default VideoPlayer;
