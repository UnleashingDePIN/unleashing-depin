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
                <Link href="/" className="flex justify-center"><img src="/ud-black.png" className="w-4/5 transition-shadow duration-300 hover:shadow-lg" alt="Unleashing DePIN Logo"/></Link>
                <div className="flex flex-col space-y-5 items-center w-full">
                  <Button className="w-full max-w-[200px] px-4 py-2 hover:text-black">
                    <Link href="https://depinpulse.app/" target="_blank" prefetch={false}>DePIN Pulse</Link>
                  </Button>
                  <Button className="w-full max-w-[200px] px-4 py-2 hover:text-black">
                    <Link href="/episodes" prefetch={false}>Podcast</Link>
                  </Button>
                  <Button className="w-full max-w-[200px] px-4 py-2 hover:text-black">
                    <Link href="/services" prefetch={false}>Services</Link>
                  </Button>
                  <Button className="w-full max-w-[200px] px-4 py-2 hover:text-black">
                    <Link href="/blog" prefetch={false}>Articles</Link>
                  </Button>
                  <Button className="w-full max-w-[200px] px-4 py-2 hover:text-black">
                    <Link href="/ethdenver" prefetch={false}>ETH Denver</Link>
                  </Button>
                  <Button className="w-full max-w-[200px] px-4 py-2 hover:text-black">
                    <Link href="/depindegens" prefetch={false}>DePIN Degens Events</Link>
                  </Button>
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