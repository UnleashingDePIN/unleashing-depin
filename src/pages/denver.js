import React, { useState } from 'react';
import '../app/styles.css';
import '../app/globals.css';
import Header from '../app/components/header.js';

const Denver = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {setShowModal(!showModal);};
  return (
    <div className="body">
      <Header/>
      <div className="hero-text">
        <h1>Unleashing DePIN 🤝 ETH Denver</h1>
        <h3 style={{color: '#11ca65'}}>Watch Tyler's Keynote from ETH Denver 2024 highlighting the DePIN ecosystem and the future of DePIN!</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/e-ack9r3WSI?si=e2STAknFAYmJgtnA" frameBorder="0"></iframe>
        <br></br>
        <button className="deckButton" onClick={toggleModal}>View ETH Denver Deck PDF</button>
        {showModal && (
          <div className="modalStyle">
            <span className="closeButtonStyle" onClick={toggleModal}>&times;</span>
            <div className="modalContentStyle"><iframe src="docs/eth-denver.pdf" title="ETH Denver PDF" className='eth-denver-pdf'></iframe></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Denver;