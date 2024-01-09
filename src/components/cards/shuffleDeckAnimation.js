// shuffleDeckAnimation.js
import cardsOptions from "./CardsOptions";

const shuffleDeckAnimation = (setShuffling, setShuffledCards, setSelectedCard, setShowRevealButton, cardContainerRef) => {
  setShuffling(true);

  // Remover box-shadow
  const cardElements = cardContainerRef.current.querySelectorAll('.card');
  cardElements.forEach((card) => {
    card.style.boxShadow = 'none';
  });

  setTimeout(() => {
    const shuffled = [...cardsOptions].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
    setSelectedCard(null);
    setShowRevealButton(false);
    setShuffling(false);
  }, 300);

  // Adicione a classe de animação após um curto atraso para permitir a renderização inicial
  setTimeout(() => {
    cardElements.forEach((card, index) => {
      const randomTranslation = Math.random() * 200 - 100; // Valor aleatório entre -100 e 100
      const randomDelay = Math.random() * 300; // Valor aleatório até 300ms

      card.style.transition = `transform 0.2s ease-in-out ${randomDelay}ms`; // Ajuste o valor conforme necessário
      card.style.transform = `translateX(${randomTranslation}px)`; // Ajuste o valor conforme necessário
    });

    // Agora, após a animação de movimento, faça as cartas voltarem à posição inicial
    setTimeout(() => {
      cardElements.forEach((card) => {
        card.style.transition = 'transform 0.2s ease-in-out';
        card.style.transform = 'translateX(0)';
      });
    }, 300 + cardElements.length * 100); // Ajuste o valor conforme necessário
  }, 100);
};

export default shuffleDeckAnimation;
