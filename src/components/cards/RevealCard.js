// RevelarCarta.js
import React, { useState, useEffect } from 'react';
import { handleCardClick, handleCardHover } from './CardInteraction';

const RevelarCarta = ({ index, selectedCard, setSelectedCard, cardContainerRef, shuffledCards, revealCard }) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (selectedCard === index) {
      setIsHovered(true);
    } else {
      setIsHovered(false);
    }
  }, [selectedCard, index]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    handleCardHover(index, cardContainerRef);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (selectedCard !== index) {
      handleCardHover(null, cardContainerRef);
    }
  };

  return (
    <div
      className={`card ${selectedCard === index ? 'revealed clicked-card' : ''}`}
      onClick={() => {
        handleCardClick(index, cardContainerRef);
        revealCard(index);
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={shuffledCards[index].isRevealed ? shuffledCards[index].frontImage : shuffledCards[index].backImage}
        alt={`Carta ${shuffledCards[index].name}`}
      />
    </div>
  );
};

export default RevelarCarta;