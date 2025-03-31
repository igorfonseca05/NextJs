import { Container } from "@/components/container";
import { GamesProps } from '@/utils/types/game'

import { BsArrowRightCircle } from "react-icons/bs";

import Link from "next/link";
import Image from "next/image";



async function getRandomGame() {
  try {
    const res = await fetch(`${process.env.NEXT_URL}/next-api/?api=game_day`, { next: { revalidate: 300 } })

    if (!res.ok) {
      throw new Error('Erro ao obter dados')
    }

    return res.json()

  } catch (error) {
    console.log(error)
  }
}


export default async function Home() {
  const dados: GamesProps = await getRandomGame()

  return (
    <main className="w-full">
      <Container>
        <h1 className="text-center font-bold text-xl mt-8 mb-5">Separamos um jogo exclusivo para você</h1>
        <Link href={`game/${dados.id}`}>
          <section className="w-full bg-black rounded-lg">
            <div className="w-full max-h-96 h-96 relative">
              <div className="absolute z-20 bottom-0 p-3 flex justify-center items-center gap-2">
                <p className="font-bold text-lg text-white">{dados.title}</p>
                <BsArrowRightCircle size={22} color="white" />
              </div>
              <Image
                src={dados.image_url}
                alt={dados.title}
                quality={100}
                priority={true}
                fill={true}
                className="max-h-96 object-cover rounded-lg object-top opacity-50 hover:opacity-100 transition-all duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
              >
              </Image>
            </div>
          </section>
        </Link>
      </Container>
    </main>
  );
}
