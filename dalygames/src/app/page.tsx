import { Container } from "@/components/container";
import { GamesProps } from '@/utils/types/game'

import { BsArrowRightCircle } from "react-icons/bs";

import Link from "next/link";
import Image from "next/image";
import { Search_Bar } from "@/components/Search_Bar";


import { GamesProvider, useGames } from "@/context/gamesContext";


async function getRandomGame() {
  try {
    const res = await fetch(`${process.env.NEXT_URL}/next-api/?api=game_day`, { next: { revalidate: 320 } })

    if (!res.ok) {
      throw new Error('Erro ao obter game')
    }

    return res.json()

  } catch (error) {
    console.log(error)
  }
}

async function getAllgames() {
  try {
    const res = await fetch(`${process.env.NEXT_URL}/next-api/?api=games`, { next: { revalidate: 320 } })

    if (!res.ok) {
      throw new Error('Erro ao obter games')
    }

    return res.json()

  } catch (error) {
    console.log(error)
  }
}


export default async function Home() {
  const game: GamesProps = await getRandomGame()
  const games: GamesProps[] = await getAllgames()

  return (
    <GamesProvider games={games}>
      <main className="w-full h-screen">
        <Container>
          <h1 className="text-center font-bold text-xl mt-8 mb-5">Separamos um jogo exclusivo para você</h1>
          <Link href={`game/${game.id}`}>
            <section className="w-full bg-black rounded-lg">
              <div className="w-full max-h-96 h-96 relative">
                <div className="absolute z-20 bottom-0 p-3 flex justify-center items-center gap-2">
                  <p className="font-bold text-lg text-white">{game.title}</p>
                  <BsArrowRightCircle size={22} color="white" />
                </div>
                <Image
                  src={game.image_url}
                  alt={game.title}
                  quality={100}
                  priority={true}
                  fill={true}
                  className="max-h-96 object-cover rounded-lg object-top opacity-50 hover:opacity-100 transition-all duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw" />
              </div>
            </section>
          </Link>
          <Search_Bar />

          <h2 className="text-xl font-medium text-gray-800 my-4">Jogos para conhecer</h2>
          <div className=" grid grid-cols-1 gap-7 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
            {games.map(game => (
              <Link key={game.id} href={`/${game.id}`} className="p-2 bg-slate-200 rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <div className="h-56 w-full relative">
                  <Image
                    key={game.id}
                    src={game.image_url}
                    alt="images game"
                    className="object-cover rounded-lg object-top"
                    fill={true}
                    sizes="(max-width: 768px) 100%, 100vw"
                  // quality={100}
                  />
                </div>
                <div className="flex items-center justify-between my-2">
                  <p className="whitespace-nowrap text-ellipsis overflow-hidden">{game.title}</p>
                  <BsArrowRightCircle size={16} color="#000" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </main>
    </GamesProvider>
  );
}
