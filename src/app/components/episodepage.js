import React, { useState } from 'react';
import episodes from '../data/episodesData.js';
import '../styles.css';
import '../globals.css';

const EpisodePage = ({ episodeNumber }) => {
  console.log(episodeNumber);
  const episode = episodes[`ep${episodeNumber}`];
  const [contentType, setContentType] = useState(null);
  const spotifyEmbedLink = episode.spotify.replace('/episodes/', '/embed/episodes/');
  const appleEmbedLink = episode.apple.replace('podcasts.apple.com', 'embed.podcasts.apple.com');
  const youtubeEmbedLink = episode.youtube.replace('watch?v=', 'embed/');
  const handleSpotifyIframeClick = () => {setContentType(contentType !== 'spotify' ? 'spotify' : null);};
  const handleAppleIframeClick = () => {setContentType(contentType !== 'apple' ? 'apple' : null);};
  const handleYoutubeIframeClick = () => {setContentType(contentType !== 'youtube' ? 'youtube' : null);};
  return (
    <div>
      <div className="hero-text">
        <h2>{`Unleashing DePIN Episode ${episodeNumber}`}</h2>
        <br></br>
        <div className='toggle-container'>
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