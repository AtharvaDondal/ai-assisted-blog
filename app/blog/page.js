import React from 'react';
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link';
import fs from "fs"
import matter from 'gray-matter';

const dirContent = fs.readdirSync("content","utf-8")

const blogs = dirContent.map(file=>{
  const fileContent = fs.readFileSync(`content/${file}`,"utf-8")
  const {data} = matter(fileContent)
return data;
})


const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="rounded-lg shadow-md overflow-hidden dark:border-2">
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              <p className="mb-4">{blog.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm">{blog.date}</span>
                <span className="text-sm">{blog.author}</span>
              </div>
              
              <Link href={`/blogpost/${blog.slug}`} className={buttonVariants({ variant: "outline" })}>Read More</Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;