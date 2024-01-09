// TarotCardOfDay.js
import React, { useState, useEffect, useRef } from 'react';
import './TarotCardOfDay.css';
import { useNavigate } from 'react-router-dom';
import cardsOptions from '../../cards/CardsOptions';
import cutDeckAnimation from '../../cards/cutDeckAnimation';
import shuffleDeckAnimation from '../../cards/shuffleDeckAnimation';
import RevelarCarta from '../../cards/RevealCard';

const TarotCardOfDay = () => {
  const [cutting, setCutting] = useState(false);
  const [cutAnimation, setCutAnimation] = useState(false);
  const [shuffling, setShuffling] = useState(false);
  const [shuffledCards, setShuffledCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showRevealButton, setShowRevealButton] = useState(false);
  const cardContainerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const initialShuffled = [...cardsOptions].sort(() => Math.random() - 0.5);
    setShuffledCards(initialShuffled.map(card => ({ ...card, isRevealed: false })));
  }, []);

  const shuffleCards = () => {
    setShuffling(true);
    shuffleDeckAnimation(setShuffling, setShuffledCards, setSelectedCard, setShowRevealButton, cardContainerRef);
  };

  const cutCards = () => {
    setCutting(true);
    setCutAnimation(true);
    cutDeckAnimation(setCutting, () => setCutAnimation(false), () => setShowRevealButton(false), setShuffledCards, cardContainerRef);
    setSelectedCard(null); // Limpa a carta selecionada ao cortar o baralho
  };

  const revealCard = (index) => {
    setSelectedCard(index);
    setShowRevealButton(true);
  };

  const onRevealCard = () => {
    if (selectedCard !== null) {
      setShuffling(true);
      setTimeout(() => {
        setShuffling(false);
        navigate(`/cards-information/${selectedCard}`);
      }, 1000);
    }
  };

  return (
    <div className={`tarot-of-day ${shuffling ? 'shuffling' : ''}`}>
      <h2>TAROT DO DIA</h2>

      <p>
        Aproveite o Tarot do Dia para obter previsões e orientações valiosas em várias áreas da sua vida. O Tarot do Dia oferece insights profundos para ajudá-lo a tomar decisões importantes - seja relacionadas ao amor, trabalho ou saúde.
      </p>
      <p>
        Descubra a Espiritualidade em qualquer lugar, inclusive online. Experimente agora mesmo! Embarque em uma jornada de autoconhecimento e descubra novas perspectivas com o Tarot do Dia.
      </p>
      <p>
        É fácil e rápido: Concentre-se em seus planos para o dia, embaralhe as cartas e então corte o baralho uma, duas ou três vezes, e então de acordo com sua intuição selecione uma carta para revelar uma mensagem significativa para o seu dia!
      </p>

      <div className={`cards-container ${shuffling ? 'shuffling' : ''} ${cutAnimation ? 'cutting' : ''}`} ref={cardContainerRef}>
        {shuffledCards.map((card, index) => (
          <RevelarCarta
            key={index}
            index={index}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
            cardContainerRef={cardContainerRef}
            shuffledCards={shuffledCards}
            revealCard={revealCard}
          />
        ))}
      </div>

      <div className="buttons-container">
        <button onClick={shuffleCards}>EMBARALHAR</button>
        <button onClick={cutCards}>CORTAR</button>
        {showRevealButton && selectedCard !== null && (
          <button onClick={onRevealCard} disabled={shuffling}>
            REVELAR CARTA
          </button>
        )}
      </div>
    </div>
  );
};

export default TarotCardOfDay;