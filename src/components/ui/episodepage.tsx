import React, { useState, useEffect } from 'react';
import { SpotifyIcon, PodcastIcon, YoutubeIcon } from '../icons';

interface Episode {spotify: string; apple: string; youtube: string; image: string;}
interface EpisodePageProps {episodeNumber: number;}

const EpisodePage: React.FC<EpisodePageProps> = ({ episodeNumber }) => {
  const [episode, setEpisode] = useState<Episode | null>(null);
  const [contentType, setContentType] = useState<string | null>(null);
  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await fetch('/api/episodes');
        const data = await response.json();
        console.log('Fetched data:', data);
        if (episodeNumber > data.length || episodeNumber < 1) {console.error(`Episode number ${episodeNumber} is out of bounds`); return;}
        const selectedEpisode = data[episodeNumber - 1];
        console.log('Selected episode:', selectedEpisode);
        setEpisode(selectedEpisode);
      } catch (error) {
        console.error('Error fetching episodes:', error);
      }
    }; fetchEpisodes();
  }, [episodeNumber]);

  if (!episode) {return <div>Episode not found</div>;}
  const spotifyEmbedLink = episode.spotify.replace('/episodes/', '/embed/episodes/');
  const appleEmbedLink = episode.apple.replace('podcasts.apple.com', 'embed.podcasts.apple.com');
  const youtubeEmbedLink = episode.youtube.replace('watch?v=', 'embed/');
  const handleSpotifyIframeClick = () => { setContentType(contentType !== 'spotify' ? 'spotify' : null); };
  const handleAppleIframeClick = () => { setContentType(contentType !== 'apple' ? 'apple' : null); };
  const handleYoutubeIframeClick = () => { setContentType(contentType !== 'youtube' ? 'youtube' : null); };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <h2 className="font-bebas text-4xl text-black mb-2">{`Unleashing DePIN Episode ${episodeNumber}`}</h2>
        <br></br>
        <div className='flex flex-col justify-center items-center h-full w-full'>
          {
            contentType === 'spotify' ? (<iframe src={spotifyEmbedLink} width="800px" frameBorder="0" scrolling='no'></iframe>) :
            contentType === 'apple' ? (<iframe src={appleEmbedLink} width="800px" frameBorder="0" scrolling='no'></iframe>) :
            contentType === 'youtube' ? (<iframe width="700px" height="394px" src={youtubeEmbedLink} frameBorder="0"></iframe>) :
            (<img src={episode.image} width="50%" alt={`Unleashing DePIN Episode ${episodeNumber}`} />)
          }
          <br></br>
          <div className="flex space-x-8">
            <a onClick={handleSpotifyIframeClick} className="transition-transform transform hover:scale-110 text-ud-green" target="_blank" rel="noreferrer"><SpotifyIcon className="h-full text-ud-green w-8 h-8"/></a>
            <a onClick={handleAppleIframeClick} className="transition-transform transform hover:scale-110 text-ud-green" target="_blank" rel="noreferrer"><PodcastIcon className="h-full text-ud-green w-8 h-8"/></a>
            <a onClick={handleYoutubeIframeClick} className="transition-transform transform hover:scale-110 text-ud-green" target="_blank" rel="noreferrer"><YoutubeIcon className="h-full text-ud-green w-8 h-8"/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodePage;