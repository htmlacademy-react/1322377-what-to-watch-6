import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const VideoPlayer = ({shouldVideoPlay, posterImage, videoLink}) => {
  return shouldVideoPlay
    ? <video className="video-player" src={videoLink} muted autoPlay/>
    : <img src={posterImage} alt={name} width={280} height={175} />;
};

VideoPlayer.propTypes = {
  shouldVideoPlay: PropTypes.bool.isRequired,
  posterImage: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired,
};

export default VideoPlayer;
