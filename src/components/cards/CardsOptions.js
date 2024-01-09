
import backImage from '../../assets/images/back-tarot-00.jpg';
import theFool from '../../assets/images/the-fool.webp';
import theMagician from '../../assets/images/the-magician.webp';
import highPriestess from '../../assets/images/high-priestess.webp';
import theEmpress from '../../assets/images/empress.webp';
import theEmperor from '../../assets/images/the-emperor.webp';
import hierophant from '../../assets/images/the-hierophant.webp';
import theLovers from '../../assets/images/the-lovers.webp';
import theCar from '../../assets/images/the-chariot.webp';
import theJustice from '../../assets/images/justice.webp';
import hermit from '../../assets/images/the-hermit.webp';
import wheelOfFortune from '../../assets/images/wheel-of-fortune.webp';
import strength from '../../assets/images/strenght.webp';
import hangedOne from '../../assets/images/hanged-one.webp';
import death from '../../assets/images/death.webp';
import temperance from '../../assets/images/temperance.webp';
import theTower from '../../assets/images/the-tower.webp';
import theStar from '../../assets/images/the-star.webp';
import theMoon from '../../assets/images/the-moon.webp';
import theSun from '../../assets/images/the-sun.webp';
import theJudgment from '../../assets/images/judgment.webp';
import theWorld from '../../assets/images/the-world.webp';
import theDevil from '../../assets/images/the-devil.webp';

