import React from "react"
import Header from "@/components/ui/header"
import BlogsGrid from "@/components/ui/blogsGrid"
import "../app/globals.css";

export default function Blog() {
  return (
    <div className="bg-white text-black min-h-screen">
      <Header/>
      <main className="pt-20 md:pt-24 lg:pt-28">
        <header className="text-center py-6 md:px-8 lg:px-12 lg:max-w-7xl lg:mx-auto">
          <h1 className="text-5xl font-bold mb-4">Unleashing DePIN Blog</h1>
          <h2 className="text-2xl mb-6">Learn more about the evolving DePIN Landscape</h2>
        </header>
        <BlogsGrid/>
      </main>
    </div>
  )
}