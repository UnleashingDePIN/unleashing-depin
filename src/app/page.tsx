import React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/ui/header"
import EpisodesSlider from "@/components/ui/episodesSlider"
import BlogSlider from "@/components/ui/blogSlider";
import Team from "@/components/ui/team";
import Contact from "@/components/ui/contact";
import Ecosystem from "@/components/ui/ecosystem";

export default function Component() {
  return (
    <div className="bg-white text-black">
      <Header/>
      <main className="pt-20 md:pt-24 lg:pt-28">
        <header className="text-center py-6 md:px-8 lg:px-12 lg:max-w-7xl lg:mx-auto">
          <h1 className="text-5xl font-bold mb-4">Unleashing DePIN</h1>
          <h2 className="text-2xl mb-6">Your go-to resource for everything DePIN!</h2>
        </header>
        <section className="px-4 py-4 md:px-8 lg:px-12 lg:max-w-7xl lg:mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="px-2 py-4 bg-gray-100 rounded-lg overflow-hidden flex flex-col h-full transition-shadow hover:shadow-md">
              <div className="flex justify-center">
                <Image src="/depinpulse.png" alt="DePIN Pulse" width={500} height={300} className="rounded-lg w-full" />
              </div>
              <div className="text-center p-4 flex flex-col flex-grow justify-between space-y-4 h-full">
                <div>
                <h3 className="text-xl justify-center font-bold">DePIN Pulse</h3>
                <p className="text-gray-600">Our DePIN Opportunities Aggregator</p>
              </div>
              <Link href="/">
                <div className="flex justify-center mt-auto">
                  <Button className="px-2 py-1 w-3/5">Coming Soon</Button>
                </div>
              </Link>
            </div>
          </div>
          <div className="px-2 py-4 bg-gray-100 rounded-lg overflow-hidden flex flex-col h-full transition-shadow hover:shadow-md">
            <div className="flex justify-center">
              <Image src="/unleashing-depin-logo.png" alt="Unleashing DePIN Podcast" width={500} height={300} className="w-full rounded-lg" />
            </div>
            <div className="text-center p-4 flex flex-col flex-grow justify-between space-y-4 h-full"> 
              <div>
                <h3 className="text-xl justify-center font-bold">Unleashing DePIN Podcast</h3>
                <p className="text-gray-600">Your favorite podcast for everything DePIN</p>
              </div>
              <Link href="/episodes">
                <div className="flex justify-center mt-auto">
                  <Button className="px-2 py-1 w-3/5">Listen Now</Button>
                </div>
              </Link>
            </div>
          </div>
          <div className="px-2 py-2 bg-gray-100 rounded-lg overflow-hidden flex flex-col h-full transition-shadow hover:shadow-md">
            <div className="text-center p-4 flex flex-col flex-grow justify-between space-y-4 h-full">
                <div>
                  <h3 className="text-xl justify-center font-bold">Articles</h3>
                  <p className="text-gray-600">Read the latest articles on DePIN</p>
                </div>
                <Link href="/blog">
                  <div className="flex justify-center mt-auto">
                    <Button className="px-2 py-1 w-3/5">Read Up</Button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="px-2 py-2 bg-gray-100 rounded-lg overflow-hidden flex flex-col h-full transition-shadow hover:shadow-md">
              <div className="text-center p-4 flex flex-col flex-grow justify-between space-y-4 h-full">
                <div>
                  <h3 className="text-xl justify-center font-bold">DePIN Services</h3>
                  <p className="text-gray-600">Get expert advice on your project</p>
                </div>
                <Link href="/">
                  <div className="flex justify-center mt-auto">
                    <Button className="px-2 py-1 w-3/5">Coming Soon</Button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <EpisodesSlider/>
        <BlogSlider/>
        <Ecosystem/>
        <Team/>
        <Contact/>
      </main>
    </div>
  )
}