const cardsOptions = [
  {
    name: "O Louco",
    frontImage: theFool,
    backImage: backImage,
    isRevealed: false,
    description: "O Louco representa o começo de uma jornada, a busca pela verdade e a coragem para seguir em frente mesmo sem saber o que o destino reserva."
  },
  {
    name: "O Mago",
    frontImage: theMagician,
    backImage: backImage,
    isRevealed: false,
    description: "O Mago simboliza o poder da manifestação e a habilidade de transformar ideias em realidade. Ele nos lembra que possuímos todas as ferramentas necessárias para criar nosso próprio destino."
  },
  {
    name: "A Sacerdotisa",
    frontImage: highPriestess,
    backImage: backImage,
    isRevealed: false,
    description: "A Sacerdotisa é a guardiã dos mistérios e do conhecimento oculto. Ela nos convida a buscar a intuição e a sabedoria interior para encontrar as respostas que buscamos."
  },
  {
    name: "A Imperatriz",
    frontImage: theEmpress,
    backImage: backImage,
    isRevealed: false,
    description: "A Imperatriz representa a fertilidade, a abundância e a criação. Ela nos lembra da importância de nutrir nossos projetos e relacionamentos para que possam florescer."
  },
  {
    name: "O Imperador",
    frontImage: theEmperor,
    backImage: backImage,
    isRevealed: false,
    description: "O Imperador simboliza a autoridade, a estabilidade e o poder. Ele nos lembra da importância de estruturar nossas vidas e estabelecer limites saudáveis."
  },
  {
    name: "O Hierofante",
    frontImage: hierophant,
    backImage: backImage,
    isRevealed: false,
    description: "O Hierofante representa a tradição, a espiritualidade e a busca por conhecimento. Ele nos convida a explorar nossas crenças e encontrar nossa própria conexão com o divino."
  },
  {
    name: "O Enamorados",
    frontImage: theLovers,
    backImage: backImage,
    isRevealed: false,
    description: "O Enamorados representa o amor, a paixão e a escolha. Ele nos lembra da importância de tomar decisões alinhadas com nossos verdadeiros desejos e valores."
  },
  {
    name: "O Carro",
    frontImage: theCar,
    backImage: backImage,
    isRevealed: false,
    description: "O Carro simboliza o movimento, a vontade e o controle. Ele nos convida a assumir o volante de nossas vidas e avançar em direção aos nossos objetivos com determinação."
  },
  {
    name: "A Justiça",
    frontImage: theJustice,
    backImage: backImage,
    isRevealed: false,
    description: "A Justiça representa o equilíbrio, a imparcialidade e a responsabilidade. Ela nos lembra da importância de tomar decisões justas e lidar com as consequências de nossas ações."
  },
  {
    name: "O Eremita",
    frontImage: hermit,
    backImage: backImage,
    isRevealed: false,
    description: "O Eremita simboliza a introspecção, a sabedoria e a busca interior. Ele nos convida a nos afastar do mundo exterior e buscar respostas dentro de nós mesmos."
  },
  {
    name: "A Roda da Fortuna",
    frontImage: wheelOfFortune,
    backImage: backImage,
    isRevealed: false,
    description: "A Roda da Fortuna representa o destino, as mudanças e as oportunidades. Ela nos lembra da natureza cíclica da vida e da importância de aproveitar as reviravoltas que encontramos."
  },
  {
    name: "A Força",
    frontImage: strength,
    backImage: backImage,
    isRevealed: false,
    description: "A Força representa a coragem, a compaixão e o domínio interno. Ela nos lembra da importância de enfrentar desafios com calma e confiança em nossas próprias capacidades."
  },
  {
    name: "O Enforcado",
    frontImage: hangedOne,
    backImage: backImage,
    isRevealed: false,
    description: "O Enforcado representa a suspensão, a entrega e a mudança de perspectiva. Ele nos lembra da importância de deixar ir e confiar no processo, mesmo quando as coisas parecem estar paradas."
  },
  {
    name: "A Morte",
    frontImage: death,
    backImage: backImage,
    isRevealed: false,
    description: "A Morte representa o fim de um ciclo, a transformação e o renascimento. Ela nos lembra que, às vezes, é necessário deixar ir o antigo para dar lugar ao novo e crescer."
  },
  {
    name: "A Temperança",
    frontImage: temperance,
    backImage: backImage,
    isRevealed: false,
    description: "A Temperança simboliza o equilíbrio, a harmonia e a moderação. Ela nos convida a encontrar o meio-termo e buscar a paz interna em todas as áreas de nossa vida."
  },
  {
    name: "A Torre",
    frontImage: theTower,
    backImage: backImage,
    isRevealed: false,
    description: "A Torre representa a destruição, a revelação e a mudança abrupta. Ela nos lembra que, às vezes, é necessário quebrar estruturas antigas para construir algo novo e mais forte."
  },
  {
    name: "A Estrela",
    frontImage: theStar,
    backImage: backImage,
    isRevealed: false,
    description: "A Estrela simboliza a esperança, a inspiração e a renovação. Ela nos lembra que, mesmo nas situações mais difíceis, há sempre uma luz brilhante no horizonte para nos guiar."
  },
  {
    name: "A Lua",
    frontImage: theMoon,
    backImage: backImage,
    isRevealed: false,
    description: "A Lua representa a intuição, os sonhos e os mistérios ocultos. Ela nos convida a explorar nosso mundo interior e confiar em nossa intuição para encontrar as respostas que buscamos."
  },
  {
    name: "O Sol",
    frontImage: theSun,
    backImage: backImage,
    isRevealed: false,
    description: "O Sol simboliza a alegria, a vitalidade e a energia positiva. Ele nos lembra de aproveitar a vida, espalhar luz e calor aos outros e encontrar a felicidade em cada momento."
  },
  {
    name: "O Julgamento",
    frontImage: theJudgment,
    backImage: backImage,
    isRevealed: false,
    description: "O Julgamento representa a renovação, a ressurreição e a avaliação. Ele nos convida a refletir sobre nossas ações e escolhas passadas e buscar a redenção e o crescimento pessoal."
  },
  {
    name: "O Mundo",
    frontImage: theWorld,
    backImage: backImage,
    isRevealed: false,
    description: "O Mundo simboliza a realização, a totalidade e a conclusão de uma jornada. Ele nos lembra que alcançamos um ciclo importante e que estamos prontos para embarcar em uma nova fase de evolução."
  },
  {
    name: "O Diabo",
    frontImage: theDevil,
    backImage: backImage,
    isRevealed: false,
    description: "O Diabo representa a tentação, a ilusão e a negatividade. Ele nos alerta para não cairmos em armadilhas que nos afastam do caminho da verdade e da autenticidade."
  }
    
  ];


  export default cardsOptions;