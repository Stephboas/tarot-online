// Home.js

import React from 'react';
import HomeContent from './HomeContent';
import HomeVideo from './HomeVideo';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <HomeContent />
      <HomeVideo />
    </div>
  );
};

export default Home;
