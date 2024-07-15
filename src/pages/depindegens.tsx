import React, { useEffect, useState } from "react"
import Header from "@/components/ui/header"
import "../app/globals.css";

export default function DepinDegens() {
  const [images, setImages] = useState<string[]>([]);
  useEffect(() => {fetch('/api/ddhhimages').then(response => response.json()).then(data => setImages(data));}, []);
  return (
    <div className="bg-white text-black min-h-screen">
      <Header/>
      <main className="pt-20 md:pt-24 lg:pt-28">
        <header className="text-center py-6 md:px-8 lg:px-12 lg:max-w-7xl lg:mx-auto pb-4">
          <h1 className="text-5xl font-bold mb-4">DePIN Degens Happy Hour 2024</h1>
        </header>
        <section className="flex flex-col md:flex-row items-center justify-center p-4 py-40">
          <img src="/ddhhbanner.png" alt="DePIN Degens" className="w-full md:w-1/6 h-auto mb-4 md:mb-0 md:mr-6" loading="lazy" />
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold mb-2">DePIN Degens Happy Hour 2024 @ Concensus</h3>
            <p className="text-lg">Depin Degens Happy Hour is Unleashing DePIN's yearly ecosystem meetup at Concensus in Austin, Texas.</p>
          </div>
        </section>
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {images.map((src, index) => (<img key={index} src={src} alt={`Image ${index + 1}`} className="w-full h-auto" loading="lazy"/>))}
        </section>
      </main>
    </div>
  )
}