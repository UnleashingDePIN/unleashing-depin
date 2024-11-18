"use client"
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { YoutubeIcon, PodcastIcon, SpotifyIcon } from "@/components/icons";
import { Episodes } from "@/types/types";
import dynamic from 'next/dynamic';
import "react-multi-carousel/lib/styles.css";
import { Button } from "@/components/ui/button";
const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });

const EpisodesSlider = () => {
  const [isClient, setIsClient] = useState(false);
  const [episodesData, setEpisodesData] = useState<Episodes>({});
  useEffect(() => {
    setIsClient(true);
    const fetchEpisodes = async () => {
      try {const response = await fetch('/api/episodes'); const data: Episodes = await response.json(); setEpisodesData(data);} 
      catch (error) {console.error("Failed to fetch episodes:", error);}
    };
    fetchEpisodes();
  }, []);
  const responsive = {
    superLargeDesktop: {breakpoint: { max: 4000, min: 1024 }, items: 3, slidesToSlide: 1},
    desktop: {breakpoint: { max: 1024, min: 600 }, items: 2, slidesToSlide: 1},
    tablet: {breakpoint: { max: 600, min: 0 }, items: 1, slidesToSlide: 1}
  };
  if (!isClient) {return null;}

  const getImageSrc = (imagePath: string) => {
    return imagePath.startsWith('http') ? imagePath : `/${imagePath}`;
  };

  return (
    <section className="px-4 pt-4 md:px-8 lg:px-12 lg:max-w-7xl lg:mx-auto">
      <h3 className="text-2xl pt-4 font-bold mb-6 text-center">Recent Episodes</h3>
      <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={5000} arrows={false}> 
        {Object.keys(episodesData).reverse().map((key) => {
          const episode = episodesData[key];
          return (
            <div key={key}>
              <Card className="bg-gray-100 mx-2">
                <CardContent>
                  <Link href={`/${parseInt(key) + 1}`}>
                    <Image 
                      src={getImageSrc(episode.image)}
                      alt="Episode thumbnail" 
                      width={500} 
                      height={300} 
                      className="mb-4 mt-4 rounded-lg"
                    />
                  </Link>
                  <h4 className="text-lg text-black font-bold mb-2">Episode {parseInt(key.replace('ep', '')) + 1}</h4>
                  <div className="mt-6 flex justify-between px-8 py-1">
                    <Link href={episode.youtube} className="text-blue-500 hover:text-blue-600" prefetch={false}><YoutubeIcon className="h-6 w-6"/></Link>
                    <Link href={episode.spotify} className="text-blue-500 hover:text-blue-600" prefetch={false}><SpotifyIcon className="h-6 w-6"/></Link>
                    <Link href={episode.apple} className="text-blue-500 hover:text-blue-600" prefetch={false}><PodcastIcon className="h-6 w-6"/></Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </Carousel>
      <div className="mt-8 flex justify-center">
      <Link href="/episodes">
        <Button className="px-2 py-1 w-64">View All Episodes</Button>
      </Link>
    </div>
    </section>
  );
};

export default EpisodesSlider;
