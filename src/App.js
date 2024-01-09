import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/menu/Menu';
import Home from './components/home/Home';
import TarotCardOfDay from './components/home/tarotDayhome/TarotCardOfDay';
import CardsInformation from './components/home/tarotDayhome/CardsInformation';
import InfoHome from './components/home/infoHome/InfoHome';

// Componente intermediário que renderiza Home e TarotCardOfDay
const HomeWithTarotCard = () => {
  return (
    <div>
      <Home />
      <TarotCardOfDay />
      <InfoHome />
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Routes>
          {/* Rota para a página inicial */}
          <Route path="/" element={<HomeWithTarotCard />} />

          {/* Adicione a rota para CardsInformation aqui */}
          <Route path="/cards-information/:selectedCard" element={<CardsInformation />} />

          {/* Adicione outras rotas conforme necessário */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

const NotFound = () => {
  return (
    <div>
      <h2>Página não encontrada</h2>
      <p>Desculpe, a página que você está procurando não existe.</p>
    </div>
  );
};

export default App;
