import React from 'react';
import EpisodePage from '../../src/app/components/episodepage';
import { useRouter } from 'next/router';
import episodes from '../../src/app/data/episodesData';
import Header from '../../src/app/components/header';
import '../app/styles.css';
import '../app/globals.css';

const EpisodesPages = () => {
    const router = useRouter();
    const { episodeId } = router.query;
    const episodeKey = `ep${episodeId}`;
    const episode = episodes[episodeKey];
    console.log(episodeId);
    if (!episode) {return (<div className='body'><Header/><div className='hero-text'><h1>Nice Try</h1><h2>Episode {episodeId} is still in progress</h2><h3>Check back soon, anon</h3></div></div>);}
    return (
      <div>
        <Header/>
        <EpisodePage episodeNumber={episodeId}/>
      </div>
    );
  };

export default EpisodesPages;