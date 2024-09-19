import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { YoutubeIcon, SpotifyIcon, PodcastIcon } from "@/components/icons";
import { Episodes } from "@/types/types";


const EpisodesGrid = () => {
  const [episodesData, setEpisodesData] = useState<Episodes>({});
  useEffect(() => {
    const fetchEpisodes = async () => {
      try {const response = await fetch('/api/episodes'); const data: Episodes = await response.json(); setEpisodesData(data);} 
      catch (error) {console.error("Failed to fetch episodes:", error);}
    };
    fetchEpisodes();
  }, []);

  const getImageSrc = (imagePath: string) => {
    return imagePath.startsWith('http') ? imagePath : `/${imagePath}`;
  };

  return (
    <section className="px-4 pt-4 md:px-8 lg:px-12 lg:max-w-7xl lg:mx-auto pb-2">
      <h3 className="text-2xl pt-4 font-bold mb-6 text-center">Recent Episodes</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {Object.keys(episodesData).reverse().map((key) => {
          const episode = episodesData[key];
          return (
            <Card key={key} className="bg-gray-100 overflow-hidden flex flex-col">
              <div className="w-full pt-[56%] relative">
                <Image 
                  src={getImageSrc(episode.image)} 
                  alt="Episode thumbnail" 
                  layout="fill"
                  objectFit="cover"
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
              <CardContent className="p-4 flex-grow flex flex-col">
                <h4 className="text-lg text-black font-bold mb-2">Episode {parseInt(key.replace('ep', '')) + 1}</h4>
                <div className="mt-auto flex justify-between px-8 py-1">
                  <Link href={episode.youtube} className="text-blue-500 hover:text-blue-600" prefetch={false}><YoutubeIcon className="h-6 w-6"/></Link>
                  <Link href={episode.spotify} className="text-blue-500 hover:text-blue-600" prefetch={false}><SpotifyIcon className="h-6 w-6"/></Link>
                  <Link href={episode.apple} className="text-blue-500 hover:text-blue-600" prefetch={false}><PodcastIcon className="h-6 w-6"/></Link>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default EpisodesGrid;