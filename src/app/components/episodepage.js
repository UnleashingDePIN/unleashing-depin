import React, { useState } from 'react';
import episodes from '../data/episodesData.js';
import '../styles.css';
import '../globals.css';

const EpisodePage = ({ episodeNumber }) => {
  const episode = episodes[`ep${episodeNumber}`];
  const [contentType, setContentType] = useState(null);
  const spotifyEmbedLink = episode.spotify.replace('/episodes/', '/embed/episodes/');
  const appleEmbedLink = episode.apple.replace('podcasts.apple.com', 'embed.podcasts.apple.com');
  const youtubeEmbedLink = episode.youtube.replace('watch?v=', 'embed/');

  if (!episode) { return <div><h1 color='white'>Episode not found</h1></div>; }

  const handleSpotifyIframeClick = () => {
    console.log(spotifyEmbedLink);
    setContentType(contentType !== 'spotify' ? 'spotify' : null);
  };

  const handleAppleIframeClick = () => {
    console.log(appleEmbedLink);
    setContentType(contentType !== 'apple' ? 'apple' : null);
  };

  const handleYoutubeIframeClick = () => {
    console.log(youtubeEmbedLink);
    setContentType(contentType !== 'youtube' ? 'youtube' : null);
  };

  return (
    <div>
      <div className="hero-text">
        <h2>{`Unleashing DePIN Episode ${episodeNumber}`}</h2>
        <br></br>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
          {contentType === 'spotify' ? (<iframe src={spotifyEmbedLink} width="800px" frameborder="0" scrolling='no'></iframe>
          ) : contentType === 'apple' ? (<iframe src={appleEmbedLink} width="800px" frameborder="0" scrolling='no'></iframe>
          ) : contentType === 'youtube' ? (<iframe width="700px" height="394px" src={youtubeEmbedLink} frameborder="0"></iframe>
          ) : (<img src={episode.image} width="50%" alt={`Unleashing DePIN Episode ${episodeNumber}`}/>
          )}
          <br></br>
          <div className="EpisodeButtons">
            <a onClick={handleSpotifyIframeClick} className="episodes-page-icon" target="_blank" rel="noreferrer"><img src="spotify.png" alt="Spotify" height="100%"/></a>
            <a onClick={handleAppleIframeClick} className="episodes-page-icon" target="_blank" rel="noreferrer"><img src="apple.png" alt="Apple Podcasts" height="100%"/></a>
            <a onClick={handleYoutubeIframeClick} className="episodes-page-icon" target="_blank" rel="noreferrer"><img src="youtube.png" alt="YouTube" height="100%"/></a> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodePage;