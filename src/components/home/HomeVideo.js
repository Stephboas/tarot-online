// HomeVideo.js

import React from 'react';
import coruja from '../../assets/images/coruja.webm';

const HomeVideo = () => {
  return (
    <div className="home-video">
      <video autoPlay loop muted>
        <source src={coruja} type="video/mp4" />
        {/* Adicione mais sources para outros formatos de vídeo, se necessário */}
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  );
};

export default HomeVideo;
