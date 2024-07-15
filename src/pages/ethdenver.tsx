import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import Header from "@/components/ui/header"
import "../app/globals.css";

export default function EthDenver() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {setShowModal(!showModal);};
  return (
    <div className="bg-white text-black min-h-screen">
      <Header/>
      <main className="pt-20 md:pt-24 lg:pt-28">
        {!showModal && (
          <div>
            <header className="text-center py-6 md:px-8 lg:px-12 lg:max-w-7xl lg:mx-auto">
              <h1 className="text-5xl font-bold mb-4">Unleashing DePIN 🤝 ETH Denver</h1>
              <h2 className="text-2xl mb-6">Watch Tyler's Keynote from ETH Denver 2024 highlighting the DePIN ecosystem and the future of DePIN!</h2>
            </header>
            <div className="flex justify-center"><Button className="mt-auto flex px-4 py-1 mb-2" onClick={toggleModal}>View ETH Denver Deck PDF</Button></div>
            <div className="flex justify-center"><iframe width="560" height="315" className="" src="https://www.youtube.com/embed/e-ack9r3WSI?si=e2STAknFAYmJgtnA"></iframe></div>
          </div>
        )}
        <br></br>
        {showModal && (
          <div className="flex justify-center">
            <div className="flex items-start w-full">
              <iframe className="w-9/12 h-screen mx-auto py-4" src="docs/eth-denver.pdf" title="ETH Denver PDF"></iframe>
              <span className="text-4xl cursor-pointer ml-1 mr-4" onClick={toggleModal}>&times;</span>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}