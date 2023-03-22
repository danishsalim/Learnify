import React from 'react';

function VideoPlayer(props) {
  return (
    <div>
      <iframe  title='video'
        width={props.width}
        height={props.height}
        src={`https://www.youtube.com/embed/${props.videoId}`}
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoPlayer;

