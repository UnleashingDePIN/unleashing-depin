"use client"
import React, { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import dynamic from 'next/dynamic';
import "react-multi-carousel/lib/styles.css";
const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });

const BlogSlider = () => {
  const [isClient, setIsClient] = useState(false);
  const [blogs, setBlogs] = useState<{ title: string; url: string; subtitle: string; }[]>([]);
  useEffect(() => { setIsClient(true); }, []);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {const response = await fetch('/api/articles'); const data = await response.json(); setBlogs(data);} 
      catch (error) {console.error('Error fetching blogs:', error);}
    };
    fetchBlogs();
  }, []);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3, slidesToSlide: 1 },
    desktop: { breakpoint: { max: 1024, min: 600 }, items: 2, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 600, min: 0 }, items: 1, slidesToSlide: 1 }
  };

  if (!isClient) { return null; }

  return (
    <section className="px-4 pt-4 md:px-8 lg:px-12 lg:max-w-7xl lg:mx-auto">
      <h3 className="text-2xl pt-4 font-bold mb-6 text-center">Recent Episodes</h3>
      <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000} arrows={false}>
        {blogs.slice().reverse().map((blog, index) => (
          <Card key={index} className="bg-gray-100 mx-2 flex flex-col h-full">
            <CardContent className="flex flex-col flex-grow">
              <h4 className="text-lg text-black font-bold mb-2 mt-6">{blog.title}</h4>
              <p className="text-gray-600 mb-4 flex-grow">{blog.subtitle}</p>
              <Link href={blog.url} className="text-ud-green hover:text-ud-green/80 mt-auto" prefetch={false}>Read More</Link>
            </CardContent>
          </Card>
        ))}
      </Carousel>
    </section>
  );
};

export default BlogSlider;