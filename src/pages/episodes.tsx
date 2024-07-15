import React from "react"
import Header from "@/components/ui/header"
import EpisodesGrid from "@/components/ui/episodesGrid";
import "../app/globals.css";

export default function Episodes() {
  return (
    <div className="bg-white text-black">
      <Header/>
      <main className="pt-20 md:pt-24 lg:pt-28">
        <header className="text-center py-6 md:px-8 lg:px-12 lg:max-w-7xl lg:mx-auto">
          <h1 className="text-5xl font-bold mb-4">Unleashing DePIN Podcast</h1>
          <h2 className="text-2xl mb-6">Hosted by Tyler Boscolo</h2>
        </header>
        <EpisodesGrid/>
      </main>
    </div>
  )
}