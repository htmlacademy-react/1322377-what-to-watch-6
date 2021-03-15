import React from 'react';

import propTypes from './video-player.props';

import './styles.css';

const VideoPlayer = ({shouldVideoPlay, posterImage, videoLink}) => {
  return shouldVideoPlay
    ? <video className="video-player" src={videoLink} muted autoPlay/>
    : <img src={posterImage} alt={name} width={280} height={175} />;
};

VideoPlayer.propTypes = propTypes;

export default VideoPlayer;
