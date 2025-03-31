import { Container } from "@/components/container";
import { GamesProps } from '@/utils/types/game'

import Link from "next/link";
import Image from "next/image";



async function getRandomGame() {
  try {
    const res = await fetch(`${process.env.NEXT_URL}/next-api/?api=game_day`)

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
            <Image
              src={dados.image_url}
              alt={dados.title}
              quality={100}
              priority={true}
              width={100}
              height={100}
            >

            </Image>
          </section>
        </Link>
      </Container>
    </main>
  );
}
