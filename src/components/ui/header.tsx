import React from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {MenuIcon, TwitterIcon, YoutubeIcon, PodcastIcon, SpotifyIcon, LinkedinIcon} from "@/components/icons";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md">
      <nav className="flex justify-between items-center p-4 md:px-8 lg:px-12">
        <div className="flex items-center space-x-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon className="text-ud-green h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <div className="flex flex-col items-start space-y-4 p-4">
                <Link href="/"><img src="/ud-black.png"></img></Link>
                <div className="flex flex-col space-y-2">
                  {/* <Link href="https://pulse.unleashingdepin.com/" target="_blank" className="hover:text-ud-green" prefetch={false}>DePIN Pulse</Link> */}
                  <Link href="/episodes" className="hover:text-ud-green" prefetch={false}>Podcast</Link>
                  {/* <Link href="/services" className="hover:text-ud-green" prefetch={false}>Services</Link> */}
                  <Link href="/blog" className="hover:text-ud-green" prefetch={false}>Articles</Link>
                  <Link href="/ethdenver" className="hover:text-ud-green" prefetch={false}>ETH Denver</Link>
                  <Link href="/depindegens" className="hover:text-ud-green" prefetch={false}>DePIN Degens Events</Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="https://x.com/depinunleashed/" target="_blank" prefetch={false}><TwitterIcon className="h-5 w-5"/></Link>
          <Link href="https://www.linkedin.com/company/unleashing-depin/" target="_blank" prefetch={false}><LinkedinIcon className="h-5 w-5"/></Link>
          <Link href="https://www.youtube.com/@unleashingdepin" target="_blank" prefetch={false}><YoutubeIcon className="h-5 w-5"/></Link>
          <Link href="https://podcasters.spotify.com/pod/show/unleashing-depin" target="_blank" prefetch={false}><SpotifyIcon className="h-5 w-5"/></Link>
          <Link href="https://podcasts.apple.com/us/podcast/unleashing-depin/id1643813996" target="_blank" prefetch={false}><PodcastIcon className="h-5 w-5"/></Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;