import React from 'react';
import EpisodePage from '@/components/ui/episodepage';
import { useRouter } from 'next/router';
import Header from '@/components/ui/header';
import '../app/globals.css';

const EpisodesPages = () => {
  const router = useRouter();
  const { episodeId } = router.query;
  if (!episodeId) {return <div>Loading...</div>;}
  return (
    <div>
      <Header/>
      <EpisodePage episodeNumber={parseInt(episodeId as string, 10)}/>
    </div>
  );
};

export default EpisodesPages;