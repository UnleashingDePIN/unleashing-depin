import React, { useState } from 'react';
import '../app/styles.css';
import '../app/globals.css';

const Denver = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {setShowModal(!showModal);};

  const modalStyle = {
    position: 'fixed',
    zIndex: 2,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const modalContentStyle = {
    position: 'relative',
    backgroundColor: '#fefefe',
    margin: 'auto',
    padding: 0,
    border: '1px solid #888',
    width: '80%',
    height: '90%',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
    animationName: 'animatetop',
    animationDuration: '0.4s',
    overflow: 'auto',
  };

  const closeButtonStyle = {
    color: 'white',
    position: 'absolute',
    top: 0,
    right: '25px',
    fontSize: '35px',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  const deckButton = {
    backgroundColor: '#11ca65',
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '10px',
  };

  return (
    <div className="body">
      <div className="menu">
        <div><a href="https://unleashingdepin.com" className="logo" /><img src="unleashing-depin.png" alt="Unleashing DePIN" width="200" height="75"/></div>
        <div className="SocialButtons">
          <a href="https://podcasters.spotify.com/pod/show/unleashing-depin" className="other-icon" target="_blank" rel="noreferrer"><img src="spotify.png" alt="Spotify" height="100%" /></a>
          <a href="https://podcasts.apple.com/us/podcast/unleashing-depin/id1643813996" className="other-icon" target="_blank" rel="noreferrer"><img src="apple.png" alt="Apple Podcasts" height="100%"/></a>
          <a href="https://www.youtube.com/@unleashingdepin" className="other-icon" target="_blank" rel="noreferrer"><img src="youtube.png" alt="YouTube" height="100%"/></a>
          <a href="https://twitter.com/DePINUnleashed" className="other-icon" target="_blank" rel="noreferrer"><img src="x.png" alt="X Formerly Twitter Logo" height="100%" /></a>
          <a href="mailto:hello@unleashingdepin.com" className="other-icon"><img src="mail.png" alt="Email" height="100%"/></a>
        </div>
      </div>
      <div className="hero-text">
        <h1 style={{paddingBottom: '30px'}}>Unleashing DePIN 🤝 ETH Denver</h1>
        <h3 style={{paddingBottom: '30px', color: '#11ca65'}}>Watch Tyler's Keynote from ETH Denver 2024 highlighting the DePIN ecosystem and the future of DePIN!</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/e-ack9r3WSI?si=e2STAknFAYmJgtnA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <br></br>
        <button style={deckButton} onClick={toggleModal}>View ETH Denver Deck PDF</button>
        {showModal && (
          <div style={modalStyle}>
            <span style={closeButtonStyle} onClick={toggleModal}>&times;</span>
            <div style={modalContentStyle}><iframe src="docs/eth-denver.pdf" title="ETH Denver PDF" style={{width: '100%', height: '100%'}}></iframe></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Denver;