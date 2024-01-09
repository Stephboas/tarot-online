// InfoVideo.js
import React from 'react';
import CatMoon from '../../../assets/images/gatinho.webm';

const InfoVideo = () => {
  return (
    <div className="info-video">
      <video autoPlay loop muted>
        <source src={CatMoon} type="video/mp4" />
        {/* Adicione mais sources para outros formatos de vídeo, se necessário */}
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  );
};

export default InfoVideo;