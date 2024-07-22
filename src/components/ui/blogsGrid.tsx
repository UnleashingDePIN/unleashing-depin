import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Contact from "@/components/ui/contact";
import Link from "next/link";

const BlogsGrid = () => {
  const [blogs, setBlogs] = useState<{ title: string; url: string; subtitle: string; }[]>([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {const response = await fetch('/api/articles'); const data = await response.json(); setBlogs(data);} 
      catch (error) {console.error('Error fetching blogs:', error);}
    };
    fetchBlogs();
  }, []);

  return (
    <section className="px-4 py-12 md:px-8 lg:px-12 lg:max-w-7xl lg:mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-center">Recent Articles</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {blogs.slice().reverse().map((blog, index) => (
          <Card key={index} className="bg-gray-100">
            <CardContent>
              <h4 className="text-lg text-black font-bold mb-2 mt-6">{blog.title}</h4>
              <p className="text-gray-600 mb-4">{blog.subtitle}</p>
              <Link href={blog.url} className="text-ud-green hover:text-blue-600" prefetch={false}>Read More</Link>
            </CardContent>
          </Card>
        ))}
      </div>
    <Contact/>
    </section>
  );
};

export default BlogsGrid;