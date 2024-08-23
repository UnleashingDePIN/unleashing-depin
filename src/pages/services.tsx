import React, { useRef } from "react"
import Header from "@/components/ui/header"
import "../app/globals.css";
import { Button } from "@/components/ui/button"
import Contact from "@/components/ui/contact"

export default function Services() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white text-black min-h-screen">
      <Header/>
      <main className="pt-20 md:pt-24 lg:pt-28">
        <header className="text-center py-6 md:px-8 lg:px-12 lg:max-w-7xl lg:mx-auto">
            <h1 className="text-5xl font-bold mb-4">Unleashing DePIN Services</h1>
            <h2 className="text-2xl mb-6">Get Expert advice and support for DePINs of any stage</h2>
        </header>
        <section className="px-4 py-8 md:px-8 lg:px-12 lg:max-w-7xl lg:mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="px-2 py-6 bg-gray-100 rounded-lg overflow-hidden flex flex-col h-full transition-shadow hover:shadow-md">
                    <div className="text-center p-4 flex flex-col flex-grow justify-between space-y-4 h-full">
                        <div>
                            <h3 className="text-xl justify-center font-bold mb-2">Fundraising</h3>
                            <p className="text-gray-600 mb-4">Expert guidance on raising capital for your DePIN project.</p>
                            <ul className="text-left text-sm mb-4">
                                <li className="flex items-center"><span className="mr-2">→</span>Seed Round Strategy</li>
                                <li className="flex items-center"><span className="mr-2">→</span>Series A Preparation</li>
                                <li className="flex items-center"><span className="mr-2">→</span>Investor Networking</li>
                            </ul>
                            <p className="text-sm font-semibold">Fuel your project's growth!</p>
                        </div>
                        <Button className="mt-auto ml-6 mr-6 flex px-4 py-1" onClick={scrollToContact}>Learn More</Button>
                    </div>
                </div>
                <div className="px-2 py-6 bg-gray-100 rounded-lg overflow-hidden flex flex-col h-full transition-shadow hover:shadow-md">
                    <div className="text-center p-4 flex flex-col flex-grow justify-between space-y-4 h-full">
                        <div>
                            <h3 className="text-xl justify-center font-bold mb-2">Recruiting</h3>
                            <p className="text-gray-600 mb-4">Find top talent for your DePIN team.</p>
                            <ul className="text-left text-sm mb-4">
                                <li className="flex items-center"><span className="mr-2">→</span>Skilled Developers</li>
                                <li className="flex items-center"><span className="mr-2">→</span>Experienced Designers</li>
                                <li className="flex items-center"><span className="mr-2">→</span>Blockchain Experts</li>
                            </ul>
                            <p className="text-sm font-semibold">Build your dream team!</p>
                        </div>
                        <Button className="mt-auto ml-6 mr-6 flex px-4 py-1" onClick={scrollToContact}>Learn More</Button>
                    </div>
                </div>
                <div className="px-2 py-6 bg-gray-100 rounded-lg overflow-hidden flex flex-col h-full transition-shadow hover:shadow-md">
                    <div className="text-center p-4 flex flex-col flex-grow justify-between space-y-4 h-full">
                        <div>
                            <h3 className="text-xl justify-center font-bold mb-2">Marketing</h3>
                            <p className="text-gray-600 mb-4">Effective strategies to promote your DePIN project.</p>
                            <ul className="text-left text-sm mb-4">
                                <li className="flex items-center"><span className="mr-2">→</span>Content Creation</li>
                                <li className="flex items-center"><span className="mr-2">→</span>Social Media Strategy</li>
                                <li className="flex items-center"><span className="mr-2">→</span>Community Panels & Events</li>
                            </ul>
                            <p className="text-sm font-semibold">Boost your project's visibility!</p>
                        </div>
                        <Button className="mt-auto ml-6 mr-6 flex px-4 py-1" onClick={scrollToContact}>Learn More</Button>
                    </div>
                </div>
                <div className="px-2 py-6 bg-gray-100 rounded-lg overflow-hidden flex flex-col h-full transition-shadow hover:shadow-md">
                    <div className="text-center p-4 flex flex-col flex-grow justify-between space-y-4 h-full">
                        <div>
                            <h3 className="text-xl justify-center font-bold mb-2">Exposure</h3>
                            <p className="text-gray-600 mb-4">Gain visibility through our industry network.</p>
                            <ul className="text-left text-sm mb-4">
                                <li className="flex items-center"><span className="mr-2">→</span>Media Partnerships</li>
                                <li className="flex items-center"><span className="mr-2">→</span>Industry Events</li>
                                <li className="flex items-center"><span className="mr-2">→</span>Thought Leadership</li>
                            </ul>
                            <p className="text-sm font-semibold">Elevate your project's profile!</p>
                        </div>
                        <Button className="mt-auto ml-6 mr-6 flex px-4 py-1" onClick={scrollToContact}>Learn More</Button>
                    </div>
                </div>
            </div>
        </section>
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
    </div>
  )
}