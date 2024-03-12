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
    if (!episode) {return <div>Episode not found</div>;}
    return (
      <div>
        <Header/>
        <EpisodePage episodeNumber={episodeId}/>
      </div>
    );
  };

export default EpisodesPages;