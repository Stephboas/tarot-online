import React from 'react';
import { useParams } from 'react-router-dom';
import cardsOptions from '../../cards/CardsOptions'; // Importe seus dados de cartas
import './CardsInformation.css'

const CardsInformation = () => {
  const { selectedCard } = useParams();

  // Certifique-se de converter o índice para um número
  const cardIndex = parseInt(selectedCard, 10);

  // Garanta que o índice é válido antes de acessar o array
  if (isNaN(cardIndex) || cardIndex < 0 || cardIndex >= cardsOptions.length) {
    return <div>Carta inválida</div>;
  }

  const selectedCardData = cardsOptions[cardIndex];

  // Agora, 'selectedCardData' contém os dados da carta selecionada

  return (
    <div className='cards-information'>
      <h2>Informações da Carta</h2>
      <div>
        <h3>{selectedCardData.name}</h3>
        <p>Descrição: {selectedCardData.description}</p>
        {/* Adicione mais informações conforme necessário */}
        <img src={selectedCardData.frontImage} alt={`Carta ${selectedCardData.name}`} />
      </div>
    </div>
  );
};

export default CardsInformation;
