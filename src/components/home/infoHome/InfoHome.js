// InfoHome.js
import React from 'react';
import InfoVideo from './InfoVideo';
import InfoContent from './InfoContent';
import './InfoHome.css';

const InfoHome = () => {
  return (
    <div>
      <div className="info-container">
        <InfoVideo />
        <InfoContent />
      </div>
    </div>
  );
};

export default InfoHome;