'use client'

import Image from "next/image";

import { getPosts } from "./lib/serverFunctions";
import { useState } from "react";

export default function Home() {

  const [posts, setPosts] = useState<{ title: string | undefined, content: string | undefined }[]>([])


  return (
    <div className="">
      <h1>
        Bem vindo a aplicação da documentação nextJs
      </h1>
      <button className="bg-sky-300 p-2 hover:bg-sky-500 hover:text-white" onClick={async () => {
        const posts = await getPosts()
        setPosts(posts)
      }}>Obter posts</button>

      <div>
        {posts.map(post => (
          <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
