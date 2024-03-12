import React from 'react';
import episodes from '../data/episodesData.js';
import '../styles.css';
import '../globals.css';

const EpisodePage = ({ episodeNumber }) => {
  const episode = episodes[`ep${episodeNumber}`];
  if (!episode) { return <div><h1 color='white'>Episode not found</h1></div>; }
  return (
    <div>
      <div className="hero-text">
        <h2>{`Unleashing DePIN Episode ${episodeNumber}`}</h2>
        <br></br>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
          <img src={episode.image} width="50%" alt={`Unleashing DePIN Episode ${episodeNumber}`}/>
          <br></br>
          <div className="EpisodeButtons">
            <a href={episode.spotify} className="episodes-page-icon" target="_blank" rel="noreferrer"><img src="spotify.png" alt="Spotify" height="100%"/></a>
            <a href={episode.apple} className="episodes-page-icon"  target="_blank" rel="noreferrer"><img src="apple.png" alt="Apple Podcasts" height="100%"/></a>
            <a href={episode.youtube} className="episodes-page-icon"  target="_blank" rel="noreferrer"><img src="youtube.png" alt="YouTube" height="100%"/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodePage;