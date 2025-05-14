'use client'

import { InfosProps } from "@/utils/types"
import { useState } from "react"
import { getData } from "./lib/serverFunctions"


export default function Home() {

  const [data, setData] = useState<InfosProps[] | undefined>()

  return (
    <div className="">
      <h1>
        Bem vindo a aplicação da documentação nextJs
      </h1>
      <button onClick={async () => {
        const res: InfosProps[] = await getData()
        setData(res)


      }} className="bg-sky-300 p-2 hover:bg-sky-500 hover:text-white">Obter posts</button>

      <div>
        {
          data?.map(item => (
            <p key={item.id}>{item.title}</p>
          ))
        }
      </div>
    </div>
  );
}
