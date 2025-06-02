

import { InfosProps } from "@/utils/types"
import Image from "next/image";
import { Post } from "./components/Post/Post";
import { Suspense } from "react";

interface SimpleRepo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

// async function getData() {
//   try {
//     const data = await fetch('https://api.github.com/users/igorfonseca05/repos')
//     return data.json()
//   } catch (error) {

//   }
// }

async function getRepo() {
  try {
    const data = await fetch('https://api.github.com/users/igorfonseca05/repos',
      {
        cache: 'force-cache',
        next: { revalidate: 3600 }
      })

    return data.json()
  } catch (error) {

  }
}



export default async function Home() {
  // const repos = getData()
  const repos = getRepo()

  // const [data, data2] = await Promise.all([repos, rep])

  // console.log(data, data2)

  return (
    <div className="">
      <h1>
        Bem vindo a aplicação da documentação nextJs
      </h1>
      <button className="bg-sky-300 p-2 hover:bg-sky-500 hover:text-white">Obter posts</button>

      <Suspense fallback={<p>Carregando posts, aguarde!</p>}>
        <Post repos={repos} />
      </Suspense>


    </div>
  );
}
