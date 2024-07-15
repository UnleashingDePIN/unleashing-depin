import React from "react"
import Header from "@/components/ui/header"
import "../app/globals.css";
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Services() {
  return (
    <div className="bg-white text-black min-h-screen">
      <Header/>
      <main className="pt-20 md:pt-24 lg:pt-28">
        <header className="text-center py-6 md:px-8 lg:px-12 lg:max-w-7xl lg:mx-auto">
            <h1 className="text-5xl font-bold mb-4">Unleashing DePIN Services</h1>
            <h2 className="text-2xl mb-6">Get Expert advice and support for DePINs of any stage</h2>
        </header>
        <section className="px-4 py-4 md:px-8 lg:px-12 lg:max-w-7xl lg:mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="px-2 py-6 bg-gray-100 rounded-lg overflow-hidden flex flex-col h-full transition-shadow hover:shadow-md">
                    <div className="text-center p-4 flex flex-col flex-grow justify-between space-y-4 h-full">
                        <div>
                            <h3 className="text-xl justify-center font-bold">Fundraising</h3>
                            <p className="text-gray-600">zxvzxczxczxc</p>
                        </div>
                        <Button className="mt-auto ml-6 mr-6 flex px-4 py-1">Learn More</Button>
                    </div>
                </div>
                <div className="px-2 py-6 bg-gray-100 rounded-lg overflow-hidden flex flex-col h-full transition-shadow hover:shadow-md">
                    <div className="text-center p-4 flex flex-col flex-grow justify-between space-y-4 h-full"> 
                        <div>
                            <h3 className="text-xl justify-center font-bold">Recruiting</h3>
                            <p className="text-gray-600">zxcZXczxczxczxc</p>
                        </div>
                        <Button className="mt-auto ml-6 mr-6 flex px-4 py-1">Learn More</Button>
                    </div>
                </div>
                <div className="px-2 py-6 bg-gray-100 rounded-lg overflow-hidden flex flex-col h-full transition-shadow hover:shadow-md">
                    <div className="text-center p-4 flex flex-col flex-grow justify-between space-y-4 h-full">
                        <div>
                            <h3 className="text-xl justify-center font-bold">Marketing</h3>
                            <p className="text-gray-600">zxczxczxczxczxc</p>
                        </div>
                        <Button className="mt-auto ml-6 mr-6 flex px-4 py-1">Learn More</Button>
                    </div>
                </div>
                <div className="px-2 py-6 bg-gray-100 rounded-lg overflow-hidden flex flex-col h-full transition-shadow hover:shadow-md">
                    <div className="text-center p-4 flex flex-col flex-grow justify-between space-y-4 h-full">
                        <div>
                            <h3 className="text-xl justify-center font-bold">Exposure</h3>
                            <p className="text-gray-600">sdgsdsd</p>
                        </div>
                        <Button className="mt-auto ml-6 mr-6 flex px-4 py-1">Learn More</Button>
                    </div>
                </div>
            </div>
        </section>
      </main>
    </div>
  )
}