"use client";
import React, { useState, useEffect, useRef } from "react";
import dynamic from 'next/dynamic';
import "react-multi-carousel/lib/styles.css";
const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });

const Ecosystem: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [isClient, setIsClient] = useState(false);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {setIsClient(true);}, []);
  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch("/api/images");
        const imageUrls: string[] = await response.json();
        setImages(imageUrls);
      } catch (error) {console.error("Failed to fetch images:", error);}
    }
    fetchImages();
  }, []);
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 5, slidesToSlide: 1 },
    desktop: { breakpoint: { max: 1024, min: 600 }, items: 3, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 600, min: 0 }, items: 1, slidesToSlide: 1 }
  };
  if (!isClient) {return null;}
  return (
    <div>
      <section className="px-4 pt-4 md:px-8 lg:px-12 lg:max-w-7xl lg:mx-auto">
        <h3 className="text-2xl pt-4 font-bold text-center">Ecosystem Partners</h3>
        <div className="px-12 mx-auto">
          <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={600} showDots={false} arrows={false}>
            {images.map((image, index) => (
              <div key={index} className="mx-2 flex flex-col h-[200px]" ref={el => { imageRefs.current[index] = el; }}>
                <img src={image} alt={`Ecosystem Logo ${index}`} className="w-36 h-full object-contain" />
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default Ecosystem;