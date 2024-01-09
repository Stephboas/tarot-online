// CardInteraction.js

const handleCardHover = (index, cardContainerRef) => {
    const cardElements = cardContainerRef.current.querySelectorAll('.card');
    cardElements.forEach((card, i) => {
      if (i === index) {
        card.style.transform = 'translateY(-15px)'; // Eleva a carta
        card.style.transition = 'transform 0.3s ease-in-out'; // Adiciona uma transição suave
      } else {
        card.style.transform = ''; // Remove a transformação para outras cartas
        card.style.transition = 'transform 0.3s ease-in-out'; // Adiciona uma transição suave
      }
    });
  };
  
  const handleCardClick = (index, cardContainerRef) => {
    const cardElements = cardContainerRef.current.querySelectorAll('.card');
    cardElements.forEach((card, i) => {
      if (i === index) {
        card.style.transform = 'scale(1.25) translateY(-15px)'; // Aumenta o tamanho e eleva a carta
        card.style.boxShadow = '0 0 15px rgba(255, 111, 0, 0.756)'; // Adiciona sombreamento
      } else {
        card.style.transform = 'scale(1) translateY(0)'; // Volta ao tamanho original e à posição original
        card.style.boxShadow = 'none'; // Remove o sombreamento
      }
    });
  };
  
  const handleCardLeave = (index, cardContainerRef) => {
    const cardElements = cardContainerRef.current.querySelectorAll('.card');
    cardElements.forEach((card, i) => {
      if (i === index && card.style.transform !== 'scale(1.25) translateY(-15px)') {
        card.style.transform = 'scale(1) translateY(0)'; // Volta ao tamanho original e à posição original
        card.style.transition = 'transform 0.3s ease-in-out'; // Adiciona uma transição suave
      }
    });
  };
  
  export { handleCardHover, handleCardClick, handleCardLeave };