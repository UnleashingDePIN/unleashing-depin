import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link  from "next/link";
import { TwitterIcon, LinkedinIcon } from "@/components/icons";

const Team = () => {
  return (
    <section className="px-2 py-12 md:px-2 lg:px-2 justify-center mx-2 lg:max-w-7xl lg:mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-center">Meet the Team</h3>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-2 justify-center mx-1">
        <div className="flex flex-col items-center">
          <Avatar className="w-24 h-24 rounded-full">
            <AvatarImage src="/tyler.jpg" />
            <AvatarFallback>TB</AvatarFallback>
          </Avatar>
          <h4 className="text-lg font-bold mt-4">Tyler Boscolo</h4>
          <div className="flex space-x-4 mt-2">
            <Link href="https://x.com/tylerboscolo" className="text-blue-500 hover:text-blue-600" prefetch={false}>
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/tylerboscolo/" className="text-blue-500 hover:text-blue-600" prefetch={false}>
              <LinkedinIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Avatar className="w-24 h-24 rounded-full">
            <AvatarImage src="/nick.png" />
            <AvatarFallback>NC</AvatarFallback>
          </Avatar>
          <h4 className="text-lg font-bold mt-4">Nick Carpinito</h4>
          <div className="flex space-x-4 mt-2">
            <Link href="https://x.com/0xMetaLight" className="text-blue-500 hover:text-blue-600" prefetch={false}>
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/nick-carpinito/" className="text-blue-500 hover:text-blue-600" prefetch={false}>
              <LinkedinIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;