// HomeContent.js

import React from 'react';
import cartaTarot from '../../assets/images/carta_unicorn_magician.png'

const HomeContent = () => {
  return (
    <div className="home-content">
      <h1>Desvende os Mistérios das Cartas de Tarot!</h1>
      <img src={cartaTarot} alt="Imagem Tarot" />
      <p>
        Descubra aspectos incríveis sobre suas ações, decisões, futuro e personalidade.
        Acreditamos que nada acontece por acaso. Estamos aqui para guiá-lo na jornada
        de autoconhecimento e revelar o que o Universo reserva especialmente para você.
      </p>
      <button>
        CLIQUE AQUI PARA SABER MAIS!
      </button>
    </div>
  );
};

export default HomeContent;
