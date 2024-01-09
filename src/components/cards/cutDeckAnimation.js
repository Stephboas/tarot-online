// cutDeckAnimation.js
import cardsOptions from "./CardsOptions";

const cutDeckAnimation = (setCutting, setCutAnimation, setShowRevealButton, setShuffledCards, cardContainerRef) => {
  setCutting(true);

  setTimeout(() => {
    setCutAnimation(true);

    const middleIndex = Math.floor(cardsOptions.length / 2);
    const cutRight = cardsOptions.slice(middleIndex);
    const cutLeft = cardsOptions.slice(0, middleIndex);

    // Aplicar animação
    const cardWidth = 112; // Defina a largura da carta (ajuste conforme necessário)
    const containerWidth = cardContainerRef.current.offsetWidth;
    const animationDuration = 1000; // Defina a duração da animação (ajuste conforme necessário)
    const delayBetweenCards = 100; // Ajuste conforme necessário

    // Calcular posição final da carta única para ambos os lados
    const positionX = containerWidth / 2 - cardWidth / 2;

    // Função para aplicar a transição a uma carta com atraso
    const applyTransition = (cardElement, index, translateX) => {
      setTimeout(() => {
        cardElement.style.transition = `transform ${animationDuration}ms ease-in-out`;
        cardElement.style.transform = `translateX(${translateX}px)`;
      }, index * delayBetweenCards);
    };

    // Aplicar a transição para as cartas da direita
    cutRight.forEach((card, index) => {
      const cardElement = cardContainerRef.current.children[index + middleIndex];
      applyTransition(cardElement, index, -positionX);
    });

    // Aplicar a transição para as cartas da esquerda
    cutLeft.forEach((card, index) => {
      const cardElement = cardContainerRef.current.children[index];
      applyTransition(cardElement, index, positionX);
    });

      // Remover box-shadow
    const cardElements = cardContainerRef.current.querySelectorAll('.card');
    cardElements.forEach((card) => {
      card.style.boxShadow = 'none';
    });

    setTimeout(() => {
      [...cutRight, ...cutLeft].forEach((card, index) => {
        const cardElement = cardContainerRef.current.children[index];
        cardElement.style.transition = `none`; // Remova a transição aqui
        cardElement.style.transform = `translateX(0)`;
      });

      const hoveredCard = cardContainerRef.current.querySelector('.hovered-card');
      if (hoveredCard) {
        hoveredCard.classList.remove('hovered-card');
      }
    }, animationDuration + (cutRight.length + cutLeft.length - 1) * delayBetweenCards);

  }, 300);
};

export default cutDeckAnimation;
